import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import InterviewStartBannerComponent from "@src/components/banner/InterviewStartBanner.component";

interface BannerProps {
  color: string;
  width: string;
}

export default {
  title: "Components/Banner/Interview Start",
  component: InterviewStartBannerComponent,
} as Meta;

const InterviewStartTemplate: Story<BannerProps> = (args) => {
  const { width } = args;
  return (
    <div style={{ width }}>
      <InterviewStartBannerComponent {...args} />
      <div />
    </div>
  );
};
export const InterviewStart = InterviewStartTemplate.bind({});
InterviewStart.args = {
  color: "#386CB9",
  width: "100%",
};
