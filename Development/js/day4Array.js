//=============== Array =================

let arr = [10,2,54,3,9]
console.log(arr)

// push() and pop() Method
let a = [12]
a.push(23)   // add elemet to the last of the array.
console.log(a)
console.log(a.pop())   // pop delete the last element of the array

// shift() and unshift() Method
let x = [1,2,3,4,5]
// x.shift()    // It will pop the first element
x.unshift(10)    //It  will add something to the first position
console.log(x)

// Array Length
console.log("Array length : "+x.length)

//Q1. making an array of even numbers of 10 length
/*let ar = []
for(let i=2;i<=20;i+=2){
    ar.push(i)
}
console.log(ar)
*/

//Q2. fibonacci series upto 10 terms.
/*let ar = []
a=0
b=1
ar.push(a)
ar.push(b)
for(let i=0;i<10;i++){
    c = a+b
    ar.push(c)
    a=b
    b=c
}
console.log(ar)
*/

// Q3. add first 20 palindrome number in array.
/*console.log("First 20 palindrome number : ")
let p = []
let num=1
while(p.length <= 20){
    let temp = num
    let rev = 0
    //Reverse the number
    while(temp > 0){
        let rem = num%10;
        rev = rev*10+rem;
        temp/=10
        temp=parseInt(temp)
    }
    // check if the number palindrome or not
    if(rev==num){
        p.push(rev)
    }
    num++
}
console.log(p)
*/

//Q4. add all leap years in an array between 2000-2200.
/*let ly = []
for(let i=2000;i<=2200;i+=4){
    if((i%4==0 && i%100!=0) || (i%400==0)){
        ly.push(i)
    }
}
console.log(ly)
*/


//Q5. Reverse an array
/*let o = [1,2,3,4,5]
console.log("Original array : "+o)
let r = o.reverse();   // using inbuilt method ---> it reverse the original array .
console.log("Reversed array : "+r)
// console.log("Original array : "+x)
//-----Using Loop ------
let rev = []
let k=0
for(let i=o.length-1;i>=0;i--){
    rev[k++]=o[i]
}
console.log(rev)
*/


//Q6. Find out the index of 46 in the array.
/*let a1 = [23,11,46,67,33,90]
// ----inbuilt method-----
// let idx = a1.indexOf(46)
// console.log("Index of 46 is : "+idx)

// ----using loop-----
for(let i=0;i<a1.length;i++){
    if(a1[i]==46){
        console.log("Index of 46 is : "+i)
        break;
    }
}
*/


//Q7. Find out Average value of an array.
/*let a2 = [1,2,3,4,5]
let sum = 0;
for(let i=0;i<a2.length;i++){
    sum += a2[i]
}
console.log(sum/a2.length)
*/