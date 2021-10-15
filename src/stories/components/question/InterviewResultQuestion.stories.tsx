import InterviewResultQuestionComponent from "@src/components/question/InterviewResultQuestion.component";
import { QuestionToAnswer } from "@src/interface/interface";
import { questionToAnswer } from "@dummy/interview.data";
import styles from "@src/styles/pages/InterviewResult.module.scss";

export default {
  title: "Components/Question/Interview Result Question List",
  component: InterviewResultQuestionComponent,
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
};

interface Props {
  index: number;
  questionToAnswer: QuestionToAnswer;
}
interface ListProps {
  questionToAnswerList: QuestionToAnswer[];
}

const Template = (args: Props) => (
  <div className={styles.list}>
    <InterviewResultQuestionComponent {...args} />
  </div>
);

const ListTemplate = (args: ListProps) => {
  const { questionToAnswerList } = args;
  return (
    <div className={styles.list}>
      {questionToAnswerList.map((q, index) => (
        <InterviewResultQuestionComponent
          key={q.id}
          index={index + 1}
          questionToAnswer={q}
        />
      ))}
    </div>
  );
};

export const InterviewResultQuestionList = ListTemplate.bind({});
InterviewResultQuestionList.args = {
  questionToAnswerList: questionToAnswer,
};

export const InterviewResultQuestionListElement = Template.bind({});
InterviewResultQuestionListElement.args = {
  index: 1,
  questionToAnswer: questionToAnswer[0],
};
