import type { Operation } from '../../types/operators'
import {validateResult} from '../validations/validations'

export const calculate = (
    left: string,
    right: string,
    operation: Operation,
): string => {
    const numLeft = Number(left)
    const numRight = Number(right)

    switch (operation) {
        case '+':
            return validateResult(numLeft + numRight)
        case '-':
            return validateResult(numLeft - numRight)
        case '*':
            return validateResult(numLeft * numRight)
        case '/':
            if (numRight === 0) {
                return 'ERROR'
            }
            return validateResult(numLeft / numRight)
        case '%':
            return validateResult(numLeft % numRight)
        default:
            return '0'
    }
}