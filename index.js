//the values of an array are larger than 10.
const larger10 = arr => arr.filter(x => x > 10);
//console.table(larger10([20, 2, 44, 50, 3, 1, 7, 8, 6, -6]));


//course at DCI e.g. FwB 13b - using the "class" syntax in javascript.
class FwB {
    constructor(classLong, teacher, classType, numberOfStudent) {
      this.classLong = classLong;
      this.teacher = teacher;
      this.classType = classType;
      this.numberOfStudent = numberOfStudent;
    }

    checkArea() {
      let area = 22 * this.numberOfStudent;
      return ` The classroom should be ${area}m²`;
    }
    print() {
      return `This is ${this.classLong} ${this.classType} course taught by ${
        this.teacher
      }. There are ${this.numberOfStudent} students taking the courses `;
    }
  }
  
  const FwB13b = new FwB("one Year", "Benjamin", "web development", 100);
  //console.log("2.", FwB13b.print());
 // console.log("2.", FwB13b.checkArea());

 
// 3. Events
let events = [
    { weekDay: "Monday", turnout: 20 },
    { weekDay: "Tuesday", turnout: 23 },
    { weekDay: "Wednesday", turnout: 61 },
    { weekDay: "Thursday", turnout: 19 },
    { weekDay: "Friday", turnout: 30 }
  ];
  console.table( events.sort((a, b) => a.turnout - b.turnout));

  //Return Squared Odds
  //function mapping(){
    
 // arr.map(x => Math.pow(x, 2)).filter(x => x % 2 != 0);
    
    //5. World Cup
    let today = new Date();
    let lastGermanyWon = new Date("13 July 2014");
    let different = Math.floor((today - lastGermanyWon) / 86400000);
    
    console.log(`${different} days since Germany won the cup`);

    //Working Hours


    const hourTracking = [
  { day: "Monday", start: 8, end: 17 },
  { day: "Tuesday", start: 9, end: 15 },
  { day: "Wednesday", start: 10, end: 18 },
  { day: "Thursday", start: 7, end: 14 },
  { day: "Friday", start: 6, end: 12 }
];

function total(arrOfObj) {
  let hourPerDay = 0;
  for (i of arrOfObj) {
    hourPerDay += 12 - i.start + (i.end - 12);
  }
  return `${hourPerDay} hours  per the last week`;
}

console.log( total(hourTracking));
// 7. Callback
function mapping(myArr, callback) {
    let arr = [];
    for (let i = 0; i < myArr.length; i++) {
      arr.push(callback(myArr[i]));
    }
    return arr;
  }
  
  const powerOfTwo = mapping([1, 2, 3, 4, 5], val => Math.pow(val, 2));
  console.log( powerOfTwo);

  const squareRoot = mapping([1, 4, 9, 16, 25], val => Math.sqrt(val, 2));
console.log(squareRoot);


