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
            className="flex flex-col shrink-0 grow-0 flex-wrap items-center justify-center w-[17.5rem] md:w-[26rem] md:h-[19.5rem] p-4 bg-projects rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={props.img}
                className="w-72 h-[12rem] md:h-auto md:w-96 rounded-2xl"
            ></img>
            {hover && (
                <div className="absolute flex flex-col items-center justify-end bg-hover-bg-50 w-[17.5rem] h-[14rem] md:w-[26rem] md:h-[19.5rem] rounded-2xl">
                    <div className="flex items-center justify-center gap-3 mb-2 md:gap-8 md:mb-12">
                        <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 duration-300">
                            <a href={props.codeLink}>
                                <FaGithub className="md:w-8 md:h-8 h-6 w-6" />
                            </a>
                            <p className="text-xs md:text-base">Code</p>
                        </div>
                        <div className="flex flex-col items-center gap-1 opacity-70 hover:opacity-100 duration-300">
                            <a href={props.liveLink}>
                                <FaArrowUpRightFromSquare className="md:w-8 md:h-8 h-6 w-6" />
                            </a>
                            <p className="text-xs md:text-base">Live</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-3 md:gap-6 mb-4">
                        <div className="border-solid border-2 border-white p-1 rounded-lg">
                            <p className="text-xs md:text-base">
                                {props.framework
                                    ? "React"
                                    : "Vanilla JavaScript"}
                            </p>
                        </div>
                        <div className="border-solid border-2 border-white p-1 rounded-lg">
                            <p className="text-xs md:text-base">
                                {props.tailwind
                                    ? "Tailwind CSS"
                                    : "Vanilla CSS"}
                            </p>
                        </div>
                    </div>
                    <h3 className="md:text-3xl text-xl mb-5 md:mb-4">
                        {props.title}
                    </h3>
                </div>
            )}
        </div>
    );
}
