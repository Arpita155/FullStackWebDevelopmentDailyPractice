// console.log("welcome node js !")

// fs = require("node:fs")

// fs.readFile("hello.txt","utf-8",(err,data)=>{
//     console.log(data)
// })


//  --------------13/06/26-----------------

const {add , multiply, fact,users} = require("./functions.js")
const {maximum,squaroot,floor,power,fact} = require("./functions.js")

console.log(add(2,3))
console.log(multiply(2,3))
console.log("total users = "+users)

require("./dummy.js")
require("./dummy.js")
require("./dummy.js")

console.log("factorial = "+fact(5))


console.log("maximum = "+maximum(3,10))
console.log("squaroot = "+squaroot(4))
console.log("floor = "+floor(3.25))
console.log("power = "+power(3,3))
console.log("fact = "+fact(5))