import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata = {
  title: "Telesana",
  description: "A Healthcare Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        
        {/* Header/Nav */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* Toast (optional) */}
        <Toaster position="top-right" reverseOrder={false} />
        <Footer/>
        {/* Footer */}
        {/* <footer className="text-center py-5 bg-gray-100 text-gray-600">
          <p>Telesana</p>
        </footer> */}
      </body>
    </html>
  );
}
