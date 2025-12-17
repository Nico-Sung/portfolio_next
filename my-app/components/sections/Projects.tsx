import { PROJECTS } from "@/data";
import { Project } from "@/types";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Projects() {
    const { scrollYProgress } = useScroll();
    const [scrollValue, setScrollValue] = useState(0);
    const [selectedProject, setSelectedProject] = useState<Project | null>(
        null
    );
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setScrollValue(latest);
        });
    }, [scrollYProgress]);

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

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handleGithubClick = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const handleWebsiteClick = (e: React.MouseEvent, url: string) => {
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
                className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold w-11/12 sm:w-5/6 mx-auto top-0 transform -translate-x-1/2 z-0 ${
                    theme === "dark" ? "text-white" : "text-black"
                }`}
                animate={{ y: scrollValue * 100 }}
                transition={{ duration: 1 }}
                style={{ fontFamily: "var(--font-hk-grotesk-wide-extra-bold)" }}
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
                        {PROJECTS.map((project, index) => (
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
                                        className={`absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-6 text-center ${
                                            theme === "dark"
                                                ? "bg-black bg-opacity-75"
                                                : "bg-white bg-opacity-90"
                                        }`}
                                    >
                                        <h3
                                            className={`text-2xl font-semibold ${
                                                theme === "dark"
                                                    ? "text-white"
                                                    : "text-black"
                                            }`}
                                        >
                                            {project.title}
                                        </h3>
                                        <p
                                            className={`mt-2 ${
                                                theme === "dark"
                                                    ? "text-gray-200"
                                                    : "text-gray-700"
                                            }`}
                                        >
                                            {project.description}
                                        </p>
                                        <p
                                            className={`mt-3 ${
                                                theme === "dark"
                                                    ? "text-blue-300"
                                                    : "text-blue-600"
                                            }`}
                                        >
                                            Click here to see more
                                        </p>
                                    </motion.div>
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="block lg:hidden grid-cols-1 sm:w-5/6 gap-8 my-auto mx-auto p-4 rounded-lg">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            className={`cursor-pointer mb-6 flex flex-col p-4 rounded-lg z-10 border ${
                                theme === "dark"
                                    ? "bg-zinc-900 border-zinc-800"
                                    : "bg-white border-gray-200 shadow-lg"
                            }`}
                            onClick={() => handleProjectClick(project)}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <div
                                className={`flex flex-col justify-end items-center p-4 rounded-b-lg ${
                                    theme === "dark"
                                        ? "bg-zinc-900"
                                        : "bg-white"
                                }`}
                            >
                                <h3
                                    className={`text-xl font-semibold ${
                                        theme === "dark"
                                            ? "text-white"
                                            : "text-black"
                                    }`}
                                >
                                    {project.title}
                                </h3>
                                <p
                                    className={`mt-2 ${
                                        theme === "dark"
                                            ? "text-gray-200"
                                            : "text-gray-700"
                                    }`}
                                    id={project.id}
                                >
                                    {project.description}
                                </p>
                                <p
                                    className={`mt-3 ${
                                        theme === "dark"
                                            ? "text-blue-300"
                                            : "text-blue-600"
                                    }`}
                                >
                                    Click here to see more
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <div
                    className={`fixed inset-0 flex items-center justify-center z-50 p-4 ${
                        theme === "dark"
                            ? "bg-black bg-opacity-50"
                            : "bg-black bg-opacity-30"
                    }`}
                >
                    <div
                        className={`rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border ${
                            theme === "dark"
                                ? "bg-zinc-900 border-zinc-800"
                                : "bg-white border-gray-200 shadow-2xl"
                        }`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3
                                className={`text-2xl font-semibold ${
                                    theme === "dark"
                                        ? "text-white"
                                        : "text-black"
                                }`}
                            >
                                {selectedProject.title}
                            </h3>
                            <button
                                onClick={closeModal}
                                className={`${
                                    theme === "dark"
                                        ? "text-white hover:text-gray-300"
                                        : "text-black hover:text-gray-600"
                                }`}
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
                        <p
                            className={`mb-4 ${
                                theme === "dark"
                                    ? "text-gray-200"
                                    : "text-gray-700"
                            }`}
                        >
                            {selectedProject.description}
                        </p>

                        <div className="mb-6">
                            <h4
                                className={`text-lg font-semibold mb-2 ${
                                    theme === "dark"
                                        ? "text-white"
                                        : "text-black"
                                }`}
                            >
                                Technologies used :
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {selectedProject.technologies.map(
                                    (tech, index) => (
                                        <div
                                            key={index}
                                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                                                theme === "dark"
                                                    ? "bg-zinc-800"
                                                    : "bg-gray-100"
                                            }`}
                                        >
                                            <tech.icon
                                                className={`w-4 h-4 ${
                                                    theme === "dark"
                                                        ? "text-white"
                                                        : "text-black"
                                                }`}
                                            />
                                            <span
                                                className={`text-sm ${
                                                    theme === "dark"
                                                        ? "text-gray-200"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                {tech.name}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="flex justify-between items-center">
                            <div className="flex space-x-4">
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 ${
                                        theme === "dark"
                                            ? "text-blue-300 hover:text-blue-400"
                                            : "text-blue-600 hover:text-blue-700"
                                    }`}
                                    onClick={(e) =>
                                        handleGithubClick(
                                            e,
                                            selectedProject.github
                                        )
                                    }
                                >
                                    <SiGithub className="w-5 h-5" />
                                    <span>See in GitHub</span>
                                </a>
                                {selectedProject.website && (
                                    <a
                                        href={selectedProject.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`flex items-center gap-2 ${
                                            theme === "dark"
                                                ? "text-blue-300 hover:text-blue-400"
                                                : "text-blue-600 hover:text-blue-700"
                                        }`}
                                        onClick={(e) =>
                                            handleWebsiteClick(
                                                e,
                                                selectedProject.website!
                                            )
                                        }
                                    >
                                        <SiGithub className="w-5 h-5" />
                                        <span>See the website</span>
                                    </a>
                                )}
                            </div>
                            <button
                                onClick={closeModal}
                                className={`px-4 py-2 rounded ${
                                    theme === "dark"
                                        ? "bg-blue-500 text-white hover:bg-blue-600"
                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                }`}
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
