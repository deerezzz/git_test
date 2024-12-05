import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [] = useState(false);
  return (
    <div>
      <Alert>My Alert</Alert>
      <Button onClick={() => console.log("Clicked")}>My Button</Button>
    </div>
  );
}

export default App;
