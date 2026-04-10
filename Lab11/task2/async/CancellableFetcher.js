export class CancellableFetcher {
  constructor() {
    this.abortControllers = new Map();
  }

  createAbortSignal(id) {
    const controller = new AbortController();
    this.abortControllers.set(id, controller);
    return controller.signal;
  }

  cancel(id) {
    const controller = this.abortControllers.get(id);
    if (controller) {
      controller.abort();
      this.abortControllers.delete(id);
    }
  }

  cancelAll() {
    this.abortControllers.forEach(controller => controller.abort());
    this.abortControllers.clear();
  }

  async fetch(url, options = {}) {
    const id = options.id || Math.random().toString(36);
    const signal = this.createAbortSignal(id);
    
    try {
      const response = await fetch(url, { ...options, signal });
      this.abortControllers.delete(id);
      return response;
    } catch (error) {
      this.abortControllers.delete(id);
      if (error.name === 'AbortError') {
        throw new Error(`Request ${id} was cancelled`);
      }
      throw error;
    }
  }
}

export function createCancellableTask(asyncFn) {
  let cancelled = false;
  
  const wrapped = async (...args) => {
    if (cancelled) throw new Error('Task was cancelled');
    const result = await asyncFn(...args);
    if (cancelled) throw new Error('Task was cancelled');
    return result;
  };
  
  return { execute: wrapped, cancel: () => { cancelled = true; } };
}

export function withCancellation(promise, signal) {
  if (!signal) return promise;
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      signal.addEventListener('abort', () => reject(new Error('Cancelled')));
    })
  ]);
}