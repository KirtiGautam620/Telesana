import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
const inter = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: "Telesana",
  description: "A Healthcare Management System ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <main style={{minHeight: "100vh"}}> {children}</main>
        <Toaster position="top-right" reverseOrder={false} />

       {/* footer */}
       <footer>
        <div>
          <p>Telesana</p>
        </div>
       </footer>
      </body>
    </html>
  );
}
