import { ReactElement, ReactNode } from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../App";
import { QueryClient, QueryClientProvider } from "react-query";

export const renderWithProvider = (component: ReactElement) => {
  function Wrapper({ children }: { children: ReactNode }) {
    // Create a client
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>{children}</BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );
  }

  return render(component, { wrapper: Wrapper });
};
