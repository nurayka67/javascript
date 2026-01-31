// Safe Data Validator Pattern
class SafeDataValidator {
    static isValidString(value) {
        try {
            return typeof value === 'string' && value.trim().length > 0;
        } catch (error) {
            console.warn('Validation error:', error.message);
            return false;
        }
    }

    static isValidNumber(value) {
        try {
            return typeof value === 'number' && !isNaN(value);
        } catch (error) {
            console.warn('Validation error:', error.message);
            return false;
        }
    }

    static safeParseNumber(str, fallback = 0) {
        try {
            const num = parseFloat(str);
            return this.isValidNumber(num) ? num : fallback;
        } catch (error) {
            console.warn('Parse error:', error.message);
            return fallback;
        }
    }

    static isValidEmail(email) {
        try {
            if (!this.isValidString(email)) return false;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        } catch (error) {
            console.warn('Email validation error:', error.message);
            return false;
        }
    }
}

// DEMO
console.log('=== Safe Data Validator Demo ===');
console.log('String "Hello":', SafeDataValidator.isValidString('Hello'));
console.log('Number 42:', SafeDataValidator.isValidNumber(42));
console.log('Parse "123.45":', SafeDataValidator.safeParseNumber('123.45'));
console.log('Parse "abc":', SafeDataValidator.safeParseNumber('abc'));
console.log('Email test@example.com:', SafeDataValidator.isValidEmail('test@example.com'));
console.log('=== End Demo ===');