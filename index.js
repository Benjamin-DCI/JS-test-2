// # JavaScript Test: Advanced Topics

// ## Answer the questions to the best of your abilities! Try out all the questions.

// ### Time: 2hrs

// #### 1. >10
// Check if the values of an array are larger than 10. Return the values that are larger than 10 in
// an array. **Do not use a loop.**

let arr = [1, 4, 5, 45, 6, 7, 11];
const largerThan = arr => arr.filter(num => num > 10);
console.log("1: ", largerThan(arr));

// #### 2. Class Blueprint

// Create a blueprint for a course at DCI e.g. FwB 13b - using the "class" syntax in javascript.
// * The class should contain whether the course is a year long course or an orientation course.
// * The class should contain who the teacher is.
// * The class should contain whether the group is learning marketing or web development.
// * The class should contain the number of students taking the course.
// * The class should have a method that checks how big a classroom should be depending on the number
// of students taking the course. 1 student =  22m².
// * Add a method to print all the details of the course e.g. "This is a year long web development
// course taught by John Smith. There are 10 students taking the course."

class DCICourse {
  constructor(kind, teacher, subject, studentsTotal) {
    this.kind = kind;
    this.teacher = teacher;
    this.subject = subject;
    this.studentsTotal = studentsTotal;
  }
  sizeClassroom() {
    return ` ${this.studentsTotal * 22}m²`;
  }
  wholeInfo() {
    return `This is a ${this.kind} ${this.subject} course, taught by ${
      this.teacher
    }. There are ${this.studentsTotal} students taking the course.`;
  }
}

let FwB13b = new DCICourse("year long", "Benjamin", "web-development", "15");
console.log("2: ", FwB13b.sizeClassroom());
console.log("2: ", FwB13b.wholeInfo());

// #### 3. Events
// Each event below has a different turnout. Sort the array of objects based on which day of the week
// had the highest turnout. Highest turnout -> lowest turnout.

//javascript
let events = [
  { weekDay: "Monday", turnout: 20 },
  { weekDay: "Tuesday", turnout: 23 },
  { weekDay: "Wednesday", turnout: 61 },
  { weekDay: "Thursday", turnout: 19 },
  { weekDay: "Friday", turnout: 30 }
];

const highToLow = arr => arr.sort((a, b) => b.turnout - a.turnout);
console.log("3: ", highToLow(events));

// #### 4. Return Squared Odds
// **Complete this without using a loop.**
// Create a function (or series of functions) that takes in an array of numbers, squares every number,
// removes all results that are even, and returns an array of odd numbers.

let arr2 = [1, 2, 3, 4, 5, 6];

const squareOdd = arr =>
  arr.map(num => Math.pow(num, 2)).filter(num => num % 2 != 0);

console.log("4: ", squareOdd(arr2));

// #### 5. World Cup
// How long has it been since Germany won the world cup? Get the number of days since Germany won the cup.
// Germany last won on the 13th of July 2014.

const today = new Date();
const worldCup = new Date("2014-07-13");
const daysSinceWin = Math.floor((today - worldCup) / 86400000);
console.log("5: ", daysSinceWin);

// #### 6. Working Hours
// Calculate how many hours (total) this person worked in the week.
// * Note: start is always morning time, end is always afternoon.

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

const totalHours = arr => {
  let total = 0;
  arr.forEach((element, i, array) => {
    total += element.end - element.start;
  });
  return total;
};
console.log("6: ", totalHours(hourTracking));

// #### 7. Callback
// **Part 1**: Given the code below, write a function with a callback. The function should return a new
// array with each element calculated to the power of 2.

function mapping(arr, func) {
  console.log("7: ", arr.map(func));
}
const powerOfTwo = mapping([1, 2, 3, 4, 5], val => Math.pow(val, 2));

// Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

// **Part 2**: Create another variable, call the `mapping` function again,
// but now change the callback function to return an array of the square root of each element.

function mapping2(arr, func) {
  console.log("7.2: ", arr.map(func));
}
const square = mapping2([1, 2, 3, 4, 5], val => Math.sqrt(val));

// #### 8. 2D Array
// Given the 2D Array below, **loop** through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
for (let arr of board) {
  for (let i in arr) {
    console.log("8: ", arr[i]);
  }
}

// ##### Good luck! :)
