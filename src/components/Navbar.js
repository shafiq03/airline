import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import "../styles/Navbar.css";

const Navbar = () => {

  const { currentUser, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();

      alert("Logout Successful!");

      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };
  // State for mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/">SkyBook</Link>
      </div>

      {/* Navigation Links */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/flights"
            onClick={() => setMenuOpen(false)}
          >
            Flights
          </Link>
        </li>

        {/* Show only when logged in */}
        {currentUser && (
          <li>
            <Link
              to="/my-bookings"
              onClick={() => setMenuOpen(false)}
            >
              My Bookings
            </Link>
          </li>
        )}

        {/* If not logged in */}
        {!currentUser ? (
          <>
            <li>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
              >
                Register
              </Link>
            </li>
          </>
        ) : (
          <li>
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        )}
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;