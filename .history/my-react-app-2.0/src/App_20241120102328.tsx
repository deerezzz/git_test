import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        <Button onClick={() => console.log("CLicked")}>My Button</Button>
      </Alert>
    </div>
  );
}

export default App;
