import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "WorldExplorer",
  description: "Portal de consulta de informações sobre países.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="logo">
              🌎 WorldExplorer
            </Link>

            <div className="nav-links">
              <Link href="/">Início</Link>
              <Link href="/sobre">Sobre</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}