"use client";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion, useScroll } from "framer-motion";
import "swiper/css";
import { useEffect, useState } from "react";

export default function Home() {
    const { scrollY } = useScroll();
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrollPosition(latest);
        });
    }, [scrollY]);

    return (
        <main className="relative bg-[#111111] text-white min-h-screen font-grotesk overflow-hidden">
            <motion.div
                className="fixed top-[-100px] left-[300px] w-[500px] h-[500px] bg-gradient-to-br from-[#52E7D6] to-[#2E8177] rounded-full blur-3xl opacity-10"
                style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
                whileTap={{ opacity: 0 }}
            ></motion.div>
            <motion.div
                className="fixed top-[-100px] right-[200px] w-[500px] h-[500px] bg-gradient-to-br from-[#7552E7] to-[#412E81] rounded-full blur-3xl opacity-10"
                style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
                whileTap={{ opacity: 0 }}
            ></motion.div>
            <Cursor />
            <Header />
            <Main />
            <AboutMe />
            <Projects />
            <Contact />
        </main>
    );
}
