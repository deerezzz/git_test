import React, { useState } from 'react';
import './SearchBar.css';  // Ensure this import is present at the top

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      if (searchTerm.trim()) {
        onSearch(searchTerm.trim()); // Trigger the search function with trimmed input
      }
    }
  };

  const handleClick = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim()); // Trigger the search function on button click
    }
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Add keydown event listener for 'Enter'
        placeholder="Enter Artist, Song to search for tracks..."
      />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
