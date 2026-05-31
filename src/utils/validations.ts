export const canAppendDigit = (display: string) =>
    display.length < 9

export const validateResult = (value: number): string => {
    if (value < 0) {
        return 'ERROR'
    }

    if (value > 999999999) {
        return 'ERROR'
    }

    return value.toString()
}