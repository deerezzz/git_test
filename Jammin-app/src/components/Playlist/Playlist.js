import React from 'react';
import TrackList from '../TrackList/TrackList'; // Capitalize both the folder and file name
import Track from '../Track/Track'; 
import './Playlist.css'; // Use Playlist's specific CSS file

function SearchResults({ tracks }) {
  // Ensure "tracks" is an array
  if (!Array.isArray(tracks)) {
    return null; // If tracks is not an array, return nothing. 
  }

  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      {/* Pass tracks to TrackList */}
      <TrackList tracks={tracks} />
      
      {/* Loop through tracks and render each Track component */}
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default SearchResults;
