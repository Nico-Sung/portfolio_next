import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hkGroteskWide = localFont({
    src: [
        {
            path: "../public/fonts/HKGroteskWide-Black.otf",
        },
        {
            path: "../public/fonts/HKGroteskWide-Bold.otf",
        },
        {
            path: "../public/fonts/HKGroteskWide-ExtraBold.otf",
        },
        {
            path: "../public/fonts/HKGroteskWide-Light.otf",
        },
        {
            path: "../public/fonts/HKGroteskWide-Medium.otf",
        },
        {
            path: "../public/fonts/HKGroteskWide-Regular.otf",
        },
        {
            path: "../public/fonts/HKGroteskWide-SemiBold.otf",
        },
    ],
    variable: "--font-hk-grotesk-wide",
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
            <body className={`${hkGroteskWide.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
