let amount = 1000

Transaction(amount)
.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})

function Transaction(amt){
    return new Promise(function(resolve,reject){
        if(amt < 0){
            reject("Amount can't be negative ")
        }
        if(amt > 100000000){
            reject("Amount is invalid")
        }
        resolve("Transaction completed of : "+amt+"$")
    })
}