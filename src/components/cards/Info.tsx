import { Paragraph } from "../shared/Paragraph";

/* Interface InfoProps */
interface InfoProps {
    title: string;
    description: string;
    children?: React.ReactNode;
}
/* Info card component */
export const Info = ({ title, description, children }: InfoProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-6 rounded-xl border border-box-border bg-box-bg shadow-lg 
                             shadow-box-shadow relative overflow-hidden">
            <div className=" rounded-full bg-gray dark:bg-gray-300 p-3 mb-4 text-black w-max relative">
                {children}
            </div>
            <h2 className="text-heading-2 w-max relative font-semibold md:text-xl">
                {title}
            </h2>
            <Paragraph>
                {description}
            </Paragraph>
        </div>
    )
}
