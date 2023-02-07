import { ThemeProvider } from "styled-components";
import { theme } from "../src/App";
import { QueryClient, QueryClientProvider } from "react-query";
import { Story } from "@storybook/react";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Create a client
const queryClient = new QueryClient();

export const decorators = [
  (Story: Story) => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </QueryClientProvider>
  ),
];
