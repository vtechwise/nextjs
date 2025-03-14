import React from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>this is the nav bar</nav>
        {children}
      </body>
    </html>
  );
}
