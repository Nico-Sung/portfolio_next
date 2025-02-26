import { motion } from "framer-motion";
export default function Main() {
    const name = "NICOLAS".split("");
    const lastName = "SUNG".split("");
    const job = "Full Stack Developer".split("");
    return (
        <motion.section
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center py-64 lg:min-h-screen relative "
        >
            <div>
                <div>
                    {name.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: i / 10,
                            }}
                            key={i}
                            className="text-6xl sm:text-9xl lg:text-9xl"
                            style={{
                                fontFamily:
                                    "var(--font-hk-grotesk-wide-extra-bold )",
                            }}
                        >
                            {el}
                            {""}
                        </motion.span>
                    ))}
                </div>
                <div>
                    {lastName.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.25,
                                delay: (name.length + i) / 10,
                            }}
                            key={i}
                            className="text-6xl sm:text-9xl lg:text-9xl "
                            style={{
                                WebkitTextStroke: "1px white",
                                color: "transparent",
                                fontFamily:
                                    "var(--font-hk-grotesk-wide-extra-bold )",
                            }}
                        >
                            {el}
                            {""}
                        </motion.span>
                    ))}
                </div>
                <div>
                    {job.map((el, i) => (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.01,
                                delay: (name.length + i) / 10,
                            }}
                            key={i}
                            className="text-10 sm:text-2xl lg:text-2xl  mt-4 "
                        >
                            {el}
                            {""}
                        </motion.span>
                    ))}
                </div>
            </div>

            <a
                href="/CV%20Nicolas%202024%20(2).pdf"
                download
                className="mt-8 inline-block"
            >
                <button className="px-4 py-2 text-white text-xs sm:text-xl  rounded border border-white hover:bg-white hover:text-black transition-colors duration-300">
                    Download my CV
                </button>
            </a>
        </motion.section>
    );
}
