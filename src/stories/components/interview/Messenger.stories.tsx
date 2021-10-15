import InterviewMessengerComponent from "@src/components/interview/InterviewMessenger.component";
import styles from "@src/styles/pages/InterviewMessenger.module.scss";

export default {
  title: "Components/Interview/Messenger",
  component: InterviewMessengerComponent,
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
};

const Template = () => (
  <div className={styles.container}>
    <div className={styles.box}>
      <InterviewMessengerComponent />
    </div>
  </div>
);

export const Messenger = Template.bind({});
