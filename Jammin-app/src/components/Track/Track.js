import React from 'react';
import './Track.css';  // Make sure you have the corresponding CSS file.

function Track({ track, onRemove }) {
  if (!track) {
    return null; // If track is undefined, return nothing.
  }

  return (
    <div className="Track">
      <h3 className="track-name">{track.name}</h3>
      <p className="track-artist">{track.artist}</p>
      <p className="track-album">{track.album}</p>

      {/* Remove button */}
      <button 
        className="action-button" 
        onClick={() => onRemove(track.id)} // Trigger remove on click
      >
        Remove
      </button>
    </div>
  );
}

export default Track;
