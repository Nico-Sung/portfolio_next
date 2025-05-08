import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);

        const handleThemeChange = () => {
            const newTheme = localStorage.getItem("theme") || "dark";
            setTheme(newTheme);
        };

        window.addEventListener("storage", handleThemeChange);
        return () => window.removeEventListener("storage", handleThemeChange);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const handleScroll = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 p-4 md:py-2 md:px-6 backdrop-blur-md z-[9998]"
        >
            <div className="flex items-center justify-between w-full">
                {/* Logo à gauche, toujours visible */}
                <Image
                    src={theme === "dark" ? "/logo.svg" : "/logo-dark.svg"}
                    alt="Logo"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20"
                />
                {/* Nav desktop */}
                <nav
                    className={`space-x-4 md:space-x-6 text-sm md:text-lg items-center hidden md:flex ${
                        theme === "dark" ? "text-white" : "text-black"
                    }`}
                >
                    <a
                        href="#about-me"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("about-me");
                        }}
                        className="hover:text-gray-400 z-50"
                    >
                        about me
                    </a>
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-current rounded-lg"></div>
                    <a
                        href="#skills"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("skills");
                        }}
                        className="hover:text-gray-400 z-50"
                    >
                        skills
                    </a>
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-current rounded-lg"></div>
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("projects");
                        }}
                        className="hover:text-gray-400 z-50"
                    >
                        projects
                    </a>
                    <div className="w-1 h-1 md:w-2 md:h-2 bg-current rounded-lg"></div>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            handleScroll("contact");
                        }}
                        className="hover:text-gray-400 z-50"
                    >
                        contact
                    </a>
                    <ThemeToggle />
                </nav>
                {/* ThemeToggle mobile */}
                <div className="block md:hidden">
                    <ThemeToggle />
                </div>
            </div>
        </motion.header>
    );
}
