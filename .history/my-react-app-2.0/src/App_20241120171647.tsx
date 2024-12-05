import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  return (
    <div>
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
