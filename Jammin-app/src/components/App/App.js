import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';  // Import the SearchBar component
import SearchResults from '../SearchResults/SearchResults';
import SaveToSpotifyButton from '../spotify/SaveToSpotifyButton';
import Spotify from '../spotify/spotify';
import './App.css';  // App styling
import '../SearchBar/SearchBar.css';  // SearchBar styling

function App() {
  const [tracks, setTracks] = useState([]); // State for tracks
  const [playlist, setPlaylist] = useState([]); // State for the playlist
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false); // State to toggle playlist visibility
  const [isButtonLoading, setIsButtonLoading] = useState(false); // State for button loading state

  const handleSearch = async (searchTerm) => {
    try {
      const results = await Spotify.searchTracks(searchTerm);
      setTracks(results); // Update tracks on search
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleAddToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => [...prevPlaylist, track.uri]);
  };

  const togglePlaylistVisibility = () => {
    setIsButtonLoading(true);
    setIsPlaylistVisible((prev) => !prev);

    setTimeout(() => {
      setIsButtonLoading(false);
    }, 500);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <p>Create Spotify playlists with ease!</p>

        {/* View Playlist Button */}
        <button
          className={`playlist-toggle-btn ${isButtonLoading ? 'loading' : ''}`}
          onClick={togglePlaylistVisibility}
        >
          {isButtonLoading ? 'Loading...' : isPlaylistVisible ? 'Hide Playlist' : 'View Playlist'}
        </button>
      </header>

      {/* SearchBar component */}
      <SearchBar onSearch={handleSearch} />

      {/* SearchResults component */}
      <SearchResults tracks={tracks} onAddToPlaylist={handleAddToPlaylist} playlist={playlist} />

      {/* Playlist */}
      {isPlaylistVisible && (
        <div className={`Playlist ${isPlaylistVisible ? 'active' : ''}`}>
          <h2>Your Playlist</h2>
          <ul>
            {playlist.map((trackUri, index) => (
              <li key={index}>{trackUri}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Display SaveToSpotifyButton */}
      {playlist.length > 0 && <SaveToSpotifyButton customPlaylistName="My Custom Playlist" customTrackUris={playlist} />}
    </div>
  );
}

export default App;
