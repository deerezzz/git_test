import React, { useState, createContext, useContext, useEffect } from 'react'; // Added useState
import { useNavigate } from 'react-router-dom';
import Spotify from './spotify/spotify';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => { // Changed `Children` to `children`
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children} {/* Use lowercase 'children' */}
    </AuthContext.Provider>
  );
};

const Callback = () => {
  const navigate = useNavigate();

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
