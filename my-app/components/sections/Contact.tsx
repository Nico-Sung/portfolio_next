"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "dark";
        setTheme(savedTheme);

        const handleThemeChange = () => {
            const newTheme = localStorage.getItem("theme") || "dark";
            setTheme(newTheme);
        };

        window.addEventListener("storage", handleThemeChange);
        return () => window.removeEventListener("storage", handleThemeChange);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        const response = await fetch("/api/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        await response.json();

        if (response.ok) {
            setStatus("Email sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        } else {
            setStatus("Failed to send email. Please try again.");
        }
    };

    return (
        <section
            id="contact"
            className={`relative min-h-screen flex flex-col justify-center items-center text-center p-10 ${
                theme === "dark" ? "text-white" : "text-black"
            }`}
        >
            <motion.p
                className={`mt-6 text-s max-w-3xl mx-8 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Get in touch
            </motion.p>
            <motion.h2
                className="text-4xl sm:text-6xl font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold)",
                }}
            >
                CONTACT ME
            </motion.h2>

            <form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-left text-lg mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        className={`w-full p-3 rounded ${
                            theme === "dark"
                                ? "bg-gray-800 text-white border-gray-600"
                                : "bg-gray-100 text-black border-gray-300"
                        } border`}
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-left text-lg mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className={`w-full p-3 rounded ${
                            theme === "dark"
                                ? "bg-gray-800 text-white border-gray-600"
                                : "bg-gray-100 text-black border-gray-300"
                        } border`}
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-left text-lg mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        className={`w-full p-3 rounded ${
                            theme === "dark"
                                ? "bg-gray-800 text-white border-gray-600"
                                : "bg-gray-100 text-black border-gray-300"
                        } border`}
                        placeholder="Your Message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className={`mt-4 px-6 py-3 rounded border transition-colors duration-300 z-[999] ${
                        theme === "dark"
                            ? "text-white border-white hover:bg-white hover:text-black"
                            : "text-black border-black hover:bg-black hover:text-white"
                    }`}
                >
                    Send Message
                </button>
                {status && (
                    <p
                        className={`mt-4 ${
                            status.includes("success")
                                ? theme === "dark"
                                    ? "text-green-400"
                                    : "text-green-600"
                                : theme === "dark"
                                ? "text-red-400"
                                : "text-red-600"
                        }`}
                    >
                        {status}
                    </p>
                )}
            </form>

            <motion.div
                className="flex flex-col items-center gap-8 sm:gap-12 mt-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex flex-col items-center gap-4 sm:gap-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-center">
                        Let&apos;s Connect
                    </h3>
                    <p
                        className={`text-base sm:text-lg text-center max-w-2xl ${
                            theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                    >
                        I&apos;m always open to new opportunities and
                        collaborations. Feel free to reach out to me through any
                        of the following platforms.
                    </p>
                </div>

                <div className="flex gap-6 sm:gap-8">
                    <motion.a
                        href="https://github.com/Nico-Sung"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full transition-colors ${
                            theme === "dark"
                                ? "bg-black/20 hover:bg-black/30"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub
                            className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                theme === "dark" ? "text-white" : "text-black"
                            }`}
                        />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/nicolas-sung-898031273/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-full transition-colors ${
                            theme === "dark"
                                ? "bg-black/20 hover:bg-black/30"
                                : "bg-gray-100 hover:bg-gray-200"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin
                            className={`w-8 h-8 sm:w-10 sm:h-10 ${
                                theme === "dark" ? "text-white" : "text-black"
                            }`}
                        />
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
}
