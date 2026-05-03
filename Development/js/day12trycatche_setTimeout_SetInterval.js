try{
    // throw new Error("Some error occured !")
    con.ed(abv)
}
catch(e){
    
    console.log(e.message)
    console.log("error handled")
}finally{
    console.log("Execution completed !")
}



// ------------ synchronous(line by line executed) -> asynchronous(paralaly executed)
// synchronous --> start now end now
// asynchronous --> asynchronous is such a code that does not execute line by line , and it can wait for some computation to be fetched. 
function work(){
    //setTimeout  --> It will execute after the given time.
    setTimeout(()=>{       
        console.log("backend data")
    },5000)    // 1000 means 1s
}
console.log("Execution -1")

// console.log("backend data")

work()
console.log("completed !")
console.log(window)

// Ex2 
/*console.log("starting time : "+new Date())
console.log("wait for 8 seconds ")
setTimeout(()=>{
    
    console.log("end at :"+new Date())
},8000) 
*/

// SetInterval    -- > it will execute repeatedlly 
// setInterval(()=>{
//     console.log("Interval !!")
// },3000)

//Ex-2
let x=1
let myInterval = setInterval(()=>{
    console.log("Interval !!")
    x++
    if(x == 9){
        clearInterval(myInterval)
    }
},300)


