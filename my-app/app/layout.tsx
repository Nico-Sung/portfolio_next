import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import ScrollToTop from "../components/ScrollToTop";
import "./globals.css";

const hkGroteskWideExtraBold = localFont({
    src: [
        {
            path: "../public/fonts/HKGroteskWide-ExtraBold.otf",
        },
    ],
    variable: "--font-hk-grotesk-wide-extra-bold",
});

const hkGroteskWideRegular = localFont({
    src: [
        {
            path: "../public/fonts/HKGroteskWide-Regular.otf",
        },
    ],
    variable: "--font-hk-grotesk-wide-regular",
});

export const metadata: Metadata = {
    title: "Portfolio - Nicolas SUNG",
    description: "My personal portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${hkGroteskWideRegular.variable} ${hkGroteskWideExtraBold.variable} antialiased`}
            >
                {children}
                <ScrollToTop />
                <Analytics />
            </body>
        </html>
    );
}
