"use client";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="navbar-logo-container">
          <img src="/logo.png" alt="logo" className="navbar-logo" />
          <h1 className="navbar-title">TELESANA</h1>
        </div>
      </Link>
      <ul className="navbar-links">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/doctors">All Doctors</Link>
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

// src/components/Navbar.jsx
// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Import usePathname
// import "./Navbar.css";

// export default function Navbar() {
//   const pathname = usePathname();

//   // If the current path starts with "/dashboard", do not render this Navbar
//   if (pathname.startsWith("/dashboard")) {
//     return null;
//   }

//   return (
//     <nav className="navbar">
//       <div className="navbar-logo-container">
//         <img src="/logo.png" alt="logo" className="navbar-logo" />
//         <h1 className="navbar-title">TELESANA</h1>
//       </div>
//       <ul className="navbar-links">
//         <li><Link href="/home">Home</Link></li>
//         <li><Link href="/about">About</Link></li>
//         <li><Link href="/departments">All Doctors</Link></li>
//         <li><Link href="/faq">FAQ</Link></li>
//         <li><Link href="/contact">Contacts</Link></li>
//         {/* You might want to remove this if you have a dashboard */}
//         <li><Link href="/profile">MyProfile</Link></li> 
//       </ul>
//     </nav>
//   );
// }
