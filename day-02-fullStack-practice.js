// Q1. Number Precision

/*
Why 0.1 + 0.2 !== 0.3 in JavaScript:
JavaScript uses the IEEE 754 standard for floating-point numbers (64-bit binary).
Numbers like 0.1 and 0.2 cannot be represented precisely in binary format.
As a result, 0.1 + 0.2 equals 0.30000000000000004, which fails direct equality (===) with 0.3.
*/

function areFloatsEqual(a, b, epsilon = 1e-10) {
  // Check if the absolute difference is smaller than a tiny margin.
  return Math.abs(a - b) < epsilon;
}
console.log(0.1 + 0.2 === 0.3); // false
console.log(areFloatsEqual(0.1 + 0.2, 0.3)); // true


// Q2. Number Parsing


function parseNumber(input) {
  // Reject non-strings or null/undefined
  if (typeof input !== "string") {
    return NaN;
  }

  // Handle leading/trailing whitespace
  let trimmed = input.trim();

  // Reject empty strings (Number("") returns 0, but we want NaN)
  if (trimmed === "") {
    return NaN;
  }

  // Convert to number
  let result = Number(trimmed);

  return result;
}

console.log("\n--- Q2 Tests ---");
console.log('parseNumber("42"):', parseNumber("42"));       // 42
console.log('parseNumber("  0xFF "):', parseNumber("  0xFF ")); // 255 (Hexadecimal)
console.log('parseNumber("   "):', parseNumber("   "));      // NaN
console.log('parseNumber("abc"):', parseNumber("abc"));      // NaN

/*
Comparison with built-ins:
1. Number(""): Returns 0 (parseNumber returns NaN).
2. parseInt("42abc"): Returns 42 by parsing partially (parseNumber returns NaN because "42abc" is invalid overall).
3. parseFloat("12.34xyz"): Returns 12.34 by parsing until non-numeric char (parseNumber returns NaN).
*/


// Q3. Math Object Methods


function generateRandomUniqueArray() {
  let result = [];

  
  while (result.length < 10) {
    
    let randomNum = Math.floor(Math.random() * 100) + 1;

    if (!result.includes(randomNum)) {
      result.push(randomNum);
    }
  }

  // Sort ascending 
  result.sort(function (a, b) {
    return a - b;
  });

  return result;
}

console.log(generateRandomUniqueArray());



// Q4. String Immutability

/*
Output of:
let str = "JavaScript";
str[0] = "j";
console.log(str);

Output: "JavaScript"
Why: Strings in JS are immutable. You cannot alter individual characters of an existing string.
The assignment str[0] = "j" fails silently (or throws an error in strict mode).
*/

function replaceAt(str, index, char) {

  if (index < 0 || index >= str.length) {
    return str; 
  }

  return str.slice(0, index) + char + str.slice(index + 1);
}

console.log("replaceAt('JavaScript', 0, 'j'):", replaceAt("JavaScript", 0, "j")); // "javaScript"

// Q5. String Methods Challenge


function extractDomain(email) {
  // Reject non-strings
  if (typeof email !== "string") {
    return "Invalid Email";
  }

  // 1. Remove leading/trailing spaces
  let cleaned = email.trim();

  // 2. Count '@' symbols and find index
  let firstAtIndex = cleaned.indexOf("@");
  let lastAtIndex = cleaned.lastIndexOf("@");

  // If no '@' exists OR multiple '@' exist OR '@' is at start/end
  if (
    firstAtIndex === -1 ||
    firstAtIndex !== lastAtIndex ||
    firstAtIndex === 0 ||
    firstAtIndex === cleaned.length - 1
  ) {
    return "Invalid Email";
  }

  // Extract domain part after '@'
  let domain = cleaned.slice(firstAtIndex + 1);

  // Check if domain contains at least one dot '.' and no spaces
  if (!domain.includes(".") || domain.includes(" ")) {
    return "Invalid Email";
  }

  return domain;
}

console.log("\n--- Q5 Tests ---");
console.log(extractDomain(" john.doe@example.com ")); // "example.com"
console.log(extractDomain("john.doe@@example.com"));  // "Invalid Email"
console.log(extractDomain("john.doeexample.com"));   // "Invalid Email"


// Q6. Template Literals & Tagged Templates


function highlight(strings, ...values) {
  let result = "";

  // Combine static strings and wrapped values
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) {
      result += "[[" + values[i] + "]]";
    }
  }

  return result;
}

console.log("\n--- Q6 Tests ---");
const name = "Alice";
const age = 25;
console.log(highlight`Name: ${name}, Age: ${age}`);
// Output: "Name: [[Alice]], Age: [[25]]"



// Q7. Array Creation & Access Patterns


// 1. Array literal notation
let m1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
];

// 2. Array.from()
let m2 = Array.from([0, 1, 2], function (rowIndex) {
  return Array.from([0, 1, 2], function (colIndex) {
    return rowIndex === colIndex ? 1 : 0;
  });
});

// 3. new Array() with a loop
let m3 = new Array(3);
for (let i = 0; i < 3; i++) {
  m3[i] = new Array(3);
  for (let j = 0; j < 3; j++) {
    m3[i][j] = (i === j) ? 1 : 0;
  }
}

// Access Row 2, Column 3 (1-based index -> 0-based: row 1, col 2)
console.log("\n--- Q7 Tests ---");
console.log("Literal Access:", m1[1][2]); // 0
console.log("Array.from Access:", m2[1][2]); // 0
console.log("Loop Access:", m3[1][2]); // 0

// Q8. Array Mutability

/*
Explanation:
const arr = [1, 2, 3];
arr.push(4);      // SUCCEEDS: 'const' prevents changing the reference 'arr', but contents can be mutated.
arr = [5, 6, 7];  // ERROR (TypeError): Attempting to reassign 'const' variable to a new memory address.
*/

function freezeArray(arr) {
  // Object.freeze() prevents adding, deleting, or modifying elements
  return Object.freeze(arr);
}

console.log("\n--- Q8 Tests ---");
let frozen = freezeArray([1, 2, 3]);
// frozen.push(4); // Throws TypeError in strict mode / fails silently in non-strict
console.log("Is array frozen?:", Object.isFrozen(frozen)); // true


// Q9. Array Methods — splice vs slice

/*
Difference between slice and splice:
1. slice(start, end): Non-mutating. Extracts a portion of the array and returns a NEW array.
2. splice(start, deleteCount): Mutating. Removes/replaces elements directly from the ORIGINAL array.
*/

let arr = [10, 20, 30, 40, 50];
let sliced = arr.slice(1, 3);   // Returns elements from index 1 up to (not including) 3 -> [20, 30]
let spliced = arr.splice(1, 3);  // Removes 3 elements starting at index 1 -> [20, 30, 40]

console.log("arr (after splice):", arr); // [10, 50]
console.log("sliced:", sliced);          // [20, 30]
console.log("spliced:", spliced);        // [20, 30, 40]


// Q10. Multi-dimensional Array Operations

function flattenAndSum(matrix) {
  let sum = 0;

  // Flatten and calculate sum using nested loops
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

console.log("flattenAndSum([[1, 2], [3, 4], [5, 6]]):", flattenAndSum([[1, 2], [3, 4], [5, 6]])); // 21


// Q11. String Array Conversion


function reverseWords(sentence) {
  // Convert string to array of words
  let wordsArray = sentence.split(" ");

  // Reverse array order
  wordsArray.reverse();

  // Convert back to string
  return wordsArray.join(" ");
}

console.log("\n--- Q11 Tests ---");
console.log(reverseWords("The quick brown fox")); // "fox brown quick The"


// Q12. Interview Puzzle — Array-like Objects

/*
Array-like Objects Explanation:
An "array-like" object is an object that has indexed elements (0, 1, 2...) and a .length property,
but DOES NOT inherit from Array.prototype. Therefore, built-in array methods like .forEach(), 
.map(), or .pop() cannot be called directly on it.

Examples: 'arguments' object inside functions, NodeLists from HTML DOM.
*/

function test() {
  console.log("\n--- Q12 Output ---");
  console.log("Is arguments an Array?:", Array.isArray(arguments)); // false
  console.log("Length:", arguments.length);                          // 3
  console.log("First element:", arguments[0]);                       // 1

  // arguments.forEach(arg => console.log(arg)); // TypeError: arguments.forEach is not a function

  // Converting array-like to true Array:
  const argsArray = Array.from(arguments);
  console.log("Is converted argsArray an Array?:", Array.isArray(argsArray)); // true
}

test(1, 2, 3);