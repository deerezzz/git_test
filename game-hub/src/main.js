import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes"; // Assuming you're using next-themes for dark mode
import App from "./App";
import theme from "./theme";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsx(ThemeProvider, { children: _jsxs(ChakraProvider, { theme: theme, children: [_jsx(ColorModeScript, { initialColorMode: theme.config.initialColorMode }), _jsx(App, {})] }) }) }));
