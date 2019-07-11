// <!-- # JavaScript Test: Advanced Topics

// ## Answer the questions to the best of your abilities! Try out all the questions.

// ### Time: 2hrs

// #### 1. >10
// Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array. **Do not use a loop.**

const arr = [0, 10, 5, 30, 8];
const largerThan = { max: 10 };

const arr2 = arr.filter(function(item) {
    return item < largerThan.max;
});

console.log(arr2);

// #### 2. Class Blueprint

// Create a blueprint for a course at DCI e.g. FwB 13b - using the "class" syntax in javascript.
// * The class should contain whether the course is a year long course or an orientation course.
// * The class should contain who the teacher is.
// * The class should contain whether the group is learning marketing or web development.
// * The class should contain the number of students taking the course.
// * The class should have a method that checks how big a classroom should be depending on the number of students taking the course. 1 student =  22m².
// * Add a method to print all the details of the course e.g. "This is a year long web development course taught by John Smith. There are 10 students taking the course."

class DCI {
    constructor(course, teacher, content, howManyStudents) {
        this.course = course;
        this.teacher = teacher;
        this.content = content;
        this.howManyStudents = howManyStudents;
    }

    classroomArea() {
        let area = 22 * this.howManyStudents;
        return area;
    }

    print() {
        return `This is a ${this.course} ${this.content} course taught by ${
      this.teacher
    }. There are ${this.howManyStudents} students taking the course`;
    }
}

const course1 = new DCI("year long", "John Smith", "web development", "10");
console.log(course1.print());

// #### 3. Events
// Each event below has a different turnout. Sort the array of objects based on which day of the week had the highest turnout. Highest turnout -> lowest turnout.

// ```javascript
let events = [
    { weekDay: "Monday", turnout: 20 },
    { weekDay: "Tuesday", turnout: 23 },
    { weekDay: "Wednesday", turnout: 61 },
    { weekDay: "Thursday", turnout: 19 },
    { weekDay: "Friday", turnout: 30 }
];

console.log(events.sort((a, b) => b.turnout - a.turnout));

// #### 4. Return Squared Odds
// **Complete this without using a loop.**
// Create a function (or series of functions) that takes in an array of numbers, squares every number, removes all results that are even, and returns an array of odd numbers.

let array = [1, 2, 3, 4, 5];

function square(a) {
    return a * a;
}
arrSquare = array.map(square);

function remove(array, element) {
    return array.filter(el => el !== element);
}

function even(num) {
    return num % 2 != 0;
}

var myOddArray = arrSquare.filter(even);

console.log(myOddArray);

// #### 5. World Cup
// How long has it been since Germany won the world cup? Get the number of days since Germany won the cup. Germany last won on the 13th of July 2014.

const lastWon = new Date("2014-07-13");
const DaysSinceGermanyWon = new Date();

const howManyDaysBefore = (DaysSinceGermanyWon - lastWon) / 86400000;

console.log(howManyDaysBefore);

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

function allHours(arr) {
    let dailyHours = 0;
    for (i of arr) {
        dailyHours += 12 - i.start + (i.end - 12);
    }
    return dailyHours;
}

console.log(allHours(hourTracking));

// #### 7. Callback
// **Part 1**: Given the code below, write a function with a callback. The function should return a new array with each element calculated to the power of 2.

// ```javascript
function mapping(array, callback) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        arr.push(callback(array[i]));
    }
    return arr;
}
const powerOfTwo = mapping([1, 2, 3, 4, 5], val => Math.pow(val, 2));
console.log(powerOfTwo);
// Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

// **Part 2**: Create another variable, call the `mapping` function again, but now change the callback function to return an array of the square root of each element.

const squareRoot = mapping([1, 2, 3, 4, 5], val => Math.sqrt(val));
console.log(squareRoot);

// #### 8. 2D Array

// Given the 2D Array below, **loop** through the arrays to print the values.

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];

board.forEach(a => a.forEach(b => console.log(b)));