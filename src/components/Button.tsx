//Interfaz de las propiedades del botón
interface ButtonProps {
    label: string
    onClick: () => void
    className?: string
}
export const Button = ({label, onClick, className}: ButtonProps) => (
    <button onClick={onClick} className={className}>
        {label}
    </button>
)