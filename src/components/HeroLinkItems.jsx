import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

export default function HeroLinkItems() {
    return (
        <span className="flex items-center justify-center md:justify-start gap-3 mb-2">
            <a href="https://github.com/AlexMagargiu" target="_blank">
                <FaGithub className="h-7 w-7 hover:fill-hover-text hover:duration-200" />
            </a>
            <a
                href="https://www.linkedin.com/in/alexandru-magargiu-b47833292/"
                target="_blank"
            >
                <FaLinkedinIn className="h-7 w-7 hover:fill-hover-text hover:duration-200" />
            </a>
            <div className="flex items-center gap-2 border-2 border-dark-bg rounded-3xl px-3 py-1">
                <a href="mailto:alexandrumaga2000@gmail.com">
                    <FaRegEnvelope className="h-5 w-5 hover:fill-hover-text hover:duration-200" />
                </a>
                <p>alexandrumaga2000@gmail.com</p>
            </div>
        </span>
    );
}
