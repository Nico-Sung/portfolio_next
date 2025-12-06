import { Experience, Project, Skill } from "@/types";
import {
    FaCode,
    FaDatabase,
    FaFileCode,
    FaJs,
    FaLayerGroup,
    FaMobileAlt,
    FaNetworkWired,
    FaPalette,
    FaServer,
    FaTools,
} from "react-icons/fa";
import {
    SiAdobeaftereffects,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobepremierepro,
    SiBlender,
    SiBootstrap,
    SiCss3,
    SiExpress,
    SiFigma,
    SiHtml5,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPrisma,
    SiPython,
    SiRaspberrypi,
    SiReact,
    SiSymfony,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

export const HERO_TECHNOLOGIES = [
    { name: "#Frontend", icon: FaCode, color: "#61DAFB" },
    { name: "#Backend", icon: FaServer, color: "#339933" },
    { name: "#Full Stack", icon: FaLayerGroup, color: "#000000" },
    { name: "#API", icon: FaNetworkWired, color: "#000000" },
    { name: "#Database", icon: FaDatabase, color: "#4479A1" },
    { name: "#ORM", icon: FaTools, color: "#2D3748" },
    { name: "#UI/UX", icon: FaPalette, color: "#F24E1E" },
    { name: "#Responsive", icon: FaMobileAlt, color: "#06B6D4" },
    { name: "#TypeScript", icon: FaFileCode, color: "#3178C6" },
    { name: "#JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "#HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "#CSS3", icon: SiCss3, color: "#1572B6" },
    { name: "#Python", icon: SiPython, color: "#3776AB" },
];

export const PROJECTS: Project[] = [
    {
        title: "Propulse App",
        image: "/projects/projet6/Capture d’écran 2025-12-06 à 22.34.24.png",
        description:
            "A Kanban-style web application designed to help people organize and track their job applications. Users can add, move, and manage their applications to optimize their job search.",
        github: "https://github.com/Nico-Sung/propulse-app",
        website: "https://propulse-app.vercel.app/",
        id: "1",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Supabase", icon: FaDatabase },
        ],
    },
    {
        title: "Harry Potter Card",
        image: "/projects/projet1/capture-ecran-2025-02-26-11-40-48.png",
        description:
            "A website allowing you to collect cards from the Harry Potter universe. This project was carried out with Node.js, Express.js and Prisma.",
        github: "https://github.com/Nico-Sung/Harry_Potter_Card",
        id: "6",
        technologies: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Prisma", icon: SiPrisma },
            { name: "HTML", icon: SiHtml5 },
            { name: "CSS", icon: SiCss3 },
        ],
    },
    {
        title: "Santa Ski",
        image: "/projects/projet2/capture-ecran-2025-02-26-11-42-55.png",
        description:
            "A school project which aims to encourage disadvantaged children to go on ski holidays for free. This project combines a dynamic frontend and a robust backend to provide an immersive experience.",
        github: "https://github.com/Nico-Sung/SantaSki",
        id: "2",
        technologies: [
            { name: "React", icon: SiReact },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "TypeScript", icon: SiTypescript },
        ],
    },
    {
        title: "Pokemon Fight",
        image: "/projects/projet3/capture-ecran-2025-02-26-11-49-33.png",
        description:
            "A little project to learn PHP. It includes a PHP interface allowing the display of Pokémon with their characteristics.",
        github: "https://github.com/Nico-Sung/pokemon_pdo",
        id: "3",
        technologies: [
            { name: "PHP", icon: SiPhp },
            { name: "MySQL", icon: SiMysql },
        ],
    },
    {
        title: "To do list",
        image: "/projects/projet4/capture-ecran-2025-02-26-13-32-09.png",
        description:
            "This project is a task management application (To-Do List) built in TypeScript",
        github: "https://github.com/Nico-Sung/todolist_ts",
        id: "4",
        technologies: [
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: SiReact },
        ],
    },
    {
        title: "IFT",
        image: "/projects/projet5/capture-ecran-2025-02-26-13-53-54.png",
        description:
            "Team project with the IFT of De Vinci (Institute for Future Technologies) which aims to develop a virtual gallery presenting technological innovations with a digital label system.",
        github: "https://github.com/Nico-Sung/BAP_18",
        id: "5",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Node.js", icon: SiNodedotjs },
            { name: "Express.js", icon: SiExpress },
            { name: "Prisma", icon: SiPrisma },
        ],
    },
];

export const EXPERIENCES: Experience[] = [
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

export const WEB_DEV_SKILLS: Skill[] = [
    { name: "HTML", icon: SiHtml5 },
    { name: "CSS", icon: SiCss3 },
    { name: "JavaScript", icon: FaJs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "Python", icon: SiPython },
    { name: "MySQL", icon: SiMysql },
    { name: "Symfony", icon: SiSymfony },
    { name: "Prisma", icon: SiPrisma },
    { name: "Raspberry Pi", icon: SiRaspberrypi },
];

export const WEB_DESIGN_SKILLS: Skill[] = [
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Blender", icon: SiBlender },
    { name: "Figma", icon: SiFigma },
    { name: "Illustrator", icon: SiAdobeillustrator },
    { name: "Photoshop", icon: SiAdobephotoshop },
    { name: "Premiere Pro", icon: SiAdobepremierepro },
    { name: "After Effects", icon: SiAdobeaftereffects },
];
