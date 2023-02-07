import { BrowserRouter } from "react-router-dom";
import { RouteTree } from "./routes";
import "./styles.css";
import "./fonts/Montserrat.ttf";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";

export const theme = {
  size: {
    tablet: "426px",
  },
};

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <RouteTree />
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
