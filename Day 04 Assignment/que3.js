class GradeTracker {
  constructor() {
    this.gradesMap = new Map();
  }

  // 1. Add grade for a student
  addGrade(name, score) {
    if (this.gradesMap.has(name)) {
      this.gradesMap.get(name).push(score);
    } else {
      this.gradesMap.set(name, [score]);
    }
  }

  // 2. Get average score for a student
  getAverage(name) {
    if (!this.gradesMap.has(name)) {
      return "Not found";
    }

    const scores = this.gradesMap.get(name);
    if (scores.length === 0) return 0;

    let total = 0;
    scores.forEach((score) => {
      total += score;
    });

    return total / scores.length;
  }

  // 3. Get the student with the highest average
  getTopper() {
    if (this.gradesMap.size === 0) {
      return "No students found";
    }

    let topperName = null;
    let highestAvg = -1;

    this.gradesMap.forEach((scores, name) => {
      const avg = this.getAverage(name);
      if (avg > highestAvg) {
        highestAvg = avg;
        topperName = name;
      }
    });

    return { name: topperName, average: highestAvg };
  }
}

// --- Test Case ---
const tracker = new GradeTracker();

tracker.addGrade("Alice", 85);
tracker.addGrade("Alice", 92);
tracker.addGrade("Bob", 78);
tracker.addGrade("Bob", 88);
tracker.addGrade("Charlie", 95);

console.log("Alice Average:", tracker.getAverage("Alice")); // 88.5
console.log("Unknown Average:", tracker.getAverage("David")); // "Not found"
console.log("Topper:", tracker.getTopper()); // { name: "Charlie", average: 95 }