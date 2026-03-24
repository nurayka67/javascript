export class UserProfileForm {
    constructor(containerId, viewModel) {
        this.container = document.getElementById(containerId);
        this.viewModel = viewModel;
        this.inputs = {};
        
        console.log('UserProfileForm created');
    }
    
    render() {
        this.container.innerHTML = `
            <div class="mvvm-form">
                <h1> User Profile (MVVM)</h1>
                
                <div class="form-group">
                    <label>First Name:</label>
                    <input type="text" data-field="firstName" value="${this.escapeHtml(this.viewModel.firstName || '')}">
                    <span class="error">${this.escapeHtml(this.viewModel.errors?.firstName || '')}</span>
                </div>
                
                <div class="form-group">
                    <label>Last Name:</label>
                    <input type="text" data-field="lastName" value="${this.escapeHtml(this.viewModel.lastName || '')}">
                    <span class="error">${this.escapeHtml(this.viewModel.errors?.lastName || '')}</span>
                </div>
                
                <div class="form-group">
                    <label>Email:</label>
                    <input type="email" data-field="email" value="${this.escapeHtml(this.viewModel.email || '')}">
                    <span class="error">${this.escapeHtml(this.viewModel.errors?.email || '')}</span>
                </div>
                
                <div class="form-group">
                    <label>Age (18-120):</label>
                    <input type="number" data-field="age" value="${this.escapeHtml(this.viewModel.age || '')}">
                    <span class="error">${this.escapeHtml(this.viewModel.errors?.age || '')}</span>
                </div>
                
                <div class="preview">
                    <h3>Live Preview</h3>
                    <p><strong>Full Name:</strong> <span id="fullNameDisplay">${this.escapeHtml(this.viewModel.fullName)}</span></p>
                    <p><strong>Status:</strong> 
                        <span class="valid-badge ${this.viewModel.isValid ? 'valid' : 'invalid'}">
                            ${this.viewModel.isValid ? '✓ Valid' : '✗ Invalid'}
                        </span>
                    </p>
                </div>
                
                <div class="actions">
                    <button id="saveBtn" ${!this.viewModel.isValid ? 'disabled' : ''}> Save Profile</button>
                    <button id="resetBtn"> Reset Form</button>
                </div>
                <div id="message"></div>
            </div>
        `;
        
        this.attachEventListeners();
        this.setupTwoWayBinding();
        this.watchViewModel();
    }
    
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    attachEventListeners() {
        const saveBtn = this.container.querySelector('#saveBtn');
        const resetBtn = this.container.querySelector('#resetBtn');
        
        if (saveBtn) {
            saveBtn.addEventListener('click', () => {
                const result = this.viewModel.save();
                const messageDiv = this.container.querySelector('#message');
                
                if (result.success) {
                    messageDiv.textContent = '✓ Profile saved successfully!';
                    messageDiv.className = 'success';
                    setTimeout(() => {
                        messageDiv.textContent = '';
                        messageDiv.className = '';
                    }, 3000);
                    console.log('Profile saved:', result.profile);
                } else {
                    messageDiv.textContent = '✗ Please fix validation errors before saving';
                    messageDiv.className = 'error-message';
                    setTimeout(() => {
                        messageDiv.textContent = '';
                        messageDiv.className = '';
                    }, 3000);
                }
            });
        }
        
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                this.viewModel.reset();
                this.updateUI();
                const messageDiv = this.container.querySelector('#message');
                messageDiv.textContent = '✓ Form has been reset';
                messageDiv.className = 'success';
                setTimeout(() => {
                    messageDiv.textContent = '';
                    messageDiv.className = '';
                }, 2000);
                console.log('Form reset');
            });
        }
    }
    
    setupTwoWayBinding() {
        const inputs = this.container.querySelectorAll('[data-field]');
        
        inputs.forEach(input => {
            const field = input.dataset.field;
            this.inputs[field] = input;
            
            input.addEventListener('input', (e) => {
                console.log(`Input changed: ${field} = ${e.target.value}`);
                this.viewModel[field] = e.target.value;
            });
        });
    }
    
    watchViewModel() {
        
        this.viewModel.watch('firstName', () => this.updateUI());
        this.viewModel.watch('lastName', () => this.updateUI());
        this.viewModel.watch('email', () => this.updateUI());
        this.viewModel.watch('age', () => this.updateUI());
        this.viewModel.watch('errors', () => this.updateErrors());
        this.viewModel.watch('fullName', () => this.updateFullName()); 
    }
    
    updateUI() {
        console.log('Updating UI from ViewModel');
        
        this.updateFieldUI('firstName');
        this.updateFieldUI('lastName');
        this.updateFieldUI('email');
        this.updateFieldUI('age');
        this.updateFullName();
        this.updateStatus();
        this.updateSaveButton();
    }
    
    updateFieldUI(field) {
        const input = this.inputs[field] || this.container.querySelector(`[data-field="${field}"]`);
        if (input && input.value !== this.viewModel[field]) {
            input.value = this.viewModel[field] || '';
        }
    }
    
    updateFullName() {
        const fullNameSpan = document.getElementById('fullNameDisplay');
        if (fullNameSpan) {
            fullNameSpan.textContent = this.viewModel.fullName;
            console.log('Full name updated to:', this.viewModel.fullName);
        }
    }
    
    updateStatus() {
        const statusSpan = this.container.querySelector('.valid-badge');
        if (statusSpan) {
            statusSpan.className = `valid-badge ${this.viewModel.isValid ? 'valid' : 'invalid'}`;
            statusSpan.textContent = this.viewModel.isValid ? '✓ Valid' : '✗ Invalid';
        }
    }
    
    updateErrors() {
        const fields = ['firstName', 'lastName', 'email', 'age'];
        
        fields.forEach(field => {
            const errorSpan = this.container.querySelector(`[data-field="${field}"]`)
                ?.closest('.form-group')
                ?.querySelector('.error');
            
            if (errorSpan) {
                const errorMessage = this.viewModel.errors?.[field] || '';
                errorSpan.textContent = this.escapeHtml(errorMessage);
            }
        });
    }
    
    updateSaveButton() {
        const saveBtn = this.container.querySelector('#saveBtn');
        if (saveBtn) {
            saveBtn.disabled = !this.viewModel.isValid;
        }
    }
}