const visitedNodes = new WeakSet();

function processNode(node) {
  if (visitedNodes.has(node)) {
    return "Already processed";
  }

  visitedNodes.add(node);
  return "Processing...";
}

// --- Test Case ---
let node1 = { tagName: "DIV", id: "app" };
let node2 = { tagName: "BUTTON", id: "submit" };

console.log(processNode(node1)); // "Processing..."
console.log(processNode(node1)); // "Already processed"

console.log(processNode(node2)); // "Processing..."
console.log(processNode(node2)); // "Already processed"