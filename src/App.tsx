import React from "react";

import { createTheme, ThemeProvider } from "@mui/material";
import "./index.css";
import { LoginForm } from "./components/auth/login-form/login-form.component";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <LoginForm />
    </ThemeProvider>
  );
};

export default App;
