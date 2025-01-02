import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NavBar from "./Compo/NavBar";
import fetchGames from "./service/api"; // Make sure the correct import path is used
function App() {
    console.log("App component rendering..."); // Debug
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadGames = async () => {
            try {
                console.log("Fetching games..."); // Debug
                const gameData = await fetchGames();
                console.log("Fetched game data:", gameData); // Debug
                if (Array.isArray(gameData)) {
                    setGames(gameData);
                }
                else {
                    console.error("Expected an array of games, but got:", gameData);
                }
            }
            catch (error) {
                console.error("Error loading games:", error);
            }
            finally {
                setLoading(false);
            }
        };
        loadGames();
    }, []);
    if (loading) {
        console.log("App is loading..."); // Debug
        return _jsx("div", { children: "Loading..." });
    }
    console.log("Games to render:", games); // Debug
    return (_jsxs(Grid, { templateAreas: {
            base: `"nav" "main"`, // Mobile layout
            lg: `"nav nav" "aside main"`, // Desktop layout
        }, children: [_jsx(GridItem, { area: "nav", children: _jsx(NavBar, {}) }), _jsx(Show, { above: "lg", children: _jsx(GridItem, { area: "aside", children: "Aside" }) }), _jsxs(GridItem, { area: "main", children: [_jsx("h1", { children: "Game List" }), _jsx("ul", { children: games.map((game) => {
                            console.log("Rendering game:", game); // Log individual game object
                            return (_jsxs("li", { children: [_jsx("h2", { children: game.name ? game.name : "No Name Available" }), _jsxs("p", { children: ["Release Date:", " ", game.release_dates && game.release_dates.length > 0
                                                ? game.release_dates[0].human
                                                : "Not Available"] }), game.cover ? (_jsx("img", { src: game.cover.url, alt: game.name || "Game Cover" })) : (_jsx("p", { children: "No Image Available" }))] }, game.id));
                        }) })] })] }));
}
export default App;
