import React from "react";
import ReactDOM from "react-dom/client";
import {StyleSheetManager} from "styled-components";

import App from "./App.tsx";
import "./index.css";
import CreditEaseProvider from "./modules/CreditForm/context/CreditEase.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CreditEaseProvider>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== "styled"}>
        <App />
      </StyleSheetManager>
    </CreditEaseProvider>
  </React.StrictMode>,
);
