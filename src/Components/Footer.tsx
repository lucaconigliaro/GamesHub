export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 text-sm py-6 mt-20 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-center sm:text-left">
                    © 2025 GamesHub 👾 — Tutti i diritti riservati
                </p>

                <div className="flex gap-4 text-xs">
                    <a href="#" className="hover:text-yellow-400 transition">Privacy</a>
                    <a href="#" className="hover:text-yellow-400 transition">Termini</a>
                    <a href="#" className="hover:text-yellow-400 transition">Contatti</a>
                </div>
            </div>
        </footer>
    );
}