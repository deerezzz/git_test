import axios from 'axios';

// Access environment variables with `import.meta.env`
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error('Environment variables for clientId or clientSecret are not set');
}

export const getOAuthToken = async (): Promise<string> => {
  try {
    const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching OAuth token:', error);
    throw error;
  }
};
