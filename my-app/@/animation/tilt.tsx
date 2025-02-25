import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface TiltProps {
    children: ReactNode;
    className?: string;
    rotateRatio?: number;
}

export default function Tilt({
    children,
    className,
    rotateRatio = 1.5,
}: TiltProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, {
        stiffness: 75,
        damping: 35,
    });
    const mouseYSpring = useSpring(y, {
        stiffness: 75,
        damping: 35,
    });

    const rotateX = useTransform(
        mouseYSpring,
        [-0.5, 0.5],
        [rotateRatio, -rotateRatio]
    );
    const rotateY = useTransform(
        mouseXSpring,
        [-0.5, 0.5],
        [-rotateRatio, rotateRatio]
    );

    function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
        const rect = event.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
