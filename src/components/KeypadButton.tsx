import { Button } from './Button'
interface Props {
    label: string
    onClick: () => void
    className: string
}

export const KeypadButton = ({label, onClick, className}: Props) => (
    <Button
        label={label}
        onClick={onClick}
        className={className}
    />
)