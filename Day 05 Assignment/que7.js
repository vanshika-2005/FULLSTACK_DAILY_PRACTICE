// Modern implementation
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

// Three Key Advantages of Rest Parameters:
// Real Array Instance: Rest parameters yield a true JavaScript Array, allowing direct access to methods like .reduce(), .map(), and .filter(). arguments is an array-like object lacking standard array methods.

// Explicit Intent & Scope: Rest parameters only capture unnamed/extra arguments, whereas arguments collects every single argument passed to the function.

// Arrow Function Compatibility: arguments is not bound inside arrow functions, whereas rest parameters work universally.