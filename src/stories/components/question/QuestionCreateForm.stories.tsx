import { Meta } from "@storybook/react";
import QuestionFormComponent from "@src/components/question/QuestionForm.component";

export default {
  title: "Components/Question/Question Create Form",
  component: QuestionFormComponent,
} as Meta;

const Template = () => (
  <div style={{ width: "500px" }}>
    {/* eslint-disable-next-line @typescript-eslint/no-empty-function */}
    <QuestionFormComponent closeForm={() => {}} />
  </div>
);

export const QuestionCreateForm = Template.bind({});
