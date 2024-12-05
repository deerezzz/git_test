import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Show Alert
      </Button>
    </div>
  );
}

export default App;
