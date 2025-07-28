import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { AppRoute } from "@/pages/routes";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <AppRoute />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
