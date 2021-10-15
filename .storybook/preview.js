import "!style-loader!css-loader!sass-loader!../src/styles/antd-custom.css";
import "!style-loader!css-loader!sass-loader!../src/styles/globals.scss";
import { addParameters } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addParameters({
  viewport: {
    viewports: {
      desktop: {
        name: "desktop",
        styles: {
          width: "1200px",
          height: "1000px"
        },
        type: "desktop",
      },
    },
  },
})

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];