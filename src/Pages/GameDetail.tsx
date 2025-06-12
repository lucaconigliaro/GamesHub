import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// Context
import { GlobalContext } from "../Context/GlobalContext";
// Type
import type { Game } from "../Types/Game";

export default function GameDetail() {
    const { id } = useParams<{ id: string }>();
    const context = useContext(GlobalContext);

    const [game, setGame] = useState<Game | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!context || !id) return;
        const found = context.getGameById(Number(id));
        if (found) {
            setGame(found);
        } else {
            setError("Gioco non trovato");
        }
    }, [context, id]);

    if (!context) return <div className="text-white text-center mt-32">Caricamento in corso...</div>;
    const { addFavorite, removeFavorite, isFavorite } = context;

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
                <div className="text-center max-w-md">
                    <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
                    <p className="text-xl mb-6">Oops! Gioco non trovato.</p>
                    <p className="text-gray-400 mb-8">
                        Il gioco che stai cercando non esiste o è stato rimosso.
                    </p>
                    <Link
                        to="/"
                        className="inline-block text-sm px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400/10 hover:text-yellow-300 transition-all duration-200 ease-in-out transform hover:scale-105"
                    >
                        Torna alla Home
                    </Link>
                </div>
            </div>
        );
    }

    if (!game) return <div className="text-white text-center mt-32">Caricamento in corso...</div>;

    const isFav = isFavorite(game.id);

    // Component to display each detail row
    const DetailRow = ({ label, value }: { label: string; value: string }) => (
        <p className="mb-2 text-sm">
            <span className="text-yellow-400 font-semibold">{label}:</span>{" "}
            <span className="text-gray-300">{value}</span>
        </p>
    );

    return (
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 min-h-screen w-full px-4 py-28 text-white">
            <div className="max-w-3xl mx-auto bg-gray-900 bg-opacity-60 rounded-lg shadow-md p-6">
                <h1 className="text-3xl font-bold text-yellow-400 mb-4">{game.title}</h1>

                <div className="space-y-2">
                    <DetailRow label="Categoria" value={game.category} />
                    <DetailRow label="Piattaforma" value={game.details.platform.join(", ")} />
                    <DetailRow label="Anno" value={game.details.releaseYear.toString()} />
                    <DetailRow label="Rating" value={game.details.rating.toString()} />
                    <DetailRow label="Sviluppatore" value={game.details.developer} />
                    <DetailRow label="Prezzo" value={game.details.price ? `${game.details.price}€` : "Free to Play"} />
                    <DetailRow label="Giocatori" value={game.details.players.join(", ")} />
                    <DetailRow label="Età consigliata" value={game.details.ageRating} />
                    <DetailRow label="Disponibilità" value={game.details.regionAvailability.join(", ")} />
                    <DetailRow label="Descrizione" value={game.details.description} />
                </div>

                <button
                    onClick={() => isFav ? removeFavorite(game.id) : addFavorite(game)}
                    className={`mt-6 w-full py-2 rounded transition-all text-sm font-medium tracking-wide ${isFav
                        ? "bg-yellow-400 text-gray-900 hover:bg-yellow-300"
                        : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900"
                        }`}
                >
                    {isFav ? "★ Rimuovi dai preferiti" : "☆ Aggiungi ai preferiti"}
                </button>
            </div>
            {context && (
                <div className="mt-12 max-w-5xl ">
                    <h2 className="text-2xl font-semibold mb-4 text-white">🎮 Giochi simili:</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {context.games
                            .filter(g => g.category === game.category && g.id !== game.id)
                            .slice(0, 3) // Limit to 3 similar games
                            .map(similar => (
                                <Link
                                    key={similar.id}
                                    to={`/games/${similar.id}`}
                                    className="bg-gray-900 p-4 rounded-lg hover:bg-gray-700 transition shadow flex flex-col"
                                >
                                    <img
                                        src={similar.coverImage}
                                        alt={similar.title}
                                        className="h-40 w-full object-cover rounded mb-3"
                                    />
                                    <h3 className="text-lg font-bold text-yellow-400 truncate">{similar.title}</h3>
                                    <p className="text-sm text-gray-300 truncate">{similar.details.platform.join(", ")}</p>
                                </Link>
                            ))}
                        {context.games.filter(g => g.category === game.category && g.id !== game.id).length === 0 && (
                            <p className="text-gray-400 col-span-full">Nessun altro gioco trovato in questa categoria.</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}