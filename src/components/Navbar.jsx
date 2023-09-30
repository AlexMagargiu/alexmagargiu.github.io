import AnchorLink from "react-anchor-link-smooth-scroll";
import NavListItem from "./NavListItem";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar(props) {
    const [open, setOpen] = useState(false);

    function toggleNavbar() {
        setOpen(!open);
    }

    function NavListItems() {
        return (
            <>
                <NavListItem link="#home" title="Home" />
                <NavListItem link="#about" title="About Me" />
                <NavListItem link="#skills" title="Skills" />
                <NavListItem link="#projects" title="Projects" />
                <NavListItem link="#contact" title="Contact" />
            </>
        );
    }

    return (
        <div className="fixed w-full z-30">
            <nav className="font-jetbrains flex items-center justify-between bg-nav-bg text-primary-text p-6 md:px-14 md:py-6">
                <h3 className="font-bold text-2xl cursor-pointer duration-150 hover:text-hover-text">
                    <AnchorLink href="#home">
                        <span>Maga.dev</span>
                    </AnchorLink>
                </h3>
                <ul className="md:flex items-center justify-between gap-10 hidden">
                    <NavListItems />
                </ul>
                <div className="flex items-center justify-center gap-4">
                    <ThemeSwitcher
                        setStyles={props.setStyles}
                        className="self-end"
                    />
                    <div className="md:hidden">
                        <RiMenu2Line
                            onClick={toggleNavbar}
                            className="w-8 h-8"
                        />
                    </div>
                </div>
            </nav>
            {open && (
                <div className="flex flex-col">
                    <NavListItems />
                </div>
            )}
        </div>
    );
}
