/* ButtonProps Typescript Typescript */
interface ButtonProps {
    href: string;
    text: string;
    className?: string;

}
/* BtnLink component */
export const Button = ({ href, text, className = "" }: ButtonProps) => {
    /* Return section */
    return (
        <a
            href={href}
            className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border dark:bg-violet-600 cursor-pointer
            ${className}`}

        >
            <span className="relative z-10 text-white">{text}</span>
        </a>
    )

}

