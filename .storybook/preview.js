import "!style-loader!css-loader!sass-loader!../src/styles/antd-custom.css";
import "!style-loader!css-loader!sass-loader!../src/styles/globals.scss";
import { addParameters } from "@storybook/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addParameters({
  viewport: {
    viewports: {
      mobile1: {
        name: "Small mobile",
        styles: {
          height: "568px",
          width: "320px",
        },
        type: "mobile",
      },
      mobile2: {
        name: "Large mobile",
        styles: {
          height: "896px",
          width: "414px",
        },
        type: "mobile",
      },
      tablet: {
        name: "Tablet",
        styles: {
          height: "1112px",
          width: "834px",
        },
        type: "tablet",
      },
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