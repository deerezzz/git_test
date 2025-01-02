import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/images/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
const NavBar = () => {
    return (_jsxs(HStack, { justifyContent: "space-between", padding: "10px", children: [_jsx(Image, { src: logo, boxSize: "60px" }), _jsx(ColorModeSwitch, {})] }));
};
export default NavBar;
