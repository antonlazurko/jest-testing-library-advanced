import {validatePassword} from "../validate-password.js";
import {passwordValidationErrors} from "../constants.js";

describe('validatePassword testing', () => {
    test('should return {success: true, error: null} when password is valid', () => {
        const password = 'Password123!'
        const result = validatePassword(password)
        expect(result).toEqual({success: true, error: null})
    })
    test('should validate password against 8 characters minimum and return error message', () => {
        const password = 'Passwor'
        const result = validatePassword(password)
        expect(result).toEqual({success: false, error: passwordValidationErrors.length})
    })
    test('should validate password against 1 uppercase letter and return error message', () => {
        const password = 'password123'
        const result = validatePassword(password)
        expect(result).toEqual({success: false, error: passwordValidationErrors.case})
    })
    test('should validate password against mixed case and return error message', () => {
        const password = 'PASSWORD123'
        const result = validatePassword(password)
        expect(result).toEqual({success: false, error: passwordValidationErrors.case})
    })
    test('should validate password against digits and characters and return error message', () => {
        const password = 'passwordQWE!'
        const result = validatePassword(password)
        expect(result).toEqual({success: false, error: passwordValidationErrors.number})
    })
    test('should validate password against 1 special character and return error message', () => {
        const password = 'Password123'
        const result = validatePassword(password)
        expect(result).toEqual({success: false, error: passwordValidationErrors.special})
    })
})