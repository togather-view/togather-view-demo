import "!style-loader!css-loader!sass-loader!../src/styles/antd-custom.css";
import "!style-loader!css-loader!sass-loader!../src/styles/globals.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <>
      <Story />
    </>
  ),
];