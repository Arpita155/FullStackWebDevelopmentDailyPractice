//------------------get and set Method ---------------------
class Car {
    name  = "default"
    year = 2000
    value = 1
    constructor(obj={}){
        if(Object.name)this.name = obj.name
        if(Object.year)this.year= obj.year
        if(Object.value) this.value=obj.value
    }

    details(){
        console.log("name : "+this.name)
        console.log("year : "+this.year)
        console.log("value : "+this.value)
    }

    get carName(){
        return this.name;
    }

    set carName(n){
        this.name = n
    }

}

const c1 = new Car({name:"BMW",year:2020,value:10})
c1.details()
console.log(c1.name)
c1.carName = "mercedes"
console.log(c1.carName)


// ----------------------------Inheritance------------------
class Animal{
    color="black"
    food = "grass"

    constructor(color,food){
        this.color=color
        this.food=food
    }

    eat(){
        console.log("Animal can eat")
    }
    
    sleep(){
        console.log("Animals are sleeping !")
    }
}

class Bird extends Animal{
    birdName = "crow"
    constructor(color,food){
        super(color,food)
    }
    fly(){
        console.log("birds can fly !")
    }
}

const an = new Bird("brown","fish")
console.log(an.color)
an.eat()