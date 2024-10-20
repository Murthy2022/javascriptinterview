console.log("In Javascript")

//Sum of 2 numbers

function sum (a,b) {
    return(a+b);
}

c= sum(10,20)
console.log(c)

//Find the Maximum number in Array

let arrOfNum = [10 , 20 , 30 , 5 , 40]

function findMaxNumber(arr){
    return Math.max(...arr);
}

let maxNumber = findMaxNumber(arrOfNum)

console.log(maxNumber)

//Palindrome

let str = "Civic"

console.log(str.split("").reverse().join(""))

if(str.toLowerCase == str.split("").reverse().join("").toLowerCase){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}




