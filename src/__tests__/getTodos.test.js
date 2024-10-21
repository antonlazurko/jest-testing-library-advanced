import axios from 'axios';
import {getTodos} from '../getTodos.js';

const axiosGetSpy = jest.spyOn(axios, 'get');
const errorSpy = jest.spyOn(console, 'error');

describe('getTodos testing', () => {
    beforeEach(() => {
        axiosGetSpy.mockClear();
        errorSpy.mockClear();
    })
    afterEach(() => {
        jest.clearAllMocks();
    })
    test('should get todos', async () => {
        const todos = await getTodos();
        expect(axiosGetSpy).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/todos');
        expect(todos).toHaveLength(200);
    })
    test('should not get todos', async () => {
        const errorMessage = 'Something went wrong';
        axiosGetSpy.mockImplementationOnce(() => {
            return Promise.reject(errorMessage);
        })
        // axiosGetSpy.mockRejectedValueOnce(errorMessage); // other implementation
        const todos = await getTodos();
        expect(axiosGetSpy).toHaveBeenCalledTimes(1);
        expect(errorSpy).toHaveBeenCalledTimes(1);
        expect(errorSpy).toHaveBeenCalledWith(errorMessage);
        expect(todos).toHaveLength(0);
    })
})