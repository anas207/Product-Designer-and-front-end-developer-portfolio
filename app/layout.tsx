import type { Metadata } from "next";
import "@fontsource/archivo/400.css";
import "@fontsource/archivo/500.css";
import "@fontsource/archivo/600.css";
import "@fontsource/archivo/700.css";
import "./globals.css";
import Navbar from "@/app/Components/navbar";
import Footer from "@/app/Components/Footer";

export const metadata: Metadata = {
  title: "Muhammad Anas | Product Designer & Frontend Developer",
  description: "Portfolio of Muhammad Anas - Product Designer and Frontend Developer",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-archivo antialiased bg-white text-neutral-900">
        <Navbar />
        {children}
        <Footer />
      </body>

    </html>
  );
}
