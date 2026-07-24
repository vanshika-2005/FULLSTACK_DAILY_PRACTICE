//output
// map: 1
// map: 2
// map: 3
// filter: 2
// filter: 4
// filter: 6
// reduce: 4
// reduce: 6

//Execution Order Breakdown
//avaScript array methods run eagerly and sequentially, completing each method on the entire array before moving to the next link in the chain:
// 1. .map() Execution (Processes [1, 2, 3])
//2. .filter() Execution (Processes [2, 4, 6])
//3. .reduce() Execution (Processes [4, 6])
//Final result: 10