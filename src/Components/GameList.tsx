import React from "react";
// Component
import GameCard from "./GameCard";
// Type
import type { Game } from "../Types/Game";

// Interface is used to define the structure of the props passed to the Gamelist component
interface GamesListProps {
  games: Game[];
  toggleCompare: (game: Game) => void;
  gamesToCompare: Game[];
  onDelete: (id: number) => void;
}

const GamesList = ({ games, toggleCompare, gamesToCompare, onDelete }: GamesListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-5 p-3">
      {games.map(game => (
        <GameCard
          key={game.id}
          game={game}
          toggleCompare={toggleCompare}
          gamesToCompare={gamesToCompare}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default React.memo(GamesList);