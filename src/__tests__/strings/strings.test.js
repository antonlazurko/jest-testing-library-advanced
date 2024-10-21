import { toUpper, toLower, len } from "../../strings.js";

describe('strings testing', () => {
    beforeAll(() => {
        console.log('beforeAll');
    })
    beforeEach(() => {
        console.log('beforeEach');
    })
    afterAll(() => {
        console.log('afterAll');
    })
    afterEach(() => {
        console.log('afterEach');
    })
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
    test.todo('toLower with toUpper')
})