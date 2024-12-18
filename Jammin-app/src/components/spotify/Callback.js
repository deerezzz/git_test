import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spotify from '../spotify/spotify';

const Callback = () => {
  const history = useHistory();

  useEffect(() => {
    // Get the access token from the URL using the Spotify API
    const token = Spotify.getAccessToken();
    if (token) {
      // Redirect to the home page after login
      history.push('/');
    }
  }, [history]);

  return (
    <div>
      <h2>Logging in...</h2>
    </div>
  );
};

export default Callback;
