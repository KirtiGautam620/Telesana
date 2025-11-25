// import { Inter } from "next/font/google";
// import "./ui/globals.css";
// import Navbar from "@/components/Navbar"; // Ensure this import is here
// import { Toaster } from "react-hot-toast";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Telesana",
//   description: "A Healthcare Management System",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
        
//         {/* Uncommented the Navbar below */}
//         <Navbar />

//         <main>{children}</main>
//         <Toaster position="top-right" reverseOrder={false} />
//       </body>
//     </html>
//   );
// }
import { Inter } from "next/font/google";
import "./ui/globals.css";
// import Navbar from "@/components/Navbar"; <--- REMOVE THIS
import NavbarWrapper from "./ui/NavbarWrapper"; // <--- ADD THIS
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
        
        {/* Use the wrapper instead of the direct component */}
        <NavbarWrapper />

        <main>{children}</main>
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}