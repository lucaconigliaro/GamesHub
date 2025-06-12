import { Link } from "react-router-dom";
// Type
import type { Game } from "../Types/Game";

// Interface is used to define the structure of the props passed to the CompareTable component
interface CompareTableProps {
  games: Game[];
  removeFromCompare: (id: number) => void;
}

export default function CompareTable({ games, removeFromCompare }: CompareTableProps) {
  if (games.length === 0) return null;

  return (
    <div className="overflow-x-auto mt-6 rounded-lg shadow-lg">
      <table className="min-w-full table-auto border-collapse bg-gray-800 bg-opacity-80 text-white text-sm">
        <thead className="bg-white-800 text-yellow-400">
          <tr>
            <th className="border border-gray-700 p-3 text-left font-semibold"></th>
            {games.map(game => (
              <th key={game.id} className="relative border border-gray-700 p-3 text-left font-semibold">
                <Link to={`/games/${game.id}`}
                  className="hover:underline"
                >
                  {game.title}
                </Link>
                <button
                  onClick={() => removeFromCompare(game.id)}
                  className="absolute top-1 right-1 hover:bg-red-700 hover:bg-opacity-30 transition text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  title={`Rimuovi ${game.title}`}
                  type="button"
                >
                  ×
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Categoria</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.category || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Piattaforma</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.platform.join(", ") || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Anno di rilascio</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.releaseYear || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Rating</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.rating || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Sviluppatore</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.developer || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Prezzo</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.price ? `${g.details.price}€` : "Free to Play"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Giocatori</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.players.join(", ") || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Età consigliata</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.ageRating || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Disponibilità</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.regionAvailability.join(", ") || "-"}</td>
            ))}
          </tr>
          <tr className="hover:bg-gray-900/50 transition">
            <td className="border border-gray-700 p-3 font-medium text-yellow-400">Descrizione</td>
            {games.map(g => (
              <td key={g.id} className="border border-gray-700 p-3">{g.details.description || "-"}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}