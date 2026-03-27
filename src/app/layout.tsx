import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Save Company — Brand Guidelines",
  description:
    "Single source of truth para identidade visual, tom de voz e padrões de design do ecossistema Save.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* IBM Plex Sans — Save Co, Partners, Educação, Save ID */}
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* Golos Text — Libr.ia principal */}
        <link
          href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Inter — Libr.ia apoio */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
