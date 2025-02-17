import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import handleScroll from "../utils/handleScroll";
export default function AboutMe() {
    return (
        <section
            id="about-me"
            className=" flex flex-col justify-center items-center text-center text-white  border border-white w-5/6 h- mx-auto py-16 px-12"
        >
            <motion.h2
                className="text-6xl font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold )",
                }}
            >
                ABOUT ME
            </motion.h2>
            <motion.div className="flex flex-col mt-12 items-center">
                <div className="flex items-center">
                    <Image
                        src="/IMG_3467.jpg"
                        alt="profile"
                        width={250}
                        height={4000}
                        className="rounded-lg"
                    ></Image>
                    <div className="ml-24">
                        <motion.p
                            className="text-lg max-w-xl text-left mb-6"
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
                        <div className="flex items-center justify-between w-1/1">
                            <a
                                href="#contact"
                                onClick={(e) => handleScroll(e, "contact")}
                                className="z-50 bg-blue-500 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                            >
                                Contact me
                            </a>
                            <div className="flex items-baseline">
                                <Link
                                    href={"https://github.com/Nico-Sung"}
                                    className="mr-4 mt-4 z-50"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/github.png"
                                        alt="github"
                                        width={50}
                                        height={50}
                                    ></Image>
                                </Link>
                                <Link
                                    href={
                                        "https://www.linkedin.com/in/nicolas-sung-898031273/"
                                    }
                                    className="mr-4 mt-4 z-50"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/linkedin.png"
                                        alt="linkedin"
                                        width={50}
                                        height={50}
                                    ></Image>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
