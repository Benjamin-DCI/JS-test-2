// 1. > 10
// Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array.

const larger10 = arr => arr.filter(x => x > 10);
console.log("1.", larger10([34, 5, 66, 78, 3, 0, -90]));

// 2. Class Blueprint

// Create a blueprint for a course at DCI e.g.FwB 13b - using the "class" syntax in javascript.
// * The class should contain whether the course is a year long course or an orientation course.
// * The class should contain who the teacher is.
// * The class should contain whether the group is learning marketing or web development.
// * The class should contain the number of students taking the course.
// * The class should have a method that checks how big a classroom should be depending on the number of students taking the course. 1 student = 22m².
// * Add a method to print all the details of the course e.g. "This is a year long web development course taught by John Smith. There are 10 students taking the course."

class FwB {
  constructor(classLong, teacher, classType, numberOfStudent) {
    this.classLong = classLong;
    this.teacher = teacher;
    this.classType = classType;
    this.numberOfStudent = numberOfStudent;
  }
  //method that checks how big a classroom should be
  checkArea() {
    let area = 22 * this.numberOfStudent;
    return ` The classroom should be ${area}m²`;
  }
  print() {
    return `This is ${this.classLong} ${this.classType} course taught by ${
      this.teacher
    }. There are ${this.numberOfStudent} students taking the course `;
  }
}

const FwB13b = new FwB("one Year", "Benjamin", "web development", 14);
console.log("2.", FwB13b.print());
console.log("2.", FwB13b.checkArea());

// 3. Events
// Each event below has a different turnout.Sort the array of objects based on which day of the week had the highest turnout.Highest turnout -> lowest turnout.

let events = [
  { weekDay: "Monday", turnout: 20 },
  { weekDay: "Tuesday", turnout: 23 },
  { weekDay: "Wednesday", turnout: 61 },
  { weekDay: "Thursday", turnout: 19 },
  { weekDay: "Friday", turnout: 30 }
];

console.log("3.", events.sort((a, b) => a.turnout - b.turnout));

// 4. Return Squared Odds
// ** Complete this without using a loop.**
//  Create a function (or series of functions) that takes in an array of numbers, squares every number, removes all results that are even, and returns an array of odd numbers.
const mathFunction = arr =>
  arr.map(x => Math.pow(x, 2)).filter(x => x % 2 != 0);

console.log("4.", mathFunction([1, 2, 3, 6, 5]));

// 5. World Cup
// How long has it been since Germany won the world cup ? Get the number of days since Germany won the cup.Germany last won on the 13th of July 2014.

let today = new Date();
let lastGermanyWon = new Date("13 July 2014");
let different = Math.floor((today - lastGermanyWon) / 86400000);

console.log("5.", `${different} days since Germany won the cup`);

// 6. Working Hours
// Calculate how many hours(total) this person worked in the week.
// * Note: start is always morning time, end is always afternoon.

const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

function total(arrOfObj) {
  let hourProDay = 0;
  for (i of arrOfObj) {
    hourProDay += 12 - i.start + (i.end - 12);
  }
  return `${hourProDay} hours pro  the last week`;
}

console.log("6.", total(hourTracking));

// 7. Callback
//     ** Part 1 **: Given the code below, write a function with a callback.The function should return a new array with each element calculated to the power of 2.
function mapping(myArr, callback) {
  let arr = [];
  for (let i = 0; i < myArr.length; i++) {
    arr.push(callback(myArr[i]));
  }
  return arr;
}

const powerOfTwo = mapping([1, 2, 3, 4, 5], val => Math.pow(val, 2));
console.log("7.", powerOfTwo);

// ```
// Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

//     ** Part 2 **: Create another variable, call the`mapping` function again, but now change the callback function to return an array of the square root of each element.
const squareRoot = mapping([1, 4, 9, 16, 25], val => Math.sqrt(val, 2));
console.log("7.", squareRoot);

// 8. 2D Array
// Given the 2D Array below, ** loop ** through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

console.table(board); // :D i know . you don't mean like this

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}
