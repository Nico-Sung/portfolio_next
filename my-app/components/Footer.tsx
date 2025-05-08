import handleScroll from "../utils/handleScroll";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center backdrop-blur-sm bg-black/5 p-4 lg:pb-4 md:pb-4 sm:pb-32 pb-32">
            <p className="text-3xl font-semibold">By Nicolas.</p>
            <div className="flex space-x-6 mt-4">
                <a
                    href="#about-me"
                    onClick={(e) => handleScroll(e, "about-me")}
                    className="hover:text-gray-400 z-50 font-bold transition duration-300 ease-in-out"
                >
                    About Me
                </a>
                <a
                    href="#projects"
                    onClick={(e) => handleScroll(e, "projects")}
                    className="hover:text-gray-400 z-50 font-bold transition duration-300 ease-in-out"
                >
                    Projects
                </a>
            </div>
            <p className="my-4 text-xs">
                © sungnicolas.fr. All rights reserved
            </p>
        </footer>
    );
}
