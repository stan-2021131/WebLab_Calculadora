import type { Operation } from '../types/operators'

export const isOperator = (label: string) =>
    ['+', '-', '*', '/', '%'].includes(label)

export const getButtonClass = (label: string) =>
    isOperator(label) || label === '='
        ? 'btn-operator'
        : 'btn-number'

export const handlePress = (
    label: string,
    pressDigit: (digit: string) => void,
    pressOperator: (operator: Operation) => void,
    pressEquals: () => void,
) => {
    if (label === '=') return pressEquals()

    if (isOperator(label)) {
        return pressOperator(label as Operation)
    }

    pressDigit(label)
}