import { Inter } from "next/font/google";
import "./ui/globals.css";

import NavbarWrapper from "./ui/NavbarWrapper";
import ConditionalFooter from "../components/ConditionalFooter";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Telesana",
  description: "A Healthcare Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      
        <NavbarWrapper />

        <main>{children}</main>

        <ConditionalFooter />
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}