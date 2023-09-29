import AnchorLink from "react-anchor-link-smooth-scroll";

/* li = props.styles.hover props.styles.hover_border */

export default function NavListItem(props) {
    return (
        <li className="border-b-2 border-transparent duration-150 hover:border-b-2 hover:text-hover-text hover:border-hover-text">
            <AnchorLink href={props.link}>
                <span>{props.title}</span>
            </AnchorLink>
        </li>
    );
}
