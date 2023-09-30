import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
    return (
        <section
            className="flex flex-col items-center justify-center bg-dark-bg text-svg font-jetbrains"
            id="skills"
        >
            <div className="flex items-center flex-wrap md:flex-nowrap gap-4 md:gap-0 justify-center md:justify-around w-full py-8 md:px-12 md:py-28">
                <div className="flex flex-col items-center justify-center gap-2 w-36 md:w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaHtml5 className="h-12 w-12 md:h-16 md:w-16" />
                    <h4 className="text-base md:text-2xl">HTML</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-36 md:w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaCss3Alt className="h-12 w-12 md:h-16 md:w-16" />
                    <h4 className="text-base md:text-2xl">CSS</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-36 md:w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaJs className="h-12 w-12 md:h-16 md:w-16" />
                    <h4 className="text-base md:text-2xl">JavaScript</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-36 md:w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaReact className="h-12 w-12 md:h-16 md:w-16" />
                    <h4 className="text-base md:text-2xl">React</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-36 md:w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <SiTailwindcss className="h-12 w-12 md:h-16 md:w-16" />
                    <h4 className="text-base md:text-2xl">Tailwind CSS</h4>
                </div>
            </div>
        </section>
    );
}
