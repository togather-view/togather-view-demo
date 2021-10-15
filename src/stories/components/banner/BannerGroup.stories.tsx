import React from "react";
import { Meta, Story } from "@storybook/react";
import InterviewStartBannerComponent from "@src/components/banner/InterviewStartBanner.component";
import styles from "@src/styles/pages/Main.module.scss";
import QuestionCreateBannerComponent from "@src/components/banner/QuestionCreateBanner.component";
import BookmarkBannerComponent from "@src/components/banner/BookmarkBanner.component";

export default {
  title: "Components/Banner/Banner Group",
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
} as Meta;

const Template: Story = () => (
  <div className={styles.banner}>
    <InterviewStartBannerComponent color="#386CB9" />
    <QuestionCreateBannerComponent color="#0B97B6" />
    <BookmarkBannerComponent color="#E19F18" />
  </div>
);
export const BannerGroup = Template.bind({});
