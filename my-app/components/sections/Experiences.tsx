import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    FaBriefcase,
    FaHandsHelping,
    FaCode,
    FaCalendarAlt,
    FaArrowRight,
} from "react-icons/fa";
import { IconType } from "react-icons";

type Experience = {
    title: string;
    date: string;
    summary: string;
    details: string[];
    side?: "left" | "right";
    icon?: IconType;
};

const experiences: Experience[] = [
    {
        title: "Alternant Développeur Full-Stack - Technema",
        date: "Septembre 2025 - En cours",
        summary:
            "Maintenance et évolution d'une solution de tracking web en PHP, participation à la conception d'une nouvelle application SaaS en Next JS et Nest JS, et collaboration sur l'implémentation de la plateforme.",
        details: [
            "Assurer la maintenance corrective et évolutive de la solution de tracking web (PHP) des marchandises",
            "Participation aux ateliers pour la conception de la nouvelle application SaaS",
            "Collaborer avec l'équipe de développement sur l'implémentation et l'amélioration continue de la plateforme de tracking SaaS",
        ],
        side: "left",
        icon: FaCode,
    },
    {
        title: "Stage Développeur Full-Stack - UCLIC",
        date: "Avril 2025 - Juin 2025",
        summary:
            "Refonte d'une plateforme et développement d'outils interactifs pour les utilisateurs.",
        details: [
            "Refonte complète de la plateforme RunMemories en Next JS",
            "Développement d'un éditeur interactif permettant aux utilisateurs de créer et personnaliser leurs affiches de course à pied",
            "Intégration d'une base de données et d'une API permettant de stocker et récupérer les parcours avec Supabase",
        ],
        side: "left",
        icon: FaCode,
    },
    {
        title: "Auxiliaire de vacances - LCL",
        date: "Juin 2024 - Juillet 2024",
        summary:
            "Mise à jour de données et visites d'agences pour le suivi immobilier.",
        details: [
            "Mise à jour des données des objets et des sites",
            "Réalisation de visite dans les agences et des immeubles centraux",
        ],
        side: "right",
        icon: FaBriefcase,
    },
    {
        title: "Chef de projet - Maison des Part'âges",
        date: "Janvier 2025 - Mars 2025",
        summary:
            "Gestion d'équipe et conception d'outils pédagogiques pour les familles.",
        details: [
            "Gestion de projet : coordination d'une équipe pluridisciplinaire (développement web, design, communication)",
            "Stratégie et planification : définition des objectifs, suivi des étapes clés et gestion du calendrier",
            "Conception d'outils pédagogiques : élaboration d'un livret parental et d'une plateforme en ligne pour accompagner les familles",
            "Communication et collaboration : interaction avec les partenaires, présentation du projet et gestion des échanges",
        ],
        side: "right",
        icon: FaBriefcase,
    },
    {
        title: "Développeur Full-Stack - IFT",
        date: "Octobre 2024 - Décembre 2024",
        summary:
            "Développement d'un site de musée et d'un back-office collaboratif.",
        details: [
            "Création d'un site de musée",
            "Création d'un back-office grâce à Node.JS, Prisma et Express",
            "Collaboration en équipe avec Github",
            "Intégration d'un système d'emailing",
            "Élaboration de nouvelles étiquettes digitales",
        ],
        side: "left",
        icon: FaCode,
    },
    {
        title: "Bénévole - VivaTech",
        date: "Mai 2023",
        summary:
            "Accueil et orientation des visiteurs lors d'un grand salon tech.",
        details: [
            "Accueil des visiteurs",
            "Régulation des flux",
            "Distribution de badges",
            "Orientation des visiteurs",
        ],
        side: "right",
        icon: FaHandsHelping,
    },
];

function ExperienceModal({
    exp,
    open,
    onClose,
    theme,
}: {
    exp: Experience | null;
    open: boolean;
    onClose: () => void;
    theme: string;
}) {
    const Icon = exp?.icon || FaBriefcase;
    const accent = exp?.side === "left" ? "#52E7D6" : "#7552E7";

    return (
        <AnimatePresence>
            {open && exp && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={onClose}
                    >
                        <motion.div
                            className={`w-[95vw] sm:w-[90vw] max-w-2xl rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 lg:p-10 backdrop-blur-xl relative border overflow-hidden max-h-[90vh] overflow-y-auto ${
                                theme === "dark"
                                    ? "bg-gradient-to-br from-[#181a2e]/95 to-[#1a1a2e]/95 border-white/20"
                                    : "bg-gradient-to-br from-white/95 to-gray-50/95 border-black/20"
                            }`}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{
                                duration: 0.2,
                                ease: "easeOut",
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Gradient overlay */}
                            <div
                                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
                                style={{ background: accent }}
                            />

                            <button
                                className={`absolute top-3 right-3 sm:top-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-lg sm:text-xl font-bold transition-all z-10 ${
                                    theme === "dark"
                                        ? "bg-white/10 text-white hover:bg-white/20 hover:text-[#52E7D6]"
                                        : "bg-black/10 text-black hover:bg-black/20 hover:text-[#52E7D6]"
                                }`}
                                onClick={onClose}
                                aria-label="Fermer"
                            >
                                ×
                            </button>

                            <div className="relative z-10">
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <motion.div
                                        className="p-3 sm:p-4 rounded-xl sm:rounded-2xl flex-shrink-0"
                                        style={{
                                            background: `${accent}20`,
                                            border: `2px solid ${accent}40`,
                                        }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.1,
                                            duration: 0.2,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <Icon
                                            className="text-2xl sm:text-3xl"
                                            style={{ color: accent }}
                                        />
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                        <h3
                                            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 break-words ${
                                                theme === "dark"
                                                    ? "text-white"
                                                    : "text-black"
                                            }`}
                                        >
                                            {exp.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-xs sm:text-sm flex-wrap">
                                            <FaCalendarAlt
                                                className="opacity-60 flex-shrink-0"
                                                style={{ color: accent }}
                                            />
                                            <span
                                                className={`px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-semibold tracking-wide text-[10px] sm:text-xs whitespace-nowrap ${
                                                    theme === "dark"
                                                        ? "bg-white/10 text-white"
                                                        : "bg-black/10 text-black"
                                                }`}
                                            >
                                                {exp.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg sm:rounded-xl ${
                                        theme === "dark"
                                            ? "bg-white/5"
                                            : "bg-black/5"
                                    }`}
                                >
                                    <p
                                        className={`text-sm sm:text-base leading-relaxed ${
                                            theme === "dark"
                                                ? "text-gray-200"
                                                : "text-gray-700"
                                        }`}
                                    >
                                        {exp.summary}
                                    </p>
                                </div>

                                <div>
                                    <h4
                                        className={`text-base sm:text-lg font-bold mb-3 sm:mb-4 ${
                                            theme === "dark"
                                                ? "text-white"
                                                : "text-black"
                                        }`}
                                    >
                                        Responsabilités principales :
                                    </h4>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {exp.details.map((d, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 0.15 + i * 0.05,
                                                    duration: 0.2,
                                                    ease: "easeOut",
                                                }}
                                                className={`flex items-start gap-2 sm:gap-3 ${
                                                    theme === "dark"
                                                        ? "text-gray-200"
                                                        : "text-gray-700"
                                                }`}
                                            >
                                                <span
                                                    className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                                                    style={{
                                                        background: accent,
                                                    }}
                                                />
                                                <span className="text-sm sm:text-base leading-relaxed break-words">
                                                    {d}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

function TimelineItem({
    exp,
    idx,
    onOpenModal,
    theme,
}: {
    exp: Experience;
    idx: number;
    onOpenModal: (exp: Experience) => void;
    theme: string;
}) {
    const isLeft = exp.side === "left";
    const accent = isLeft ? "#52E7D6" : "#7552E7";
    const Icon = exp.icon || FaBriefcase;

    const cardBg =
        theme === "dark"
            ? isLeft
                ? "from-[#1a2a2e]/90 to-[#2E8177]/70"
                : "from-[#221a2e]/90 to-[#412E81]/70"
            : "from-white to-gray-50";
    const borderColor =
        theme === "dark" ? "border-white/20" : "border-black/20";
    const textMain = theme === "dark" ? "text-white" : "text-black";
    const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-600";
    const badge =
        theme === "dark" ? "bg-white/15 text-white" : "bg-black/10 text-black";
    const btn =
        theme === "dark"
            ? "bg-white/10 text-white hover:bg-[#52E7D6] hover:text-black border border-white/20 hover:border-[#52E7D6]"
            : "bg-black/10 text-black hover:bg-[#52E7D6] hover:text-black border border-black/20 hover:border-[#52E7D6]";
    const dotBorder = theme === "dark" ? "border-white/30" : "border-black/30";
    const line = theme === "dark" ? "from-white/30" : "from-black/30";

    const CardContent = ({ className = "" }: { className?: string }) => (
        <motion.div
            className={`group relative bg-gradient-to-br ${cardBg} backdrop-blur-xl border ${borderColor} rounded-2xl lg:rounded-3xl shadow-xl lg:shadow-2xl p-4 sm:p-6 md:p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 lg:hover:-translate-y-3 ${className}`}
            whileHover={{ scale: 1.01 }}
        >
            {/* Gradient glow effect */}
            <div
                className="absolute top-0 right-0 w-32 h-32 lg:w-40 lg:h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: accent }}
            />

            {/* Icon */}
            <div className="relative z-10 flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <motion.div
                    className="p-2.5 sm:p-3 rounded-xl flex-shrink-0"
                    style={{
                        background: `${accent}25`,
                        border: `2px solid ${accent}40`,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <Icon
                        className="text-xl sm:text-2xl"
                        style={{ color: accent }}
                    />
                </motion.div>
                <div className="flex-1 min-w-0">
                    <h4
                        className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 ${textMain} leading-tight break-words`}
                    >
                        {exp.title}
                    </h4>
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <FaCalendarAlt
                            className="text-xs opacity-60 flex-shrink-0"
                            style={{ color: accent }}
                        />
                        <span
                            className={`px-2.5 sm:px-3 py-1 rounded-full font-semibold tracking-wide text-[10px] sm:text-xs ${badge} whitespace-nowrap`}
                        >
                            {exp.date}
                        </span>
                    </div>
                </div>
            </div>

            <p
                className={`${textSecondary} mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed relative z-10 line-clamp-3`}
            >
                {exp.summary}
            </p>

            <motion.button
                className={`flex items-center justify-center gap-2 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-all duration-300 font-semibold relative z-10 w-full sm:w-auto ${btn}`}
                onClick={() => onOpenModal(exp)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                En savoir plus
                <FaArrowRight className="text-[10px] sm:text-xs" />
            </motion.button>
        </motion.div>
    );

    return (
        <>
            {/* Desktop version */}
            <div className="hidden lg:flex w-full flex-row items-center relative">
                {/* Left side */}
                <div
                    className={`w-1/2 flex justify-${
                        isLeft ? "end" : "start"
                    } pr-8 pl-8`}
                >
                    {isLeft && (
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.15,
                                type: "spring",
                            }}
                            className="max-w-xl w-full"
                        >
                            <CardContent />
                        </motion.div>
                    )}
                </div>

                {/* Timeline dot and line */}
                <div className="flex flex-col items-center z-10 relative flex-shrink-0">
                    <motion.div
                        className="relative"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: idx * 0.15,
                        }}
                    >
                        <motion.span
                            className={`w-8 h-8 rounded-full border-4 ${dotBorder} flex items-center justify-center`}
                            style={{
                                background: accent,
                                boxShadow: `0 0 0 4px ${accent}33, 0 0 20px ${accent}66`,
                            }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <Icon
                                className="text-xs"
                                style={{
                                    color: theme === "dark" ? "#111" : "#fff",
                                }}
                            />
                        </motion.span>
                    </motion.div>
                    {idx < experiences.length - 1 && (
                        <motion.div
                            className={`w-1 h-32 bg-gradient-to-b ${line} to-transparent rounded-full`}
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: idx * 0.15 + 0.3,
                            }}
                        />
                    )}
                </div>

                {/* Right side */}
                <div
                    className={`w-1/2 flex justify-${
                        !isLeft ? "start" : "end"
                    } pl-8 pr-8`}
                >
                    {!isLeft && (
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.15,
                                type: "spring",
                            }}
                            className="max-w-xl w-full"
                        >
                            <CardContent />
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Mobile version */}
            <div className="lg:hidden w-full relative">
                <div className="flex items-start gap-4">
                    {/* Timeline dot and line - Mobile */}
                    <div className="flex flex-col items-center z-10 relative flex-shrink-0 pt-1">
                        <motion.div
                            className="relative"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: idx * 0.1,
                            }}
                        >
                            <motion.span
                                className={`w-6 h-6 rounded-full border-3 ${dotBorder} flex items-center justify-center`}
                                style={{
                                    background: accent,
                                    boxShadow: `0 0 0 3px ${accent}33, 0 0 15px ${accent}66`,
                                }}
                            >
                                <Icon
                                    className="text-[10px]"
                                    style={{
                                        color:
                                            theme === "dark" ? "#111" : "#fff",
                                    }}
                                />
                            </motion.span>
                        </motion.div>
                        {idx < experiences.length - 1 && (
                            <motion.div
                                className={`w-0.5 h-24 bg-gradient-to-b ${line} to-transparent rounded-full mt-2`}
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: idx * 0.1 + 0.2,
                                }}
                            />
                        )}
                    </div>

                    {/* Card content - Mobile */}
                    <div className="flex-1 min-w-0">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                delay: idx * 0.1,
                                type: "spring",
                            }}
                        >
                            <CardContent />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default function Experiences() {
    const [modalExp, setModalExp] = useState<Experience | null>(null);
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

    return (
        <section
            id="experiences"
            className={`w-11/12 sm:w-5/6 mx-auto flex flex-col gap-12 sm:gap-20 lg:gap-24 py-12 sm:py-20 relative ${
                theme === "dark" ? "text-white" : "text-black"
            }`}
        >
            {/* Background gradient effects */}
            <div
                className="absolute top-0 left-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-10 -z-0"
                style={{ background: "#52E7D6" }}
            />
            <div
                className="absolute bottom-0 right-1/4 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full blur-3xl opacity-10 -z-0"
                style={{ background: "#7552E7" }}
            />

            <motion.h2
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-center relative z-10 mb-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring" }}
                style={{
                    fontFamily: "var(--font-hk-grotesk-wide-extra-bold)",
                }}
            >
                <span className="bg-white bg-clip-text">EXPERIENCES</span>
            </motion.h2>

            <div className="relative flex flex-col items-center w-full">
                <div
                    className={`absolute hidden lg:block left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b ${
                        theme === "dark"
                            ? "from-[#52E7D6] via-white/30 to-[#7552E7]"
                            : "from-[#52E7D6] via-black/30 to-[#7552E7]"
                    } rounded-full -translate-x-1/2 z-0`}
                />
                <div className="w-full flex flex-col gap-4 sm:gap-6 lg:gap-12 z-10 relative px-2 sm:px-4">
                    {experiences.map((exp, idx) => (
                        <TimelineItem
                            exp={exp}
                            idx={idx}
                            key={idx}
                            onOpenModal={setModalExp}
                            theme={theme}
                        />
                    ))}
                </div>
            </div>

            <ExperienceModal
                exp={modalExp}
                open={!!modalExp}
                onClose={() => setModalExp(null)}
                theme={theme}
            />
        </section>
    );
}
