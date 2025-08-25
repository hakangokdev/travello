import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Abril_Fatface, Rubik, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const abrilFatface = Abril_Fatface({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Travello - Travel Agency",
  description: "Explore, Dream, Travel with Travello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${abrilFatface.variable} ${rubik.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
