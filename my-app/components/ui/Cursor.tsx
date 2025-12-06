import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", checkScreenSize);
        checkScreenSize();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed pointer-events-none z-[9999] w-8 h-8 border border-current rounded-full"
            style={{ backgroundColor: "transparent" }}
            animate={{ x: position.x - 10, y: position.y - 15 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
    );
}
