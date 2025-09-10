import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="brand"></div>
      <nav className="navlinks">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}
