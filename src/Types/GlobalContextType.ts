import type { Game } from "./Game";

export type GlobalContextType = {
  games: Game[];
  setGames: (games: Game[]) => void;
  categories: string[];
  platform: string[];
  getGameById: (id: number) => Game | undefined;
  addGame: (game: Omit<Game, "id">) => void;
  updateGame: (id: number, updatedGame: Partial<Game>) => void;
  deleteGame: (id: number) => void;
  favorites: Game[];
  addFavorite: (game: Game) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};