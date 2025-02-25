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
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold)",
                }}
            >
                ABOUT ME
            </motion.h2>
            <motion.div className="flex flex-col items-center">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <Tilt rotateRatio={25} className="z-50">
                        <Image
                            src="/IMG_3467.jpg"
                            alt="profile"
                            width={250}
                            height={250}
                            className="rounded-lg"
                        />
                    </Tilt>
                    <div className="flex flex-col items-center md:items-start">
                        <motion.p
                            className="text-base sm:text-lg max-w-xl text-center md:text-left mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            I am a passionate full-stack developer with
                            experience in building modern web applications using
                            React, Next.js, and Tailwind CSS. I love creating
                            interactive and user-friendly interfaces. I am
                            always eager to learn new technologies and improve
                            my skills. I am currently looking for new
                            opportunities to work on exciting projects.
                        </motion.p>
                        <div className="flex flex-col sm:flex-row  items-center w-full justify-between ">
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "contact")}
                                className="z-50 bg-blue-500 text-white py-2 px-6 rounded-full transition mb-4 duration-300 ease-in-out transform hover:scale-105"
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
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
