import QuestionListElementComponent from "@src/components/question/QuestionListElement.component";
import { Question } from "@src/interface/interface";
import { questionListPage1 } from "@dummy/question.data";
import { Meta } from "@storybook/react";

export default {
  title: "Components/Question/Question Feed",
  component: QuestionListElementComponent,
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
} as Meta;

interface Props {
  question: Question;
}
interface QuestionListProps {
  questionList: Question[];
}

const Template = (args: Props) => <QuestionListElementComponent {...args} />;
const QuestionListTemplate = (args: QuestionListProps) => {
  const { questionList } = args;
  return (
    <div>
      {questionList.map((x) => (
        <QuestionListElementComponent key={x.id} question={x} />
      ))}
    </div>
  );
};

export const QuestionList = QuestionListTemplate.bind({});
QuestionList.args = {
  questionList: questionListPage1,
};
export const QuestionListElement = Template.bind({});
QuestionListElement.args = {
  question: questionListPage1[0],
};
