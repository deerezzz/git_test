import ListGroup from "./components/ListGroup";
import { BsCalendarFill } from "react-icons/bs";

function App() {
  const items = ["New York", "Los Angeles", "San Francisco"];

  const handleSelectItem = (item) => {
    alert("Selected item: " + item); // Alert when an item is selected
  };

  return (
    <div>
      <BsCalendarFill />
      <ListGroup
        heading="Cities"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
