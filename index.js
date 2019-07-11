// 1. >10
const numArr = [1, 4, 100, 59, 2, -11];

//Filter numbers greater than 10
const greaterThan10 = arr => arr.filter(num => num > 10);

console.log(greaterThan10(numArr));
//[ 100, 59 ]


// 2. Class Blueprint
class DCIclass {
  constructor(courseMonths, teacher, topic, students) {
    this.courseMonths = courseMonths;
    this.teacher = teacher;
    this.topic = topic;
    this.students = students;
  }
  calcRoomSize() {
    const size = this.students * 22;
    console.log(`The classroom should be ${size} m2 to fit ${this.students} students.`);
  }
  courseDetails() {
    console.log(`This is a ${this.courseMonths} month long ${this.topic} course taught by ${this.teacher}. There are ${this.students} students taking the course.`);
  }
}

const fbw13b = new DCIclass(12, 'Benjamin', 'web development', 15)

fbw13b.calcRoomSize();
//The classroom should be 330 m2 to fit 15 students.

fbw13b.courseDetails();
//This is a 12 month long web development course taught by Benjamin. There are 15 students taking the course.


//3. Events
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
];

//Using array method sort with dot notation to sort the array based on the object property turnout
const sortTurnout = turnoutArr => turnoutArr.sort((x, y) => y.turnout - x.turnout);


console.log(sortTurnout(events));
/*
[ { weekDay: 'Wednesday', turnout: 61 },
  { weekDay: 'Friday', turnout: 30 },
  { weekDay: 'Tuesday', turnout: 23 },
  { weekDay: 'Monday', turnout: 20 },
  { weekDay: 'Thursday', turnout: 19 }
]
*/


//4. Return Squared Odds
const randomNums = [2, 10, 77, 5, 20, 130];

//using map to square each item and return array same length as original, using filter to return only odd numbers
const squaredOdds = numArr => numArr.map(num => num * num).filter(num => num % 2 === 1);

console.log(squaredOdds(randomNums));
//[ 5929, 25 ]



//5. World Cup

//getting todays date
const today = new Date();

//getting date for last win
const worldCup = new Date('2014-07-13');

//today - worldCup gives milliseconds, divide by how many milliseconds there is in a day to get days since last win.
//using round to get integer, round is more fair than floor or ceil in this case
const daysSinceWin = Math.round((today - worldCup) / 86400000);

console.log(daysSinceWin);
//1824



//6. Working Hours
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ];

//Using map to access each obj (array elements) and dot notation to access start and end times.
//Using reduce to add up hours
const hours = array => array.map(obj => obj.end - obj.start).reduce((acc, cur) => acc + cur);

console.log(hours(hourTracking));
//36


//OR
//With the for in loop that I don't know how to use properly

/*
const hoursTotal = schedule => {
  //create empty array for hours worked per day
  const hoursPerDay = [];
  //loop through objects and calculate hours per day, push to hoursPerDay array
  for (const prop in schedule) {
    hoursPerDay.push(schedule[prop].end - schedule[prop].start);
  }
  //reduce hours per day to one added value
  return hoursPerDay.reduce((acc, cur) => acc + cur);
}

console.log(hoursTotal(hourTracking));
//36
*/



//7. Callback

//Part 1

//loop through the array so the callback function can perform an action on each element
const mapping = (arr, callback) => {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    //push the element to the new array after the callback function has changed the value
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

//This function calculates to the power of two
const powerOfTwo = number => number * number;

//log an array and a callback function
console.log(mapping([1,2,3,4,5], powerOfTwo));
//[ 1, 4, 9, 16, 25 ]


//Part 2

//calculate square root of elements in array when used with the mapping function
const squareRoot = number => Number(Math.sqrt(number).toFixed(2));

console.log(mapping([1,2,3,4,5], squareRoot));
//[ 1, 1.41, 1.73, 2, 2.24 ]



//8. 2D Array
let board = [[1, 2, 3],
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
	     [true, false]]

// loop through each array and map every element in the nested arrays
for (let i = 0; i < board.length; i++) {
  board[i].map(element => console.log(element));
}

/*
1
2
3
quick
brown
fox
jumped
over
lazy
dog
true
false
*/
