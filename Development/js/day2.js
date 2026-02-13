//=======================String====================
x = "helloh"
y = "world "

z = x+y     // for concatenation
console.log(z)   // helloworld
l = x.length   // for checking length
console.log(l)  // 5

c = x.charAt(1);   // for char at particular index
console.log(c);    // e

s = x.slice(1,4)   // it will print between 1 to 3
console.log(s)  // ell

console.log(x.slice(-2))   // lo

z = x.substring(1,4)
console.log(z)  //slice and substring do same but in substring if you give -ve value then it treat the -ve value as 0 and print the whole string.

z =x.toUpperCase()   // convert the string to capital letter.
console.log(z)
z =x.toLowerCase()   // convert the string to all small letter.
console.log(z)

z =y.trim()    // it will remove extra spaces from both first and last
console.log(z)

z =y.repeat(3)   // it repeats the same string to the given time(3) .
console.log(z)
 
z =x.replace("h","t")  // it will replace first "h" to "t"
console.log(z)

z =x.replaceAll("h","t")  // it will replace all "h" to "t"
console.log(z)

r= '12 25 20 23 45'
z = r.split(" ")    // it split the string 
console.log(z)

z = x.indexOf("l")   // it returns the index of the letter.
console.log(z)

z = x.lastIndexOf("l")    // it returns the the last index of the specific letter from last.
console.log(z)

z = x.includes("i")    // it returns true or false if the letter present in the string or not.
console.log(z)

k = "cake, biscuit, apple , fish"    // convert a string to an array.
z = k.split(",")
console.log(z)

console.log(typeof(12))   // it returns the type of the value.

console.log(1=='1')   // checks equality by converting both operand into a common data type.
console.log(1==='1')   // checks equality but without converting both operand into a common data type.



// ===============if else=====================
//Q1.
a=120
if(a>100){
    console.log("greater than 100")
}else{
    console.log("less than 100")
}

//Q2.
age = 20
if(age < 10){
    console.log("child")
}else if(age > 18 && age < 30){
    console.log("adult")
}else{
    console.log("old")
}
//====================== Switch case ===============
b = 8
switch(b){
    case 1:
        console.log("one")
        break
    case 2:
        console.log("two")
        break
    default:
        console.log("wrong value")    
}

