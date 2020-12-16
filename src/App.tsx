import React from "react";
import ReactDom from "react-dom";

import Dashboard from "./pages/Dashboard";

const mainElement = document.createElement("div");
document.body.appendChild(mainElement);
const App = () => <Dashboard />;

ReactDom.render(<App />, mainElement);
