export function validatePassword(password) {
    const conditions = [
        password.length >= 8,
        /[a-z]/.test(password),
        /[A-Z]/.test(password),
        /\d/.test(password),
        /[^a-zA-Z\d]/.test(password)
    ];

    return conditions.every(Boolean);
}