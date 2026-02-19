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
generateRandom=(n)=>{
    for(let i=0;i<n;i++){
        console.log(Math.random())
    }
}
generateRandom(5)

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

//Q9.  add two matrix .

//Q10. Multiply two matrix.

