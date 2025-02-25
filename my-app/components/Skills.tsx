import React from "react";
import Image from "next/image";

export default function Skills() {
    const skills = [
        { name: "JavaScript", image: "/skills/js.png" },
        { name: "TypeScript", image: "/path/to/typescript.png" },
        { name: "React", image: "/path/to/react.png" },
        { name: "Node.js", image: "/path/to/nodejs.png" },
    ];

    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>
                        <Image
                            width={20}
                            height={20}
                            className="mr-2"
                            src={skill.image}
                            alt={skill.name}
                        />
                        {skill.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
