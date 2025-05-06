import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { User, Layers, Briefcase, Mail, Folder } from "lucide-react";
import handleScroll from "../utils/handleScroll";

export default function BottomNavigation() {
    const [active, setActive] = useState("home");

    const navItems = [
        { id: "about-me", icon: <User />, label: "About" },
        { id: "experiences", icon: <Briefcase />, label: "Exp" },
        { id: "skills", icon: <Layers />, label: "Skills" },
        { id: "1", icon: <Folder />, label: "Projects" },
        { id: "contact", icon: <Mail />, label: "Contact" },
    ];

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
    }, []);

    return (
        <nav className="fixed bottom-6 left-0 right-0 bg-zinc-900 opacity-95 mx-8 rounded-full text-white flex justify-around items-center py-3 md:hidden shadow-lg z-[9999] ">
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
