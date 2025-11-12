
interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
    /* Return section */
    return (
        <p className={`text-heading-3 md:text-lg ${className}`} >
            {children}
        </p>
    )
}


