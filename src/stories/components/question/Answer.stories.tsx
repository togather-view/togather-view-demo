import QuestionAnswerComponent from "@src/components/question/QuestionAnswer.component";
import { answerList as answerListData } from "@dummy/answer.data";
import { Answer } from "@src/interface/interface";
import { Story } from "@storybook/react";

export default {
  title: "Components/Question/Answer",
  component: QuestionAnswerComponent,
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
};

interface Props {
  answer: Answer;
}

interface AnswerListProps {
  answerList: Answer[];
}

const Template: Story = (args: Props) => <QuestionAnswerComponent {...args} />;
const AnswerListTemplate: Story = (args: AnswerListProps) => {
  const { answerList } = args;
  return (
    <div>
      {answerList.map((a) => (
        <QuestionAnswerComponent key={a.id} answer={a} />
      ))}
    </div>
  );
};

export const AnswerList = AnswerListTemplate.bind({});
AnswerList.args = {
  answerList: answerListData,
};
export const AnswerListElement = Template.bind({});
AnswerListElement.args = {
  answer: answerListData[0],
};
