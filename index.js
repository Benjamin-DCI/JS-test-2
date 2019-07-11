// // //Task 1

var arr = [5,10,13,7,19];
var config = {min:10,max:100};

var arr2 = arr.filter(function(item){
  return item > config.min && item < config.max;
});
console.log(arr2)

// //Task 2

// var lastNum = pin.lenght(-1) / 2 == 0
// var sumOfPin = validatePIN(pin).reduce(function (accumulator, currentValue) {
//      return accumulator + currentValue;
//     }, 0);

function validatePIN(pin) {
    if (/^(\d{4}|\d{6})$/.test(pin) && sumOfPin >= 5) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(validatePIN("2315"));
  console.log(validatePIN("531k"));
  console.log(validatePIN("92753"));
  console.log(validatePIN("123456"));

  //Task 3

  function FBW13A(Teacher, courseDur, Topic, numOfStuds, size) {
    this.teacher = Teacher
    this.courseDuration = courseDur,
    this.topic = Topic,
    this.numOfStudents = numOfStuds,
    this.classSize = numOfStudents * 22
    
  }

    
console.log(FBW13A("Benjamin", 1, "webdevelopment", 17))

// Task 4

let events = [
    { weekDay: 'Monday', turnout: 20 },
    { weekDay: 'Tuesday', turnout: 23 },
    { weekDay: 'Wednesday', turnout: 61 },
    { weekDay: 'Thursday', turnout: 19 },
    { weekDay: 'Friday', turnout: 30 },
]
keysSorted = Object.keys(events).sort((a,b) => events[a]-events[b])


console.log(events)
Object.sortByKeys = function(events){
    var keys = Object.keys(events)
    keys.sort()
    var sortedObject = Object()
    for(i in keys){
      key = keys[i]
      sortedObject[key]=events[key]
     }
  
  
  console.log(sortedObject)
  }

// Task 5


// Task 6

var score = 0;
var maxScore = 50;
var rolls = 0;
var maxRolls = 20;


function rollDice()
{
    var x = Math.floor( Math.random() * 6 ) + 1;
    var y = Math.floor( Math.random() * 6 ) + 1;


// Task 7

var oneDay = 24*60*60*1000;
var firstDate = new Date(2014,07,13);
var secondDate = new Date(2019,07,11);

var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

console.log(diffDays) 

// // Task 8

const hourTracking = [
    { day: 'Monday', start: 8, end: 17},
    { day: 'Tuesday', start: 9, end: 15},
    { day: 'Wednesday', start: 10, end: 18},
    { day: 'Thursday', start: 7, end: 14},
    { day: 'Friday', start: 6, end: 12},
  ];

  
  // Task 9

  function mapping(){
    return newArr = [] *2
    }
    const powerOfTwo = mapping([1,2,3,4,5], (val) => Math.pow(val,2) );

    // Task 10

    let board = [[1, 2, 3], 
	     ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"], 
         [true, false]]
        //  for (var i = 0; i < board.length; i++) {
        //     console.log(board[i]) 
        // }
        board.forEach(function(element) {
            console.log(element);
          });
        }
