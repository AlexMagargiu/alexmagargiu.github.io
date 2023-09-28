import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavListItem(props){
    return(
        <li className={`border-b-2 border-transparent duration-150 ${props.styles.hover} hover:border-b-2 ${props.styles.hover_border}`}>
            <AnchorLink href={props.link}><span>{props.title}</span></AnchorLink>
        </li>
    )
}