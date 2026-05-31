import { expect, it } from 'vitest'
import { calculate } from './calculate'

it('suma números', () => {
    expect(
        calculate('2', '3', '+')
    ).toBe('5')
})

it('resta números', () => {
    expect(
        calculate('10', '5', '-')
    ).toBe('5')
})

it('multiplica números', () => {
    expect(
        calculate('2', '3', '*')
    ).toBe('6')
})

it('divide números', () => {
    expect(
        calculate('10', '5', '/')
    ).toBe('2')
})

it('obtiene el módulo de números', () => {
    expect(
        calculate('10', '5', '%')
    ).toBe('0')
})

it('retorna ERROR para resultados negativos', () => {
    expect(
        calculate('2', '5', '-')
    ).toBe('ERROR')
})

it('retorna ERROR para números demasiado grandes', () => {
    expect(
        calculate('1000000000', '2', '+')
    ).toBe('ERROR')
})

it('retorna ERROR para división por cero', () => {
    expect(
        calculate('10', '0', '/')
    ).toBe('ERROR')
})
