import axios from 'axios';
import { getOAuthToken } from './auth';

interface Game {
  id: number;
  name: string;
  release_dates?: { human: string }[];
}

export const fetchGames = async (): Promise<Game[]> => {
  const token = await getOAuthToken();

  try {
    const response = await axios.post<Game[]>(
      '/api/games',
      {
        fields: 'name,release_dates,cover.url',
        limit: 10,
      },
      {
        headers: {
          'Client-ID': import.meta.env.VITE_CLIENT_ID,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Fetched game data:', response.data); // Log the fetched data
    return response.data;
  } catch (error) {
    console.error('Error fetching games:', error);
    throw error;
  }
};


export default fetchGames; 
