//--------------------Loop--------------
// for loop
/*for(let i=0;i<=10;i++){
    console.log(i)
}*/

// while loop
/*x=10;
while(x>0){
    console.log("while loop : "+x)
    x--
}*/

// do while loop
/*n=10
do{
    console.log("hello")
    n--
}while(n>0)
*/

// Q1. Table of a number
/*n = prompt("Enter the number: ")
for(let i=1;i<=10;i++){
    console.log(n+" X "+ i +" = "+n*i)
}
*/

// -----------MATH Functions-------------

console.log(Math.round(3.5))           // ans : 4     After the decimal point if the number is greater or equals to this number than it add +1.
console.log(Math.ceil(10.1))           // ans : 11    Math.ceil() function is used to round a number up to the nearest integer.
console.log(Math.floor(9.35))         //  ans : 9     It removes the total number after point, only print the Integer number.
console.log(Math.pow(2,3))            //  ans : 8     power of 2 with 3,  2^3=8 
console.log(Math.sqrt(4))             //  ans : 2     sqrt(4)= 2
console.log(Math.max(4,21,1,42))      //  ans : 42   because 42 is the maximum number between all number.
console.log(Math.min(6,1,3,4))       //  ans : 1   because 42 is the minimum number between all number.
console.log(Math.random())           //  It generates random decimal number. such as ex: 0.8742165706265218



//---------choose the correct number game--------- 
/*x = 10
do{
    pr = prompt("enter the number : ")
    if(pr < x){
        alert("Number is lesser than x :")
    }else if(pr > x){
        alert("Number is greater than x :")
    }else{
        alert("Number is nailed :")
    }
}while(pr!=x)
*/

//----- Q2. Strng reverse------
/*let str = "hello world";
let ans = ""
for(let i=str.length-1;i>=0;i--){
    ans += str[i]
}
console.log(str)   // hello world
console.log(ans)    // dlrow olleh
*/

//-----Q3. count vowels and consonant-----
/*let s = "football"
let cnt = 0
for(let i=0;i<s.length;i++){
    let x = s[i]
    if(x=='a' || x=='e' || x=='i' || x=='o' || x=='u'){
        cnt++
    }
}
console.log("Number vowels = "+cnt)   // 3
console.log("number of consonant = "+(s.length-cnt))   // 5
*/

//-----Q4. If you want to print short form of the name by taking the first letter of every word(apjak)------
str = "abdul pakir janir abdul kalam"
let arr = str.split(" ")
let ans = ""
for(let i=0;i<arr.length;i++){
    ans += arr[i][0]
}
console.log(ans)