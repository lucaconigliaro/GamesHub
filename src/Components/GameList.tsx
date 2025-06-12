import React from "react";
import GameCard from "./GameCard";
import type { Game } from "../Types/Game";

interface GamesListProps {
  games: Game[];
  toggleCompare: (game: Game) => void;
  gamesToCompare: Game[];
  onDelete: (id: number) => void;
}

const GamesList = ({ games, toggleCompare, gamesToCompare, onDelete }: GamesListProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
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