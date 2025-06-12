import React, { useState, useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import type { Game } from "../Types/Game";

interface GameCardProps {
  game: Game;
  toggleCompare: (game: Game) => void;
  gamesToCompare: Game[];
  onDelete: (id: number) => void;
}

const GameCard = ({ game, toggleCompare, gamesToCompare, onDelete }: GameCardProps) => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("GlobalContext è undefined. Assicurati che GameCard sia dentro <GlobalProvider>.");
  }

  const { addFavorite, removeFavorite, isFavorite } = context;
  const [showOptions, setShowOptions] = useState(false);

  const isSelected = gamesToCompare.some(g => g.id === game.id);
  const disableCompare = gamesToCompare.length >= 2 && !isSelected;
  const isFav = isFavorite(game.id);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg group transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <img
        src={game.coverImage}
        alt={game.title}
        className="w-full h-64 object-cover bg-black"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-between">
        {/* Favorites */}
        <span
          role="button"
          onClick={() => (isFav ? removeFavorite(game.id) : addFavorite(game))}
          title={isFav ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
          className="absolute top-2 right-2 text-2xl cursor-pointer z-10 select-none"
        >
          {isFav ? "❤️" : "🤍"}
        </span>

        {/* Title and category */}
        <div className="text-white">
          <h3 className="text-lg font-bold truncate" title={game.title}>{game.title}</h3>
          <p className="text-sm text-gray-300 truncate" title={game.category}>{game.category}</p>
        </div>

        <div className="mt-4 flex gap-2 text-xs">
          <a
            href={`/games/${game.id}`}
            className="block text-center border border-white text-white bg-white/10 backdrop-blur-sm rounded px-3 py-1 text-xs transition-all duration-200 ease-in-out transform hover:scale-105 hover:bg-white/20 hover:text-yellow-300"
          >
            Dettagli
          </a>

          <button
            disabled={disableCompare && !isSelected}
            onClick={() => toggleCompare(game)}
            className={`text-xs px-2 py-1 rounded transition-all duration-200 ease-in-out transform
              ${isSelected
                ? "bg-yellow-500 text-black hover:bg-yellow-400 hover:scale-105"
                : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-300 hover:scale-105"}
                disabled:opacity-50 disabled:cursor-not-allowed`}
            type="button"
          >
            {isSelected ? "Rimuovi" : "Confronta"}
          </button>

          <button
            onClick={() => setShowOptions(!showOptions)}
            title="Opzioni"
            className="text-xs px-2 py-1 rounded border border-gray-400 text-gray-300 transition-all duration-200 ease-in-out hover:scale-105 hover:border-white hover:text-white hover:bg-gray-700/30"
            type="button"
          >
            ⚙️
          </button>
        </div>
      </div>

      {/* Options */}
      {showOptions && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-black bg-opacity-70">
          <div className="p-4 rounded shadow-lg space-y-2 w-48">
            <button
              onClick={() => onDelete(game.id)}
              className="w-full bg-red-600 text-white text-sm px-4 py-1 rounded hover:bg-red-700"
            >
              Elimina
            </button>
            <button
              onClick={() => setShowOptions(false)}
              className="w-full bg-gray-600 text-white text-sm px-4 py-1 rounded hover:bg-gray-700"
            >
              Annulla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(GameCard);