import React from "react";

import Routes from "./routes";
import GlobalStyle from "./styles/global";

import ContextProvider from "./contexts/Context";

function App() {
  return (
    <>
      <ContextProvider>
        <Routes />
        <GlobalStyle />
      </ContextProvider>
    </>
  );
}

export default App;
