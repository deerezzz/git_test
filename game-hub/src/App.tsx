import React, { useEffect, useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Compo/NavBar";
import { fetchGames } from "./service/api";

interface Game {
  id: number;
  name: string;
  release_dates?: { human: string }[];
  cover?: { url: string };
}

function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadGames = async () => {
      try {
        const gameData = await fetchGames();
        console.log("Fetched game data:", gameData); // Log the entire game data
        setGames(gameData);
      } catch (error) {
        console.error("Error loading games:", error);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
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
          {games.map((game) => (
            <li key={game.id}>
              {game.name}
              <br />
              Release Date:{" "}
              {game.release_dates && game.release_dates.length > 0
                ? game.release_dates[0].human
                : "Not Available"}
              <br />
              {game.cover && game.cover.url ? (
                <img src={game.cover.url} alt={game.name} />
              ) : (
                "No Image"
              )}
            </li>
          ))}
        </ul>
      </GridItem>
    </Grid>
  );
}

export default App;
