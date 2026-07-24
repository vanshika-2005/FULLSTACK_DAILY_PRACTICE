function reduceOperation(arr, operation) {
  if (!arr || arr.length === 0) return undefined;

  switch (operation) {
    case 'sum':
      return arr.reduce((acc, curr) => acc + curr, 0);

    case 'product':
      return arr.reduce((acc, curr) => acc * curr, 1);

    case 'max':
      // Start with the first element as the initial accumulator
      return arr.reduce((acc, curr) => (curr > acc ? curr : acc), arr[0]);

    default:
      throw new Error(`Unsupported operation: ${operation}`);
  }
}

const numbers = [2, 4, 6, 8];

console.log(reduceOperation(numbers, 'sum'));     // 20
console.log(reduceOperation(numbers, 'product')); // 384
console.log(reduceOperation(numbers, 'max'));     // 8