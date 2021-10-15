import LayoutComponent from "@src/components/common/Layout.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/Common/Layout",
  component: LayoutComponent,
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
} as Meta;

interface Props {
  showInterviewButton: boolean;
}

const Template: Story = (args: Props) => (
  <LayoutComponent {...args}>
    <div />
  </LayoutComponent>
);

export const Layout = Template.bind({});
Layout.args = {
  showInterviewButton: true,
};
