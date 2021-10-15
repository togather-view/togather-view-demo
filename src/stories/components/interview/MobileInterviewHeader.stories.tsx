import InterviewMessengerHeaderComponent from "@src/components/interview/InterviewMessengerHeader.component";
import { JobGroup, Tech } from "@src/interface/interface";
import { myAccount } from "@dummy/user.data";
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

export default {
  title: "Components/Interview/Mobile Interview Header",
  component: InterviewMessengerHeaderComponent,
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
};
interface Props {
  jobList: JobGroup[];
  techList: Tech[];
}
const Template = (args: Props) => (
  <div className={styles.messengerWrap}>
    <InterviewMessengerHeaderComponent {...args} />
  </div>
);

export const MobileInterviewHeader = Template.bind({});
MobileInterviewHeader.args = {
  jobList: myAccount.jobList,
  techList: myAccount.techList,
};
