import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiNodedotjs,
    SiExpress,
    SiPython,
    SiMysql,
    SiPrisma,
    SiTailwindcss,
    SiFigma,
} from "react-icons/si";

export default function Main() {
    const name = "NICOLAS".split("");
    const lastName = "SUNG".split("");
    const job = "Full Stack Developer".split("");

    // Technologies avec icônes et couleurs officielles
    const technologies = [
        { name: "HTML", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS", icon: SiCss3, color: "#1572B6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ];

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
                                WebkitTextStroke: "1px white",
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
                className="mt-8  inline-block"
            >
                <button className="px-4 py-2 text-white text-xs sm:text-xl  rounded border border-white hover:bg-white hover:text-black transition-colors duration-300">
                    Download my CV
                </button>
            </a>

            {/* Marquee dynamique avec icônes react-icons et couleurs */}
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

    // Auto-scroll infini
    useEffect(() => {
        const marquee = marqueeRef.current;
        let animationFrame: number;
        let scrollAmount = 1;

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

    // Drag to scroll
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

    // Double la liste pour l'effet infini
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
                                color: "#fff",
                                filter: `drop-shadow(0 0 8px ${tech.color}) drop-shadow(0 0 16px ${tech.color})`,
                                transition: "filter 0.3s",
                            }}
                        />
                        <span
                            className="text-xs font-bold mt-1"
                            style={{
                                color: "#fff",
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
