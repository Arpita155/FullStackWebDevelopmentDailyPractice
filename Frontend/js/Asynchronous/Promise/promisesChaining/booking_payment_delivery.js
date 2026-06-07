// const booking = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Booking complete !!")
//     },3000)
// })

// const payment = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         resolve("Payment done ✅")
//     },2000)
// })

// const delivery = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Delivered properly")
//     },1000)
// })

// // booking.then((res)=>{console.log(res)})
// // payment.then((res)=>{console.log(res)})
// // delivery.then((res)=>{console.log(res)})

// booking.then((res)=>{
//     console.log(res)
//     payment.then((res)=>{
//         console.log(res)
//         delivery.then((res)=>{
//             console.log(res)
//         })
//     })
// })


// Chaining maintains the proper order .

function Booking(){
    console.log("Booking starts !!")
    const booking = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Booking complete !!")
        },4000)
    })

    return booking;
}

function Payment(){
    console.log("Payment starts !!")
    const payment = new Promise(function(resolve,reject){
        setTimeout(()=>{
            resolve("Payment done ✅")
        },3000)
    })

    return payment;
}

function Delivery(){
    console.log("Delivery starts !!")
    const delivery = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Delivered properly")
        },1000)
    })

    return delivery;
}

Booking()
.then((res)=>{
    console.log(res)
    return Payment();
})
.then((res)=>{
    console.log(res)
    return Delivery();
})
.then((res)=>{
    console.log(res);
})