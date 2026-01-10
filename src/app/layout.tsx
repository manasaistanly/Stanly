
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Manasai Stanly J | Full-Stack Developer & AI Enthusiast",
  description: "Portfolio of Manasai Stanly J, a Computer Science Engineering Student specializing in Full-Stack Development and AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
