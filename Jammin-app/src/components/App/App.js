import React, { useState, useEffect } from 'react';
import { BrowserRouter as Route, Routes, useNavigate } from 'react-router-dom'; // Ensure Routes and Route are imported

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import SaveToSpotifyButton from '../spotify/SaveToSpotifyButton';
import Spotify from '../spotify/spotify';
import './App.css';
import '../SearchBar/SearchBar.css';
import Callback from '../Callback';
import Playlist from '../Playlist/Playlist'; 
 
function App() {
  const [tracks, setTracks] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('My Playlist');
  const [isPlaylistVisible, setIsPlaylistVisible] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();  // Now works correctly within the Router context

  useEffect(() => {
    // Fetch user info from Spotify API if logged in
    const fetchUserInfo = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const response = await Spotify.getUserInfo(accessToken);
          setUserInfo(response);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      }
    };

    fetchUserInfo();
  }, []);

  const handleSearch = async (searchTerm) => {
    try {
      const results = await Spotify.searchTracks(searchTerm);
      setTracks(results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  const handleAddToPlaylist = (track) => {
    setPlaylist((prevPlaylist) => {
      if (!prevPlaylist.some((t) => t.id === track.id)) {
        return [...prevPlaylist, track];
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
    <div className="App">
      <header className="App-header">
        <h1>Jamming</h1>
        <p>Create Spotify playlists with ease!</p>

        {userInfo ? (
          <div>
            <p>Logged in as: {userInfo.display_name}</p>
            <img src={userInfo.images[0]?.url} alt="Profile" width="50" />
          </div>
        ) : (
          <p>Not logged in</p>
        )}

        <button
          className={`playlist-toggle-btn ${isButtonLoading ? 'loading' : ''}`}
          onClick={togglePlaylistVisibility}
        >
          {isButtonLoading ? 'Loading...' : isPlaylistVisible ? 'Hide Playlist' : 'View Playlist'}
        </button>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={handleSearch} />
              <SearchResults tracks={tracks} onAddToPlaylist={handleAddToPlaylist} />
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
              {playlist.length > 0 && (
                <SaveToSpotifyButton customPlaylistName={playlistName} customTrackUris={playlist.map((track) => track.uri)} />
              )}
            </>
          }
        />
        <Route path="/callback" element={<Callback />} />
        <Route
          path="/playlist"
          element={
            <Playlist
              playlistName={playlistName}
              tracks={playlist}
              onRemove={handleRemoveTrack}
              onRename={setPlaylistName}
              onSave={() => console.log('Save Playlist functionality')}
              onViewPlaylist={() => navigate('/playlist')}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
