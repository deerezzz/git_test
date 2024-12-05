import Alert from "./components/Alert";

function App() {
  return (
    <div>
      <Alert>
        Hello <span>World </span>
      </Alert>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </div>
  );
}

export default App;
