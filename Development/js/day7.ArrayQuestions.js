//Q1. Sort an array
arr = [12,1,4,23,54,21,5,3]
arr.sort((a,b) => a-b)
console.log(arr)

// ---------Map method ------------
//Q1. Square of every array elements.
const nums = [1,2,3,4,5,6,7]   // Using map
const sq1 = nums.map((x) => x*x)   // [1, 4, 9, 16, 25, 36, 49]
console.log(sq1)
//Or
/*function square(x){return x*x}
const squ = nums.map(square)
console.log(squ)*/

// Manually print the square of the number without using map method.
/*const sq = []
for(let x of nums){
    sq.push(x*x)
}
console.log(sq)
*/

//Q2. Find length of each fruits.
const fruits = ["Apple","mango","guava","banana"]
const flength = []

/*for(let i=0;i<fruits.length;i++){
    let cntLength = fruits[i].length;
    flength.push(cntLength)
}
console.log(flength)
*/
// Solve by using map method
const res = fruits.map((x)=>x.length)
console.log(res)    // [5, 5, 5, 6]

//** Print using $ this style 
const name = "Virat kohli"
console.log(`Hello ${name}`)

//Q3. Find the date of today
let date = new Date()
console.log(date)   // Thu Feb 26 2026 22:12:33 GMT+0530 (India Standard Time)
console.log(date.toLocaleDateString())    // 26/2/2026

const month = date.getMonth()
console.log("Month : "+(month+1))  // Month : 2

const year = date.getFullYear()   // to find year
console.log("Year : "+year)    // Year : 2026

const p = date.toLocaleDateString().split("/")

console.log("Year : "+p[2])
console.log("Month : "+p[1])
console.log("Date : "+p[0])

// print the date in this style
if(p[0].length<2) p[0]="0"+p[0]
if(p[1].length<2) p[1]="0"+p[1]

const indian = p[0]+"-"+p[1]+"-"+p[2]
console.log(indian)

// Starting time of Computer
const date1 = new Date(0)
console.log(date1)   
