function add(a,b){
    return a+b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function maximum(a,b){
    return Math.max(a,b);
}

function floor(a){
    return Math.floor(a)
}

function squaroot(a){
    a = a*10000
}

function power(a,b){
    return Math.pow(a,b)
}

function fact(a){
    let ans = 1
    while(a>0){
        ans *= a;
        a--;
    } 
    return ans;
}

let users = 100

module.exports = {add , multiply,fact, users}
module.exports = {maximum,squaroot,floor,power,fact}
