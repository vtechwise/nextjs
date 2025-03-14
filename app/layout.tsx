import React from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Inter, Inconsolata } from "next/font/google";
import { title } from "process";
import type { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata:Metadata = {
  title: 'My Next.js App',
  description: 'A next.js project with Typescript and Tailwind CSS',
  keywords:'Next.js , typescript , tailwindcss'
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        <Navbar />
        <main className="max-w-3xl mx-auto py-10 px-6">{children}</main>
      </body>
    </html>
  );
}
