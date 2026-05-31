import { it, expect } from 'vitest'
import { validateResult, canAppendDigit } from './validations'

it('validateResult retorna "ERROR" para números negativos', () => {
    expect(validateResult(-1)).toBe('ERROR')
})

it('validateResult retorna "ERROR" para números mayores a 1000000000', () => {
    expect(validateResult(1000000001)).toBe('ERROR')
})

it('validateResult retorna "ERROR" para Infinity', () => {
    expect(validateResult(Infinity)).toBe('ERROR')
})

it('validateResult retorna el número como string para números válidos', () => {
    expect(validateResult(10)).toBe('10')
    expect(validateResult(0)).toBe('0')
    expect(validateResult(999999999)).toBe('999999999')
})

it('canAppendDigit retorna true para inputs válidos', () => {
    expect(canAppendDigit('123')).toBe(true)
    expect(canAppendDigit('0')).toBe(true)
    expect(canAppendDigit('999')).toBe(true)
})

it('canAppendDigit retorna false para inputs inválidos', () => {
    expect(canAppendDigit('12345678901')).toBe(false)
})