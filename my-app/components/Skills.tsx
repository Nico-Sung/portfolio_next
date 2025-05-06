import { motion } from "framer-motion";
import { useState } from "react";
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
    SiSymfony,
    SiPrisma,
    SiRaspberrypi,
    SiTailwindcss,
    SiBootstrap,
    SiBlender,
    SiFigma,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiAdobeaftereffects,
} from "react-icons/si";

const webDevelopmentSkills = [
    {
        name: "HTML",
        icon: SiHtml5,
    },
    {
        name: "CSS",
        icon: SiCss3,
    },
    {
        name: "JavaScript",
        icon: SiJavascript,
    },
    {
        name: "TypeScript",
        icon: SiTypescript,
    },
    {
        name: "React",
        icon: SiReact,
    },
    {
        name: "Next.js",
        icon: SiNextdotjs,
    },
    {
        name: "Node.js",
        icon: SiNodedotjs,
    },
    {
        name: "Express",
        icon: SiExpress,
    },
    {
        name: "Python",
        icon: SiPython,
    },
    {
        name: "MySQL",
        icon: SiMysql,
    },
    {
        name: "Symfony",
        icon: SiSymfony,
    },
    {
        name: "Prisma",
        icon: SiPrisma,
    },
    {
        name: "Raspberry Pi",
        icon: SiRaspberrypi,
    },
];

const webDesignSkills = [
    {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
    },
    {
        name: "Bootstrap",
        icon: SiBootstrap,
    },
    {
        name: "Blender",
        icon: SiBlender,
    },
    {
        name: "Figma",
        icon: SiFigma,
    },
    {
        name: "Illustrator",
        icon: SiAdobeillustrator,
    },
    {
        name: "Photoshop",
        icon: SiAdobephotoshop,
    },
    {
        name: "Premiere Pro",
        icon: SiAdobepremierepro,
    },
    {
        name: "After Effects",
        icon: SiAdobeaftereffects,
    },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState<
        "development" | "design"
    >("development");

    const renderSkillsSection = (skills: typeof webDevelopmentSkills) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-10 ">
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
                    <motion.div
                        className="text-white"
                        whileHover={{
                            rotate: 360,
                            scale: 1.2,
                            color: "#3B82F6",
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut",
                        }}
                    >
                        <skill.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
                    </motion.div>
                    <span className="text-xs sm:text-sm font-medium text-center">
                        {skill.name}
                    </span>
                </motion.div>
            ))}
        </div>
    );

    return (
        <motion.section
            id="skills"
            className="w-11/12 sm:w-5/6 mx-auto flex flex-col gap-10 sm:gap-16 lg:gap-20 py-10 sm:py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                id="skills"
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
