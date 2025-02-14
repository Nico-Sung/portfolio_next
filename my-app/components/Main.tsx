import { motion } from "framer-motion";

export default function Main() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-64 min-h-screen"
        >
            <h1 className="text-8xl font-bold ">NICOLAS</h1>
            <h1
                className="text-8xl font-bold "
                style={{ WebkitTextStroke: "1px white", color: "transparent" }}
            >
                SUNG
            </h1>
            <h2 className="text-6xl font-light mt-4 ">Full Stack Developer</h2>
        </motion.section>
    );
}
