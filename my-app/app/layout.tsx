import type { Metadata } from "next";
import { Hanken_Grotesk, Source_Code_Pro } from "next/font/google";
import "./globals.css";

const hkGrotesk = Hanken_Grotesk({
    variable: "--font-hk-grotesk",
    subsets: ["latin"],
});

const sourceCodePro = Source_Code_Pro({
    variable: "--font-source-code-pro",
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
