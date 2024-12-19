import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Spotify from './spotify/spotify';

const Callback = () => {
  const navigate = useNavigate(); // Update to useNavigate

  useEffect(() => {
    // Get the access token from the URL using the Spotify API
    const token = Spotify.getAccessToken();
    if (token) {
      // Redirect to the home page after login
      navigate('/'); // Use navigate instead of history.push
    }
  }, [navigate]);

  return (
    <div>
      <h2>Logging in...</h2>
    </div>
  );
};

export default Callback;
