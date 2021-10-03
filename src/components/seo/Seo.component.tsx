import { NextSeo } from "next-seo";
import { Question } from "@src/interface/interface";

interface SeoComponent {
  (): JSX.Element;
}

interface QuestionSeoComponent {
  (props: { question: Question }): JSX.Element;
}

export default {};

export const DefaultSeo: SeoComponent = () => (
  <NextSeo
    title="투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: "투게더뷰",
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);

export const QuestionSeo: QuestionSeoComponent = ({ question }) => (
  <NextSeo
    title={`${question.contents} - 투게더뷰`}
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `${question.contents} - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);

export const MyPageSeo: SeoComponent = () => (
  <NextSeo
    title="마이페이지 - 투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `마이페이지 - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);

export const InterviewFormSeo: SeoComponent = () => (
  <NextSeo
    title="모의 면접 사전 질문 - 투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `모의 면접 사전 질문 - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);

export const InterviewSeo: SeoComponent = () => (
  <NextSeo
    title="모의 면접 - 투게더뷰"
    description="함께 준비하는 면접 대비 플랫폼"
    openGraph={{
      title: `모의 면접 - 투게더뷰`,
      description: "함께 준비하는 면접 대비 플랫폼",
    }}
  />
);
