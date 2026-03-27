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
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
