/* Import section */
import { Navbar } from "./elements/Navbar";
import { Footer } from "./elements/Footer";
import { useEffect } from "react";
/* Typescript interface */
interface layoutprops {
    title: string;
    children: React.ReactNode;
}
/* Layout Component */
export const Layout = ({ title, children }: layoutprops) => {
    /* useEffect */
    /* Title switch */
    useEffect(() => {
        document.title = title
    }, [title])
    /* Return section */
    return (
        <>
            {/* Navigation bar */}
            <Navbar />
            {/* Children Component */}
            <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">
                {children}
            </main>
            {/* Footer Component */}
            <Footer />
        </>
    )
}



