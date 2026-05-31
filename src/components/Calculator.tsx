import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'

export const Calculator = () => {
    const calculator = useCalculator()

    return (
        <div>
            <Display value={calculator.displayValue} />
            <Keypad {...calculator} />
        </div>
    )
}