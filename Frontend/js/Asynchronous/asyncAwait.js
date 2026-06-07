// async  -> async is a keyword which is used before a function.
// await   -> It is wait upto when the promise is not resolve. It can only be used inside an async function.
// async function  -> It is a function which return a promise.
// await ket=yword stops the execution of the async function upto when the promise is not settled.


async function hello() {
    return new Promise(function(resolve,reject){
        resolve("Hello world")
    })
}

hello().then((res)=>{console.log(res)})


function Order(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Order successful;")
        },3000)
    })
}

function payment(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Payment complete !!")
        },3000)
    })
}

async function Hello(){
    try{
        console.log("Hi")
        const abc = await Order()
        console.log(abc)
        const def = await payment()
        console.log(def);
        console.log("bye")
    }catch(error){
        console.log(error);
    }
}

Hello();