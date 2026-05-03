//------------Class-------------------
// A class can have only one constructor.

//Example1 : create a player class.
class player{
    name = ""
    nickname =""
    score = 0
    constructor(n="rudra",s=100){
        this.name = n
        this.score=s
    }
    start(){
        console.log("Game Started !")
    }
    exit(){
        console.log("Game exited ! Bye "+this.name)
    }
    details(){
        console.log("name : "+this.name)
        console.log("nickname : "+this.nickname)
        console.log("score : "+this.score)
    }
}
let p1 = new player("sampa",200);
p1.start()
// p1.name = "Arpita sahoo"
console.log("name : "+p1.name+" score : "+p1.score)
p1.exit()

//Example2 : Second class create constructor passing object.
class player1{
    name = ""
    nickname =""
    score = 0
    constructor(obj={}){
        this.name=obj.name || "Unknown"
        this.nickname=obj.nickname || "cat"
        this.score = obj.score || 100
    }
    start(){
        console.log("Game Started !")
    }
    exit(){
        console.log("Game exited ! Bye "+this.name)
    }
    details(){
        console.log("name : "+this.name)
        console.log("nickname : "+this.nickname)
        console.log("score : "+this.score)
    }
}
let p2 = new player1({name:"Arpita",score:50})
p2.details()

//Q1. create class Music and add Methods - start, pause , details
class Music{
    song = ""
    singer = ""
    language = ""
    static total = 0
    constructor(obj={}){
        this.song=obj.song || "Unknown"
        this.singer=obj.singer || "random singer"
        this.language = obj.language || "kanada"
        Music.total +=1
    }
    start(){
        console.log("music started !")
    }
    pause(){
        console.log("Song paused now !")
    }
    details(){
        console.log("song name : "+this.song)
        console.log("singer name : "+this.singer)
        console.log("language : "+this.language)
    }
}

const m = new Music({song:"Do anjane Ajnabi",singer:"Shreya Ghoshal",language:"hindi"});
m.details()
m.start()
// Find out total songs created
console.log("Total song : "+Music.total)   // Approach-1

// --- Using array count total songs ---   // Approach-2
playlist = [
    new Music({song:"abcd",singer:"xyz",language:"hindi"}),
    new Music({song:"abc",singer:"xy",language:"bengali"}),
    new Music({song:"ab",singer:"x",language:"english"})
]
console.log("Total song : "+playlist.length)



