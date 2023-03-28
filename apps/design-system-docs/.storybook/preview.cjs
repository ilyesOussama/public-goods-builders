import "../src/styles/tailwind.css";
import { themes } from "@storybook/theming";
import { addParameters } from "@storybook/react";
import { DocsPage, DocsContainer } from "@storybook/addon-docs";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
