import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import handleScroll from "../utils/handleScroll";
import { useState } from "react";

export default function Header() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: "-100%", opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 md:py-2 md:px-6 text-white  backdrop-blur-md z-[9998]"
        >
            <div className="logo">
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="md:w-20 md:h-20"
                />
            </div>
            <nav className="flex space-x-4 md:space-x-6 text-sm md:text-lg items-center">
                <a
                    href="#about-me"
                    onClick={(e) => handleScroll(e, "about-me")}
                    className="hover:text-gray-400 z-50"
                >
                    about me
                </a>
                <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-lg"></div>
                <a
                    href="#projects"
                    onClick={(e) => handleScroll(e, "projects")}
                    className="hover:text-gray-400 z-50"
                >
                    projects
                </a>
                <div className="w-1 h-1 md:w-2 md:h-2 bg-white rounded-lg"></div>
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="hover:text-gray-400 z-50"
                >
                    contact
                </a>
            </nav>
        </motion.header>
    );
}
