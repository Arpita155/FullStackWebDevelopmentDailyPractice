msg = "Hi this is arpita"
net = "on"
sendMessage(msg,net)
.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})


function sendMessage(msg,net){
    return new Promise(function(resolve,reject){
        if(net =="off"){
            reject(" As net off can't send message ")
        }

        resolve("This message "+msg+" sent timely")
    })
}