import React, { useState } from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';
import Spotify from '../spotify/spotify';


function Playlist({ playlistName, tracks, onRemove, onRename, onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(playlistName);

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleBlur = () => {
    if (newName !== playlistName) {
      onRename(newName);
    }
    setIsEditing(false);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleBlur();
    }
  };

  const removeTrack = (trackId) => {
    const updatedPlaylist = tracks.filter((track) => track.id !== trackId);
    onRemove(updatedPlaylist);
  };

  const savePlaylist = () => {
    if (!tracks.length) {
      alert('Your playlist is empty!');
      return;
    }

    const trackUris = tracks.map((track) => track.uri);

    // Integrate Spotify API logic
    const accessToken = Spotify.getAccessToken();
    if (!accessToken) {
      alert('Unable to save playlist. Please log in to Spotify.');
      return;
    }

    const endpoint = 'https://api.spotify.com/v1/me/playlists';
    const headers = { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' };

    // Create a new playlist
    fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        name: newName,
        description: 'Generated by Jammming',
        public: true,
      }),
    })
      .then((response) => response.json())
      .then((playlist) => {
        const playlistId = playlist.id;
        const addTracksEndpoint = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        return fetch(addTracksEndpoint, {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({ uris: trackUris }),
        });
      })
      .then((response) => {
        if (response.ok) {
          alert(`Playlist "${newName}" saved successfully!`);
          onRemove([]); // Clear the playlist
        } else {
          throw new Error('Failed to add tracks to playlist');
        }
      })
      .catch((error) => {
        console.error('Error saving playlist:', error);
        alert('An error occurred while saving the playlist. Please try again.');
      });
  };

  return (
    <div className="Playlist">
      <h2>
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyPress}
            autoFocus
          />
        ) : (
          <span onClick={() => setIsEditing(true)}>{playlistName}</span>
        )}
      </h2>
      <TrackList tracks={tracks} onRemove={removeTrack} />
      <button className="SaveButton" onClick={savePlaylist}>
        Save to Spotify
      </button>
    </div>
  );
}

export default Playlist;