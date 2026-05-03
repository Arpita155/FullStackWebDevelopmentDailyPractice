// --------filter Method-----selects elements based on condition
age = [12,54,23,7,45,32,41,18,21]

voters = age.filter((element)=>element >=18)
console.log(voters)

//Q1. Marks - [45,23,97,56,78,34,82,]
// i) Find how many person who have got 90% and above 
// ii) Find how many has failed (for fail marks < 34)
// iii) return an array result = [pass,fail,pass] (array print)
const Marks = [45,23,97,17,30,56,78,91]
let count = 0;
let i=0;
let j=0;

pass = Marks.filter((element)=>Marks[i++] > 90)
fail = Marks.filter((element)=>Marks[j++] < 34)
console.log(pass.length);
console.log(fail.length);

result = []
resul = Marks.map((x)=>x > 34 ? result.push("pass") : result.push("fail"));
// resul = Marks.filter((element) => element>34 ? result.push("pass"):result.push("fail"))
console.log(result)

//Q2. fruits - []
// Return all fruits for which fruit.length >= 5 (print array)
fruits = ["bana","guava","pineapple","mango","papaya"]
res = fruits.filter((element)=>element.length >=5)
console.log(res)

// Q3. -------reduce Method ----------combine all elements into one value
arr = [1,2,3,4,5]
let sum = arr.reduce((p,c) => p+c)
console.log(sum)
// p = 0+1 = 1+2 = 3+3 = 6+4 = 10+5 = 15
// c = 1 2 3 4 5 

