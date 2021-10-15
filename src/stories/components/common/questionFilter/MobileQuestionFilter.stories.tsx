import MobileQuestionFilterComponent from "@src/components/common/MobileQuestionFilter.component";
import { Meta } from "@storybook/react";

export default {
  title: "Components/common/QuestionFilter/Mobile",
  component: MobileQuestionFilterComponent,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
} as Meta;

const Template = () => <MobileQuestionFilterComponent />;

export const Mobile = Template.bind({});
