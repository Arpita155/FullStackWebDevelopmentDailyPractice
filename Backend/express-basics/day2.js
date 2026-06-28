import express from "express"

const day2 = express()
day2.use(express.json())


let users = []      // This array used to store data

// push data in an array users
day2.get("/",(req,res)=>{
    users.push(req.body)
    res.send("recived")
})

// show users 
day2.get("/users",(req,res)=>{
    res.send(users)
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
    return res.send("Login Failed !")
})

// day2.listen --> it is used to start a web server and bind it to a specific port and host.
day2.listen(3000,()=>{
    console.log("Server is running on PORT : 3000")
})


