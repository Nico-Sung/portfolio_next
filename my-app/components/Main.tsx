import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
    FaCode,
    FaServer,
    FaLayerGroup,
    FaDatabase,
    FaTools,
    FaPalette,
    FaMobileAlt,
    FaFileCode,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaPython,
    FaNetworkWired,
} from "react-icons/fa";

export default function Main() {
    const name = "NICOLAS".split("");
    const lastName = "SUNG".split("");
    const job = "Full Stack Developer".split("");
    const [theme, setTheme] = useState("dark");

    const technologies = [
        { name: "#Frontend", icon: FaCode, color: "#61DAFB" },
        { name: "#Backend", icon: FaServer, color: "#339933" },
        { name: "#Full Stack", icon: FaLayerGroup, color: "#000000" },
        { name: "#API", icon: FaNetworkWired, color: "#000000" },
        { name: "#Database", icon: FaDatabase, color: "#4479A1" },
        { name: "#ORM", icon: FaTools, color: "#2D3748" },
        { name: "#UI/UX", icon: FaPalette, color: "#F24E1E" },
        { name: "#Responsive", icon: FaMobileAlt, color: "#06B6D4" },
        { name: "#TypeScript", icon: FaFileCode, color: "#3178C6" },
        { name: "#JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "#HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "#CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "#Python", icon: FaPython, color: "#3776AB" },
    ];

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

    return (
        <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-64 lg:min-h-screen relative "
        >
            <div>
                <div>
                    {name.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: i / 10,
                            }}
                            key={i}
                            className="text-6xl sm:text-9xl lg:text-9xl"
                            style={{
                                fontFamily:
                                    "var(--font-hk-grotesk-wide-extra-bold )",
                            }}
                        >
                            {el}
                        </motion.span>
                    ))}
                </div>
                <div>
                    {lastName.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: (name.length + i) / 10,
                            }}
                            key={i}
                            className="text-6xl sm:text-9xl lg:text-9xl "
                            style={{
                                WebkitTextStroke: "1px var(--stroke-color)",
                                color: "transparent",
                                fontFamily:
                                    "var(--font-hk-grotesk-wide-extra-bold )",
                            }}
                        >
                            {el}
                        </motion.span>
                    ))}
                </div>
                <div>
                    {job.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.01,
                                delay: (name.length + i) / 10,
                            }}
                            key={i}
                            className="text-10 sm:text-2xl lg:text-2xl  mt-4 "
                        >
                            {el}
                        </motion.span>
                    ))}
                </div>
            </div>

            <a
                href="/CV Nicolas 2024.pdf"
                download
                className="mt-8 mb-16 inline-block"
            >
                <button
                    className={`px-4 py-2 text-current text-xs sm:text-xl rounded border border-current transition-colors duration-300 ${
                        theme === "dark"
                            ? "hover:bg-white hover:text-black"
                            : "hover:bg-black hover:text-white"
                    }`}
                >
                    Download my CV
                </button>
            </a>
            <InfiniteMarquee technologies={technologies} />
        </motion.section>
    );
}

function InfiniteMarquee({
    technologies,
}: {
    technologies: { name: string; icon: React.ElementType; color: string }[];
}) {
    const marqueeRef = useRef<HTMLDivElement | null>(null);
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

    useEffect(() => {
        const marquee = marqueeRef.current;
        let animationFrame: number;
        const scrollAmount = 1;

        function animate() {
            if (!marquee) return;
            marquee.scrollLeft += scrollAmount;
            if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
                marquee.scrollLeft = 0;
            }
            animationFrame = requestAnimationFrame(animate);
        }
        animate();
        return () => cancelAnimationFrame(animationFrame);
    }, []);

    useEffect(() => {
        const marquee = marqueeRef.current;
        let isDown = false;
        let startX = 0,
            scrollLeft = 0;

        function handleDown(e: MouseEvent) {
            if (!marquee) return;
            isDown = true;
            startX = e.pageX - marquee.offsetLeft;
            scrollLeft = marquee.scrollLeft;
        }
        function handleLeave() {
            isDown = false;
        }
        function handleUp() {
            isDown = false;
        }
        function handleMove(e: MouseEvent) {
            if (!isDown || !marquee) return;
            e.preventDefault();
            const x = e.pageX - marquee.offsetLeft;
            const walk = (x - startX) * 2;
            marquee.scrollLeft = scrollLeft - walk;
        }

        if (!marquee) return;
        marquee.addEventListener("mousedown", handleDown);
        marquee.addEventListener("mouseleave", handleLeave);
        marquee.addEventListener("mouseup", handleUp);
        marquee.addEventListener("mousemove", handleMove);

        return () => {
            marquee.removeEventListener("mousedown", handleDown);
            marquee.removeEventListener("mouseleave", handleLeave);
            marquee.removeEventListener("mouseup", handleUp);
            marquee.removeEventListener("mousemove", handleMove);
        };
    }, []);

    const items = [...technologies, ...technologies];

    return (
        <div
            ref={marqueeRef}
            className="w-full overflow-x-scroll whitespace-nowrap cursor-grab select-none py-8 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
        >
            {items.map((tech, i) => {
                const Icon = tech.icon;
                return (
                    <span
                        key={tech.name + i}
                        className="inline-flex flex-col items-center justify-center mx-8"
                    >
                        <Icon
                            className="text-4xl mb-2"
                            style={{
                                color: theme === "dark" ? "#fff" : "#2563eb",
                                filter:
                                    theme === "dark"
                                        ? `drop-shadow(0 0 8px ${tech.color}) drop-shadow(0 0 16px ${tech.color})`
                                        : `drop-shadow(0 0 4px ${tech.color}40) drop-shadow(0 0 8px ${tech.color}40)`,
                                transition: "filter 0.3s",
                            }}
                        />
                        <span
                            className="text-xs font-bold mt-1"
                            style={{
                                color: theme === "dark" ? "#fff" : "#2563eb",
                                filter: "none",
                                transition: "filter 0.3s",
                            }}
                        >
                            {tech.name}
                        </span>
                    </span>
                );
            })}
        </div>
    );
}
