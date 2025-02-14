import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function AboutMe() {
    return (
        <section
            id="about-me"
            className=" flex flex-col justify-center items-center text-center text-white  border border-white w-5/6 h- mx-auto py-32 px-12"
        >
            <motion.h2
                className="text-6xl font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                ABOUT ME
            </motion.h2>
            <motion.div className="flex flex-col items-center mt-14">
                <motion.p
                    className="mt-6 text-xl max-w-3xl mx-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    I am a passionate full-stack developer with experience in
                    building modern web applications using React, Next.js, and
                    Tailwind CSS. I love creating interactive and user-friendly
                    interfaces.
                </motion.p>
                <div className="flex items-center justify-start mt-12">
                    <Link
                        href={"https://github.com/Nico-Sung"}
                        className="mr-4 mt-4 z-50"
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
                    >
                        <Image
                            src="/linkedin.png"
                            alt="linkedin"
                            width={50}
                            height={50}
                        ></Image>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
