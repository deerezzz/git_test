import React from 'react';
import Track from '../Track/Track';

function TrackList({ tracks, onRemove }) {
  if (!Array.isArray(tracks)) {
    return <p>No tracks available</p>;
  }

  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track key={track.id} track={track} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TrackList;
