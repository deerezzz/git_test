import React from 'react';
import './SearchResults.css';
import SaveToSpotifyButton from '../spotify/SaveToSpotifyButton';

function SearchResults({ tracks, onAddToPlaylist, playlist = [] }) { // Default playlist to an empty array
  return (
    <div className="search-results-container">
      <h2>Search Results</h2>
      <ul className="search-results">
        {tracks.map((track) => {
          // Ensure album images exist and use the first image URL if available
          const albumImage = track.album?.images?.length > 0
            ? track.album.images[0].url
            : 'https://via.placeholder.com/150'; // Placeholder URL for testing

          // Handle artist names for both single and multiple artists
          const artistNames = Array.isArray(track.artists)
            ? track.artists.map((artist) => artist.name).join(', ') 
            : track.artists?.name || 'Unknown Artist'; // Fallback to 'Unknown Artist'

          return (
            <li key={track.id} className="search-result-item">
              <img 
                src={albumImage} 
                alt={track.name} 
                className="track-image" 
              />
              <span className="track-info">
                {track.name} by {artistNames}
              </span>
              <button 
                onClick={() => onAddToPlaylist(track)} 
                className="add-to-playlist-btn">
                Add to Playlist
              </button>
            </li>
          );
        })}
      </ul>

      {/* Add a Save to Spotify button */}
      {playlist.length > 0 && (
        <SaveToSpotifyButton customPlaylistName="My Custom Playlist" customTrackUris={playlist} />
      )}
    </div>
  );
}

export default SearchResults;
