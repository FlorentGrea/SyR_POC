import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavButton from "@/components/navButton";
import Link from "next/link";

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
        <header className="sticky flex justify-end top-0 py-2 mx-[2%] lg:mx-[5%] z-50 bg-white">
          <Link href='/' className="flex-grow m-auto text-xl sm:text-2xl font-bold text-macaroni-and-cheese-950">
            SYR - POC
          </Link>
          <nav className="relative flex self-end">
            <NavButton />
          </nav>
        </header>
        <hr className="sticky top-14 w-full mb-2 shadow"/>
        <main className="flex-grow mx-[2%] lg:mx-[5%]">
          {children}
        </main>
      </body>
    </html>
  );
}
