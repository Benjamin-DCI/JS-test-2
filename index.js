// #### 1. 
const overTen = arr => arr.filter(x => x > 10);

console.log(overTen([11,2,32,2,45,6]));


// #### 2. 
class Dci{
    constructor(type, teacher, study, numOfStudents){
        this.type = type;
        this.teacher = teacher;
        this.study = study;
        this.numOfStudents = numOfStudents;
    }
    howBig(){
        return `${this.numOfStudents * 22} m²`
    }
    details(){
        return `This is a ${this.type} ${this.study} course taught by ${this.teacher}. there are ${this.numOfStudents} students taking this course`
    }
}

let dci = new Dci("year long", "John Smith", "Web Development", 10);

console.log(dci.details());
console.log(dci.howBig());


// #### 3. 
let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]

const sortEvents = arr => arr.sort((a,b) => b.turnout - a.turnout);

console.log(sortEvents(events));


// #### 4. 
const squaredOdds = arr => 
    arr.map(x => x*x)
    .filter(x => x % 2 !== 0);

console.log(squaredOdds([1,2,3,4,5,6,7,8,9]));


// #### 5. 
let today = new Date();
let won = new Date(2014,6,13);

const daysInBetween = (date1,date2) => Math.floor((date1 - date2)/ (1000 * 3600 * 24)) + " Days";

console.log(daysInBetween(today,won));


// #### 6. 
const hourTracking = [
      { day: 'Monday', start: 8, end: 17},
      { day: 'Tuesday', start: 9, end: 15},
      { day: 'Wednesday', start: 10, end: 18},
      { day: 'Thursday', start: 7, end: 14},
      { day: 'Friday', start: 6, end: 12},
    ];

const totalHours = arr => arr.reduce((acc,val) => acc + (val.end - val.start),0);

console.log(totalHours(hourTracking));


// #### 7. 
// **Part 1**:
function mapping(arr, func){
  return arr.map(x => func(x));
}

const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );
console.log(powerOfTwo);

// **Part 2**: 
const squareRoot = mapping([1,2,3,4,5], (val) => Math.sqrt(val));
console.log(squareRoot);

// #### 8. 
let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
	     [true, false]];

const logAll = arr => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

logAll(board);