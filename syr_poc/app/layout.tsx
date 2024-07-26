import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button } from "@/components/ui/button";
import NavButton from "@/components/navButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SyR Proof of Concept",
  description: "the basics to test how the population react to the solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v3.5.2/mapbox-gl.css' rel='stylesheet' />
      </head>
      <body className={inter.className + ' flex flex-col min-h-[100vh]'}>
        <header className="relative flex justify-end my-3 mx-[2%] lg:mx-[5%]">
          <div className="absolute w-full top-[0.5rem] mx-auto text-center">
            SyR - Logo
          </div>
          <nav className="flex self-end">
            <NavButton />
          </nav>
        </header>
        <main className="flex-grow mx-[2%] lg:mx-[5%]">
          {children}
        </main>
        <footer className="m-auto px-[2%] lg:px-[5%] py-3">
          Syr
        </footer>
      </body>
    </html>
  );
}
