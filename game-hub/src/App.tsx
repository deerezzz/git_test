import { Grid, GridItem, Show } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import NavBar from "./Compo/NavBar";
import fetchGames from "./service/api"; // Make sure the correct import path is used

interface Game {
  id: number;
  name: string;
  release_dates?: { human: string }[];
  cover?: { url: string };
}

function App() {
  console.log("App component rendering..."); // Debug
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        console.log("Fetching games..."); // Debug
        const gameData = await fetchGames();
        console.log("Fetched game data:", gameData); // Debug
        if (Array.isArray(gameData)) {
          setGames(gameData);
        } else {
          console.error("Expected an array of games, but got:", gameData);
        }
      } catch (error) {
        console.error("Error loading games:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) {
    console.log("App is loading..."); // Debug
    return <div>Loading...</div>;
  }

  console.log("Games to render:", games); // Debug

  return (
    <Grid
      templateAreas={
        {
          base: `"nav" "main"`, // Mobile layout
          lg: `"nav nav" "aside main"`, // Desktop layout
        } as Record<string, string>
      }
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">
        <h1>Game List</h1>
        <ul>
          {games.map((game) => {
            console.log("Rendering game:", game); // Log individual game object
            return (
              <li key={game.id}>
                <h2>{game.name ? game.name : "No Name Available"}</h2>
                <p>
                  Release Date:{" "}
                  {game.release_dates && game.release_dates.length > 0
                    ? game.release_dates[0].human
                    : "Not Available"}
                </p>
                {game.cover ? (
                  <img src={game.cover.url} alt={game.name || "Game Cover"} />
                ) : (
                  <p>No Image Available</p>
                )}
              </li>
            );
          })}
        </ul>
      </GridItem>
    </Grid>
  );
}

export default App;
