// Snippet 1
// Output: undefined

// Reason: var variables are hoisted to the top of their function/global scope and initialized with undefined. The assignment a = 10 stays in place.

// Snippet 2
// Output: Uncaught ReferenceError: Cannot access 'b' before initialization

// Reason: let variables are hoisted, but they enter the Temporal Dead Zone (TDZ) until execution reaches the line where they are declared. Accessing them inside the TDZ triggers a ReferenceError.

// Snippet 3
// Output: 3, 3, 3

// Reason: var is function-scoped. There is only one binding of i shared across all loop iterations. By the time the setTimeout callbacks execute (after ~100ms), the loop has finished and i has been incremented to 3.

// Snippet 4
// Output: 0, 1, 2

// Reason: let is block-scoped. Each iteration of the for loop creates a brand-new lexical scope binding for j, capturing its value uniquely for that turn.