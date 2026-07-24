const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const totalSum = numbers
  .filter(num => num % 2 !== 0) // [1, 3, 5, 7, 9]
  .map(num => num ** 2)          // [1, 9, 25, 49, 81]
  .reduce((acc, curr) => acc + curr, 0); // 165

console.log(totalSum); // 165