import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import handleScroll from "../utils/handleScroll";
import Tilt from "../@/animation/tilt";

export default function AboutMe() {
    return (
        <section
            id="about-me"
            className="flex flex-col justify-center items-center text-center text-white min-h-screen w-11/12 sm:w-5/6 mx-auto py-16 px-4 sm:px-12"
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
                            className="text-base sm:text-lg max-w-xl text-justify sm:text-center md:text-left mb-8"
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
                            className="flex flex-col sm:flex-row items-center w-full justify-between"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "contact")}
                                className="px-4 py-2 text-white text-xs sm:text-xl  rounded border border-white mb-4 sm:mb-0  hover:bg-white hover:text-black transition-colors duration-300 z-[999]"
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
                                    <Image
                                        src="/github.png"
                                        alt="github"
                                        width={40}
                                        height={40}
                                    />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/nicolas-sung-898031273/"
                                    className="z-50 transition-transform hover:scale-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/linkedin.png"
                                        alt="linkedin"
                                        width={40}
                                        height={40}
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
