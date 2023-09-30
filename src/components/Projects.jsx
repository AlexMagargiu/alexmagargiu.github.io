import { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Projects(props) {
    const [hover, setHover] = useState(false);

    function handleMouseEnter() {
        setHover(true);
    }

    function handleMouseLeave() {
        setHover(false);
    }

    return (
        <div
            className="flex flex-col flex-wrap items-center justify-center w-80 md:w-[26rem] md:h-[19.5rem] p-4 bg-projects rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={props.img}
                className="w-72 md:w-96 rounded-2xl relative"
            ></img>
            {hover && (
                <div className="absolute flex flex-col items-center justify-end bg-hover-bg-50 w-[17.5rem] md:w-[26rem] md:h-[19.5rem] rounded-2xl">
                    <div className="flex items-center justify-center gap-8 mb-12">
                        <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 duration-300">
                            <a href={props.codeLink}>
                                <FaGithub className="w-8 h-8" />
                            </a>
                            <p>Code</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 duration-300">
                            <a href={props.liveLink}>
                                <FaArrowUpRightFromSquare className="w-8 h-8" />
                            </a>
                            <p>Live</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-6 mb-4">
                        <div className="border-solid border-2 border-white p-1 rounded-lg">
                            <p>
                                {props.framework
                                    ? "React"
                                    : "Vanilla JavaScript"}
                            </p>
                        </div>
                        <div className="border-solid border-2 border-white p-1 rounded-lg">
                            <p>
                                {props.tailwind
                                    ? "Tailwind CSS"
                                    : "Vanilla CSS"}
                            </p>
                        </div>
                    </div>
                    <h3 className="text-3xl mb-4">{props.title}</h3>
                </div>
            )}
        </div>
    );
}
