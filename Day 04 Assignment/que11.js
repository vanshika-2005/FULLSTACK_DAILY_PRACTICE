function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    // Serialize arguments into a string key
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    // Compute, store in cache, and return
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// --- Test Case ---
const slowAdd = (a, b) => {
  console.log("Computing..."); // Demonstrates execution
  return a + b;
};

const fastAdd = memoize(slowAdd);

console.log(fastAdd(2, 3)); // Logs "Computing...", then returns 5
console.log(fastAdd(2, 3)); // Returns 5 (from cache, no "Computing..." logged)
console.log(fastAdd(4, 5)); // Logs "Computing...", then returns 9