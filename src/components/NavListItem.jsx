import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavListItem(props){
    return(
        <li className="border-b-2 border-transparent duration-150 hover:text-navy-blue hover:border-b-2 hover:border-navy-blue">
            <AnchorLink href={props.link}><button>{props.title}</button></AnchorLink>
        </li>
    )
}