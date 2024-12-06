import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"; // Assuming you're using next-themes for dark mode
import App from "./App";

// Define your custom theme here if necessary
const theme = extendTheme({
  // Custom theme configurations go here
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </React.StrictMode>
);
