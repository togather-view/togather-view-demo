const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-viewport/register",
    {
      name: '@storybook/preset-ant-design',
      options: {
        lessOptions: {
          modifyVars: {
            'primary-color': '#0087e5',
          },
        },
      },
    }
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    // node_modules, styles 폴더 내부 모듈 인식시키기
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];

    // storybook 내에서 절대경로 사용할 수 있도록 설정
    config.resolve.alias = {
      ...config.resolve.alias,
      "@src": path.resolve(__dirname, "../src"),
      "@dummy": path.resolve(__dirname, "../dummy"),
    };

    // scss 모듈 적용
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', {
        loader: 'css-loader',
        options: {
          modules: true,
        },
      }, 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
