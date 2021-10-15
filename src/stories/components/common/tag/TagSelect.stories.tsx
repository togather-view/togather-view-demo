import { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { JobGroup, TagSelectColor, Tech } from "@src/interface/interface";
import { GroupList } from "@dummy/group.data";
import { TechList } from "@dummy/tech.data";
import { myAccount } from "@dummy/user.data";
import TagSelectComponent from "@src/components/common/TagSelect.component";
import tagStyles from "@src/styles/components/TagSelect.module.scss";

export default {
  title: "Components/Common/Tag/TagSelect",
  component: TagSelectComponent,
} as Meta;

interface Props {
  color: TagSelectColor;
  tagList: Tech[] | JobGroup[];
  defaultList: Tech[] | JobGroup[];
  selectedClassName: string;
}

const Template: Story = (args: Props) => {
  const { color, tagList, defaultList, selectedClassName } = args;
  const [selectedList, setSelectedList] = useState(defaultList);

  return (
    <TagSelectComponent
      color={color}
      tagList={tagList}
      selectedList={selectedList}
      setSelectedList={setSelectedList}
      selectedClassName={selectedClassName}
    />
  );
};

export const JobSelect = Template.bind({});
JobSelect.args = {
  color: TagSelectColor.JOB,
  tagList: GroupList,
  defaultList: myAccount.jobList,
  selectedClassName: tagStyles.tagSelectedBlue,
};
export const TechSelect = Template.bind({});
TechSelect.args = {
  color: TagSelectColor.TECH,
  tagList: TechList,
  defaultList: myAccount.techList,
  selectedClassName: tagStyles.tagSelectedOrange,
};
