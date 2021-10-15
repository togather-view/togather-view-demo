import { Meta } from "@storybook/react";
import AlertNewMessageComponent from "@src/components/interview/AlertNewMessage.component";
import { MutableRefObject } from "react";

export default {
  title: "Components/Interview/New Message Alert",
  component: AlertNewMessageComponent,
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
} as Meta;

interface Props {
  contents: string;
}

const Template = (args: Props) => (
  <AlertNewMessageComponent bodyRef={null} {...args} />
);

export const NewMessageAlert = Template.bind({});
NewMessageAlert.args = {
  contents: "JavaScript는 어떤 언어인가요?",
};
