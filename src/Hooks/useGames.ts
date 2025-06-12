import { useEffect, useState } from "react";
// Type
import type { Game } from "../Types/Game"
// Data
import { gamesData } from "../Data/gamesData";

// Local storage key for saving games data
const STORAGE_KEY = "gamesData";

export default function useGames() {
    const [games, setGames] = useState<Game[]>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : gamesData;
    });
    const categories = [...new Set(games.map((g) => g.category))];
    const platform = [
        ...new Set( // new Set is used to ensure unique values
            games
                .map((g) => g.details.platform)
                .reduce((acc, val) => acc.concat(val), []) // Flatten the array of arrays into a single array
        )
    ];

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(games));
    }, [games]);

    // Add a new game
    // Note: Omit<Game, "id"> is used to ensure the game object does not require an id when adding a new game
    function addGame(game: Omit<Game, "id">) {
        setGames(prev => [...prev, { ...game, id: Date.now() }]);
    };

    // Update an existing game
    // Note: Partial<Game> allows updating only some properties of the game
    function updateGame(id: number, updatedGame: Partial<Game>) {
        setGames((prev) => prev.map((g) => (g.id === id ? { ...g, ...updatedGame } : g)));
    };

    // Delete a game by id
    function deleteGame(id: number) {
        setGames((prev) => prev.filter((g) => g.id !== id));
    };

    // Get a game by id
    function getGameById(id: number) {
        return games.find((g) => g.id === id);
    };

    return {
        games,
        setGames,
        categories,
        platform,
        addGame,
        updateGame,
        deleteGame,
        getGameById
    };
}