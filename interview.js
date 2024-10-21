console.log("In Javascript")

//Sum of 2 numbers

function sum (a,b) {
    return(a+b);
}

c= sum(10,20)
console.log(c)

//Find the Maximum number in Array

let arrOfNum = [10 , 20 , 30, 90 , 5 ,25, 40]

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


// Take array of numbers and return a array of numbers with new array


function returnEvenNumbers(numbers){

    return numbers.filter(num => num%2 == 0)
} 

let evenNumbers = returnEvenNumbers(arrOfNum)
console.log(evenNumbers)


//factorial of given number


function factorial(num){
    if(num == 0 || num == 1){
        return 1;
    }else{
    return num * factorial(num-1) 
    }
}

let num = 6;
let output = factorial(num)
console.log(output)

// To check given number prime or not

function primeOrNot(n){
if(n <= 1){
    return false
}else{
    var count = 0
    for(i=1 ; i<=n ; i++) {
        if(n%i == 0){
            count++
            //console.log("countInside-" + count)
            }
            else{
                console.log("Here")
            }
        }
        //console.log("count-" + count)
        if(count > 2){
            return false
        }
        else{
            return true
        }

    }
}


if(primeOrNot(11)){
    console.log("Prime")
}else{
    console.log("Not a prime")
}


//Largest element in the nested array
