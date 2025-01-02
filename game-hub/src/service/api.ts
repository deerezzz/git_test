import axios from 'axios';
import getOAuthToken from '../service/auth';

interface Game {
  id: number;
  name: string;
  release_dates?: { human: string }[];
  cover?: { url: string };
}

const fetchGames = async (): Promise<Game[]> => {
  const token = await getOAuthToken(); // Get OAuth token

  try {
    console.log("Fetching games...");

    const response = await axios.post(
      "/api/games", // This will now hit the local backend through the proxy
      {
        fields: "id,name,release_dates.human,cover.url", // Fields you want to fetch
        limit: 10, // Limit number of games to fetch
      },
      {
        headers: {
          "Client-ID": import.meta.env.VITE_CLIENT_ID, // Client ID from env variables
          Authorization: `Bearer ${token}`, // Add Authorization header with the token
        },
      }
    );

    console.log("API response:", response.data); // Log response for debugging

    if (!Array.isArray(response.data)) {
      console.error("Unexpected response format:", response.data);
      throw new Error("Invalid response format");
    }

    return response.data; // Return fetched games
  } catch (error) {
    console.error("Error fetching games:", error); // Log any errors
    throw error; // Rethrow error to propagate it
  }
};

export default fetchGames;
