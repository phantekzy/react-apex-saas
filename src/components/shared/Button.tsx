/* ButtonProps Typescript Typescript */
interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}
/* BtnLink component */
export const Button = ({ children, onClick, className = "" }: ButtonProps) => {
    /* Return section */
    return (
        <button onClick={onClick} className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 ${className}`}>
            {children}
        </button>
    )

}

