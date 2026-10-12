
import type { Metadata } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteDescription =
  "Freelance pixel artist creating characters, environments, UI and animations for indie games and retro-inspired projects. Available for commissions and collaborations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://noisechip.com"),

  title: "Noisechip",

  description: siteDescription,

  manifest: "/manifest.webmanifest",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      {
        url: "/icons/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icons/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
      {
        url: "/icons/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        type: "image/png",
        sizes: "180x180",
      },
    ],
  },

  openGraph: {
    type: "website",
    siteName: "Noisechip",
    title: "Noisechip",
    description: siteDescription,
    url: "/",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Noisechip - Retro-Inspired Pixel Art for Games",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Noisechip",
    description: siteDescription,
    images: ["/og-image.png"],
  },
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Header />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
