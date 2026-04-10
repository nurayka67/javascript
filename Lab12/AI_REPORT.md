# AI Usage Report

**Student Name:** Nuray Koshan
**Date:** 2026-04-10

---

## AI Tool Used
- **Tool:** ChatGPT
- **Usage:** Code consultation and review

---

## How I Used AI

I used AI as a consultant to:
- Check my understanding of AMD/CommonJS/UMD patterns
- Review my namespace injection implementation
- Suggest fixes for minor bugs

I wrote all the code myself first, then asked AI for feedback and improvements.

---

## Questions I Asked

| Question | How I Used the Response |
|----------|-------------------------|
| "Is my UMD wrapper correct for all environments?" | Fixed the detection order for AMD/CommonJS |
| "How to properly check if a namespace exists before creating it?" | Added `if (!parent[parts[i]])` check |
| "What's the best way to handle missing dependencies?" | Added error throwing in plugins.js |

---

## Code Changes Based on AI Feedback

1. Fixed UMD wrapper to work in Web Workers (`typeof self !== 'undefined'`)
2. Added dependency checks in `utils.js` and `plugins.js`
3. Improved namespace creation to prevent overwriting

---

## Verification

I tested all code in the browser. All modules work correctly with their respective patterns.