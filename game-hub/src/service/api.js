import axios from 'axios';
import getOAuthToken from '../service/auth';

/**
 * Fetches a list of games from the API.
 * @returns {Promise<Array>} - An array of game objects.
 */
export const fetchGames = async () => {
    try {
        // Get the OAuth token
        const token = await getOAuthToken();
        console.log("OAuth token retrieved successfully.");

        // Define the request payload and headers
        const requestBody = {
            fields: "id,name,release_dates.human,cover.url", // Specify fields to fetch
            limit: 10, // Limit the number of games to fetch
        };
        const headers = {
            "Client-ID": import.meta.env.VITE_CLIENT_ID, // Client ID from environment variables
            Authorization: `Bearer ${token}`, // Bearer token for authorization
        };

        // Make the API request
        console.log("Fetching games from the API...");
        const response = await axios.post("/api/games", requestBody, { headers });

        // Log the response for debugging
        console.log("API response:", response.data);

        // Validate the response format
        if (!Array.isArray(response.data)) {
            console.error("Unexpected response format:", response.data);
            throw new Error("Invalid response format");
        }

        // Return the fetched games
        return response.data;
    } catch (error) {
        // Log detailed error information
        if (error.response) {
            console.error("API Error Response:", {
                status: error.response.status,
                data: error.response.data,
            });
        } else if (error.request) {
            console.error("No response received from API:", error.request);
        } else {
            console.error("Error setting up the request:", error.message);
        }

        // Rethrow the error to propagate it
        throw error;
    }
};

export default fetchGames;
