// JavaScript Test: Advanced Topics
// Answer the questions to the best of your abilities! Try out all the questions.
// Time: 2hrs

// 1. >10
// Check if the values of an array are larger than 10. Return the values that are larger than 10 in an array. Do not use a loop.

largerThanTen = arr => arr.filter(cur => cur > 10);
//console.log(largerThanTen([2, 4, 12, 14]));


// 2. Class Blueprint
// Create a blueprint for a course at DCI e.g. FwB 13b - using the "class" syntax in javascript.

// The class should contain whether the course is a year long course or an orientation course.
// The class should contain who the teacher is.
// The class should contain whether the group is learning marketing or web development.
// The class should contain the number of students taking the course.

// The class should have a method that checks how big a classroom should be depending on 
//the number of students taking the course. 1 student = 22m².

// Add a method to print all the details of the course e.g. "This is a year long web development 
//course taught by John Smith. There are 10 students taking the course."

class Course {
    constructor(name, duration, teacher, field, students) {
        this.name = name;
        this.duration = duration;
        this.teacher = teacher;
        this.field = field;
        this.students = students
    }

    Room(area) { return `The room requeried to ${this.name} class has to be bigger than ${this.students * area}m2.` }
    GetCourseInfo() { return `This is a ${this.duration}, ${this.field} course taught by ${this.teacher}. There are ${this.students} students taking the course.` }
}

const FwB13b = new Course("Fwb13b", "year", "Benjamin", "web developing", 14);
// console.log(FwB13b);
// console.log(FwB13b.Room(22));
// console.log(FwB13b.GetCourseInfo());


// 3. Events
// Each event below has a different turnout.
// Sort the array of objects based on which day of the week had the highest turnout. Highest turnout -> lowest turnout.

let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

SortTurOut = arr => {
    return arr.sort((a, b) => b.turnout - a.turnout)
}
//console.log(SortTurOut(events));



// 4. Return Squared Odds
// Complete this without using a loop. Create a function (or series of functions) that takes in an array of numbers,
// squares every number, removes all results that are even, and returns an array of odd numbers.

SquaredOdds = arr => arr.map(cur => Math.pow(cur, 2)).filter(cur => cur % 2 !== 0);

//console.log(SquaredOdds([2, 5, 6, 8, 14]));


// 5. World Cup
// How long has it been since Germany won the world cup? Get the number of days since Germany won the cup. Germany last won on the 13th of July 2014.


function GermanyWordCup() {
    let today = new Date();
    let lastCup = new Date(2014, 7, 13);
    return `${Math.ceil((today - lastCup) / 86400000)} days has passed since Germany won his last FootballWorldCup.`
}

//console.log(GermanyWordCup());

// 6. Working Hours
// Calculate how many hours (total) this person worked in the week.
// Note: start is always morning time, end is always afternoon.

const hourTracking = [
    { day: 'Monday', start: 8, end: 17 },
    { day: 'Tuesday', start: 9, end: 15 },
    { day: 'Wednesday', start: 10, end: 18 },
    { day: 'Thursday', start: 7, end: 14 },
    { day: 'Friday', start: 6, end: 12 },
];

function GetWorkedHoursWeek(obj) {
    let workedHours = 0;
    for (i in obj) {
        let hoursDay = obj[i].end - obj[i].start
        workedHours += hoursDay
        console.log(`On ${obj[i].day} ${hoursDay} has been worked.`);

    } return `At the end of the week ${workedHours} has been worked.`

}
//console.log(GetWorkedHoursWeek(hourTracking));

// 7. Callback
// Part 1: Given the code below, write a function with a callback. 
//The function should return a new array with each element calculated to the power of 2.

function mapping(arr, Callback) {
    let newArr = [];
    for (i in arr) { newArr.push(Callback(arr[i])) }
    return newArr

}

const powerOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.pow(val, 2));
const squareOfTwo = mapping([1, 2, 3, 4, 5], (val) => Math.sqrt(val, 2));
//console.log(powerOfTwo);
//console.log(squareOfTwo);


//Expected Output: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

// Part 2: Create another variable, call the mapping function again,
// but now change the callback function to return an array of the square root of each element.

// 8. 2D Array
// Given the 2D Array below, loop through the arrays to print the values.

let board = [[1, 2, 3, 4],
["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
[true, false]]


function consoling(obj) {
    for (i in obj) {
        for (x in obj[i]) {
            console.log(obj[i][x]);

        }
    }
}

//consoling(board)

