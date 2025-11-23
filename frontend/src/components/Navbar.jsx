"use client";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src="/logo.png" alt="logo" className="navbar-logo" />
        <h1 className="navbar-title">TELESANA</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/departments">Doctor's</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
        <li>
          <Link href="/contact">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
