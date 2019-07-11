
// 1
const isBigger = arr => arr.filter(el => el > 10);
let lala = [1, 2, 3, 13, 25];
console.log(isBigger(lala));

// 2
class Course {
    constructor(_duration, teacher, type, students) {
        this._duration = _duration;
        this._teacher = teacher;
        this._type = type;
        this._students = students;
    }

    roomSize() {
        return this._students * 22;
    }

    getStatus() {
        console.log(`This is a ${this._duration} long ${this._type} course taught by ${this._teacher}. There are ${this._students} students taking the course.`)
    }
}
const fw13b = new Course("year", "B", "web development", 15);
console.log(fw13b.roomSize());
console.log(fw13b.getStatus());

// 3
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
];
const sortEvents = arr => arr.sort((a, b) => b.turnout - a.turnout);
console.log(sortEvents(events));

// 4
const squaredOdds = arr => arr.map(el => el*el).filter(el => el % 2 !== 0);
let lele = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(squaredOdds(lele));

// 5
let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
let today = new Date(2019, 7, 11);
let lastWon = new Date(2014, 7, 13);

let diffDays = Math.round(Math.abs((lastWon.getTime() - today.getTime())/(oneDay)));
console.log(diffDays);

// 6
const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
  ];
const workingHours = arr => arr.reduce((acc, cur) => acc + (cur.end - cur.start), 0);
console.log(workingHours(hourTracking));

// 7
// 7.1
function mapping(arr, func){
    const mapArr = [];
    for(let i = 0; i < arr.length; i++) {
        const result = func(arr[i], i, arr);
        mapArr.push(result);
    }
    return mapArr;
}
const powerOfTwo = mapping([1,2,3,4,5], el => Math.pow(el,2));
console.log(powerOfTwo);

// 7.2
const squareRoot = mapping([4,16,25,36,49], el => Math.sqrt(el));
console.log(squareRoot);

// 8
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
         [true, false]];

for (let i = 0; i < board.length; i++) {
    for(let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
}