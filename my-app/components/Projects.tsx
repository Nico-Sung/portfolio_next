import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
    {
        title: "Project One",
        image: "/projects/projet1/Capture d’écran 2025-01-17 à 20.58.03.png",
        description: "A brief description of the project.",
    },
    {
        title: "Project Two",
        image: "/projects/projet2/Capture d’écran 2025-01-17 à 20.58.03.png",
        description: "A brief description of the project.",
    },
    {
        title: "Project Three",
        image: "/projects/projet3/Capture d’écran 2025-01-17 à 20.58.03.png",
        description: "A brief description of the project.",
    },
    {
        title: "Project Four",
        image: "/projects/projet4/Capture d’écran 2025-01-17 à 20.58.03.png",
        description: "A brief description of the project.",
    },
    {
        title: "Project Five",
        image: "/project5.png",
        description: "A brief description of the project.",
    },
    {
        title: "Project Six",
        image: "/project6.png",
        description: "A brief description of the project.",
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

    return (
        <section
            id="projects"
            className=" min-h-screen flex flex-col justify-center "
        >
            <motion.h2
                className="text-9xl font-extrabold w-5/6 mx-auto top-0 transform -translate-x-1/2 z-0"
                animate={{ y: scrollValue * 100 }}
                transition={{ duration: 1 }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold )",
                }}
            >
                PROJECTS
            </motion.h2>
            <div className="mt-20">
                {" "}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3.5}
                    grabCursor={true}
                    loop={true}
                    centeredSlides={false}
                    className="w-full relative z-10"
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative overflow-hidden rounded-lg"
                                style={{ paddingBottom: "100%" }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md w-full h-full object-cover"
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
                                    <p className="text-gray-400 mt-2">
                                        {project.description}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
