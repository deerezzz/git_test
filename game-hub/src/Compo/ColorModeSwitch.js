import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (_jsxs(HStack, { children: [_jsx(Switch, { colorScheme: "green", isChecked: colorMode === "dark", onChange: toggleColorMode }), _jsx(Text, { children: "Dark Mode" })] }));
};
export default ColorModeSwitch;
