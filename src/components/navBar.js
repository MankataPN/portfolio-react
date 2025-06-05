import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center px-5 py-3 bg-transparent fixed w-full h-16 sm:h-20 z-50">
      <div className="h-16 sm:h-20"></div>

      {/* Logo */}
      <h1>
        <Link className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white hover:transform hover:-translate-y-2 hover:bg-gray-200 hover:shadow-2xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50">
          Pearl N. Mankata
        </Link>
      </h1>

      {/* Menu Button */}
      <button
        className="block sm:hidden text-black p-2 bg-white rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-2xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {/* Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-[10vh] left-0 bg-white flex flex-col items-start gap-5 p-5 shadow-lg w-full sm:hidden">
          <li>
            <Link to="/" className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
              About Me
            </Link>
          </li>
          <li>
            <a
              href="/#features"
              className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
              Features
            </a>
          </li>
          <li>
            <a
              href="/#resume"
              className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
              Resume
            </a>
          </li>
          <li>
            <a
              href="/#portfolio"
              className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
              Contact Me
            </a>
          </li>
        </ul>
      )}

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex list-none gap-5">
        <li>
          <Link className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white hover:transform hover:-translate-y-2 hover:bg-gray-200 hover:shadow-2xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white hover:transform hover:-translate-y-2 hover:bg-gray-200 hover:shadow-2xl hover:text-white hover:bg-gradient-to-r hover:from-purple-500/60 hover:to-pink-500/50">
            About Me
          </Link>
        </li>
        <li>
          <a
            href="/#features"
            className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
            Features
          </a>
        </li>
        <li>
          <a
            href="/#resume"
            className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
            Resume
          </a>
        </li>
        <li>
          <a
            href="/#portfolio"
            className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
            Portfolio
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="text-black no-underline transition-all duration-300 shadow-lg px-4 py-2 rounded-lg bg-white-200 hover:bg-gray-300">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
