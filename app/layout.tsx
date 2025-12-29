import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import "@/lib/fontawesome";

/* Fonts */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "CodeWeave Studio",
  description: "Building modern websites and academic projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} antialiased min-h-screen flex flex-col`}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
