// JavaScript Test: Advanced Topics
// Answer the questions to the best of your abilities! Try out all the questions.
// Time: 2hrs

// 1. >10
// Check if the values of an array are larger than 10.
// Return the values that are larger than 10 in an array. Do not use a loop.
let input = new Array(9, 3, 4.3, 24, 54, 8, 19, 23, 46, 87, 3.14);

const newArray = new Array();
input.forEach(function(number) {
  if (number > 10) {
    newArray.push(number);
  }
  return newArray;
});
console.log("1: ", newArray);

// 2. Class Blueprint
// Create a blueprint for a course at DCI e.g. FwB 13b - using the "class" syntax in javascript.
// The class should contain whether the course is a year long course or an orientation course.
// The class should contain who the teacher is.
// The class should contain whether the group is learning marketing or web development.
// The class should contain the number of students taking the course.
// The class should have a method that checks how big a classroom should be depending on the number of students taking the course.
// 1 student = 22m².
// Add a method to print all the details of the course e.g.
//"This is a year long web development course taught by John Smith. There are 10 students taking the course."
class ClassesDCI {
  constructor(courses, careers, numOfStudents, teacher) {
    this.courses = courses;
    this.careers = careers;
    this.numOfStudents = numOfStudents;
    this.teacher = teacher;
  }
  spaceForClass() {
    return `${this.numOfStudents * 22} m²`;
  }

  detailsOfCourse() {
    return `This is a ${this.courses} ${this.careers} course taught by ${
      this.teacher
    }. There are ${this.numOfStudents} students taking the course.`;
  }
}
let classes = new ClassesDCI("one year", "web development", 10, "John Smith");
console.log("2: ", classes.detailsOfCourse());
console.log(classes.spaceForClass(10));

// 3. Events
// Each event below has a different turnout.
//Sort the array of objects based on which day of the week had the highest turnout. Highest turnout -> lowest turnout.
let events = [
  { weekDay: "Monday", turnout: 20 },
  { weekDay: "Tuesday", turnout: 23 },
  { weekDay: "Wednesday", turnout: 61 },
  { weekDay: "Thursday", turnout: 19 },
  { weekDay: "Friday", turnout: 30 }
];
const sortTournout = arr => arr.sort((a, b) => a.turnout - b.turnout); // .sort((a, b) => b - a); -> from highest to lowest
console.log("3: ", sortTournout(events));

// 4. Return Squared Odds
// Complete this without using a loop.
// Create a function (or series of functions) that takes in an array of numbers, squares every number, removes all results that are even, and returns an array of odd numbers.
const newArr1 = arr1 =>
  arr1.map(item => item * item).filter(item => item % 2 !== 0);
console.log("4: ", newArr1([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 5. World Cup
// How long has it been since Germany won the world cup?
// Get the number of days since Germany won the cup. Germany last won on the 13th of July 2014.
const germanyCup = new Date("2014-07-13");
const today = new Date();
const daysAgo = Math.floor((today - germanyCup) / 86400000); // 86400000 sind millisekunden pro tag
console.log("5: ", daysAgo);

// 6. Working Hours
// Calculate how many hours (total) this person worked in the week.
// Note: start is always morning time, end is always afternoon.
const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];
const totalHours = hourTracking.reduce(
  (total, val) => total + (val.end - val.start),
  0
);
console.log("6: ", totalHours);

// 7. Callback --> no solution!!!!
// Part 1: Given the code below, write a function with a callback.
// The function should return a new array with each element calculated to the power of 2.
// Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
// function mapping(arr, func) {
//   return arr.map(x => func(x));
// }
// const powerOfTwo = mapping([1, 2, 3, 4, 5], val => Math.pow(val, 2));
// console.log("7: ", powerOfTwo);

// // Part 2: Create another variable, call the mapping function again, but now change the callback function to return an array of the square root of each element.
// const squareRoot = mapping([1, 2, 3, 4, 5], val => Math.sqrt(val));
// console.log(squareRoot);

// 8. 2D Array
// Given the 2D Array below, loop through the arrays to print the values.

let board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];
const brownFox = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log("8: ", arr[i][j]);
    }
  }
};
brownFox(board);
