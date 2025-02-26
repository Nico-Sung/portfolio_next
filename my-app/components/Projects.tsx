import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
    {
        title: "Harry Potter Card",
        image: "/projects/projet1/Capture d’écran 2025-02-26 à 11.40.48.png",
        description:
            "A website allowing you to collect cards from the Harry Potter universe. This project was carried out with Node.js, Express.js and Prisma.",
        github: "https://github.com/Nico-Sung/Harry_Potter_Card",
    },
    {
        title: "Santa Ski",
        image: "/projects/projet2/Capture d’écran 2025-02-26 à 11.42.55.png",
        description:
            "A school project which aims to encourage disadvantaged children to go on ski holidays for free. This project combines a dynamic frontend and a robust backend to provide an immersive experience.",
        github: "https://github.com/Nico-Sung/SantaSki",
    },
    {
        title: "Pokemon Fight",
        image: "/projects/projet3/Capture d’écran 2025-02-26 à 11.49.33.png",
        description:
            "A little project to learn PHP. It includes a PHP interface allowing the display of Pokémon with their characteristics.",
        github: "https://github.com/Nico-Sung/pokemon_pdo",
    },
    {
        title: "To do list",
        image: "/projects/projet4/Capture d’écran 2025-02-26 à 13.32.09.png",
        description:
            "This project is a task management application (To-Do List) built in TypeScript",
        github: "https://github.com/Nico-Sung/todolist_ts",
    },
    {
        title: "IFT",
        image: "/projects/projet5/Capture d’écran 2025-02-26 à 13.53.14.png",
        description:
            "Team project with the IFT of De Vinci (Institute for Future Technologies) which aims to develop a virtual gallery presenting technological innovations with a digital label system.",
        github: "https://github.com/Nico-Sung/BAP_18",
    },
];

export default function Projects() {
    const { scrollYProgress } = useScroll();
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        return scrollYProgress.onChange((latest) => {
            setScrollValue(latest);
        });
    }, [scrollYProgress]);

    const handleProjectClick = (url: string) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="projects"
            className="sm:min-h-screen flex flex-col justify-center"
        >
            <motion.h2
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
                                    onClick={() =>
                                        handleProjectClick(project.github)
                                    }
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
                                        <p className="text-gray-200  mt-2">
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
                            className=" cursor-pointer mb-6 flex flex-col bg-zinc-900  p-4 rounded-lg "
                            onClick={() => handleProjectClick(project.github)}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={500}
                                height={500}
                                className="w-full h-full object-cover rounded-t-lg"
                            />
                            <div className="  flex flex-col justify-end items-center bg-zinc-900 bg-opacity-75 p-4 rounded-b-lg">
                                <h3 className="text-xl font-semibold text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-200 mt-2">
                                    {project.description}
                                </p>
                                <p
                                    className="text-blue-300 mt-3 cursor-pointer"
                                    onClick={() =>
                                        handleProjectClick(project.github)
                                    }
                                >
                                    Click here to see more
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
