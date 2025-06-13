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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks: NavLinkItem[] = [
    { path: "/", title: "Giochi" },
    { path: "/add", title: "Aggiungi un gioco" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-gray-950/80 shadow-md z-50 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink
            to="/"
            className="text-white font-bold text-2xl tracking-wide select-none hover:text-yellow-400 transition duration-200"
          >
            Games Hub <span className="text-yellow-400">👾</span>
          </NavLink>

          {/* Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-300 hover:text-yellow-400 transition duration-200 focus:outline-none"
          >
            ☰
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400 transition duration-200"
                }
              >
                {link.title}
              </NavLink>
            ))}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-300 hover:text-yellow-400 transition duration-200"
            >
              ⭐ Preferiti
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 bg-gray-950 border-t border-gray-800">
            <div className="flex flex-row justify-end space-x-4 mt-2 text-sm font-medium">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400 transition duration-200"
                  }
                >
                  {link.title}
                </NavLink>
              ))}
              <button
                onClick={() => {
                  setIsSidebarOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="text-gray-300 hover:text-yellow-400 transition duration-200"
              >
                ⭐ Preferiti
              </button>
            </div>
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