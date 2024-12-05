import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

function App() {
  return (
    <Box p={5}>
      <Text fontSize="xl" color="blue.500">
        Hello, Chakra UI!
      </Text>
    </Box>
  );
}

export default App;
