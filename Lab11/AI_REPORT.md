# AI_REPORT.md

## Student Information
- Name: Nuray Koshan
- Date: 2026-04-10
- Course: Week 11 - Asynchronous Programming Patterns

## AI Usage Declaration

I used AI tools as a consultant to help me understand concepts, debug issues, and improve my code structure. This report documents my usage.

## Tool Used
- **Tool**: ChatGPT (OpenAI)
- **Version**: GPT-4
- **Purpose**: Learning assistant, code reviewer, and debugging support

## Prompts I Used

1. "Can you explain how exponential backoff works in retry patterns?"
2. "What is the difference between Promise.all and Promise.allSettled?"
3. "Help me understand how to implement an async queue with concurrency control"
4. "Why is my fetch request not being cancelled with AbortController?"
5. "Review my retry logic code and suggest improvements"
6. "How do I handle partial failures when fetching multiple API endpoints?"
7. "Show me an example of async pipeline pattern with map and filter"
8. "What is the best practice for timeout handling with promises?"

## How I Used and Modified the AI Suggestions

### 1. PromiseHttpClient.js
AI provided basic fetch wrapper structure. I added custom HttpError class, content-type detection logic, and proper error propagation. I also implemented the full CRUD methods (get, post, put, delete) based on the pattern shown.

### 2. Retry Logic (retry.js)
AI explained the exponential backoff algorithm. I implemented the sleep function, isRetryable logic, and the main withRetry function. I added configurable options for maxAttempts, baseDelay, and retryable status codes. I tested with different failure scenarios and adjusted the delay calculation to respect maxDelay limits.

### 3. Async Queue (AsyncQueue.js)
AI gave me the queue pattern structure. I wrote the process method that respects concurrency limits. I added getStats method for monitoring and ensured proper promise resolution. I also created the RateLimiter class separately based on understanding from AI examples.

### 4. DataFetcher.js
AI suggested using Promise.all for parallel fetching. I implemented fetchUserWithDetails using destructuring. For fetchMultipleUsers, I chose Promise.allSettled to handle partial failures gracefully. The fetchWithFallback method was my own implementation after understanding the concept.

### 5. Pipeline.js
AI provided pipeline pattern examples. I built the AsyncPipeline class with middleware support. I implemented mapParallel, mapSequential, filterParallel, and reduceAsync based on AI explanations. I tested each function with different concurrency levels.

### 6. CancellableFetcher.js
AI explained AbortController. I implemented the CancellableFetcher class with abort controller management. The createCancellableTask function was modified to properly handle cancellation flags and race conditions.

## Verification Process

1. I tested each function with real API calls to JSONPlaceholder
2. I simulated network failures to verify retry logic
3. I tested concurrency limits with different task loads
4. I verified cancellation works within 100ms of clicking cancel
5. I checked error handling by passing invalid URLs
6. I ran all demos in Chrome and Firefox browsers

## What I Learned

1. **Promise combinators**: Promise.all fails fast, Promise.allSettled waits for all. This is crucial for partial failure handling.

2. **Exponential backoff**: Retry delays should increase gradually to avoid overwhelming servers. The formula delay = min(delay * multiplier, maxDelay) works well.

3. **Concurrency control**: Async queues prevent overwhelming resources. The pattern of running tasks while respecting concurrency limit is reusable across many scenarios.

4. **Cancellation patterns**: AbortController is the standard way to cancel fetch requests. Creating a wrapper around async functions with cancellation flags is also useful.

5. **Error handling**: Always catch at appropriate levels. Silent failures are dangerous - log them.

## Code I Wrote Myself

- Most of the demo UI in index.html files
- The integration between different modules
- Testing scenarios for each pattern
- README documentation for each task

## AI Contribution Level

- **Concepts explained by AI**: 40%
- **Code structure suggested by AI**: 30%
- **Code written/modified by me**: 70%
- **Debugging assistance from AI**: 20%

## Honesty Statement

I declare that I used AI as a learning tool and consultant, not to generate complete solutions. I understood every line of code I submitted. The AI helped me learn faster, but the implementation and understanding are mine.
