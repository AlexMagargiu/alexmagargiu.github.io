import { FaHtml5 } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { FaJs } from "react-icons/fa"
import { FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

export default function Skills(){
    return(
        <section className="flex flex-col items-center justify-center bg-navy text-light-gray font-jetbrains" id="skills">
            <div className="flex items-center justify-around w-full px-12 py-28">
                <div className="flex flex-col items-center justify-center gap-2 w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaHtml5 className="h-16 w-16" />
                    <h4 className="text-2xl">HTML</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaCss3Alt className="h-16 w-16" />
                    <h4 className="text-2xl">CSS</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaJs className="h-16 w-16" />
                    <h4 className="text-2xl">JavaScript</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <FaReact className="h-16 w-16" />
                    <h4 className="text-2xl">React</h4>
                </div>
                <div className="flex flex-col items-center justify-center gap-2 w-44 hover:translate-y-[-1rem] duration-500 ease-in-out">
                    <SiTailwindcss className="h-16 w-16" />
                    <h4 className="text-2xl">Tailwind CSS</h4>
                </div>
            </div>
        </section>
    )
}