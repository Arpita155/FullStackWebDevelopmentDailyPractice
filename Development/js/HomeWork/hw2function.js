//Q1 Write a function which will check if a number is strong or not.
function StrongNum(x){
    let temp = x;
    let sum = 0;
    while(x > 0){
        num = x%10;
        sum += fact(num);
        x = Math.floor(x/10);
    }
    console.log("sum of digits = "+sum);
    if(temp == sum){
        console.log(temp +" is  Strong Number.")
    }else{
        console.log(temp +" is not Strong Number.")
    }
}
function fact(n){
    if(n==1 || n==0){
        return 1;
    }
    mult = 1;
    for(let i=1;i<=n;i++){
        mult *=i;
    }
    return mult;
}
StrongNum(165)

//Q.2 Write a function which will calculate number of digits of a number 
function calculateDigit(n){
    temp = n;
    let d=0;
    while(n > 0){
        d+=1;
        n = Math.floor(n/10);
    }
    console.log("Digit of the number "+temp +" is : "+d)
}
calculateDigit(1234)
//Q3. Write a function which will convert a number to binary 

//Q4. Write a function which will return the unique elements in array[Hard]
let arr = [1,2,3,4,8,1,2,3,5,6,]
console.log(arr)
const uniqueElement=(arr)=>{
    let ans =[]
    for(let i=0;i<arr.length;i++){
        let count = 0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count==1){
            ans.push(arr[i]);
        }
    }
    return ans;
}
console.log(uniqueElement(arr))
//Q5. Write a function which will return all leaders in an array [Medium]
// Means all the number present to right will be lower than that number 
// Example - [12,47,22,11,7,9] here leaders = 9,11,22,47 
let ar = [12,47,22,11,7,9]
function leader(arr){
    for(let i=arr.length-1;i>=0;i--){
        
    }
}