import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { PortfolioTheme } from "./theme";
import theme from "./theme/theme";
import Providers from "./provider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={PortfolioTheme}>
        <Providers>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <App />
        </Providers>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
