import { Paragraph } from "../shared/Paragraph";

/* Defining the props */
interface ServiceProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}
/* Service card component */
export const Service = ({ title, description, icon }: ServiceProps) => {
    return (
        <div className="p-5 sm:p-6 lg:p-6 rounded-xl border border-box-border bg-box-bg shadow-lg 
                        shadow-box-shadow relative overflow-hidden">
            {/* Icon section */}
            <div className="rounded-full bg-gray-300 dark:bg-gray-300 p-4 text-black
                             dark:text-heading-1 w-max relative">{icon}</div>
            {/* Title section */}
            <div className="mt-6 space-y-4 relative ">
                <h2 className="text-lg md:text-xl font-semibold text-heading-2">{title}</h2>
            </div>
            {/* Description section */}
            <div>
                <Paragraph>{description}</Paragraph>
            </div>
        </div>
    )
}
