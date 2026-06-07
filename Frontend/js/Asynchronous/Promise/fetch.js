fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    console.log(res)
    return res.json()
})
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err.message)
})