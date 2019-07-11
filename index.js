// # JavaScript Test: Advanced Topics

// ## Answer the questions to the best of your abilities! Try out all the questions.

// ### Time: 2hrs

// #### 1. >10
// Check if the values of an array are larger than 10. Return the values that are larger
// than 10 in an array. **Do not use a loop.**

//.....................................................................................
// const arr = [1, 23, 5, 7, 89, 10, 11, 66];
// const numCheck = arr => arr.filter(num => num > 10);
// console.log(numCheck(arr));
//.....................................................................................

// #### 2. Class Blueprint

// Create a blueprint for a course at DCI e.g. FwB 13b - using the "class" syntax in javascript.
// * The class should contain whether the course is a year long course or an orientation course.
// * The class should contain who the teacher is.
// * The class should contain whether the group is learning marketing or web development.
// * The class should contain the number of students taking the course.
// * The class should have a method that checks how big a classroom should be depending
//   on the number of students taking the course. 1 student =  22m².
// * Add a method to print all the details of the course e.g.
// "This is a year long web development course taught by John Smith. There are 10 students taking the course."

//............................................................................................
// class DCICourse {
//   constructor(name, duration, teacher, topic, studentNum) {
//     this.name = name;
//     this.duration = duration;
//     this.teacher = teacher;
//     this.topic = topic;
//     this.studentNum = studentNum;
//   }
//   roomSize() {
//     return `There are ${
//       this.studentNum
//     } students in this class. A room of ${this.studentNum *
//       22 *
//       22} m2 will be needed.`;
//   }
// }

// const course = new DCICourse("FwB-13b", 12, "Benjamin", "Web Development", 15);
// console.log(course.roomSize());
//............................................................................................

// #### 3. Events
// Each event below has a different turnout. Sort the array of objects based on which
// day of the week had the highest turnout. Highest turnout -> lowest turnout.

// let events = [
//     { weekDay: 'Monday', turnout: 20 },
//     { weekDay: 'Tuesday', turnout: 23 },
//     { weekDay: 'Wednesday', turnout: 61 },
//     { weekDay: 'Thursday', turnout: 19 },
//     { weekDay: 'Friday', turnout: 30 },
// ]

//.............................................................................................
// let events = [
//   { weekDay: "Monday", turnout: 20 },
//   { weekDay: "Tuesday", turnout: 23 },
//   { weekDay: "Wednesday", turnout: 61 },
//   { weekDay: "Thursday", turnout: 19 },
//   { weekDay: "Friday", turnout: 30 }
// ];

// const eventsSort = arr => arr.sort((a, b) => b.turnout - a.turnout);
// console.log(eventsSort(events));
//.............................................................................................

// #### 4. Return Squared Odds
// **Complete this without using a loop.**
// Create a function (or series of functions) that takes in an array of numbers,
// squares every number, removes all results that are even, and returns an array of odd numbers.

//.....................................................................................
// const arr = [23, 5, 56, 77, 45, 90, 3, 7];

// const squaredOdds = arr =>
//   arr.map(num => num * num).filter(num => num % 2 !== 0);
// console.log(squaredOdds(arr));
//.....................................................................................

// #### 5. World Cup
// How long has it been since Germany won the world cup?
// Get the number of days since Germany won the cup. Germany last won on the 13th of July 2014.

//.........................................................................................
// const today = new Date();
// const win = new Date("2014-7-13");
// const days = Math.floor((today - win) / 86400000);
// console.log(days);
//.........................................................................................

// #### 6. Working Hours
// Calculate how many hours (total) this person worked in the week.
// * Note: start is always morning time, end is always afternoon.

// const hourTracking = [
//       { day: 'Monday', start: 8, end: 17},
//       { day: 'Tuesday', start: 9, end: 15},
//       { day: 'Wednesday', start: 10, end: 18},
//       { day: 'Thursday', start: 7, end: 14},
//       { day: 'Friday', start: 6, end: 12},
//     ];

//......................................................................................
// const hourTracking = [
//   { day: "Monday", start: 8, end: 17 },
//   { day: "Tuesday", start: 9, end: 15 },
//   { day: "Wednesday", start: 10, end: 18 },
//   { day: "Thursday", start: 7, end: 14 },
//   { day: "Friday", start: 6, end: 12 }
// ];

// const calcHours = arr =>
//   arr.reduce((acc, time) => acc + (time.end - time.start), 0);
// console.log(calcHours(hourTracking));
//......................................................................................

// #### 7. Callback
// **Part 1**: Given the code below, write a function with a callback.
// The function should return a new array with each element calculated to the power of 2.

// function mapping(){
// //insert code here
// }
// const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );

// Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

//....................................................................................
// const nums = [1, 2, 3, 4, 5];
// const power = arr => arr.map(num => calculate(num));
// const calculate = num => Math.pow(num, 2);

// console.log(power(nums));
//....................................................................................

// **Part 2**: Create another variable, call the `mapping` function again,
// but now change the callback function to return an array of the square root of each element.

// #### 8. 2D Array
// Given the 2D Array below, **loop** through the arrays to print the values.

// let board = [[1, 2, 3],
// 	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
// 	     [true, false]]

//.......................................................................................
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];

// board.forEach(x => x.forEach(y => console.log(y)));
//.......................................................................................

// ##### Good luck! :)
