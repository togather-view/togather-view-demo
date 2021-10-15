import ProfileCardComponent from "@src/components/profile/ProfileCard.component";
import { User } from "@src/interface/interface";
import { Meta, Story } from "@storybook/react";
import { myAccount } from "@dummy/user.data";

export default {
  title: "Components/Profile/Profile Card",
  component: ProfileCardComponent,
  parameters: { viewport: { defaultViewport: "mobile1" } },
} as Meta;

interface props {
  profile: User;
  questionCount: number;
  answerCount: number;
  bookmarkCount: number;
}

const Template: Story = (args: props) => <ProfileCardComponent {...args} />;

export const ProfileCard = Template.bind({});
ProfileCard.args = {
  profile: myAccount,
  questionCount: 13,
  answerCount: 15,
  bookmarkCount: 14,
};
