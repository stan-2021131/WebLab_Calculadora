import type { Operation } from '../types/operators'
import { getButtonClass, handlePress } from '../utils/keypadHelper'
import { KeypadButton } from './KeypadButton'
import '../styles/keypad.css'
interface Props {
    row: string[]
    pressDigit: (digit: string) => void
    pressOperator: (operator: Operation) => void
    pressEquals: () => void 
    pressDecimal: () => void
}
export const KeypadRow = (props: Props) => (
    <div className='keypad-row'>
        {props.row.map((label) => ( <KeypadButton key={label} label={label} className={getButtonClass(label)}
                onClick={() => handlePress(label, props.pressDigit, props.pressOperator, 
                    props.pressEquals, props.pressDecimal)}
            />
        ))}
    </div>
)