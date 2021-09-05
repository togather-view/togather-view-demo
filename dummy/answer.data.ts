import { Answer } from "@src/interface/interface";
import { myAccount } from "@dummy/user.data";

const answer1: Answer = {
  id: 1,
  contents:
    "군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등 직무집행과 관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는 공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수 없다.",
  createdBy: myAccount,
  createdAt: "2020년 3월 9일",
  likeCount: 14,
};

const answer2: Answer = {
  id: 2,
  contents:
    "대법원장은 국회의 동의를 얻어 대통령이 임명한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 국채를 모집하거나 예산외에 국가의 부담이 될 계약을 체결하려 할 때에는 정부는 미리 국회의 의결을 얻어야 한다.",
  createdBy: myAccount,
  createdAt: "2020년 3월 9일",
  likeCount: 0,
};

const answer3: Answer = {
  id: 3,
  contents:
    "국회의원이 회기전에 체포 또는 구금된 때에는 현행범인이 아닌 한 국회의 요구가 있으면 회기중 석방된다. 모든 국민은 자기의 행위가 아닌 친족의 행위로 인하여 불이익한 처우를 받지 아니한다.",
  createdBy: myAccount,
  createdAt: "2020년 3월 9일",
  likeCount: 24,
};

const answer4: Answer = {
  id: 4,
  contents:
    "각급 선거관리위원회의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 이 헌법시행 당시의 대법원장과 대법원판사가 아닌 법관은 제1항 단서의 규정에 불구하고 이 헌법에 의하여 임명된 것으로 본다.",
  createdBy: myAccount,
  createdAt: "2020년 3월 9일",
  likeCount: 8,
};

const answer5: Answer = {
  id: 5,
  contents:
    "의무교육은 무상으로 한다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다. 대법원에 대법관을 둔다. 다만, 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다.",
  createdBy: myAccount,
  createdAt: "2020년 3월 9일",
  likeCount: 392,
};

export default {};
export const answerList = [answer1, answer2, answer3, answer4, answer5];
