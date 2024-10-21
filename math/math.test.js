import { multiply } from './math.js'

describe('math testing', () => {
    describe('multiply', () => {
        test('should multiply two positive numbers', () => {
            const expectedResult = 6
            const res = multiply(2, 3)
            expect(res).toBe(expectedResult)
        })
        test('should multiply negative and positive numbers', () => {
            const expectedResult = -6
            const res = multiply(-2, 3)
            expect(res).toBe(expectedResult)
        })
        test('should multiply negative and negative numbers', () => {
            const expectedResult = 6
            const res = multiply(-2, -3)
            expect(res).toBe(expectedResult)
        })
        test('should not be 7 when multiplying 2 and 3', () => {
            const expectedResult = 7
            const res = multiply(2, 3)
            expect(res).not.toBe(expectedResult)
        })
    })
    describe('two objects equal', () => {
        test('two objects should be equal', () => {
            const obj1 = {a: 1, b: 2}
            const obj2 = {a: 1, b: 2}
            expect(obj1).toEqual(obj2)
        })
    })

    describe('array testing', () => {
        const arr = [1, 2, 3]
        test('check length of array', () => {
            expect(arr).toHaveLength(3)
        })
        test('check is value in array', () => {
            expect(arr).toContain(2)
        })
        test('check is`not value in array', () => {
            expect(arr).not.toContain(5)
        })
        test('check is`not value on index in array is undefined', () => {
            const index = 9
            expect(arr[index]).toBeUndefined()
        })
        test('check is value on index in array defined', () => {
            const index = 1
            arr[index] = 5
            expect(arr[index]).toBeDefined()
        })
        test('check is value on index in array false', () => {
            const index = 1
            arr[index] = false
            expect(arr[index]).toBeFalsy()
        })
        test('check is`not value on index in array is null', () => {
            const index = 9
            arr[index] = null
            expect(arr[index]).toBeNull()
        })
    })
})