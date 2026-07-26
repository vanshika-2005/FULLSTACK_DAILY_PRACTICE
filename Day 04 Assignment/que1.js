//1. Using Symbol.iterator Protocol

function range(start, end) {
  return {
    [Symbol.iterator]() {
      let current = start;

      return {
        next() {
          if (current <= end) {
            return { value: current++, done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
}

// Test
for (let num of range(1, 5)) {
  console.log(num); // 1, 2, 3, 4, 5
}




//2. Using a Generator Function
function* range(start, end) {
  for (let current = start; current <= end; current++) {
    yield current;
  }
}

// Test
for (let num of range(1, 5)) {
  console.log(num); // 1, 2, 3, 4, 5
}