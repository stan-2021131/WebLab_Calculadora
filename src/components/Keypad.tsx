import type { Operation } from '../types/operators'
import { BUTTON_LAYOUT } from '../utils/buttons'
import { KeypadRow } from './KeypadRow'
import '../styles/keypad.css'
interface Props {
    pressDigit: (digit: string) => void
    pressOperator: (operator: Operation) => void
    pressEquals: () => void
}
export const Keypad = (props: Props) => (
    <div className='keypad'>
        {BUTTON_LAYOUT.map((row) => (
            <KeypadRow key={row.join('')} row={row} {...props}/>
        ))}
    </div>
)