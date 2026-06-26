import express from "express"

const app = express()

// app.use((req,res)=>{
 
//     // res.send("send properly")      // it send data
//     res.sendFile("C:\\MY_FOLDER\\WebDevelopmentPractice\\Backend\\express-basics\\"+"index.html")    // it send a file
// })

let product = {
    thing : "watch",
    price : 3000,
    color :"golden"
}

app.get("/",(req,res)=>{
    res.send("this is Home page")
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})
app.get("/product",(req,res)=>{
    res.send(product)
})
app.get("/user",(req,res)=>{
    res.send("this is user page")
})


app.listen(3000,()=>{
    console.log("server is runing on port 3000")
    console.log("hey")
})