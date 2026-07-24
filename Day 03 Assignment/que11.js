//1. Using reduce (Left to Right)
const arr = [[1, 2], [3, 4], [5, 6]];

const reducedLeft = arr.reduce((acc, curr) => acc.concat(curr), []);

console.log(reducedLeft);
// Output: [1, 2, 3, 4, 5, 6]


//2. Using reduceRight (Right to Left)
const arr = [[1, 2], [3, 4], [5, 6]];

const reducedRight = arr.reduceRight((acc, curr) => acc.concat(curr), []);

console.log(reducedRight);
// Output: [5, 6, 3, 4, 1, 2]

