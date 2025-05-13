import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
    SiNodedotjs,
    SiExpress,
    SiPrisma,
    SiTypescript,
    SiReact,
    SiPhp,
    SiMysql,
    SiNextdotjs,
    SiTailwindcss,
    SiGithub,
    SiHtml5,
    SiCss3,
} from "react-icons/si";

const projects = [
    {
        title: "Harry Potter Card",
        image: "/projects/projet1/capture-ecran-2025-02-26-11-40-48.png",
        description:
            "A website allowing you to collect cards from the Harry Potter universe. This project was carried out with Node.js, Express.js and Prisma.",
        github: "https://github.com/Nico-Sung/Harry_Potter_Card",
        id: "1",
        technologies: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Prisma", icon: SiPrisma },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
        ],
    },
    {
        title: "Santa Ski",
        image: "/projects/projet2/capture-ecran-2025-02-26-11-42-55.png",
        description:
            "A school project which aims to encourage disadvantaged children to go on ski holidays for free. This project combines a dynamic frontend and a robust backend to provide an immersive experience.",
        github: "https://github.com/Nico-Sung/SantaSki",
        id: "2",
        technologies: [
            { name: "React", icon: SiReact },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "TypeScript", icon: SiTypescript },
        ],
    },
    {
        title: "Pokemon Fight",
        image: "/projects/projet3/capture-ecran-2025-02-26-11-49-33.png",
        description:
            "A little project to learn PHP. It includes a PHP interface allowing the display of Pokémon with their characteristics.",
        github: "https://github.com/Nico-Sung/pokemon_pdo",
        id: "3",
        technologies: [
            { name: "PHP", icon: SiPhp },
            { name: "MySQL", icon: SiMysql },
        ],
    },
    {
        title: "To do list",
        image: "/projects/projet4/capture-ecran-2025-02-26-13-32-09.png",
        description:
            "This project is a task management application (To-Do List) built in TypeScript",
        github: "https://github.com/Nico-Sung/todolist_ts",
        id: "4",
        technologies: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
        ],
    },
    {
        title: "IFT",
        image: "/projects/projet5/capture-ecran-2025-02-26-13-53-54.png",
        description:
            "Team project with the IFT of De Vinci (Institute for Future Technologies) which aims to develop a virtual gallery presenting technological innovations with a digital label system.",
        github: "https://github.com/Nico-Sung/BAP_18",
        id: "5",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
];

export default function Projects() {
    const { scrollYProgress } = useScroll();
    const [scrollValue, setScrollValue] = useState(0);
    const [selectedProject, setSelectedProject] = useState<
        (typeof projects)[0] | null
    >(null);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setScrollValue(latest);
        });
    }, [scrollYProgress]);

    const handleProjectClick = (project: (typeof projects)[0]) => {
        setSelectedProject(project);
    };

    const handleGithubClick = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section
            id="projects"
            className="sm:min-h-screen flex flex-col justify-center"
        >
            <motion.h2
                id="projects-title"
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold w-11/12 sm:w-5/6 mx-auto top-0 transform -translate-x-1/2 z-0"
                animate={{ y: scrollValue * 100 }}
                transition={{ duration: 1 }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold)",
                }}
            >
                PROJECTS
            </motion.h2>
            <div className="mt-20">
                <div className="hidden lg:block">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={3.5}
                        loop={true}
                        grabCursor={true}
                        centeredSlides={false}
                        className="w-full relative z-10"
                    >
                        {projects.map((project, index) => (
                            <SwiperSlide key={index}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative overflow-hidden cursor-pointer"
                                    style={{ paddingBottom: "100%" }}
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="w-full h-48 object-cover"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 text-center"
                                    >
                                        <h3 className="text-2xl font-semibold">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-200 mt-2">
                                            {project.description}
                                        </p>
                                        <p className="text-blue-300 mt-3">
                                            Click here to see more
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="block lg:hidden grid-cols-1 sm:w-5/6 gap-8 my-auto mx-auto p-4 rounded-lg">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="cursor-pointer mb-6 flex flex-col bg-zinc-900 p-4 rounded-lg z-10"
                            onClick={() => handleProjectClick(project)}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <div className="flex flex-col justify-end items-center bg-zinc-900 bg-opacity-75 p-4 rounded-b-lg">
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>
                                <p
                                    className="text-gray-200 mt-2"
                                    id={project.id}
                                >
                                    {project.description}
                                </p>
                                <p className="text-blue-300 mt-3">
                                    Click here to see more
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-zinc-900 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-2xl font-semibold text-white">
                                {selectedProject.title}
                            </h3>
                            <button
                                onClick={closeModal}
                                className="text-white hover:text-gray-300"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="w-full flex justify-center mb-4">
                            <Image
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                width={600}
                                height={400}
                                className="object-cover rounded-lg max-h-64 w-auto"
                            />
                        </div>
                        <p className="text-gray-200 mb-4">
                            {selectedProject.description}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h4 className="text-lg font-semibold text-white mb-2">
                                Technologies used :
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {selectedProject.technologies.map(
                                    (tech, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full"
                                        >
                                            <tech.icon className="w-4 h-4" />
                                            <span className="text-sm text-gray-200">
                                                {tech.name}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-blue-300 hover:text-blue-400"
                                onClick={(e) =>
                                    handleGithubClick(e, selectedProject.github)
                                }
                            >
                                <SiGithub className="w-5 h-5" />
                                <span>See in GitHub</span>
                            </a>
                            <button
                                onClick={closeModal}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
