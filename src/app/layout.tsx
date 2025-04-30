import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincen't guide to Enlisted vehicles",
  description: "This website is a guide for the armored vehicles in the game Enlisted. It includes information about the vehicles, their stats, and how to use them effectively in the game."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="This website is a guide for the armored vehicles in the game Enlisted. It includes information about the vehicles, their stats, and how to use them effectively in the game." />
        <meta name="keywords" content="Enlisted, vehicles, guide, armored vehicles, game, stats, information" />
        <meta name="author" content="Vincent" />
        <meta property="og:title" content="Vincent's guide to Enlisted vehicles" />
        <meta property="og:description" content="This website is a guide for the armored vehicles in the game Enlisted. It includes information about the vehicles, their stats, and how to use them effectively in the game." />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://enlisted-vehicles-guide.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Vincent's guide to Enlisted vehicles" />
      </head>
      <body>
        <div style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <header style={{ padding: '10px', maxHeight: '10vh', display: 'flex', justifyContent: 'space-between', background: '#eee', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1>Enlisted Vehicle Guide</h1>
              <nav style={{ marginTop: '1.5rem' }}>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/vehicles" id="vehicles">All vehicles</Link>
              </nav>
            </div>
            <img style={{ maxHeight: 'inherit', }} src="/logo.jpg" alt="logo" />
          </header>
          <main style={{ padding: '1rem', flex: 1 }}>
            {children}
          </main>
          <footer style={{
            paddingTop: '1rem',
            background: '#eee',
            width: '100%',
            textAlign: 'center',
          }}>
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: '2rem' }}>
              <p>This website is not affiliated with or endorsed by the game Enlisted.</p>
              <p>All trademarks and copyrights are the property of their respective owners.</p>
              <p>This website is for educational purposes only.</p>
              <p>The information provided on this website is for general informational purposes only.</p>
              <p>The author of this website is not responsible for any damage or loss of your vehicles whilst playing the game.</p>
              <p>The author if this website is not responsible for any lobbies you may annihilate with the knowledge found on this website</p>
              <p>© 2023 Vincent</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}