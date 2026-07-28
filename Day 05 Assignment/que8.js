function createCounter(initialValue = 0) {
  let count = initialValue;

  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    getValue() {
      return count;
    },
    reset() {
      count = initialValue;
      return count;
    }
  };
}

// Usage:
const counter = createCounter(10);
console.log(counter.getValue()); // 10
console.log(counter.increment()); // 11
console.log(counter.reset());     // 10
console.log(counter.count);       // undefined (truly private)