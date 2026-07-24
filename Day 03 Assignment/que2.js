//Using a for Loop
function filterFalsyFor(arr) {
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }
  
  return result;
}

console.log(filterFalsyFor([0, 1, false, 2, '', 3, null, undefined, NaN, 'hello']));

//Implementation Using reduce
function filterFalsyReduce(arr) {
  return arr.reduce((acc, current) => {
    if (current) {
      acc.push(current);
    }
    return acc;
  }, []);
}

console.log(filterFalsyReduce([0, 1, false, 2, '', 3, null, undefined, NaN, 'hello']));


// Output: [1, 2, 3, 'hello']
