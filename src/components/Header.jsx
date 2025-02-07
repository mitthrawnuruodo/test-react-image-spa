//import React, { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="nav-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo" className="test" />
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/amiibos" onClick={() => setMenuOpen(false)}>Amiibos</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;