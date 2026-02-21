//====================Function ====================
// ------------------Types of Function-----------------
//1. Normal function
function greet(){
    console.log("good evening")
}
greet()

function isEven( x ){
    let a = x%2==0
    return a
}
console.log(isEven(2))

//2. Arrow Function
var Bye=() =>{
    console.log("Good bye! Take care")
}
Bye()

//3. Function without name
const welcome = function (){ 
    console.log("hello")
}
welcome();

//4. IIFE - Immediately Invoked Function Expression   (I will execute the function when I declare it)
(()=>{console.log("IIFE ")})()

// ------------spread operator-------------
x = "Arpita sahoo"
console.log(...x)

let ar = [12,34,123,76,2]
console.log(Math.max(...ar))

//============================ Solve Questions using  Function ==================================

//Q1. Convert a string to lowerCase from uppercase.
var convert=(s)=>{
    z= s.toLowerCase()
    return z
}
console.log(convert("ARPITA"))

//Q2 Concatenate two string.
var concat=(s1,s2) => {
    return s1+s2
}
console.log(concat("hello","world"))

//Q3. Find largest element in an array.
let largest = (arr)=>{
    let max = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}
let arr = [10,2,54,3,9]
console.log(arr)
console.log("Largest element in the array is : "+largest(arr))

// Q4. Function to find average of an array.
let a = [1,2,3,4,5]
let average=(a)=>{
    let sum = 0;
    for(let i=0;i<a.length;i++){
        sum += a[i]
    }
    avg = sum/a.length;
    return avg;
}
console.log("Average of the array is : "+average(a))

// Q5. Function to find factorial.
/*let fact = (n)=>{
    let f = 1
    for(let i=1;i<=n;i++){
        f *= i;
    }
    return f;
}
console.log("Factorial of the number is : "+fact(5))
*/

// Q6. Write a Function to generate random numbers.
/*generateRandom=(n)=>{
    for(let i=0;i<n;i++){
        console.log(Math.random())
    }
}
generateRandom(5)
*/

//Q7. Write a Function To print n fibonacci numbers.
/*let a1 = 0;
let b1 = 1
fib=(n) =>{
    console.log(a1)
    console.log(b1)
    for(let i=1;i<=n;i++){
        c = a1+b1
        console.log(c)
        a1 = b1
        b1 = c
    }
}
fib(10)
*/

//Q8. To create short form.
let shortForm=(str)=>{
    let arr = str.split(" ")
    let ans = ""
    for(let i=0;i<arr.length;i++){
        ans += arr[i][0]
    }

    return ans;
}
str = "Swami Vivekananda University"
console.log("Short form of the string is : "+shortForm(str))

//Q9.  add two matrix .
let m1 = [[1,2],
          [4,5]
]
let m2 = [[1,2],
          [4,5]
]
let s = []
for(let i=0;i<m1.length;i++){
    s[i] = []
    for(let j=0;j<m1[0].length;j++){
        s[i][j]=m1[i][j]+m2[i][j]
    }
}
// console.log(s)
for(let i=0;i<m1.length;i++){
    for(let j=0;j<m1[i].length;j++){
        console.log(s[i][j])
    }
}

//Q10. Multiply two matrix.
console.log("Matrix multiplication")
let ma1 = [[1,2],
          [4,5]
]
let ma2 = [[1,2],
          [4,5]
]
let m = []
for(let i=0;i<m1.length;i++){
    m[i] = []
    for(let j=0;j<m1[0].length;j++){
        m[i][j]=0;
        for(let k=0;k<m1[0].length;k++){
            m[i][j] += ma1[i][k] * ma2[k][j]
        }
    }
}
// console.log(s)
for(let i=0;i<m1.length;i++){
    for(let j=0;j<m1[i].length;j++){
        console.log(m[i][j])
    }
}



// =========== day6 ============
// Generate random  number between a range .
function random(x,y){
    let r = x + Math.floor(Math.random()*(y-x+1))
    return r;
}
console.log("Random value : "+random(1,6))

// --------Callback Function-----------
function printer(x){
    console.log("Your output : "+x)
}

function printer2(x){
    console.log("We got the value : "+x)
}

function sum(x,y,func){
    func(x+y)
}

sum(23,11,printer)
sum(10,1,printer2)

// for each loop 
function cvert(str){
    console.log(str.toUpperCase())
}

arr = ["arpita","sampa","sandip","amit"]
arr.forEach(cvert)     // array.forEach() : executes a provided callback func once for each array element.


// ===========================
//Q1. Take a array arr = [2,3,4,53,1] 
// func check even or odd and print arr[i] is even/odd
// use for Each loop for that
function check(arr){
    if(arr%2!=0){
        console.log(arr +" is odd")
    }else{
        console.log(arr +" is even")
    }
}
ar = [2,3,4,53,1]
ar.forEach(check)

//Q2.
// arr= ["arpita","sampa","sandip","amit"]
// func to print length - apple length : 5
// use for Each loop for that
function checkLength(x){
    console.log(x +" length : "+x.length)
}
arr= ["arpita","sampa","sandip","amit"]
arr.forEach(checkLength)

// Q3. arr = [23,12,56,677]
// narr = []
// all value more than 100 add them to narr
// print narr
// -----Using for loop------
/*arr = [23,12,56,677,110]
narr=[]
function add(x){
    for(let i=0;i<x.length;i++){
        if(x[i]>100){
            narr.push(x[i])
        }
    }
}
add(arr)
console.log(narr)
*/
// -----Using forEach loop-----
/*arr = [23,12,56,677,110]
narr=[]
function add(x){
    if(x > 100){
        narr.push(x)
    }
}
arr.forEach(add)
console.log(narr)
*/

//Q4. sort an array using insertion sort.

//Q5. sort an array using bubble sort.
arr = [23,12,56,677,110]
console.log(arr)
for(let i=0;i<arr.length-1;i++){
    let flag = false;
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            flag = temp;
        }
    }
    if(!flag){
        break;
    }
}
console.log(arr)