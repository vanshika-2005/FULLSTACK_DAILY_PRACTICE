// map() is designed to transform arrays. 
// It creates and returns a brand-new array containing the results of calling a function on every element, leaving the original array untouched.

const numbers = [1, 2, 3, 4, 5];
const result = numbers.map(num => num * 2);
console.log(result); // [2, 4, 6, 8, 10]

// forEach() is designed to execute side effects .
// It always returns undefined and does not create a new array on its own.

const numbers = [1, 2, 3, 4, 5];
const doubled = [];
numbers.forEach(num => {
  doubled.push(num * 2);
});
console.log(doubled); // [2, 4, 6, 8, 10]