import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center justify-center bg-dark-bg font-jetbrains text-footer-text p-10 md:p-20  gap-6 md:gap-12">
            <div className="flex gap-8">
                <a href="https://github.com/AlexMagargiu">
                    <FaGithub className="w-10 h-10 hover:scale-125 duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/alexandru-magargiu-b47833292/">
                    <FaLinkedin className="w-10 h-10 hover:scale-125 duration-300" />
                </a>
            </div>
            <p className="text-center">
                All rights reserved © 2023 Magargiu Alexandru Razvan
            </p>
        </footer>
    );
}
