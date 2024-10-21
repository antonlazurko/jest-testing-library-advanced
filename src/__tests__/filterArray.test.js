import {basketWithNoQuantity, filteredBasketWithQuantityOnly} from "../__mocks__/basket.mock.js";
import {filterArray} from "../filterArray.js";

const cb = jest.fn();
describe('filterArray testing', () => {
    afterEach(() => {
        cb.mockClear();
    })
    test('should invoke callback three times', () => {
        const arr = [1,2,3]
        filterArray(arr, cb);
        expect(cb).toHaveBeenCalledTimes(3);
    })
    test('should not invoke callback when array is empty', () => {
        filterArray([], cb);
        expect(cb).not.toHaveBeenCalled();
    })
    test('should filter array', () => {
        const res = filterArray(basketWithNoQuantity, (item) => item.qty > 0)
        expect(res).toEqual(filteredBasketWithQuantityOnly)
    })
})