/* Import section */
import { Container } from "../shared/Container"
import { NavItem } from "../shared/NavItem"
import { navItems } from "./Navbar"
/* Footer Component */
export const Footer = () => {
    return <footer className="relative pt-10 rounded-t-3xl bg-box-bg  ">
        <Container className="pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center ">
                {/* Logo image */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img
                        src="logo.png"
                        className="w-10 h-10 "
                    />
                    <span className="text-xl font-semibold text-heading-1 ">
                        ApexVerse
                    </span>

                </div>
                <ul className="flex gap-6 text-heading-1 ">
                    {navItems.map((item, key) => (
                        <NavItem key={key} href="{item.href}" text={item.text} />
                    ))}
                </ul>
            </div>
        </Container>
    </footer>
}
