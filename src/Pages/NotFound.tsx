import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white px-4">
            <div className="text-center max-w-md">
                <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
                <p className="text-xl mb-6">Oops! Pagina non trovata.</p>
                <p className="text-gray-400 mb-8">
                    La pagina che stai cercando non esiste o è stata rimossa.
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