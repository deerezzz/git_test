import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup heading="Cities" items={items}></ListGroup>
    </div>
  );
}

export default App;
