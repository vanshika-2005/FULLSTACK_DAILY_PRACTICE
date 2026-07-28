//Output of original code:
// 3
// 3
// 3

//Fix 1: Using let (ES6)
var funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(function() { console.log(i); });
}
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2

//Fix 2: Using an IIFE (ES5)
var funcs = [];
for (var i = 0; i < 3; i++) {
  (function(index) {
    funcs.push(function() { console.log(index); });
  })(i);
}
funcs[0](); // 0
funcs[1](); // 1
funcs[2](); // 2




