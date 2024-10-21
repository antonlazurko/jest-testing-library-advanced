import { multiply } from "../../math.js";
import {mockArray, mockArrayWithObj} from "../../__mocks__/array.mock.js";
describe('each testing', () => {
    test.each(mockArray)
    ('should multiply two positive numbers',  (a, b, expected) => {
        const res = multiply(a, b)
        expect(res).toBe(expected)
    })
    test.each(mockArrayWithObj)
    ('should multiply two numbers',  ({a, b, expected}) => {
        const res = multiply(a, b)
        expect(res).toBe(expected)
    })
})