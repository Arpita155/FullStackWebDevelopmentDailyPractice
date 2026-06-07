item = "fan"

const promise = createOrder(item)

promise
.then(function(orderDetails){
    console.log(orderDetails)
})
.catch(function(err){
    console.log(err.message)
})


function createOrder(item){
    items = ["watch","fan","ac","bulb"]

    const p1 = new  Promise(function(resolve,reject){
        if(items.includes(item)){
            orderDetails = {
                product : item,
                price : 300,
                description : "Item purchased",
                delivery : "29 May 2026"
            }
            resolve(orderDetails)
        }
        else {
            reject (new Error("Items not present !!!"))
        }
    })

    return p1;
}