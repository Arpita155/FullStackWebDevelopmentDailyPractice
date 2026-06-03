let users = [
    {
        name : "arpita",
        password : "123"
    },
    {
        name : "sampa",
        password : "124"
    },
    {
        name : "rudra",
        password : "125"
    }
] 

let password = "123"
let name = "arpita"

Login(name,password)
.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})

function Login(name,password){
    return new Promise(function(resolve,reject){
    let user = users.find(p => p.name == name)
        if(user){
            if(user.password == password){
                resolve("login successfully !! "+name)
            }else{
                reject("Wrong password")
            }
        }
        reject("user not available !!")
    })
}