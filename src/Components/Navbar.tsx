import { useState } from "react";
import { NavLink } from "react-router-dom";
// Components
import FavoritesSidebar from "./FavoritesSidebar";

// Interface is used to define the structure of the navigation links
interface NavLinkItem {
  path: string;
  title: string;
}

export default function NavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLinkItem[] = [
    { path: "/", title: "Giochi" },
    { path: "/add", title: "Aggiungi un gioco" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
    closeMobileMenu(); // Close mobile menu when opening sidebar
  };

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-950/80 shadow-md z-50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <NavLink
              to="/"
              className="text-white font-bold text-2xl tracking-wide select-none hover:text-yellow-400 transition duration-200"
            >
              Games Hub <span className="text-yellow-400">👾</span>
            </NavLink>

            {/* Desktop Menu */}
            <ul className="hidden sm:flex space-x-6 items-center text-sm font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400 transition duration-200"
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={openSidebar}
                  className="text-gray-300 hover:text-yellow-400 transition duration-200 focus:outline-none px-2 py-1 rounded"
                >
                  ⭐ Preferiti
                </button>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <div className="sm:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-300 text-2xl focus:outline-none"
              >
                {isMobileMenuOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden bg-gray-900 border-t border-gray-800">
            <ul className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-400"
                        : "text-gray-300 hover:text-yellow-400 transition duration-200"
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
              <li>
                <button
                  onClick={openSidebar}
                  className="text-gray-300 hover:text-yellow-400 transition duration-200 focus:outline-none"
                >
                  ⭐ Preferiti
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Overlay Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      <FavoritesSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}