//1. Single Parameter
const greet = name => "Hello, " + name;

//2. Multiple Parameters
const multiply = (a, b) => a * b;

//3. Preserving Scope with Callbacks
function Person() {
  this.age = 0;
  setInterval(() => {
    this.age++;
    console.log(this.age);
  }, 1000);
}