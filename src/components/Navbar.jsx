import AnchorLink from "react-anchor-link-smooth-scroll";
import NavListItem from "./NavListItem";

export default function Navbar(){

    return(
        <nav className="font-jetbrains flex items-center justify-between px-14 py-6 bg-light-gray text-navy fixed top-0 right-0 left-0 z-50">
            <h3 className="font-bold text-2xl cursor-pointer hover:text-navy-blue duration-150">
                <AnchorLink href="#home"><button>Maga.dev</button></AnchorLink>
            </h3>
            <ul className="flex items-center justify-between gap-10">
                <NavListItem link="#home" title="Home"/>
                <NavListItem link="#about" title="About Me"/>
                <NavListItem link="#skills" title="Skills"/>
                <NavListItem link="#projects" title="Projects"/>
                <NavListItem link="#contact" title="Contact"/>
            </ul>
            {/* Theme toggler */}
            <div></div>
        </nav>
    )
}