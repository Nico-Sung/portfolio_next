import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const webDevelopmentSkills = [
    {
        name: "HTML",
        icon: "/skills/HTML.svg",
    },
    {
        name: "CSS",
        icon: "/skills/CSS.svg",
    },
    {
        name: "JavaScript",
        icon: "/skills/JavaScript.svg",
    },
    {
        name: "TypeScript",
        icon: "/skills/TypeScript.svg",
    },
    {
        name: "React",
        icon: "/skills/React-Light.svg",
    },
    {
        name: "Next.js",
        icon: "/skills/NextJS-Light.svg",
    },
    {
        name: "Node.js",
        icon: "/skills/NodeJS-Light.svg",
    },
    {
        name: "Express",
        icon: "/skills/ExpressJS-Light.svg",
    },
    {
        name: "Python",
        icon: "/skills/Python-Light.svg",
    },
    {
        name: "SQL",
        icon: "/skills/MySQL-Light.svg",
    },
    {
        name: "Symfony",
        icon: "/skills/Symfony-Light.svg",
    },
    {
        name: "Prisma",
        icon: "/skills/Prisma.svg",
    },
];

const webDesignSkills = [
    {
        name: "Tailwind CSS",
        icon: "/skills/TailwindCSS-Light.svg",
    },
    {
        name: "Blender",
        icon: "/skills/Blender-Light.svg",
    },
    {
        name: "Figma",
        icon: "/skills/Figma-Light.svg",
    },
    {
        name: "Illustrator",
        icon: "/skills/Illustrator.svg",
    },
    {
        name: "Photoshop",
        icon: "/skills/Photoshop.svg",
    },
    {
        name: "Premiere Pro",
        icon: "/skills/Premiere.svg",
    },
    {
        name: "After Effects",
        icon: "/skills/AfterEffects.svg",
    },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<
        "development" | "design"
    >("development");

    const renderSkillsSection = (skills: typeof webDevelopmentSkills) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-10">
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    className="flex flex-col items-center gap-2 sm:gap-4 p-3 sm:p-4 lg:p-6 rounded-xl hover:bg-white/5 transition-colors"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12">
                        <Image
                            src={skill.icon}
                            alt={skill.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-center">
                        {skill.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );

    return (
        <motion.section
            className="lg:min-h-screen w-11/12 sm:w-5/6 mx-auto flex flex-col gap-10 sm:gap-16 lg:gap-20 py-10 sm:py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                className="text-4xl sm:text-6xl font-extrabold text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold)",
                }}
            >
                SKILLS
            </motion.h2>

            <div className="space-y-8 sm:space-y-12">
                <motion.div
                    className="flex justify-center gap-4 sm:gap-8 relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <button
                        onClick={() => setActiveCategory("development")}
                        className={`text-base sm:text-lg lg:text-xl font-semibold transition-all ${
                            activeCategory === "development"
                                ? "text-white after:w-full"
                                : "text-gray-400 hover:text-gray-200 after:w-0"
                        } relative after:absolute after:h-0.5 after:bg-white after:left-0 after:-bottom-2 after:transition-all after:duration-300`}
                    >
                        Web Development
                    </button>
                    <button
                        onClick={() => setActiveCategory("design")}
                        className={`text-base sm:text-lg lg:text-xl font-semibold transition-all ${
                            activeCategory === "design"
                                ? "text-white after:w-full"
                                : "text-gray-400 hover:text-gray-200 after:w-0"
                        } relative after:absolute after:h-0.5 after:bg-white after:left-0 after:-bottom-2 after:transition-all after:duration-300`}
                    >
                        Web Design
                    </button>
                </motion.div>

                <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative z-0"
                >
                    {renderSkillsSection(
                        activeCategory === "development"
                            ? webDevelopmentSkills
                            : webDesignSkills
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
}
