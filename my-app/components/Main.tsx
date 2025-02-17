import { motion } from "framer-motion";

export default function Main() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-64 min-h-screen"
        >
            <h1
                className="text-9xl "
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold )",
                }}
            >
                NICOLAS
            </h1>
            <h1
                className="text-9xl  "
                style={{
                    WebkitTextStroke: "1px white",
                    color: "transparent",
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold )",
                }}
            >
                SUNG
            </h1>
            <h2 className="text-2xl  mt-4 ">Full Stack Developer</h2>
            <a
                href="/CV%20Nicolas%202024%20(2).pdf"
                download
                className="mt-8 inline-block"
            >
                <button className="px-4 py-2 text-white text-xl rounded border border-white hover:bg-white hover:text-black transition-colors duration-300">
                    Download my CV
                </button>
            </a>
        </motion.section>
    );
}
