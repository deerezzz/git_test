import { useState } from "react";
import produce from "immer";
import React from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1); // Find the bug
        if (bug) bug.fixed = true; // Update the 'fixed' property
      })
    );
  };

  return (
    <div>
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.title} {bug.fixed ? "fixed" : "New"}
        </p>
      ))}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
