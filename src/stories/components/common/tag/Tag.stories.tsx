import TagComponent from "@src/components/common/Tag.component";
import { Story } from "@storybook/react";

export default {
  title: "Components/Common/Tag/Tag",
  component: TagComponent,
};

interface TagProps {
  title: string;
  color: string;
}

const Template: Story = (args: TagProps) => <TagComponent {...args} />;

export const JavascriptTag = Template.bind({});
JavascriptTag.args = {
  title: "JavaScript",
  color: "#F0DB4F",
};
export const ReactTag = Template.bind({});
ReactTag.args = {
  title: "React",
  color: "#61DBFB",
};
export const CssTag = Template.bind({});
CssTag.args = {
  title: "CSS",
  color: "#2965f1",
};
