import type { Operation } from '../types/operators'
import { getButtonClass, handlePress } from '../utils/keypadHelper'
import { KeypadButton } from './KeypadButton'

interface Props {
    row: string[]
    pressDigit: (digit: string) => void
    pressOperator: (operator: Operation) => void
    pressEquals: () => void
}
export const KeypadRow = (props: Props) => (
    <div>
        {props.row.map((label) => (
            <KeypadButton key={label} label={label} className={getButtonClass(label)}
                onClick={() => handlePress(label, props.pressDigit, props.pressOperator, props.pressEquals)}
            />
        ))}
    </div>
)