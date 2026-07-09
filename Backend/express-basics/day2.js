import express from "express"

const day2 = express()
day2.use(express.json())


let users = []      // This array used to store data

// day2.get("/",(req,res)=>{
//     res.send("welcome to our website")
// })

// push data in an array users
day2.get("/signup",(req,res)=>{
    users.push(req.body)
    res.status(201).end("new user signup")
})

// show users 
day2.get("/users",(req,res)=>{
    res.status(200).send(users)
})

// Delete all users
day2.get("/delete",(req,res)=>{
    users = []
    res.send("user deleted")
})

// login
day2.get("/login",(req,res)=>{
    let name = req.body.name
    let password = req.body.password

    for(let user of users){
        if(user.name == name && user.password == password){
            return res.send("Login successfull !")
        }
    }
    return res.status(401).send("Login Failed !")
})

// day2.listen --> it is used to start a web server and bind it to a specific port and host.
day2.listen(3000,()=>{
    console.log("Server is running on PORT : 3000")
})



// -------------day3----------
function first(req,res,next){
    // res.send("first")
    console.log("go to second")
    next()
    // second(req,res)
}
function second(req,res){
    res.send("second")
}
function third(req,res){
    res.send("third")
}

// day2.get("/",(req,res,next)=>{
//     res.send("welcome to our website")
// })

day2.get("/",first,second,third)

