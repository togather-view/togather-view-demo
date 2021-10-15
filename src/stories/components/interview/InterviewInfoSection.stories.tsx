import InterviewInfoComponent from "@src/components/interview/InterviewInfo.component";
import { JobGroup, Tech } from "@src/interface/interface";
import { myAccount } from "@dummy/user.data";

export default {
  title: "Components/Interview/Interview Info Section",
  component: InterviewInfoComponent,
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};

interface Props {
  width: string;
  totalQuestion: number;
  nowIndex: number;
  jobList: JobGroup[];
  techList: Tech[];
}

const Template = (args: Props) => {
  const { width } = args;
  return (
    <div style={{ width }}>
      <InterviewInfoComponent {...args} />
    </div>
  );
};

export const InterviewInfoSection = Template.bind({});
InterviewInfoSection.args = {
  width: "420px",
  totalQuestion: 10,
  nowIndex: 5,
  jobList: myAccount.jobList,
  techList: myAccount.techList,
};
