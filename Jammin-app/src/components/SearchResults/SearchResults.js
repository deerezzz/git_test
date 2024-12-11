import React from 'react';
import TrackList from '../TrackList/TrackList';  // Use TrackList for grouping tracks
import './SearchResults.css';

function SearchResults({ tracks }) {
  // Ensure "tracks" is an array
  if (!Array.isArray(tracks) || tracks.length === 0) {
    return <p>No search results found</p>; 
  }

  return (
    <div className="SearchResults">
      <h2>Search Results</h2>
      <TrackList tracks={tracks} />  {/* Pass the tracks prop down */}
    </div>
  );
}

export default SearchResults;