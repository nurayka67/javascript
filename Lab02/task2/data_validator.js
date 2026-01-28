// task2/data_validator.js
/**
 * Data Validator - Custom Validation Pattern
 * Flexible validation system using configurable rules.
 */

const DataValidator = {
    rules: {
        required: (value) => value !== undefined && value !== null && value !== '',
        minLength: (value, length) => String(value).length >= length,
        maxLength: (value, length) => String(value).length <= length,
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    }
    validate(data, validationRules) {
        const errors = [];

        for (const field in validationRules) {
            const rules = validationRules[field];

            for (const ruleConfig of rules) {
                const { rule, param, message } = ruleConfig;
                const isValid = this.rules[rule](value, param);

                if (!isValid) {
                    errors.push({ field, message});
                }
            }
        }
        return {
            isValid: errors.length === 0,
            errors
        }
    }
}

// Пример использования
const userData = {
    name: 'John',
    email: 'john@example.com',
    password: 'secret',
}

const rules = {
    name: [
        { rule:'required', message: 'Name required'},
        { rule:'minLength', param: 2, message: 'Name too short'},
    ],
    email: [
        { rule: 'required', message: 'Email required'},
        { rule: 'email', message: 'Invalid email'},
    ],
    password: [
        { rule: 'required', message: 'Password required'},
        { rule: 'minLength', param: 6, message: 'Password too short'},
    ]
}

const result = DataValidator.validate(userData, rules);
console.log('Validation result:', result);

taskManagerModule.exports = DataValidator;