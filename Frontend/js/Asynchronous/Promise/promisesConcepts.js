// whenever the code is executed line by line we call it sync.
// whenever the code is executed not line by line we call it async.

// CODE SEGMENT -> which is performing some type of input output operation then we cant gurrantee the time of completion of the code segment.
//  It can be 2ms or 200 s. Here we use async operations for better execution of js.


// promise  -- > promise is an object representing eventual(in future) completion or failure of an async operation.

// resolve will be called if promise is successful
// reject will be called if promise gets failed

const p1 = new Promise(function(resolve , reject){

    arr = [1,2,3,5]
    
    setTimeout(() => {
        reject(new Error("some error occured !"))
    },4000);
})

p1.then(function(output){
    console.log(output)
}).catch(function(err){
    console.log(err.message)
})



