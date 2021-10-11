import {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import _ from "lodash";

import { Message, MessageSide, Question } from "@src/interface/interface";

// lib
import {
  createNewMessage,
  getIntroMessageList,
  getOutroMessageList,
  getQuestionMessageList,
} from "@src/util/messenger";
import { messageTerm } from "@src/lib/constant/timer.constant";
import { myAccount } from "@dummy/user.data";

interface Props {
  children: JSX.Element;
  questionList: Question[];
}

interface MessengerContextProps {
  questionIndex: number;
  questionTotal: number;
  allowMessage: boolean;
  isMessageLeft: boolean;
  displayedList: Message[];
  showIntroMessage: () => void;
  showOutroMessage: () => void;
  showQuestionMessage: () => void;
  addMessage: (contents: string) => void;
}

const MessengerContext = createContext({
  questionIndex: 0,
  questionTotal: 0,
  allowMessage: false,
  isMessageLeft: true,
  displayedList: [],
  showIntroMessage: null,
  showOutroMessage: null,
  showQuestionMessage: null,
  addMessage: null,
});
export const MessengerProvider = ({ children, questionList }: Props) => {
  const [questionIndex, setQuestionIndex]: [number, Dispatch<number>] =
    useState(0);
  const [displayedList, setDisplayedList]: [Message[], Dispatch<Message[]>] =
    useState([]);
  const [allowMessage, setAllowMessage]: [
    boolean,
    Dispatch<SetStateAction<boolean>>,
  ] = useState(false);
  const [isMessageLeft, setMessageLeft] = useState(true);

  const [introFinished, setIntroFinished] = useState(false);

  const showNextMessage = useCallback(
    (nextMessageList, callback) => {
      setMessageLeft(true);
      setAllowMessage(false);
      const tempDisplayList = [...displayedList];

      let i = 0;
      const x = _.debounce(() => {
        tempDisplayList.push(nextMessageList[i]);
        setDisplayedList([...tempDisplayList]);
        i += 1;
        if (i === nextMessageList.length) {
          setMessageLeft(false);
          callback();
        } else if (i > nextMessageList.length) {
        } else {
          x();
        }
      }, messageTerm);
      x();
    },
    [displayedList],
  );

  const showQuestionMessage = useCallback(() => {
    const isLastQuestion = questionIndex === questionList.length - 1;
    const messages = getQuestionMessageList(
      questionList[questionIndex],
      questionIndex,
      isLastQuestion,
    );
    showNextMessage(messages, () => {
      setAllowMessage(true);
      setQuestionIndex(questionIndex + 1);
    });
  }, [questionIndex, questionList, showNextMessage]);

  const showIntroMessage = useCallback(() => {
    const messages = getIntroMessageList(
      myAccount,
      myAccount.jobList,
      myAccount.techList,
    );
    showNextMessage(messages, () => setIntroFinished(true));
  }, [showNextMessage]);

  useEffect(() => {
    if (introFinished) {
      showQuestionMessage();
      setIntroFinished(false);
    }
  }, [introFinished, showQuestionMessage]);

  const showOutroMessage = useCallback(() => {
    const messages = getOutroMessageList();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    showNextMessage(messages, () => {});
  }, [showNextMessage]);

  const addMessage = useCallback(
    (contents) => {
      const msg = createNewMessage(contents, contents, MessageSide.INTERVIEWEE);
      setDisplayedList([...displayedList, msg]);
    },
    [displayedList],
  );

  const props: MessengerContextProps = {
    questionIndex,
    questionTotal: questionList.length,
    allowMessage,
    isMessageLeft,
    displayedList,
    showIntroMessage,
    showOutroMessage,
    showQuestionMessage,
    addMessage,
  };
  return (
    <MessengerContext.Provider value={props}>
      {children}
    </MessengerContext.Provider>
  );
};

export default MessengerContext;
