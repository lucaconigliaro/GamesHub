import { useEffect, useState } from "react";
// Type
import type { Game } from "../Types/Game";

export default function useFavorites() {
    const [favorites, setFavorites] = useState<Game[]>(() => {
        const stored = localStorage.getItem("favorites");
        return stored ? JSON.parse(stored) as Game[] : [];
    });

    // Sync favorites with localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Add a game to favorites
    const addFavorite = (game: Game) => {
        if (!favorites.find((fav) => fav.id === game.id)) {
            setFavorites((prev) => [...prev, game]);
        }
    };

    // Remove a game from favorites
    const removeFavorite = (gameId: number) => {
        setFavorites((prev) => prev.filter((fav) => fav.id !== gameId));
    };

    // Check if a game is in favorites
    const isFavorite = (gameId: number) => {
        return favorites.some((fav) => fav.id === gameId);
    };

    return {
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite
    };
}