import { createContext } from "react";
import type { ReactNode } from "react";
import type { GlobalContextType } from "../Types/GlobalContextType";

// Hooks
import useGames from "../Hooks/useGames";
import useFavorites from "../Hooks/useFavorites";

export const GlobalContext = createContext<GlobalContextType | null>(null);

type GlobalProviderProps = {
  children: ReactNode; // Note: ReactNode is used to allow any valid React child, including strings, numbers, element and fragments
};

export default function GlobalProvider({ children }: GlobalProviderProps) {
  const { games, setGames, getGameById, categories, platform, addGame, deleteGame, updateGame } = useGames();
  const { favorites, addFavorite, removeFavorite, isFavorite } = useFavorites();

  return (
    <GlobalContext.Provider
      value={{
        games,
        setGames,
        getGameById,
        categories,
        platform,
        addGame,
        deleteGame,
        updateGame,
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}