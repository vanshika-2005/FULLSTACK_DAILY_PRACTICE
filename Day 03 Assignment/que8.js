//1. Expected Output
// 42
// undefined
// undefined

//2. Explanation of Why

// obj.getValue()->42
// When a traditional function is called as a method of an object (obj.getValue()), this is dynamically bound to the object calling it (obj).
// obj.getValueArrow() ->undefined
// Arrow functions do not have their own this binding. They lexically inherit this from the surrounding scope where they were defined. Object literals {} do not create a block scope for this—the surrounding scope is the global window or module scope. Since value doesn't exist on the global scope, this.value resolves to undefined.
// obj.delayedGetValue() ->undefined
// When setTimeout executes a traditional callback function, the function is detached from obj and executed by the runtime's timer mechanism in the global context. In non-strict mode, this inside the callback defaults to window (or Timeout in Node.js), neither of which has value.


//3. Fixed Code
const obj = {
  value: 42,
  getValue() {
    return this.value;
  },
  delayedGetValue() {
    setTimeout(() => {
      console.log(this.value);
    }, 100);
  }
};

console.log(obj.getValue());        // Output: 42
obj.delayedGetValue();              // Output: 42 (after 100ms)