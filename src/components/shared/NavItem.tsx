/* Navitem props typescript interface */
interface NavItemProps {
    href: string;
    text: string;
}
/* NavItem component */
export const NavItem = ({ href, text }: NavItemProps) => {
    /* Return section */
    return (
        <li>
            <a
                href={href}
                className="duration-300 font-medium ease-linear hover:text-primary py-3">
                {text}
            </a>
        </li>
    )

}
