//Q2. Strict Mode & Variable Declaration
// What happens when you run the following code in strict mode? Explain the error and fix it.
// "use strict";
// x = 10;
// console.log(x);
/*
What happens in strict mode:
In strict mode, declaring a variable without 'let', 'const', or 'var'
throws a Uncaught ReferenceError: x is not defined. It prevents accidental global variables.

Fix: Declare the variable properly.
*/

"use strict";

let x = 10;
console.log(x);

//Q3. Data Types & typeof

function getType(value) {
  // Check for null explicitly 
  if (value === null) {
    return "null";
  }

  // Check for Array 
  if (Array.isArray(value)) {
    return "array";
  }

  //NaN and Infinity
  if (typeof value === "number") {
    if (Number.isNaN(value)) {
      return "NaN";
    }
    if (!isFinite(value)) {
      return "Infinity";
    }
    return "number";
  }

  return typeof value;
}


console.log(getType(null));      // "null"
console.log(getType([]));        // "array"
console.log(getType({}));        // "object"
console.log(getType(NaN));       // "NaN"
console.log(getType(Infinity));  // "Infinity"
console.log(getType("hello"));   // "string"
console.log(getType(42));        // "number"
console.log(getType(undefined)); // "undefined"

//Q4. Truthy & Falsy Values 
console.log(Boolean(""));   // Output: false
console.log(Boolean("0"));  // Output: true
console.log(Boolean(0));    // Output: false
console.log(Boolean(" "));  // Output: true
console.log(Boolean([]));   // Output: true

//Q5. Type Coercion Challenge 

console.log(1 + "2" + "2");   // Output: "122"
console.log(1 + +"2" + "2");  // Output: "32"
console.log(1 + -"1" + "2");  // Output: "02"
console.log(+"1" - "1" + "2");// Output: "02"
console.log("A" - "B" + "2"); // Output: "NaN2"
console.log("A" - "B" + 2);   // Output: NaN

//Q6. Methods of Primitives 
let str = "hello";

// Primitives accessing methods and properties:
console.log(str.toUpperCase()); // "HELLO"
console.log(str.length);        // 5

// Attempting to set a custom property:
str.test = 5;
console.log(str.test);          // undefined

