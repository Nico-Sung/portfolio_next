"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);

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
            className="relative min-h-screen flex flex-col justify-center items-center text-center  text-white p-10"
        >
            <motion.p
                className="mt-6 text-s max-w-3xl mx-8 text-gray-400"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                Get in touch
            </motion.p>
            <motion.h2
                className="text-6xl font-extrabold"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                CONTACT ME
            </motion.h2>

            <form className="mt-8 w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-left text-lg mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
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
                        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
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
                        className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                        placeholder="Your Message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 px-6 py-3 bg-blue-600 rounded text-white font-bold hover:bg-blue-700 transition"
                >
                    Send Message
                </button>
                {status && (
                    <p
                        className={`mt-4 ${
                            status.includes("success")
                                ? "text-green-400"
                                : "text-red-400"
                        }`}
                    >
                        {status}
                    </p>
                )}
            </form>
        </section>
    );
}
