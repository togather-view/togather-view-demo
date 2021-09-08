import { NextSeo } from "next-seo";

export default {};

export const DefaultSeo = () => (
  <NextSeo
    title="투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: "투게더뷰",
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);
export const QuestionSeo = ({ question }) => (
  <NextSeo
    title={`${question.contents} - 투게더뷰`}
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `${question.contents} - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);
export const MyPageSeo = () => (
  <NextSeo
    title="마이페이지 - 투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `마이페이지 - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);
export const InterviewFormSeo = () => (
  <NextSeo
    title="모의 면접 사전 질문 - 투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `모의 면접 사전 질문 - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);
export const InterviewSeo = () => (
  <NextSeo
    title="모의 면접 - 투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `모의 면접 - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);
