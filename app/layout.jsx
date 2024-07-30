import { Inter } from "next/font/google";
import "./globals.css";
import About from "./about/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gilbert kutoto",
  description: "Designed and Developed by Gilbert Kutoto.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <About />
      </body>
    </html>
  );
}
