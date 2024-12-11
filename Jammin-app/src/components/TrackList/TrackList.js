// TrackList.js
import React from 'react';
import Track from '../Track/Track';

function TrackList({ tracks }) {

    // Ensure "tracks" is an array before trying to map over it. 
  // Ensure "tracks" is an array before trying to map over it
  if (!Array.isArray(tracks)) {
    return <p>No tracks available</p>;  // Handle case where tracks is not an array
  }

  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}


export default TrackList;
