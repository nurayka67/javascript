# AI_REPORT

**Student Name:** Nuray Koshan
**Date:** 2026-04-24
**Assignment:** Lab 14 - Rendering Architecture (CSR, SSR, Islands)

## AI Usage Declaration

I used AI tools as a consultant to help me understand the concepts and debug my code.

| Field | Details |
|-------|---------|
| Tool Used | ChatGPT / GitHub Copilot |
| Purpose | Understanding SSR hydration pipeline, debugging Islands architecture event binding issues |
| How I Used It | Asked conceptual questions about IntersectionObserver, got help fixing non-working buttons in Islands, reviewed best practices for state injection in SSR |
| What I Modified | Adapted the AI suggestions to fit my specific file structure, simplified the hydration logic, removed unnecessary complexity, added console logs for debugging |
| What I Learned | How SSR sends pre-rendered HTML with injected state, how client-side hydration attaches event listeners, how Islands architecture isolates component state using closures, why IntersectionObserver can delay mounting if thresholds are not met |
| Code Ownership | I wrote and structured the final code myself. AI only provided explanations and fixed specific bugs I couldn't solve alone. |

## Reflection

This lab helped me understand the difference between CSR, SSR, and Islands patterns. The hydration bottleneck became clear when I saw that server-rendered HTML looks correct but buttons don't work until JavaScript runs. For Islands, I learned that each component must have isolated state using closures to avoid global pollution.

