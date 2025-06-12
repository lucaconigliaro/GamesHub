import React, { useEffect, useState } from "react";
// Type
import type { Game } from "../Types/Game";

// Interface is used to define the structure of the props passed to the Carousel component
interface CarouselProps {
    games: Game[];
}

const Carousel = ({ games }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const step = 2; // Show 2 games at a time

    // Change the current index every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + step) % games.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [games.length]);

    if (games.length === 0) {
        return <p className="text-white text-center py-6">Nessun gioco disponibile</p>;
    }

    // Calculate the visible games based on the current index
    const visibleGames = [
        games[currentIndex],
        games[(currentIndex + 1) % games.length],
    ];

    return (
        <div className="relative overflow-hidden rounded-xl shadow-lg w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                {visibleGames.map((game) => (
                    <div
                        key={game.id}
                        className="relative rounded-lg overflow-hidden shadow bg-black"
                    >
                        <img
                            src={game.coverImage}
                            alt={game.title}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-60 p-4 flex flex-col justify-between text-white">
                            <div>
                                <h3
                                    className="text-lg font-bold truncate"
                                    title={game.title}
                                >
                                    {game.title}
                                </h3>
                                <p
                                    className="mt-1 text-sm text-gray-300 line-clamp-2"
                                    title={game.details.description}
                                >
                                    {game.details.description}
                                </p>
                            </div>

                            <div className="flex justify-between items-center mt-3">
                                <span className="text-yellow-400 font-semibold text-xs">
                                    Rating: {game.details.rating} / 10
                                </span>
                                <a
                                    href={`/games/${game.id}`}
                                    className="text-xs px-2 py-1 rounded border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-200 transform hover:scale-105"
                                >
                                    Dettagli
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
                {Array.from({ length: Math.ceil(games.length / step) }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx * step)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === idx * step ? "bg-yellow-400" : "bg-gray-600"
                            }`}
                        aria-label={`Vai alla slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default React.memo(Carousel);