import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  // Hardcoded array of track objects
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: 'Song One', artist: 'Artist One', album: 'Album One' },
    { id: 2, name: 'Song Two', artist: 'Artist Two', album: 'Album Two' },
    { id: 3, name: 'Song Three', artist: 'Artist Three', album: 'Album Three' },
  ]);

  return (
    <div>
      <h1>Jamming</h1>
      <SearchBar />
      <div className="App-content">
        {/* Ensure tracks are correctly passed down */}
        <SearchResults tracks={searchResults} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
