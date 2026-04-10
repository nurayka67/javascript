export class AsyncQueue {
  constructor(concurrency = 2) {
    this.concurrency = concurrency;
    this.running = 0;
    this.queue = [];
    this.results = [];
    this.errors = [];
  }

  async add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.process();
    });
  }

  async addAll(tasks) {
    return Promise.all(tasks.map(task => this.add(task)));
  }

  async process() {
    while (this.running < this.concurrency && this.queue.length > 0) {
      const { task, resolve, reject } = this.queue.shift();
      this.running++;
      
      try {
        const result = await task();
        this.results.push(result);
        resolve(result);
      } catch (error) {
        this.errors.push(error);
        reject(error);
      } finally {
        this.running--;
        this.process();
      }
    }
  }

  getStats() {
    return { pending: this.queue.length, running: this.running, completed: this.results.length, failed: this.errors.length };
  }
}