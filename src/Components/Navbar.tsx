import { useState } from "react";
import { NavLink } from "react-router-dom";
// Component
import FavoritesSidebar from "./FavoritesSidebar";

// Interface is used to define the structure of the navigation links
interface NavLinkItem {
  path: string;
  title: string;
}

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const navLinks: NavLinkItem[] = [
    { path: "/", title: "Giochi" },
    { path: "/add", title: "Aggiungi un gioco" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-950/80 shadow-md z-50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink
              to="/"
              className="text-white font-bold text-2xl tracking-wide select-none hover:text-yellow-400 transition duration-200"
            >
              Games Hub <span className="text-yellow-400">👾</span>
            </NavLink>

            <ul className="flex space-x-6 items-center text-sm font-medium">
              {navLinks.map((curLink, index) => (
                <li key={index}>
                  <NavLink
                    to={curLink.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400 transition duration-200"
                    }
                  >
                    {curLink.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={openSidebar}
                  className="text-gray-300 hover:text-yellow-400 transition duration-200 focus:outline-none px-2 py-1 rounded"
                  type="button"
                >
                  ⭐ Preferiti
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {
        isSidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-60" onClick={closeSidebar} />
        )
      }

      <FavoritesSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}