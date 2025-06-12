import { useContext, useState, useCallback, useMemo, useEffect, useRef } from "react";
import GameList from "../Components/GameList";
import { GlobalContext } from "../Context/GlobalContext";
import CompareTable from "../Components/CompareTable";
import type { Game } from "../Types/Game";
import Carousel from "../Components/Carousel";

export default function HomePage() {
  const context = useContext(GlobalContext);

  if (!context) {
    return <div className="text-center text-white mt-5">Loading...</div>;
  }

  const { games, categories, platform, getGameById, deleteGame, removeFavorite } = context;

  const [searchGame, setSearchGame] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");
  const [selectedPlatform, setSelectedPlatform] = useState("Tutte");
  const [sortBy, setSortBy] = useState<"title" | "category" | "platform">("title");
  const [sortOrder, setSortOrder] = useState<1 | -1>(1);
  const [gamesToCompare, setGamesToCompare] = useState<Game[]>([]);

  const compareRef = useRef<HTMLDivElement | null>(null);

  // Debounce function to limit the frequency of search updates
  function debounce<T>(callback: (value: T) => void, delay: number) {
    let timer: number;
    return (value: T) => {
      clearTimeout(timer);
      timer = setTimeout(() => callback(value), delay);
    };
  }

  // Using useCallback to memoize the debounced function
  const debouncedSetSearchQuery = useCallback(debounce(setSearchGame, 1000), []);

  // Function to toggle game comparison
  // This function adds or removes a game from the comparison list
  const toggleCompare = useCallback(
    (game: Game) => {
      const isAlready = gamesToCompare.some((g) => g.id === game.id);
      if (isAlready) {
        setGamesToCompare((prev) => prev.filter((g) => g.id !== game.id));
      } else if (gamesToCompare.length < 2) {
        const detailedGame = getGameById(game.id);
        if (detailedGame) setGamesToCompare((prev) => [...prev, detailedGame]);
      }
    },
    [gamesToCompare, getGameById]
  );

  // Function to clear the comparison list
  // This function resets the gamesToCompare state to an empty array
  const clearCompare = useCallback(() => setGamesToCompare([]), []);
  const removeFromCompare = useCallback((id: number) => {
    setGamesToCompare((prev) => prev.filter((g) => g.id !== id));
  }, []);

  // Function to handle sorting of games
  // This function updates the sortBy and sortOrder states based on the selected field
  const handleSort = (field: "title" | "category" | "platform") => {
    if (sortBy === field) {
      setSortOrder((prev) => (prev === 1 ? -1 : 1));
    } else {
      setSortBy(field);
      setSortOrder(1);
    }
  };

  // Memoized filtered and sorted games
  // This function filters and sorts the games based on search query, selected category, platform, and sort options
  const filteredAndSortedGames = useMemo(() => {
    let filtered = games.filter((game) =>
      game.title.toLowerCase().includes(searchGame.toLowerCase())
    );
    if (selectedCategory !== "Tutti") {
      filtered = filtered.filter((game) => game.category === selectedCategory);
    }
    if (selectedPlatform !== "Tutte") {
      filtered = filtered.filter((game) =>
        game.details.platform.includes(selectedPlatform)
      );
    }
    return filtered.sort((a, b) => {
      let comparison = 0;
      if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === "category") {
        comparison = a.category.localeCompare(b.category);
      } else if (sortBy === "platform") {
        comparison = a.details.platform[0]?.localeCompare(b.details.platform[0] || "") || 0;
      }
      return comparison * sortOrder;
    });
  }, [games, searchGame, selectedCategory, selectedPlatform, sortBy, sortOrder]);

  // Effect to scroll to the comparison section when two games are selected for comparison
  useEffect(() => {
    if (gamesToCompare.length === 2 && compareRef.current) {
      compareRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [gamesToCompare]);

  // Function to handle game deletion
  // This function prompts the user for confirmation before deleting a game
  const handleDeleteGame = (id: number) => {
    if (window.confirm("Sei sicuro di voler eliminare questo gioco?")) {
      deleteGame(id);
      setGamesToCompare((prev) => prev.filter((g) => g.id !== id));
      removeFavorite(id);
    }
  };

  // Filter top games based on rating
  const topGames = games.filter((game) => game.details.rating >= 8);

  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen w-full">
      {/* Hero  */}
      <section className="bg-gradient-to-b from-gray-950 to-gray-900 text-white py-24 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Benvenuto su <span className="text-yellow-400">GamesHub</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Scopri, confronta e scegli i giochi migliori.
          </p>
          <p className="text-sm text-gray-100 max-w-2xl mx-auto mt-2">
            Trova il tuo prossimo titolo preferito tra centinaia di opzioni selezionate dalla community!
          </p>
        </div>
      </section>

      {/* Carousel */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6 text-center pt-10">
            Scopri i migliori giochi scelti dalla community
          </h2>
          <Carousel games={topGames} />
        </div>
      </section>

      {/* Filter, list and comparator */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Filtri */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <input
              type="text"
              placeholder="Cerca un gioco..."
              onChange={(e) => debouncedSetSearchQuery(e.target.value)}
              className="w-64 rounded border border-gray-600 bg-gray-800 text-white placeholder-gray-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              className="w-64 rounded border border-gray-600 bg-gray-800 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="Tutti">Tutte le categorie</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <select
              className="w-64 rounded border border-gray-600 bg-gray-800 text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
            >
              <option value="Tutte">Tutte le piattaforme</option>
              {platform.map((plat) => (
                <option key={plat} value={plat}>
                  {plat}
                </option>
              ))}
            </select>
          </div>

          {/* Order */}
          <div className="flex gap-3 flex-wrap items-center justify-center mb-6">
            <h1 className="text-white text-3xl font-semibold">I nostri giochi</h1>
            <button
              onClick={() => handleSort("title")}
              className="rounded border border-blue-500 text-blue-500 px-3 py-1 text-sm hover:bg-blue-500 hover:text-white transition"
              type="button"
            >
              Titolo {sortBy === "title" && (sortOrder === 1 ? "A-Z ↑" : "Z-A ↓")}
            </button>
            <button
              onClick={() => handleSort("category")}
              className="rounded border border-blue-500 text-blue-500 px-3 py-1 text-sm hover:bg-blue-500 hover:text-white transition"
              type="button"
            >
              Categoria {sortBy === "category" && (sortOrder === 1 ? "A-Z ↑" : "Z-A ↓")}
            </button>
          </div>

          <small className="text-yellow-400 block text-center mb-4">
            Clicca su "Confronta" su due giochi per visualizzarne il confronto.
          </small>

          {/* Games */}
          {filteredAndSortedGames.length > 0 ? (
            <GameList
              games={filteredAndSortedGames}
              toggleCompare={toggleCompare}
              gamesToCompare={gamesToCompare}
              onDelete={handleDeleteGame}
            />
          ) : (
            <p className="text-white text-center">Nessun gioco trovato.</p>
          )}

          {/* Compare */}
          {gamesToCompare.length > 0 && (
            <div className="mt-20 text-white" ref={compareRef}>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-2xl font-semibold">Confronta i giochi</h3>
                <button
                  className="text-white hover:text-yellow-400 transition text-lg"
                  onClick={clearCompare}
                  title="Chiudi confronto"
                  type="button"
                >
                  ×
                </button>
              </div>
              <div className="overflow-x-auto">
                <CompareTable games={gamesToCompare} removeFromCompare={removeFromCompare} />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}