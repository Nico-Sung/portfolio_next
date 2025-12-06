import { IconType } from "react-icons";

export interface Technology {
    name: string;
    icon: IconType;
    color?: string;
}

export interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    github: string;
    technologies: Technology[];
}

export interface Experience {
    title: string;
    date: string;
    summary: string;
    details: string[];
    side?: "left" | "right";
}

export interface Skill {
    name: string;
    icon: IconType;
}
