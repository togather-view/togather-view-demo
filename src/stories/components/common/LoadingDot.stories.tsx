import LoadingDotsComponent from "@src/components/common/LoadingDots.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Common/Loading Dot",
  component: LoadingDotsComponent,
} as Meta;

const Template: Story = () => <LoadingDotsComponent />;

export const LoadingDot = Template.bind({});
