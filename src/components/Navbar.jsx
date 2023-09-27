import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar(){
    return(
        <nav className="font-jetbrains flex items-center justify-between px-14 py-6 bg-light-gray text-navy fixed top-0 right-0 left-0 z-50">
            <h3 className="font-bold text-2xl cursor-pointer hover:text-navy-blue">Maga.dev</h3>
            <ul className="flex items-center justify-between gap-10">
                <li className="cursor-pointer hover:text-navy-blue">
                    <AnchorLink href="#home"><button>Home</button></AnchorLink>
                </li>
                <li className="cursor-pointer hover:text-navy-blue">
                    <AnchorLink href="#about"><button>About</button></AnchorLink>
                </li>
                <li className="cursor-pointer hover:text-navy-blue">
                    <AnchorLink href="#skills"><button>Skills</button></AnchorLink>
                </li>
                <li className="cursor-pointer hover:text-navy-blue">
                    <AnchorLink href="#projects"><button>Projects</button></AnchorLink>
                </li>
                <li className="cursor-pointer hover:text-navy-blue">
                    <AnchorLink href="#contact"><button>Contact</button></AnchorLink>
                </li>
            </ul>
            {/* Theme toggler */}
            <div></div>
        </nav>
    )
}