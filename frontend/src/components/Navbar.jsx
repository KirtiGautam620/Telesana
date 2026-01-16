"use client";
import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/doctors", label: "All Doctors" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contacts" },
  ];

  return (
    <>
      <nav className="navbar">
        <Link href="/" style={{ textDecoration: 'none' }} onClick={closeMobileMenu}>
          <div className="navbar-logo-container">
            <img src="/logo.png" alt="logo" className="navbar-logo" />
            <h1 className="navbar-title">TELESANA</h1>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <ul className="mobile-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={closeMobileMenu}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

