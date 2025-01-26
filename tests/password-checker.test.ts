import {calculatePasswordStrength} from "../src/password-checker";


describe('calculatePasswordStrength', () => {
    test('Return "Very Weak" if length < 8 characters', () => {
        expect(calculatePasswordStrength('12345')).toBe('Very Weak');
        expect(calculatePasswordStrength('qwerty')).toBe('Very Weak');
    });

    test('Return "Weak" if length >= 8-11 and has additional symbol types', () => {
        expect(calculatePasswordStrength('qwerty12')).toBe('Weak');
        expect(calculatePasswordStrength('1234qwer')).toBe('Weak');
        expect(calculatePasswordStrength('qwerQwer')).toBe('Weak');
    });

    test('Return "Moderate" if length >= 12 and has two additional symbol types', () => {
        expect(calculatePasswordStrength('qwer9876qwer')).toBe('Moderate');
        expect(calculatePasswordStrength('Q9W8E7R6T5Y4')).toBe('Moderate');
    });

    test('Return "Strong" if length >= 12/more and has digits, lowercase, uppercase, special symbols', () => {
        expect(calculatePasswordStrength('Qwer9876!@#')).toBe('Strong');
        expect(calculatePasswordStrength('Q9w8E7r6T5y4$')).toBe('Strong');
    });

});