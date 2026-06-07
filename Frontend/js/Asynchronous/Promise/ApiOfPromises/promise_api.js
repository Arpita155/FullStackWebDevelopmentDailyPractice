const p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("This is p1")
    },3000);
})

const p2 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        reject("This is p2")
    },2000);
})

const p3 = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("This is p3")
    },4000);
})


//1. Promise.all() (input - array of promises)  -> parrallely promise execute and return output array.
// if all promises successfull  -> then return output array.
// if one of them fails return the error (not array).
/*Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})*/



//2. Promise.allSettled() -> similar to Promise.all()
// just if one of the promise get rejected , still it returns an array containing the output of all promises 
/*Promise.allSettled([p1,p2,p3]).then((res)=>{
    console.log(res);
})*/


//3. Promise.race() -> returns the first promise which is settled . It can be resolved or rejected.
/*Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})*/


//4. Promise.any() -> it will return the first promise which will be resolved.
Promise.any([p1,p2,p3]).then((res)=>{
    console.log(res);
})

