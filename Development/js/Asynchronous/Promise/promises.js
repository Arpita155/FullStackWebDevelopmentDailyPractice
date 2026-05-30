







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



