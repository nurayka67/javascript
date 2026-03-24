# AI Usage Report

**Student Name:** Nuray Koshan   
**Date:** 2026-03-24  
**Course:** JavaScript Design Patterns  
**Lab:** Lab 09 - Behavioral Design Patterns

---

## AI Tool Used


DeepSeek | Consultation, concept explanation, debugging guidance |

---

## How AI Was Used

AI was used only as a **consultant**, not as a code generator. All code was written independently.

### 1. Pattern Explanation
- Asked AI to explain the difference between Observer and Pub/Sub patterns
- AI explained when to use Mediator vs Command patterns
- Clarified the relationship between these behavioral patterns

### 2. Debugging Assistance
- When encountering "Invalid or unexpected token" error, AI helped identify encoding issues
- AI suggested checking file paths and module imports
- Provided guidance on how to use browser console (F12) for debugging

### 3. Architecture Consultation
- Discussed the folder structure for separating concerns
- AI explained best practices for subscription cleanup to prevent memory leaks
- Consulted on how to implement undo/redo functionality with Command pattern

### 4. Code Review
- Asked AI to review the logic of EventBus implementation
- AI pointed out that unsubscribe should return a function for proper cleanup
- Verified that mediator properly decouples device communication

---

## What I Did Independently

| Task | Description |
|------|-------------|
| **Code Writing** | All JavaScript code was written by me based on pattern understanding |
| **Structure Design** | Folder organization was planned independently |
| **Testing** | Manual testing in browser, debugging with console |
| **Documentation** | README written with own understanding of implemented patterns |
| **Git Commits** | Version control with conventional commits |

---

## AI Consultation Examples

### Question to AI:
"What is the difference between Mediator and Observer patterns?"

### AI Response (paraphrased):
- Observer: one-to-many notification, subscribers react to subject changes
- Mediator: many-to-many coordination, objects communicate through central hub
- Observer is for event-driven updates, Mediator for complex component interactions

### How I Applied This:
- Used Observer for news subscribers (independent reaction to events)
- Used Mediator for smart home (centralized device coordination)

---

## Verification Process

1. **Syntax Check:** Verified all code in browser console
2. **Functionality Test:** Tested subscribe/publish with multiple subscribers
3. **Undo/Redo Test:** Verified command history and state restoration
4. **Automation Test:** Confirmed rule triggers correct actions
5. **Memory Check:** Ensured unsubscribe functions properly clean up

---

## What I Learned

- Observer pattern is ideal for event-driven systems with multiple independent subscribers
- Mediator reduces coupling by centralizing communication logic
- Command pattern enables undo/redo by encapsulating operations as objects
- Always return unsubscribe function to prevent memory leaks
- UTF-8 encoding is critical for JavaScript modules to avoid syntax errors

---

## Conclusion

AI was used strictly for **consultation and guidance**. All implementation, debugging, and final code was written independently. This approach ensured understanding of the patterns while receiving help with conceptual questions and debugging strategies.