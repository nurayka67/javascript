# Lab 1.2: Pattern Documentation

## Selected Pattern: Factory Function Pattern

**Why I chose this**: It's practical and I use it in my projects.

## Formal Documentation

### Pattern Name: Factory Function

### Context
When you need to create multiple objects with the same structure but independent data.

### Problem 
How to create objects with private data  without using classes.

### Solution
Write a function that returns an object. Use closure to keep data private.

### Example
See example.js file.

### Consequences
**Benefits**:
- True data privacy
- Multiple independent instances
- Simple to understand

**Drawbacks**:
- Slightly more memory usage
- Can't use instanceof

**Use when**: Need privacy, multiple instances.
**Avoid when**: Need inheritance, performance critical.