import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swash: The Pirate Roguelike",
  description: "Simple 2D pirate roguelike game made with Unity and WebGL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
