"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar"; // Adjust path to where your global Navbar is located

const NavbarWrapper = () => {
  const pathname = usePathname();

  // If the path starts with "/dashboard", do not render the global navbar
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return <Navbar />;
};

export default NavbarWrapper;