import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                grotesk: ["HK Grotesk Wide", "sans-serif"],
                groteskWideExtraBold: [
                    "var(--font-hk-grotesk-wide-extra-bold)",
                ],
                groteskWideRegular: ["var(--font-hk-grotesk-wide-regular)"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
        },
    },
    plugins: [],
} satisfies Config;
