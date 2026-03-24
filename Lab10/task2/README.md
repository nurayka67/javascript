# MVVM User Profile Form

**Student Name:** Nuray Koshan  
**Date:** 2026-03-24

## Overview
Vanilla JavaScript implementation of Model-View-ViewModel (MVVM) pattern with two-way data binding.

## Architecture

### Components
- **ViewModel (base/ViewModel.js)**: Reactive properties, watch mechanism
- **UserProfileViewModel**: Business logic, validation, computed properties (fullName, isValid)
- **View (UserProfileForm.js)**: UI rendering, two-way data binding

### MVVM Flow
1. User inputs data → 2. ViewModel updates → 3. Validation runs → 4. UI updates automatically

## Features
-  Two-way data binding
-  Real-time validation
-  Computed properties (fullName)
-  Live preview
-  Save with validation
-  Reset form
-  Error messages

## Validation Rules
| Field | Rule |
|-------|------|
| First Name | 2-50 characters |
| Last Name | 2-50 characters |
| Email | Valid format (name@domain.com) |
| Age | 18-120 |

## How to Run
Open `index.html` in any modern browser.

## File Structure
task2/
├── index.html
├── mvvm/
│ ├── base/ViewModel.js
│ ├── viewmodel/UserProfileViewModel.js
│ └── view/UserProfileForm.js
└── README.md