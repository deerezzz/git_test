import React, { useState } from 'react';
import Spotify from './spotify';
import './saveToSpotifyButton.css'

function SaveToSpotifyButton({ customPlaylistName, customTrackUris }) {
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveToSpotify = async () => {
    setIsSaving(true);
    try {
      // Await the completion of playlist creation and track addition
      await Spotify.saveCustomPlaylist(customPlaylistName, customTrackUris);
      console.log('Playlist saved successfully');
    } catch (error) {
      console.error('Error saving playlist:', error);
    }
    setIsSaving(false);
  };

  return (
    <button onClick={handleSaveToSpotify} disabled={isSaving}>
      {isSaving ? 'Saving...' : 'Save to Spotify'}
    </button>
  );
}

export default SaveToSpotifyButton;
