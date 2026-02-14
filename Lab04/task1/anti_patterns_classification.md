# Lab 4.1 – Anti-Pattern Classification

## 1. Global Namespace Pollution
Bad Solution:
Using multiple global variables to share state.

Unfavorable Situation:
Naming conflicts and lack of encapsulation.

Good Solution:
Apply Namespace Pattern (Ch.11) and Module Pattern (Ch.7).

---

## 2. Prototype Modification
Bad Solution:
Extending Object.prototype.

Unfavorable Situation:
Unexpected behavior in all objects.

Good Solution:
Use utility modules instead of modifying prototypes.

---

## 3. String-based setTimeout
Bad Solution:
Passing string arguments.

Unfavorable Situation:
Implicit eval execution.

Good Solution:
Pass function references instead.

---

## 4. Code Duplication
Bad Solution:
Repeating validation and formatting logic.

Unfavorable Situation:
Maintenance complexity.

Good Solution:
Create centralized utility module (Module Pattern).

---

## 5. Tight Coupling
Bad Solution:
Functions depend on global variables.

Unfavorable Situation:
Low flexibility.

Good Solution:
Encapsulation using Module Pattern.
