import { useContext } from "react";
import { Link } from "react-router-dom";
// Context
import { GlobalContext } from "../Context/GlobalContext";

// Types
import type { Game } from "../Types/Game";
import type { GlobalContextType } from "../Types/GlobalContextType";

// Interface is used to define the structure of the props passed to the Sidebar component
interface FavoritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoritesSidebar({ isOpen, onClose }: FavoritesSidebarProps) {
  const context = useContext(GlobalContext);
  if (!context) throw new Error("GlobalContext must be used within a GlobalProvider");

  const { favorites, removeFavorite } = context as GlobalContextType;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-14 right-0 z-50 h-[calc(100%-56px)] w-80 bg-gradient-to-b from-gray-950 to-gray-900 shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-yellow-400">
          <h2 className="text-yellow-400 text-lg font-semibold">⭐ Preferiti</h2>
          <button
            onClick={onClose}
            className="text-red-500 hover:text-red-700 text-xl font-bold"
            aria-label="Chiudi sidebar"
          >
            ×
          </button>
        </div>

        <div className="p-4 overflow-y-auto h-full">
          {favorites.length === 0 ? (
            <p className="text-gray-400 text-sm">Nessun gioco nei preferiti.</p>
          ) : (
            <ul className="space-y-3">
              {favorites.map((game: Game) => (
                <li
                  key={game.id}
                  className="flex justify-between items-center bg-gray-800 bg-opacity-50 rounded px-3 py-2 border border-yellow-400 text-sm text-yellow-300 hover:bg-yellow-400/10 transition"
                >
                  <Link
                    to={`/games/${game.id}`}
                    onClick={onClose}
                    className="hover:underline text-white"
                  >
                    {game.title}
                  </Link>
                  <button
                    onClick={() => removeFavorite(game.id)}
                    className="text-red-500 hover:text-red-700 text-base"
                    aria-label={`Rimuovi ${game.title}`}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}