import InterviewConditionIconContainerComponent from "@src/components/interview/InterviewConditionIconConatiner.component";
import { Story } from "@storybook/react";

export default {
  title: "Components/Interview/Interview Condition Icons",
  component: InterviewConditionIconContainerComponent,
};
interface Props {
  useTimer: boolean;
  containAttitude: boolean;
}
const Template: Story = (args: Props) => (
  <InterviewConditionIconContainerComponent {...args} />
);

export const InterviewConditionIcons = Template.bind({});
InterviewConditionIcons.args = {
  useTimer: true,
  containAttitude: false,
};
