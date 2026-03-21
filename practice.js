try{
    // throw new Error("Some error occured !")
    con.ed(abv)
}
catch(e){
    
    console.log(e.message)
    console.log("error handled")
}finally{
    console.log("Execution completed !")
}