import QuestionFilterComponent from "@src/components/common/QuestionFilter.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Common/QuestionFilter/Desktop",
  component: QuestionFilterComponent,
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
} as Meta;

const Template: Story = () => <QuestionFilterComponent />;

export const Desktop = Template.bind({});
