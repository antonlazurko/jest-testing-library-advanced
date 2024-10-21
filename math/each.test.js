import { multiply } from "./math";
describe('each testing', () => {
    test.each([ [2, 3, 6], [-2, 3, -6], [-2, -3, 6]])
    ('should multiply two positive numbers',  (a, b, expected) => {
        const res = multiply(a, b)
        expect(res).toBe(expected)
    })
    test.each([{a: 2, b: 3, expected: 6}, {a: -2, b: 3, expected: -6}, {a: -2, b: -3, expected: 6}])
    ('should multiply two numbers',  ({a, b, expected}) => {
        const res = multiply(a, b)
        expect(res).toBe(expected)
    })
})