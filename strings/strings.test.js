import { toUpper, toLower,len } from "./strings";

describe('strings testing', () => {
    test('toUpper', () => {
        const str = 'test'
        const result = toUpper(str)
        expect(result).toBe('TEST')
    })
    test('toLower', () => {
        const str = 'TEST'
        const result = toLower(str)
        expect(result).toBe('test')
    })
    test('len', () => {
        const str = 'test'
        const result = len(str)
        expect(result).toBe(4)
    })
})