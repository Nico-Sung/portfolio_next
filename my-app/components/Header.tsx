import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-between items-center p-6  text-white"
        >
            <div className="logo">
                <Image src="/logo.svg" alt="Logo" width={80} height={80} />
            </div>
            <nav className="flex space-x-6 text-lg items-center font-grotesk">
                <Link href="#about" className="hover:text-gray-400">
                    About Me
                </Link>
                <div
                    className="w-2 h-2 bg-white rounded-lg
 "
                ></div>
                <Link href="#projects" className="hover:text-gray-400">
                    Projects
                </Link>
                <div
                    className="w-2 h-2 bg-white rounded-lg
 "
                ></div>
                <Link href="#contact" className="hover:text-gray-400">
                    Contact
                </Link>
            </nav>
        </motion.header>
    );
}
