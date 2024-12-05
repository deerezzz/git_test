import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  const handleSelectItem = (item) => {
    alert("Selected item: " + item); // Alert when an item is selected
  };

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
