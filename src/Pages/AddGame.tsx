import { useState, useMemo, useContext, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Context/GlobalContext";

// Constants for options
const PEGI_OPTIONS = ["PEGI 7", "PEGI 12", "PEGI 16", "PEGI 18"];
const REGION_OPTIONS = ["NA", "EU", "ASIA"];
const PLAYER_OPTIONS = ["Single Player", "Multiplayer", "Co-op"];
const CATEGORY_OPTIONS = ["Action-Adventure", "Battle Royale", "MOBA", "Party", "RPG", "Sandbox", " FPS", "Roguelike", "Simulation", "Sports", "Platform", "Survival Horror", "Metroidvania", "Shooter", "Survival", "Co-op"];
const PLATFORM_OPTIONS = ["Mobile", "PC", "PS4", "PS5", "Switch", "Xbox One", "Xbox Series"];

export function AddGame() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [players, setPlayers] = useState<string[]>([]);
    const [platform, setPlatform] = useState<string[]>([]);
    const [releaseYear, setReleaseYear] = useState("");
    const [rating, setRating] = useState("");
    const [developer, setDeveloper] = useState("");
    const [price, setPrice] = useState("");
    const [ageRating, setAgeRating] = useState("");
    const [regionAvailability, setRegionAvailability] = useState<string[]>([]);
    const [description, setDescription] = useState("");

    // Context to access global state
    const context = useContext(GlobalContext);
    if (!context) {
        return <div>Errore</div>;
    }
    const { addGame } = context;

    const navigate = useNavigate();

    // Validation for title
    // Using useMemo to optimize performance by memoizing the validation result
    const titleError = useMemo(() => {
        if (!title.trim()) return "Il titolo non può essere vuoto.";
        const invalidChars = /[!@#$%^&*()_+={}[\]:;"'<>,.?\\|`~]/;
        if (invalidChars.test(title)) return "Il titolo non può contenere simboli speciali.";
        return "";
    }, [title]);

    // Validation for developer
    const developerError = useMemo(() => (!developer.trim() ? "Il nome dello sviluppatore è obbligatorio." : ""), [developer]);

    // Validation for rating
    const ratingError = useMemo(() => {
        const num = Number(rating);
        if (!rating) return "Il rating è obbligatorio.";
        if (num < 1 || num > 10) return "Il rating deve essere tra 1 e 10.";
        return "";
    }, [rating]);

    // Validation for price
    const priceError = useMemo(() => {
        const num = Number(price);
        if (price === "") return "Il prezzo è obbligatorio.";
        if (num < 0) return "Il prezzo non può essere negativo.";
        return "";
    }, [price]);

    // Validation for release year
    const releaseYearError = useMemo(() => {
        const year = Number(releaseYear);
        if (!releaseYear) return "L'anno di uscita è obbligatorio.";
        if (year < 1970 || year > 2030) return "L'anno deve essere tra 1970 e 2030.";
        return "";
    }, [releaseYear]);

    // Validation for description
    const descriptionError = useMemo(() => (!description.trim() ? "La descrizione è obbligatoria." : ""), [description]);

    // Validation for the form, checking if all required fields are valid
    const formValid = ![
        titleError,
        developerError,
        ratingError,
        priceError,
        releaseYearError,
        descriptionError,
    ].some(Boolean);

    // Function to format text: trim and capitalize first letter
    const formatText = (text: string) => text.trim().replace(/^(\w)/, (_, c) => c.toUpperCase());

    // Function to handle form submission
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!formValid) return;

        const newGame = {
            title: formatText(title),
            category,
            coverImage: "/CoverImage/placeholder.png",
            details: {
                platform,
                releaseYear: Number(releaseYear),
                rating: Number(rating),
                developer: formatText(developer),
                price: Number(price),
                players,
                ageRating,
                regionAvailability,
                description: formatText(description),
            },
        };

        addGame(newGame);
        alert("Gioco aggiunto con successo!");
        navigate("/");
    };

    // Function to handle checkbox changes for platforms, players and regions
    const handleCheckboxChange = (
        value: string,
        list: string[],
        setList: (list: string[]) => void
    ) => {
        if (list.includes(value)) {
            setList(list.filter((item) => item !== value));
        } else {
            setList([...list, value]);
        }
    };

    return (
        <div className="text-white text-center mt-10 px-4 pt-10">
            <h1 className="text-3xl font-bold mb-3">Aggiungi un nuovo gioco</h1>
            <p className="text-yellow-400 mb-6">* I campi con l'asterisco sono obbligatori</p>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-900 p-6 rounded-md shadow-lg text-left space-y-5">
                {/* Title */}
                <div>
                    <label htmlFor="title" className="block mb-1 font-semibold">Titolo *</label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                    {titleError && <p className="text-red-500 text-sm mt-1">{titleError}</p>}
                </div>

                {/* Category */}
                <div>
                    <label htmlFor="category" className="block mb-1 font-semibold">Categoria</label>
                    <select
                        id="category"
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Seleziona una categoria</option>
                        {CATEGORY_OPTIONS.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                {/* Platform */}
                <fieldset>
                    <legend className="font-semibold mb-2">Piattaforme</legend>
                    <div className="flex flex-wrap gap-4">
                        {PLATFORM_OPTIONS.map(opt => (
                            <label key={opt} className="inline-flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={platform.includes(opt)}
                                    onChange={() => handleCheckboxChange(opt, platform, setPlatform)}
                                    className="form-checkbox text-blue-500"
                                />
                                <span>{opt}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Release year */}
                <div>
                    <label htmlFor="releaseYear" className="block mb-1 font-semibold">Anno di uscita *</label>
                    <input
                        id="releaseYear"
                        type="number"
                        value={releaseYear}
                        onChange={e => setReleaseYear(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                    {releaseYearError && <p className="text-red-500 text-sm mt-1">{releaseYearError}</p>}
                </div>

                {/* Rating */}
                <div>
                    <label htmlFor="rating" className="block mb-1 font-semibold">Rating (1-10) *</label>
                    <input
                        id="rating"
                        type="number"
                        min={1}
                        max={10}
                        value={rating}
                        onChange={e => setRating(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                    {ratingError && <p className="text-red-500 text-sm mt-1">{ratingError}</p>}
                </div>

                {/* Developer */}
                <div>
                    <label htmlFor="developer" className="block mb-1 font-semibold">Sviluppatore *</label>
                    <input
                        id="developer"
                        type="text"
                        value={developer}
                        onChange={e => setDeveloper(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                    {developerError && <p className="text-red-500 text-sm mt-1">{developerError}</p>}
                </div>

                {/* Price */}
                <div>
                    <label htmlFor="price" className="block mb-1 font-semibold">Prezzo (€) *</label>
                    <input
                        id="price"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                        step="0.01"
                        min="0"
                    />
                    {priceError && <p className="text-red-500 text-sm mt-1">{priceError}</p>}
                </div>

                {/* Players */}
                <fieldset>
                    <legend className="font-semibold mb-2">Tipologia Giocatori</legend>
                    <div className="flex flex-wrap gap-4">
                        {PLAYER_OPTIONS.map(opt => (
                            <label key={opt} className="inline-flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={players.includes(opt)}
                                    onChange={() => handleCheckboxChange(opt, players, setPlayers)}
                                    className="form-checkbox text-blue-500"
                                />
                                <span>{opt}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* PEGI */}
                <div>
                    <label htmlFor="ageRating" className="block mb-1 font-semibold">Classificazione PEGI *</label>
                    <select
                        id="ageRating"
                        value={ageRating}
                        onChange={e => setAgeRating(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    >
                        <option value="">Seleziona una classificazione</option>
                        {PEGI_OPTIONS.map(opt => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </select>
                </div>

                {/* Region */}
                <fieldset>
                    <legend className="font-semibold mb-2">Regioni Disponibili</legend>
                    <div className="flex flex-wrap gap-4">
                        {REGION_OPTIONS.map(opt => (
                            <label key={opt} className="inline-flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={regionAvailability.includes(opt)}
                                    onChange={() => handleCheckboxChange(opt, regionAvailability, setRegionAvailability)}
                                    className="form-checkbox text-blue-500"
                                />
                                <span>{opt}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block mb-1 font-semibold">Descrizione *</label>
                    <textarea
                        id="description"
                        rows={4}
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="w-full rounded border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:border-blue-500"
                    />
                    {descriptionError && <p className="text-red-500 text-sm mt-1">{descriptionError}</p>}
                </div>

                <button
                    type="submit"
                    disabled={!formValid}
                    className="mt-4 w-full rounded bg-blue-600 py-2 font-semibold hover:bg-blue-700 disabled:opacity-50"
                >
                    Aggiungi gioco
                </button>
            </form>
        </div>
    );
}