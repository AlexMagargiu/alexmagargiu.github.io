import AnchorLink from "react-anchor-link-smooth-scroll";
import NavListItem from "./NavListItem";
import { BsSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { RiMenu2Line } from "react-icons/ri";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function Navbar(props) {
    function themeChanger() {
        const cookies = new Cookies();
        props.setStyles(cookies.get("theme") === "light" ? "dark" : "light");
    }

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

    /* nav = props.styles.background_light props.styles.text
    nav > h3 = props.styles.hover
    div > button = props.styles.background_dark */

    return (
        <>
            <nav className="font-jetbrains flex items-center justify-between bg-nav-bg text-primary-text p-6 md:px-14 md:py-6 fixed z-30 w-full">
                <h3 className="font-bold text-2xl cursor-pointer duration-150 hover:text-hover-text">
                    <AnchorLink href="#home">
                        <span>Maga.dev</span>
                    </AnchorLink>
                </h3>
                <ul className="md:flex items-center justify-between gap-10 hidden">
                    <NavListItems />
                </ul>
                <div className="md:flex hidden items-center justify-between w-16 h-8 p-2 rounded-2xl bg-dark-bg">
                    <button>
                        <BsSunFill className="fill-sun-fill" />
                    </button>
                    <div className="w-5 h-5 bg-nav-bg absolute rounded-full"></div>
                    <button>
                        <BsMoonFill
                            className="fill-moon-fill"
                            onClick={themeChanger}
                        />
                    </button>
                </div>
                <div className="md:hidden">
                    <RiMenu2Line onClick={toggleNavbar} className="w-8 h-8" />
                </div>
            </nav>
            {open && (
                <div className="flex flex-col">
                    <NavListItems />
                </div>
            )}
        </>
    );
}
