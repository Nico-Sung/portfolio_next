import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hkGrotesk = Hanken_Grotesk({
    variable: "--font-hk-grotesk",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "My personal portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${hkGrotesk.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
