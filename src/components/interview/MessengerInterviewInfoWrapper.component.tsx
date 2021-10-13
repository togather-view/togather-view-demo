import { memo, useContext } from "react";

// lib
import { JobGroup, Tech } from "@src/interface/interface";
import MessengerContext from "@src/context/Messenger.context";

// component
import InterviewInfoComponent from "@src/components/interview/InterviewInfo.component";

interface Props {
  jobList: JobGroup[];
  techList: Tech[];
}

function MessengerInterviewInfoWrapperComponent({ jobList, techList }: Props) {
  const { questionIndex, questionTotal } = useContext(MessengerContext);
  return (
    <InterviewInfoComponent
      nowIndex={questionIndex}
      totalQuestion={questionTotal}
      jobList={jobList}
      techList={techList}
    />
  );
}

export default memo(MessengerInterviewInfoWrapperComponent);
