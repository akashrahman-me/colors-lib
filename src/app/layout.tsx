import React from "react";
import type { Metadata } from "next";
import "@/styles/main.css";
import { Lexend, Lexend_Exa, Roboto_Slab } from "next/font/google";
import Navbar from "@/components/globals/Navbar";

const lexend = Lexend({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-lexend",
});

const lexendExa = Lexend_Exa({
   subsets: ["latin"],
   weight: ["400", "500", "700"],
   variable: "--font-lexend-exa",
});

const robotoSlab = Roboto_Slab({
   subsets: ["latin"],
   weight: ["700", "800", "900"],
   variable: "--font-roboto-slab",
});

const fonts = [lexend, lexendExa, robotoSlab].map((font) => font.variable).join(" ");

export const metadata: Metadata = {
   title: "Contrast Ratio",
   description:
      "Measure the ratio between text and background colors for clear readability.",
   icons: "/favicon.svg",
   keywords: ["Contrast Ratio Checker", "Contrast Ratio", "Color contrast"],
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang="en">
         <body className={`${fonts} bg-[#F0F2F5]`}>
            <Navbar />
            {children}
         </body>
      </html>
   );
}

export default RootLayout;
