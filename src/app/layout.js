import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lenir Mendes Rodrigues | Psicóloga",
  description: "Lenir Mendes Rodrigues | Psicóloga",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
