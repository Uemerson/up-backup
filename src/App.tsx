import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/styles";

import AppProvider from "./hooks";
import Routes from "./routes";

import "./styles/GlobalStyle.css";
import theme from "./styles/MuiTheme";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);
const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  </ThemeProvider>
);

ReactDom.render(<App />, mainElement);
