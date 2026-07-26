function uniqueElementsSet(arr) {
  return Array.from(new Set(arr)); // or [...new Set(arr)]
}

function uniqueElementsFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

const sampleArray = [1, 3, 2, 3, 1, 4, 2, 5];

console.log(uniqueElementsSet(sampleArray));    // [1, 3, 2, 3, 4, 5] -> wait, [1, 3, 2, 4, 5]
console.log(uniqueElementsFilter(sampleArray)); // [1, 3, 2, 4, 5]