# Lab 4.1 – Anti-Pattern Identification
Student Name: ______
Date: ______

## 1. Global Namespace Pollution
Location: Multiple global variable declarations at the beginning of the file.

Description:
Numerous variables such as userName, userEmail, userAge, dataCache, config, and others are declared in the global scope.

Why this is an Anti-Pattern (Ch.4):
Chapter 4 states that polluting the global namespace creates naming conflicts and reduces maintainability.

Problems:
- Risk of name collisions
- Difficult debugging
- Poor scalability

Impact:
Critical severity due to structural risk.


## 2. Modifying Object.prototype
Location: Object.prototype.formatCurrency, Object.prototype.logInfo

Description:
The base Object prototype is modified.

Why Anti-Pattern:
Altering Object.prototype affects all objects and may break external libraries.

Problems:
- Unexpected behavior
- Hard-to-trace bugs

Severity:
Critical.


## 3. String-Based setTimeout (Implicit eval)
Location: setTimeout("updateTimer()", 1000)

Description:
Passing strings to setTimeout results in implicit eval execution.

Why Anti-Pattern:
Chapter 4 warns against using eval-like behavior due to security and performance concerns.

Problems:
- Security risks
- Reduced performance
- Bad practice

Severity:
Critical.


## 4. Code Duplication
Location:
Multiple email validation functions and formatting functions.

Description:
Identical logic repeated in multiple functions.

Why Anti-Pattern:
Violates DRY principle.

Problems:
- Increased maintenance cost
- Higher technical debt

Severity:
High.


## 5. Tight Coupling
Location:
setUserName(), setUserEmail(), updateDisplay(), saveToCache()

Description:
Functions directly access and modify global variables.

Why Anti-Pattern:
Components depend on shared global state.

Problems:
- Hard to test
- Difficult to refactor
- Execution order dependency

Severity:
Critical.
