// =========== day6 ============

// --------- Callback Function -----------
function printer(x){
    console.log("Your output : "+x)
}

function printer2(x){
    console.log("We got the value : "+x)
}

function sum(x,y,func){
    func(x+y)
}

sum(23,11,printer)
sum(10,1,printer2)

// ---------- for each loop -----------
function cvert(str){
    console.log(str.toUpperCase())
}

arr = ["arpita","sampa","sandip","amit"]
arr.forEach(cvert)     // array.forEach() : executes a provided callback func once for each array element.


// ============== Questions and Answers ===============
//Q1. Take a array arr = [2,3,4,53,1] 
// func check even or odd and print arr[i] is even/odd
// use for Each loop for that
function check(arr){
    if(arr%2!=0){
        console.log(arr +" is odd")
    }else{
        console.log(arr +" is even")
    }
}
ar = [2,3,4,53,1]
ar.forEach(check)

//Q2.  arr= ["arpita","sampa","sandip","amit"]
// func to print length - apple length : 5
// use for Each loop for that
function checkLength(x){
    console.log(x +" length : "+x.length)
}
arr = ["arpita","sampa","sandip","amit"]
arr.forEach(checkLength)

// Q3. arr = [23,12,56,677]
// narr = []
// all value more than 100 add them to narr
// print narr
// -----Using for loop------
arr = [23,12,56,677,110]
narr=[]
function add(x){
    for(let i=0;i<x.length;i++){
        if(x[i]>100){
            narr.push(x[i])
        }
    }
}
add(arr)
console.log(narr)

// -----Using forEach loop-----
/*arr = [23,12,56,677,110]
narr=[]
function add(x){
    if(x > 100){
        narr.push(x)
    }
}
arr.forEach(add)
console.log(narr)
*/

//Q4. sort an array using insertion sort.
console.log("Insertion sort : ")
arr = [2,5,1,9,4,7,3]
console.log("Before sorting : "+arr)
for(let i=1;i<arr.length;i++){
    let temp = arr[i];
    let j = i-1;
    while(j>=0 && temp<arr[j]){
        arr[j+1]=arr[j];
        arr[j]=temp;
        j--;
    }
}
console.log("After sorting : "+arr)

//Q5. sort an array using bubble sort.
console.log("Bubble Sort : ")
arr = [23,12,56,677,110]
console.log("Before sorting : "+arr)
for(let i=0;i<arr.length-1;i++){
    let flag = false;
    for(let j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            flag = temp;
        }
    }
    if(!flag){
        break;
    }
}
console.log("After sorting : "+arr)