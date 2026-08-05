import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRecycle, FaBars, FaTimes } from "react-icons/fa";
import "../../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar-custom">
      <div className="nav-container">

        {/* Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <FaRecycle className="logo-icon" />
          <span>Smart Swachhata</span>
        </Link>

        {/* Navigation */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>

          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>

          <li>
            <a href="#features" onClick={closeMenu}>
              Features
            </a>
          </li>

          <li>
            <Link to="/dashboard" onClick={closeMenu}>
              Dashboard
            </Link>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          {/* Login Button */}
          <li>
            <Link
              to="/login"
              className="login-btn"
              onClick={closeMenu}
            >
              Login
            </Link>
          </li>

        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;