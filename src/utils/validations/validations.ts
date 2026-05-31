export const canAppendDigit = (display: string) =>
    display.length < 9

export const validateResult = (value: number): string => {
    if (value < 0) {
        return 'ERROR'
    }

    if (value > 999999999) {
        return 'ERROR'
    }

    return formatResult(value)
}

//Función para formatear el resultado
const formatResult = (value: number): string => {
    const result = value.toString()

    if (result.length <= 9) {
        return result
    }

    return result.slice(0, 9)
}