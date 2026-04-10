export class AsyncPipeline {
  constructor() {
    this.stages = [];
  }

  use(middleware) {
    this.stages.push(middleware);
    return this;
  }

  async execute(initialData) {
    let data = initialData;
    for (const stage of this.stages) {
      data = await stage(data);
    }
    return data;
  }
}

export async function mapParallel(items, handler, concurrency = 3) {
  const results = [];
  const queue = [...items];
  
  async function worker() {
    while (queue.length) {
      const item = queue.shift();
      results.push(await handler(item));
    }
  }
  
  const workers = Array(concurrency).fill().map(() => worker());
  await Promise.all(workers);
  return results;
}

export async function mapSequential(items, handler) {
  const results = [];
  for (const item of items) {
    results.push(await handler(item));
  }
  return results;
}

export async function filterParallel(items, predicate, concurrency = 3) {
  const results = await mapParallel(items, async (item) => {
    const matches = await predicate(item);
    return { item, matches };
  }, concurrency);
  return results.filter(r => r.matches).map(r => r.item);
}

export async function reduceAsync(items, reducer, initialValue) {
  let accumulator = initialValue;
  for (const item of items) {
    accumulator = await reducer(accumulator, item);
  }
  return accumulator;
}