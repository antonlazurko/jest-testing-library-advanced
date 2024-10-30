import { act } from '@testing-library/react';

import { useCreateUser } from '../use-create-user';
import { passwordValidationErrors } from '../../constants/validation';
import {renderHookWithProviders} from "../../utils/renderWithProviders";

describe('useCreateUser', () => {

    test('should return an object with correct properties', () => {
        const { result } = renderHookWithProviders(() => useCreateUser());
        const { successMessage, errorMessage, onSubmit, onSuccess, onError } = result.current;
        expect(successMessage).toBe('');
        expect(errorMessage).toBe('');
        expect(onSubmit).toBeDefined();
        expect(onSuccess).toBeDefined();
        expect(onError).toBeDefined();
    });

    test('should set success message', () => {
        const { result } = renderHookWithProviders(() => useCreateUser());

        expect(result.current.successMessage).toBe('');

        const password = 'MyPassword123!';

        act(() => result.current.onSuccess({ name: 'John', password }));

        expect(result.current.successMessage).toBe(`User John created with password ${password}`);
    })

    test('should throw error message', () => {
        const { result } = renderHookWithProviders(() => useCreateUser());

        expect(result.current.errorMessage).toBe('');

        const error = 'User already exists';
        act(() => result.current.onError(new Error(error)));
        expect(result.current.errorMessage).toBe(error);
    })

    test('should throw error message on invalid password', async() => {
        const { result } = renderHookWithProviders(() => useCreateUser());
        const {onSubmit, errorMessage} = result.current;
        const password = '123';
        expect(errorMessage).toBe('');

        await expect(onSubmit({ password })).rejects.toThrow(passwordValidationErrors.length);
    })

    test('should not throw error message on valid password', async() => {
        const { result } = renderHookWithProviders(() => useCreateUser());
        const {onSubmit, errorMessage} = result.current;
        const password = 'MyPassword123!';
        expect(errorMessage).toBe('');

        await expect(onSubmit({ password })).resolves.toBe();
    })
})