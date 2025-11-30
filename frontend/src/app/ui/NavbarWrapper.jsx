"use client";
import { usePathname } from "next/navigation";
import Navbar from "../../components/Navbar"; 

const NavbarWrapper = () => {
  const pathname = usePathname();

 
  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  return <Navbar />;
};

export default NavbarWrapper;