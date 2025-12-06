"use client";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import HeaderMobile from "@/components/layout/HeaderMobile";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experiences from "@/components/sections/Experiences";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Cursor from "@/components/ui/Cursor";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import "swiper/css";

export default function Home() {
    const { scrollY } = useScroll();
    const [scrollValue, setScrollPosition] = useState(0);

    useEffect(() => {
        return scrollY.onChange((latest) => {
            setScrollPosition(latest);
        });
    }, [scrollY]);

    return (
        <main
            className={`relative min-h-screen`}
            style={{ fontFamily: "var(--font-hk-grotesk-wide-regular )" }}
        >
            <motion.div
                className="fixed top-[-100px] left-[300px] w-[500px] h-[500px] bg-gradient-to-br from-[#52E7D6] to-[#2E8177] rounded-full blur-3xl opacity-10 "
                style={{ transform: `translateY(${scrollValue * 0.2}px)` }}
                whileTap={{ opacity: 0 }}
            ></motion.div>
            <motion.div
                className="fixed top-[-100px] right-[200px] w-[500px] h-[500px] bg-gradient-to-br from-[#7552E7] to-[#412E81] rounded-full blur-3xl opacity-10"
                style={{ transform: `translateY(${scrollValue * 0.2}px)` }}
                whileTap={{ opacity: 0 }}
            ></motion.div>

            <Cursor />
            <Header />
            <HeaderMobile />

            <Hero />
            <About />
            <Experiences />
            <Skills />
            <Projects />
            <Contact />

            <Footer />
        </main>
    );
}
