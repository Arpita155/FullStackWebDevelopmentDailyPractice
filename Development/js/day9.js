// -------------------------Object--------------------

// Creatae 3 objects of School, Tiger, crow.
var Tiger = {
    name : "Royal bengal tiger",
    age : 10,
    gender : "Male",
    color : "Yellow",
    place : function(){
        return " place of Royal bengal tiger is Sundarban."
    }
}
console.log(Tiger)
console.log(Tiger.place())

var school = {
    name : "PMHS",
    address : "Paniparul",
    totalStudents : 400,
    annualProgram : function (){  // function without name.
        return "16th january is the annual program because of birthday of school."
    }
}
console.log(school)
console.log(school.annualProgram())

var crow = {
    name: "kalua",
    color : "Black",
    favouriteFood : (x)=>{   // Arrow function
        return " favorite food of crow is Chicken";
    }

}
console.log(crow)
console.log(crow.favouriteFood())

// Function within objects.
var person = {
    name : "Arpita",
    age : 20,
    address : "barrackpore",
    study : function (p){
        return "I am studying "+p
    }
}
console.log(person)
console.log(person.study("js"));

// What you found interesting in js ?
// Currently i am learning js 