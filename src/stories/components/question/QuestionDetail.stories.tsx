import QuestionDetailComponent from "@src/components/question/QuestionDetail.component";
import { Question } from "@src/interface/interface";
import { questionList } from "@dummy/question.data";

export default {
  title: "Components/Question/Question Detail",
  component: QuestionDetailComponent,
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
};

interface Props {
  question: Question;
}

const Template = (args: Props) => <QuestionDetailComponent {...args} />;

export const QuestionDetail = Template.bind({});
QuestionDetail.args = {
  question: questionList[0],
};
