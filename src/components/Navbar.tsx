"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../styles/navbar.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link href="/">My Portfolio</Link>
        </div>

        <nav className="navbar-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button
          className="navbar-toggle"
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          <nav>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
