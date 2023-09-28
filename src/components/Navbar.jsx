import AnchorLink from "react-anchor-link-smooth-scroll";
import NavListItem from "./NavListItem";
import { BsSunFill } from "react-icons/bs"
import { BsMoonFill } from "react-icons/bs"

export default function Navbar(props){
    function themeChanger(){
        props.setStyles(props.styles.id==="light" ? "dark" : "light")
    }

    return(
        <nav className={`font-jetbrains flex items-center justify-between px-14 py-6 ${props.styles.background_light} ${props.styles.text} fixed top-0 right-0 left-0 z-50`}>
            <h3 className={`font-bold text-2xl cursor-pointer ${props.styles.hover} duration-150`}>
                <AnchorLink href="#home"><span>Maga.dev</span></AnchorLink>
            </h3>
            <ul className="flex items-center justify-between gap-10">
                <NavListItem link="#home" title="Home" styles={props.styles}/>
                <NavListItem link="#about" title="About Me" styles={props.styles}/>
                <NavListItem link="#skills" title="Skills" styles={props.styles}/>
                <NavListItem link="#projects" title="Projects" styles={props.styles}/>
                <NavListItem link="#contact" title="Contact" styles={props.styles}/>
            </ul>
            <div className={`flex items-center justify-between ${props.styles.background_dark} w-16 h-8 p-2 rounded-2xl`}>
                <button><BsSunFill className="fill-gold"/></button>
                <div className="w-5 h-5 bg-light-gray absolute rounded-full"></div>
                <button><BsMoonFill className="fill-muted-gray" onClick={themeChanger}/></button>
            </div>
        </nav>
    )
}