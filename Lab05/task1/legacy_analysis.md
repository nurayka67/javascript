# Legacy Code Analysis

## Issues Found:
1. **var usage** - Should use const/let
2. **No modules** - Everything in global scope
3. **Constructor functions** - Should use ES6 classes
4. **No encapsulation** - Cart items are public
5. **Tax calculation bug** - Used + instead of *
6. **String concatenation** - Should use template literals