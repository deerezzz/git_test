import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Replace Switch with Routes and update imports
import SearchBar from '../SearchBar/SearchBar';  // Import the SearchBar component
import SearchResults from '../SearchResults/SearchResults';
import SaveToSpotifyButton from '../spotify/SaveToSpotifyButton';
import Spotify from '../spotify/spotify';
import './App.css';  // App styling
import '../SearchBar/SearchBar.css';  // SearchBar styling
import Callback from '../Callback';  // Add the callback page for handling Spotify login

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
    setPlaylist((prevPlaylist) => {
      if (!prevPlaylist.some((t) => t.id === track.id)) {
        return [...prevPlaylist, track]; // Add full track object
      }
      return prevPlaylist;
    });
  };

  const togglePlaylistVisibility = () => {
    setIsButtonLoading(true);
    setIsPlaylistVisible((prev) => !prev);

    setTimeout(() => {
      setIsButtonLoading(false);
    }, 500);
  };

  const handleRemoveTrack = (trackId) => {
    setPlaylist((prevPlaylist) => prevPlaylist.filter((track) => track.id !== trackId));
  };

  return (
    <Router> {/* Wrap your app with BrowserRouter */}
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

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={(
            <>
              {/* SearchBar component */}
              <SearchBar onSearch={handleSearch} />

              {/* SearchResults component */}
              <SearchResults tracks={tracks} onAddToPlaylist={handleAddToPlaylist} playlist={playlist} />

              {/* Playlist */}
              {isPlaylistVisible && (
                <div className={`Playlist ${isPlaylistVisible ? 'active' : ''}`}>
                  <h2>Your Playlist</h2>
                  {playlist.length > 0 ? (
                    <ul>
                      {playlist.map((track) => (
                        <li key={track.id}>
                          {track.name} by {track.artists.map((artist) => artist.name).join(', ')}
                          <button onClick={() => handleRemoveTrack(track.id)}>Remove</button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Your playlist is empty. Start adding tracks!</p>
                  )}
                </div>
              )}

              {/* Display SaveToSpotifyButton */}
              {playlist.length > 0 && <SaveToSpotifyButton customPlaylistName="My Custom Playlist" customTrackUris={playlist.map((track) => track.uri)} />}
            </>
          )} />
          
          {/* Callback route for Spotify authentication */}
          <Route path="/callback" element={<Callback />} /> {/* This route handles the callback page */}
          
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
