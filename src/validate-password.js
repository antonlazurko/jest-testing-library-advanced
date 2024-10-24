import { passwordValidationErrors } from "./constants.js";
export function validatePassword(password) {
    if (password.length < 8) {//check password length
        return { success: false, error: passwordValidationErrors.length };
    }
    if (!/[a-z]/.test(password)) {//check password contains lower case
        return { success: false, error: passwordValidationErrors.case };
    }
    if (!/[A-Z]/.test(password)) {//check password contains upper case
        return { success: false, error: passwordValidationErrors.case };
    }
    if (!/[0-9]/.test(password)) {//check password contains number
        return { success: false, error: passwordValidationErrors.number };
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {//check password contains special character
        return { success: false, error: passwordValidationErrors.special };
    }
    return { success: true, error: null };
}