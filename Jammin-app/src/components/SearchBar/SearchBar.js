import React, { useState } from 'react';
import './SearchBar.css';  // Ensure this import is present at the top

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Update search term as user types
  };

  const handleSearch = () => {
    if (searchTerm.trim()) {  // Check if the search term is not empty
      onSearch(searchTerm.trim()); // Trigger the search function with trimmed input
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form submission
      handleSearch(); // Trigger search if Enter key is pressed
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
      <button onClick={handleSearch}>Search</button> {/* Search button */}
    </div>
  );
}

export default SearchBar;
