import axios from 'axios';
const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
if (!clientId || !clientSecret) {
    throw new Error('Environment variables for clientId or clientSecret are not set');
}
/**
 * Fetches an OAuth token from Twitch's API.
 * @returns {Promise<string>} - The OAuth token
 */
export const getOAuthToken = async () => {
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
        console.log('OAuth response:', response.data);
        return response.data.access_token;
    }
    catch (error) {
        console.error('Error fetching OAuth token:', error);
        throw error;
    }
};
export default getOAuthToken;
