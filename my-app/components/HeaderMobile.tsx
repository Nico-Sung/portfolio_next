import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { User, Layers, Briefcase, Mail, Folder } from "lucide-react";
import handleScroll from "../utils/handleScroll";

export default function BottomNavigation() {
    const [active, setActive] = useState("home");
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

    const navItems = useMemo(
        () => [
            { id: "about-me", icon: <User />, label: "About" },
            { id: "experiences", icon: <Briefcase />, label: "Exp" },
            { id: "skills", icon: <Layers />, label: "Skills" },
            { id: "1", icon: <Folder />, label: "Projects" },
            { id: "contact", icon: <Mail />, label: "Contact" },
        ],
        []
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [navItems]);

    return (
        <nav
            className={`fixed bottom-6 left-0 right-0 bg-black/20 backdrop-blur-sm mx-8 rounded-full flex justify-around items-center py-3 md:hidden shadow-lg z-[9999] ${
                theme === "dark" ? "text-white" : "text-black"
            }`}
        >
            {navItems.map((item) => (
                <motion.button
                    key={item.id}
                    className={`flex flex-col items-center gap-1 p-2 transition ${
                        active === item.id ? "text-[#52E7D6]" : "text-gray-400"
                    }`}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        handleScroll(
                            e as unknown as React.MouseEvent<HTMLAnchorElement>,
                            item.id
                        );
                        setActive(item.id);
                    }}
                >
                    <motion.div
                        animate={{ y: active === item.id ? -5 : 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                    >
                        {item.icon}
                    </motion.div>
                    <span className="text-xs">{item.label}</span>
                </motion.button>
            ))}
        </nav>
    );
}
