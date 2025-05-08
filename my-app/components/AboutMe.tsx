import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import handleScroll from "../utils/handleScroll";
import Tilt from "../@/animation/tilt";

export default function AboutMe() {
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

    return (
        <section
            id="about-me"
            className={`flex flex-col justify-center items-center text-center min-h-screen w-11/12 sm:w-5/6 mx-auto py-16 px-4 sm:px-12 ${
                theme === "dark" ? "text-white" : "text-black"
            }`}
        >
            <motion.h2
                className="text-4xl sm:text-6xl font-extrabold mb-8 sm:mb-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold)",
                }}
            >
                ABOUT ME
            </motion.h2>
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Tilt rotateRatio={25} className="z-50">
                            <Image
                                src="/IMG_3467.jpg"
                                alt="profile"
                                width={250}
                                height={250}
                                className="rounded-lg"
                            />
                        </Tilt>
                    </motion.div>
                    <div className="flex flex-col items-center md:items-start">
                        <motion.p
                            className={`text-base sm:text-lg max-w-xl text-justify sm:text-center md:text-left mb-8 ${
                                theme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-700"
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                        >
                            I am a passionate full-stack developer with a strong
                            expertise in building modern and interactive web
                            applications. With experience in React, Next.js, and
                            Tailwind CSS, I focus on creating smooth,
                            user-friendly, and aesthetically pleasing
                            interfaces. I am always eager to learn new
                            technologies and improve my skills, whether in
                            frontend, backend, or even 3D modeling. My goal is
                            to deliver high-quality digital experiences by
                            combining performance, design, and functionality.
                        </motion.p>
                        <motion.div
                            className="flex flex-wrap justify-center gap-4 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        >
                            <motion.div
                                className={`group flex flex-col items-center gap-1 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm border ${
                                    theme === "dark"
                                        ? "border-white/10 hover:border-white/30"
                                        : "border-black/10 hover:border-black/30"
                                }`}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                                    📚
                                </span>
                                <span className="font-medium text-sm">
                                    History
                                </span>
                            </motion.div>
                            <motion.div
                                className={`group flex flex-col items-center gap-1 px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-lg backdrop-blur-sm border ${
                                    theme === "dark"
                                        ? "border-white/10 hover:border-white/30"
                                        : "border-black/10 hover:border-black/30"
                                }`}
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                                    🌍
                                </span>
                                <span className="font-medium text-sm">
                                    Geopolitics
                                </span>
                            </motion.div>
                            <motion.div
                                className={`group flex flex-col items-center gap-1 px-4 py-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg backdrop-blur-sm border ${
                                    theme === "dark"
                                        ? "border-white/10 hover:border-white/30"
                                        : "border-black/10 hover:border-black/30"
                                }`}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                                    🎾
                                </span>
                                <span className="font-medium text-sm">
                                    Tennis
                                </span>
                            </motion.div>
                            <motion.div
                                className={`group flex flex-col items-center gap-1 px-4 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm border ${
                                    theme === "dark"
                                        ? "border-white/10 hover:border-white/30"
                                        : "border-black/10 hover:border-black/30"
                                }`}
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                                    🏀
                                </span>
                                <span className="font-medium text-sm">
                                    Basketball
                                </span>
                            </motion.div>
                            <motion.div
                                className={`group flex flex-col items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg backdrop-blur-sm border ${
                                    theme === "dark"
                                        ? "border-white/10 hover:border-white/30"
                                        : "border-black/10 hover:border-black/30"
                                }`}
                                whileHover={{ scale: 1.05, rotate: 2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="text-2xl transform group-hover:scale-110 transition-transform duration-300">
                                    ⚽
                                </span>
                                <span className="font-medium text-sm">
                                    Soccer
                                </span>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="flex flex-col sm:flex-row items-center w-full justify-between"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "contact")}
                                className={`px-4 py-2 rounded border transition-colors duration-300 z-[999] ${
                                    theme === "dark"
                                        ? "text-white border-white hover:bg-white hover:text-black"
                                        : "text-black border-black hover:bg-black hover:text-white"
                                }`}
                            >
                                Contact me
                            </a>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="https://github.com/Nico-Sung"
                                    className="z-50 transition-transform hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaGithub
                                        size={40}
                                        className={
                                            theme === "dark"
                                                ? "text-white"
                                                : "text-black"
                                        }
                                    />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/nicolas-sung-898031273/"
                                    className="z-50 transition-transform hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaLinkedin
                                        size={40}
                                        className={
                                            theme === "dark"
                                                ? "text-white"
                                                : "text-black"
                                        }
                                    />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
