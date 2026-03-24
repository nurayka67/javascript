import { ViewModel } from '../base/ViewModel.js';

export class UserProfileViewModel extends ViewModel {
    constructor() {
        super();
        
        this.defineProperty('firstName', '');
        this.defineProperty('lastName', '');
        this.defineProperty('email', '');
        this.defineProperty('age', '');
        this.defineProperty('errors', {});
        
        
        this.watch('firstName', () => {
            this.validate();
            this._notify('fullName', this.fullName, null);
        });
        this.watch('lastName', () => {
            this.validate();
            this._notify('fullName', this.fullName, null);
        });
        this.watch('email', () => this.validate());
        this.watch('age', () => this.validate());
    }
    
    get fullName() {
        const first = this.firstName ? this.firstName.trim() : '';
        const last = this.lastName ? this.lastName.trim() : '';
        const full = `${first} ${last}`.trim();
        return full || 'Anonymous';
    }
    
    get isValid() {
        return Object.keys(this.errors || {}).length === 0;
    }
    
    validate() {
        const errors = {};
        
        if (!this.firstName || this.firstName.length < 2) {
            errors.firstName = 'First name must be at least 2 characters';
        } else if (this.firstName.length > 50) {
            errors.firstName = 'First name must be less than 50 characters';
        }
        
        if (!this.lastName || this.lastName.length < 2) {
            errors.lastName = 'Last name must be at least 2 characters';
        } else if (this.lastName.length > 50) {
            errors.lastName = 'Last name must be less than 50 characters';
        }
        
        if (!this.email) {
            errors.email = 'Email is required';
        } else if (!this.isValidEmail(this.email)) {
            errors.email = 'Please enter a valid email address (e.g., name@example.com)';
        }
        
        if (this.age) {
            const ageNum = parseInt(this.age);
            if (isNaN(ageNum)) {
                errors.age = 'Age must be a number';
            } else if (ageNum < 18) {
                errors.age = 'You must be at least 18 years old';
            } else if (ageNum > 120) {
                errors.age = 'Age must be less than 120';
            }
        }
        
        this.errors = errors;
        
        return this.isValid;
    }
    
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@([^\s@]+\.)+[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    save() {
        if (this.validate()) {
            const profile = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                age: this.age ? parseInt(this.age) : null,
                fullName: this.fullName,
                savedAt: new Date().toISOString()
            };
            console.log('Saving profile:', profile);
            return { success: true, profile };
        }
        return { success: false, errors: this.errors };
    }
    
    reset() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.age = '';
        this.errors = {};
        this._notify('fullName', this.fullName, null);
        console.log('Form reset');
    }
}