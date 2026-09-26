import type { Metadata } from "next";
import Header from "@/components/layout/Header/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noisechip",
  description: "Retro-inspired pixel art for games.",
};

const themeScript = `
  (() => {
    try {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme === "light" || storedTheme === "dark") {
        document.documentElement.dataset.theme = storedTheme;
      }
    } catch {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Header />

        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}