import { useState } from 'react'
import type { Operation } from '../types/operators'
import { canAppendDigit } from '../utils/validations'
import { calculate } from '../utils/calculate/calculate'

export const useCalculator = () => {
    //Estados iniciales de la calculadora
    const [displayValue, setDisplayValue] = useState('0') //Valor actual del display
    const [storedValue, setStoredValue] = useState<string | null>(null) //Valor almacenado
    const [operator, setOperator] = useState<Operation | null>(null) //Operador seleccionado
    const [waitingForOperand, setWaitingForOperand] = useState(false) //Estado de espera

    //Función para presionar un dígito
    const pressDigit = (digit: string) => {
        if (waitingForOperand) { //Si estamos esperando un operando, reemplazamos el valor actual
            setDisplayValue(digit)
            setWaitingForOperand(false)
            return
        }

        if (!canAppendDigit(displayValue)) { //Si no podemos agregar más dígitos el ingresado se descarta
            return
        }

        setDisplayValue((prev) => ( //Si el valor es distinto a 0 entonces se concatena
            prev === '0' ? digit : prev + digit
        ))
    }

    //Función para presionar un operador
    const pressOperator = (newOperator: Operation) => {
        if (storedValue && operator) { //Si hay un valor almacenado y un operador
            const result = calculate(storedValue, displayValue, operator) //Se calcula el resultado

            setDisplayValue(result) //Se actualiza el display
            setStoredValue(result) //Se actualiza el valor almacenado
        } else {
            setStoredValue(displayValue) //Se actualiza el valor almacenado
        }
        
        setOperator(newOperator)
        setWaitingForOperand(true)
    }

    //Función para presionar el botón de igual
    const pressEquals = () => {
        if (!storedValue || !operator) {
            return
        }

        const result = calculate(storedValue, displayValue, operator) //Se calcula el resultado

        setDisplayValue(result) //Se actualiza el display
        setStoredValue(null) //Se actualiza el valor almacenado
        setOperator(null) //Se actualiza el operador
        setWaitingForOperand(true) //Se actualiza el estado de espera
    }

    return {
        displayValue,
        pressDigit,
        pressOperator,
        pressEquals
    }
}