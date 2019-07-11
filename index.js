// # JavaScript Test: Advanced Topics
// ## Answer the questions to the best of your abilities! Try out all the questions.
// ### Time: 2hrs
// #### 1. >10
// Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array.
// **Do not use a loop.**
console.log("Q1");

const greatTen = [5, 2, 10, 15, 20, -10];
greatTen.forEach(function(x) {
  if (x >= 10) {
    const filteredTen = greatTen.filter(x => x >= 10);
    console.log(filteredTen); //"why do you come up three times?!"
  }
});

// #### 2. Class Blueprint
console.log("Q2");
// Create a blueprint for a course at DCI e.g. FwB 13b - using the "class" syntax in javascript.
// * The class should contain whether the course is a year long course or an orientation course.
// * The class should contain who the teacher is.
// * The class should contain whether the group is learning marketing or web development.
// * The class should contain the number of students taking the course.
// * The class should have a method that checks how big a classroom should be depending on the number of students taking the course.
// 1 student =  22m².
// * Add a method to print all the details of the course e.g. "This is a year long web development course taught by John Smith.
// There are 10 students taking the course."
class Fw13b {
  constructor(membersNum, course, teacher, learn) {
    this.membersNum = membersNum;
    this.course = course;
    this.teacher = teacher;
    this.learn = learn;
    this.room = function() {
      return membersNum * 22;
    };
    this.room();
  }
}
const fantasticFourTeen = new Fw13b(
  15,
  "year long course",
  "Benjamin",
  "Web Development"
);
console.log(
  `This is a ${fantasticFourTeen.course} about ${
    fantasticFourTeen.learn
  } taught by ${fantasticFourTeen.teacher}. There are ${
    fantasticFourTeen.membersNum
  } students. The room should be ${fantasticFourTeen.room()} m²`
);

// #### 3. Events
console.log("Q3");
// Each event below has a different turnout. Sort the array of objects based on which day of the week had the highest turnout.
// Highest turnout -> lowest turnout.
// ```javascript
let events = [
  { weekDay: "Monday", turnout: 20 },
  { weekDay: "Tuesday", turnout: 23 },
  { weekDay: "Wednesday", turnout: 61 },
  { weekDay: "Thursday", turnout: 19 },
  { weekDay: "Friday", turnout: 30 }
];
// ```
let sortTurns = [];
for (let turnout in events) {
  sortTurns.push([turnout, events[turnout]]);
}
sortTurns.sort(function(a, b) {
  return a - b;
});
console.log(sortTurns);

// #### 4. Return Squared Odds
console.log("Q4");
// **Complete this without using a loop.**
// Create a function (or series of functions) that takes in an array of numbers, squares every number,
// removes all results that are even, and returns an array of odd numbers.
const squrOdd = [15, 42, 77, 128, 4].map(function(i) {
  return Math.pow(i, 2);
});
console.log(squrOdd.filter(j => j % 2 !== 0));

// #### 5. World Cup
// How long has it been since Germany won the world cup? Get the number of days since Germany won the cup.
// Germany last won on the 13th of July 2014.
console.log("Q5");

const date_diff_indays = function(date1, date2) {
  dt1 = new Date(date1);
  dt2 = new Date(date2);
  return Math.floor(
    (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
      Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
  );
};
console.log(date_diff_indays("07/13/2014", "07/11/2019"));

// #### 6. Working Hours
console.log("Q6");
// Calculate how many hours (total) this person worked in the week.
// * Note: start is always morning time, end is always afternoon.
// ```javascript
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];
// ```

// #### 7. Callback
console.log("Q7");
// **Part 1**: Given the code below, write a function with a callback.
// The function should return a new array with each element calculated to the power of 2.
// ```javascript
// function mapping(){
// //insert code here
// }
// const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
// ```
// Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
// **Part 2**: Create another variable, call the `mapping` function again,
// but now change the callback function to return an array of the square root of each element.
const powerOfTwo = [1, 2, 3, 4, 5].map(function(val) {
  return Math.pow(val, 2);
});
console.log(powerOfTwo);
//Callback???

// #### 8. 2D Array
// Given the 2D Array below, **loop** through the arrays to print the values.
// ```javascript
console.log("Q8");

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
// ```
for (let i = 0; i < board.length; i++) {
  console.log(board[i].join(" "));
}
// ##### Good luck! :)
