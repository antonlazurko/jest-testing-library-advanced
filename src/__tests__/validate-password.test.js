import {validatePassword} from "../validate-password.js";

describe('validatePassword testing', () => {
    test('should return true when password is valid', () => {
        const password = 'password123'
        const result = validatePassword(password)
        expect(result).toBe(true)
    })
    test('should validate password against 8 characters minimum', () => {
        const password = 'pass'
        const result = validatePassword(password)
        expect(result).toBe(false)
    })
    test('should validate password against 1 uppercase letter', () => {
        const password = 'password123'
        const result = validatePassword(password)
        expect(result).toBe(false)
    })
    test('should validate password against mixed case', () => {
        const password = 'Password123'
        const result = validatePassword(password)
        expect(result).toBe(false)
    })
    test('should validate password against digits and characters', () => {
        const password = 'Password123'
        const result = validatePassword(password)
        expect(result).toBe(false)
    })
    test('should validate password against 1 special character', () => {
        const password = 'Password123'
        const result = validatePassword(password)
        expect(result).toBe(false)
    })
})