import { renderHook, act } from '@testing-library/react';

import { useCreateUser } from '../use-create-user';
import { passwordValidationErrors } from '../../constants/validation';

describe('useCreateUser', () => {

    test('should return an object with correct properties', () => {
        const { result } = renderHook(() => useCreateUser());
        const { successMessage, errorMessage, onSubmit, onSuccess, onError } = result.current;
        expect(successMessage).toBe('');
        expect(errorMessage).toBe('');
        expect(onSubmit).toBeDefined();
        expect(onSuccess).toBeDefined();
        expect(onError).toBeDefined();
    });

    test('should set success message', () => {
        const { result } = renderHook(() => useCreateUser());

        expect(result.current.successMessage).toBe('');

        const password = 'MyPassword123!';

        act(() => result.current.onSuccess({ name: 'John', password }));

        expect(result.current.successMessage).toBe(`User John created with password ${password}`);
    })

    test('should throw error message', () => {
        const { result } = renderHook(() => useCreateUser());

        expect(result.current.errorMessage).toBe('');

        const error = 'User already exists';
        act(() => result.current.onError(new Error(error)));
        expect(result.current.errorMessage).toBe(error);
    })

    test('should throw error message on invalid password', async() => {
        const { result } = renderHook(() => useCreateUser());
        const {onSubmit, errorMessage} = result.current;
        const password = '123';
        expect(errorMessage).toBe('');

        await expect(onSubmit({ password })).rejects.toThrow(passwordValidationErrors.length);
    })

    test('should not throw error message on valid password', async() => {
        const { result } = renderHook(() => useCreateUser());
        const {onSubmit, errorMessage} = result.current;
        const password = 'MyPassword123!';
        expect(errorMessage).toBe('');

        await expect(onSubmit({ password })).resolves.toBe();
    })
})