import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Meta, Story } from "@storybook/react";
import InterviewStartBannerComponent from "@src/components/banner/InterviewStartBanner.component";

interface BannerProps {
  color: string;
  imgSrc: string;
}

export default {
  title: "Components/Banner/Interview Start",
  component: InterviewStartBannerComponent,
} as Meta;

const InterviewStartTemplate: Story<BannerProps> = (args) => (
  <InterviewStartBannerComponent {...args} />
);
export const InterviewStart = InterviewStartTemplate.bind({});
InterviewStart.args = {
  color: "#386CB9",
  imgSrc:
    "https://assets-global.website-files.com/5bcb5ee81fb2091a2ec550c7/6142d9cf318cf4209d4afc3b_DrawKit%20Product-Project%20Managers%20Grid.png",
};
