movie = "sanam teri kasam";

bookTicket(movie)
.then(function(message){
    console.log(message)
})
.catch(function(message){
    console.log(message)
})


function bookTicket(movie){

    movies = ["vivah","sanam teri kasam","fida","khiladi"]

    const m = new Promise(function(resolve,reject){
        if(movies.includes(movie)){
            movieDetails = {
                movieName : movie,
                ticketPrice : "300/person",
                Timing : "5pm to 9pm"
            }
            resolve(movieDetails)
        }else{
            reject(new Error("This movie will not show today !!!"))
        }
    })

    return m;
}