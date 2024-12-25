import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
        padding: "10px 20px",
      }}
    >
      <div className="container-fluid">
        {/* Brand Name */}
        <Link className="navbar-brand text-white fw-bold" to="/">
          TalentConnect
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/jobs">
                Job Listings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/profile">
                Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
