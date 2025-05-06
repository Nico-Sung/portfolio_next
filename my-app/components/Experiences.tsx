import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, Users } from "lucide-react";

type Experience = {
    title: string;
    date: string;
    summary: string;
    details: string[];
    side?: "left" | "right";
};

const experiences: Experience[] = [
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
        side: "left",
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
    },
];

function ExperienceModal({
    exp,
    open,
    onClose,
}: {
    exp: Experience | null;
    open: boolean;
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {open && exp && (
                <>
                    {/* Overlay avec centrage flex */}
                    <motion.div
                        className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    >
                        {/* Modal centré */}
                        <motion.div
                            className="w-[90vw] max-w-lg bg-gradient-to-br from-[#181a2e] to-[#2E8177]/80 border border-white/10 rounded-2xl shadow-2xl p-8 backdrop-blur-lg relative"
                            initial={{ opacity: 0, scale: 0.85, y: 40 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.85, y: 40 }}
                            transition={{ duration: 0.25, type: "spring" }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-white text-xl font-bold hover:text-[#52E7D6] transition"
                                onClick={onClose}
                                aria-label="Fermer"
                            >
                                ×
                            </button>
                            <h3 className="text-2xl font-bold mb-2 text-white">
                                {exp.title}
                            </h3>
                            <span className="inline-block bg-white/10 text-xs text-white px-3 py-1 rounded-full mb-4 font-semibold tracking-wide">
                                {exp.date}
                            </span>
                            <ul className="list-disc list-inside text-base text-gray-100 space-y-2 pl-2">
                                {exp.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
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
}: {
    exp: Experience;
    idx: number;
    onOpenModal: (exp: Experience) => void;
}) {
    const isLeft = exp.side === "left";
    const accent = isLeft ? "#52E7D6" : "#7552E7";
    const cardBg = isLeft
        ? "from-[#1a2a2e]/80 to-[#2E8177]/60"
        : "from-[#221a2e]/80 to-[#412E81]/60";

    return (
        <div className="w-full flex flex-col lg:flex-row items-center relative">
            {/* Left side */}
            <div
                className={`hidden lg:flex w-1/2 justify-${
                    isLeft ? "end" : "start"
                } pr-8 pl-8`}
            >
                {isLeft && (
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`max-w-xl w-full`}
                    >
                        <div
                            className={`bg-gradient-to-br ${cardBg} backdrop-blur-md bg-opacity-60 border border-white/10 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            <h4 className="text-xl font-bold mb-1 text-white">
                                {exp.title}
                            </h4>
                            <span className="inline-block bg-white/10 text-xs text-white px-3 py-1 rounded-full mb-3 font-semibold tracking-wide">
                                {exp.date}
                            </span>
                            <p className="text-gray-200 mb-2 text-sm">
                                {exp.summary}
                            </p>
                            <button
                                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white hover:bg-[#52E7D6] hover:text-black transition mb-2"
                                onClick={() => onOpenModal(exp)}
                            >
                                Plus
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center z-10">
                <motion.span
                    className="w-6 h-6 rounded-full border-4 border-black"
                    style={{
                        background: accent,
                        boxShadow: `0 0 0 4px ${accent}33`,
                    }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: idx * 0.1,
                    }}
                />
                {idx < experiences.length - 1 && (
                    <div className="w-1 h-32 bg-gradient-to-b from-white/20 to-transparent" />
                )}
            </div>
            {/* Right side */}
            <div
                className={`hidden lg:flex w-1/2 justify-${
                    !isLeft ? "start" : "end"
                } pl-8 pr-8`}
            >
                {!isLeft && (
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className={`max-w-xl w-full`}
                    >
                        <div
                            className={`bg-gradient-to-br ${cardBg} backdrop-blur-md bg-opacity-60 border border-white/10 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                        >
                            <h4 className="text-xl font-bold mb-1 text-white">
                                {exp.title}
                            </h4>
                            <span className="inline-block bg-white/10 text-xs text-white px-3 py-1 rounded-full mb-3 font-semibold tracking-wide">
                                {exp.date}
                            </span>
                            <p className="text-gray-200 mb-2 text-sm">
                                {exp.summary}
                            </p>
                            <button
                                className="text-xs px-3 py-1 rounded-full bg-white/10 text-white hover:bg-[#7552E7] hover:text-black transition mb-2"
                                onClick={() => onOpenModal(exp)}
                            >
                                Plus
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
            {/* Mobile version: always full width */}
            <div className="lg:hidden w-full my-8">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`bg-gradient-to-br ${cardBg} backdrop-blur-md bg-opacity-60 border border-white/10 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300`}
                >
                    <h4 className="text-xl font-bold mb-1 text-white">
                        {exp.title}
                    </h4>
                    <span className="inline-block bg-white/10 text-xs text-white px-3 py-1 rounded-full mb-3 font-semibold tracking-wide">
                        {exp.date}
                    </span>
                    <p className="text-gray-200 mb-2 text-sm">{exp.summary}</p>
                    <button
                        className={`text-xs px-3 py-1 rounded-full bg-white/10 text-white hover:bg-[${accent}] hover:text-black transition mb-2`}
                        onClick={() => onOpenModal(exp)}
                    >
                        Plus
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default function Experiences() {
    const [modalExp, setModalExp] = useState<Experience | null>(null);

    return (
        <section
            id="experiences"
            className="w-11/12 sm:w-5/6 mx-auto py-16 px-4 sm:px-12"
        >
            <motion.h2
                className="text-4xl sm:text-6xl font-extrabold mb-12 text-center"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ fontFamily: "var(--font-hk-grotesk-wide-extra-bold)" }}
            >
                EXPERIENCES
            </motion.h2>
            <div className="relative flex flex-col items-center">
                <div className="absolute hidden lg:block left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#52E7D6] via-white/20 to-[#7552E7] rounded-full -translate-x-1/2 z-0" />
                <div className="w-full flex flex-col gap-8 z-10">
                    {experiences.map((exp, idx) => (
                        <TimelineItem
                            exp={exp}
                            idx={idx}
                            key={idx}
                            onOpenModal={setModalExp}
                        />
                    ))}
                </div>
            </div>
            <ExperienceModal
                exp={modalExp}
                open={!!modalExp}
                onClose={() => setModalExp(null)}
            />
        </section>
    );
}
