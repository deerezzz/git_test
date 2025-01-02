import express from 'express';
import axios from 'axios';
import cors from 'cors';
import dotenv from 'dotenv';
import getOAuthToken from './src/service/auth.ts'; // Ensure this path is correct

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5000;

// Enable CORS to allow front-end requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Route to proxy requests to the IGDB API
app.post('/api/games', async (req, res) => {
  try {
    // Get the OAuth token
    const token = await getOAuthToken();
    console.log("OAuth Token:", token); // Log the token for debugging

    // Define IGDB API URL
    const apiUrl = 'https://api.igdb.com/v4/games'; // Correct API URL

    // Extract fields and limit from the request body, with defaults if not provided
    const { fields = 'id,name,release_dates.human,cover.url', limit = 10 } = req.body;

    // Log the request body for debugging
    console.log("Request Body:", { fields, limit });

    // Make a POST request to the IGDB API
    const response = await axios.post(
      apiUrl,
      {
        fields,
        limit,
      },
      {
        headers: {
          'Client-ID': process.env.VITE_CLIENT_ID, // Ensure this is in your .env file
          Authorization: `Bearer ${token}`, // Add the OAuth token for authorization
        },
      }
    );

    // Send the data back to the front end
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching games:', error);
    res.status(500).json({ message: 'Error fetching games', error: error.message }); // Send detailed error message
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

