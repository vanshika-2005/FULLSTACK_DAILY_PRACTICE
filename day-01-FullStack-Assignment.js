/* 
    * Q1 ->
        a) 0.1+0.2 = 0.30000000000000004. Because computers use binary floating-point arithmetic to store decimal values. These values cannot be represented as finite decimal values, meaning they are infinite recurring fractions so they are rounded-off to to fir into finite number of bits, hence when 0.1 and 0.2 are added they return a result slightly larger that is 0.30000000000000004
        
        b) typeof NaN = number. Because any and all numerical related keywords are special values(i.e Infinity, -Infinity and NaN) so NaN falls under the 'number', because NaN represents and unrepresentable  or undefined mathematical result.

        c) "5"-3 = 2. Because the '-' operator is strictly a mathematical operator so JS attempts to convert both the operands into number, hence the result "5"-3=2

        d) "5"+3 = '53'. Because the '+' operator is overloaded for both mathematical and string operations. If either is a string JS prioritizes the string concatenation and converts the number into a string and joins them, hence "5"+3='53'
    
    * Q2 -> when using strict mode JS forbids the implicit creation of global variables, meaning assigning a value to a variable without defining it(using var, const or let) results in a "ReferenceError: x is not defined".
        the Fix is as Follows
        "use strict";
        var x = 10; // anyone among the three(var, let or const) can be used here
        console.log(x);
*/

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