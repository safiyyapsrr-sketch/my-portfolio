import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const title = `${profile.name} | Computer Science & Technology student`;
const description =
  "Portfolio of Safiyya Muhsina M, a Computer Science and Technology student exploring technology, product, business, marketing and project management. Projects, internship, hackathons and leadership.";

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  keywords: [
    "Safiyya Muhsina M",
    "portfolio",
    "Computer Science and Technology",
    "web developer intern",
    "product",
    "project management",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title,
    description,
    siteName: profile.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0e0d0c" },
    { media: "(prefers-color-scheme: light)", color: "#f4efe6" },
  ],
};

/**
 * Runs before first paint so the saved (or system) theme is applied without a flash.
 * It also adds the "js" class that enables scroll-reveal styles.
 */
const themeScript = `(function(){var d=document.documentElement;var t=null;try{t=localStorage.getItem("theme")}catch(e){}if(t!=="light"&&t!=="dark"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}d.setAttribute("data-theme",t);d.classList.add("js")})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrument.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
