const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function withRetry(fn, options = {}) {
  const config = {
    maxAttempts: 3,
    baseDelay: 1000,
    maxDelay: 10000,
    backoffMultiplier: 2,
    retryableStatuses: [408, 429, 500, 502, 503, 504],
    ...options
  };

  let lastError;
  let delay = config.baseDelay;

  for (let attempt = 1; attempt <= config.maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt === config.maxAttempts) throw error;
      
      const isRetryable = error.status && config.retryableStatuses.includes(error.status);
      if (!isRetryable && !error.message?.includes('timeout')) throw error;
      
      console.log(`Retry ${attempt}/${config.maxAttempts} after ${delay}ms`);
      await sleep(delay);
      delay = Math.min(delay * config.backoffMultiplier, config.maxDelay);
    }
  }
  throw lastError;
}

export function withTimeout(promise, timeoutMs = 5000) {
  return Promise.race([
    promise,
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeoutMs))
  ]);
}