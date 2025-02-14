import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        targetId: string
    ) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset =
                window.innerHeight / 2 - targetElement.offsetHeight / 2;
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth",
            });
        }
    };

    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 right-0 flex justify-between items-center p-6 text-white bg-transparent"
        >
            <div className="logo">
                <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            </div>
            <nav className="flex space-x-6 text-lg items-center font-grotesk">
                <a
                    href="#about-me"
                    onClick={(e) => handleScroll(e, "about-me")}
                    className="hover:text-gray-400 z-50"
                >
                    About Me
                </a>
                <div className="w-2 h-2 bg-white rounded-lg"></div>
                <a
                    href="#projects"
                    onClick={(e) => handleScroll(e, "projects")}
                    className="hover:text-gray-400 z-50"
                >
                    Projects
                </a>
                <div className="w-2 h-2 bg-white rounded-lg"></div>
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, "contact")}
                    className="hover:text-gray-400 z-50"
                >
                    Contact
                </a>
            </nav>
        </motion.header>
    );
}
