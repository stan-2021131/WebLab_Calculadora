import { useCalculator } from '../hooks/useCalculator'
import { Display } from './Display'
import { Keypad } from './Keypad'
import '../styles/calculadora.css'

export const Calculator = () => {
    const calculator = useCalculator()

    return (
        <div className="calculadora">
            <Display value={calculator.displayValue} />
            <Keypad {...calculator} />
        </div>
    )
}