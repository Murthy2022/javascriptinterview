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


let arrays = [[333,31,23],[3,20,23],[9,6,88]]

function findLargestElement(nestedArray) { 

    console.log("Given array-")
    console.log(arrays)

var largest_final = arrays[0][0]
//console.log("before For loop")
for(let i=0 ; i<nestedArray.length;i++){
    let largest = nestedArray[i][0]
    //console.log("Before Starting largest"+largest)
    for(let j=0 ; j<nestedArray[i].length;j++){
     //   console.log("For loop")
    if(largest < nestedArray[i][j+1]){
        largest=nestedArray[i][j+1]
       // console.log("if pass"+largest)
    }
}
//console.log("Largest-final="+largest_final)
//console.log("Largest="+largest)
if(largest_final < largest){
    largest_final = largest
}
//console.log("Highest up to now"+largest_final)
}
return largest_final;
} 

let max = findLargestElement(arrays)
console.log("Here is the Max number in Nested Array-"+max)


//fibonacci series

let fibNum = 30

function toGenerate(fibNum){

let fibSeries = [0,1]
var value = 0

while(1){
    value = fibSeries[fibSeries.length-1] + fibSeries[fibSeries.length-2]
    if(value<fibNum){
    fibSeries.push(value)
    }
    else
    break;
}
console.log(fibSeries)
}

toGenerate(fibNum)

// Convert to UpperCase

let text = "murthy"
console.log(text.toUpperCase())


//Call ,Apply ,Bind Method


let names = {
    firstName : "Satya",
    LastName : "Murthy",
}


let printFullName = function (city,state) {
    console.log(this.firstName + " " + this.LastName + " from" + " " + city + " " + state)
} 
printFullName.call(names,"Hyderabad","Telengana");



let names2 = {
    firstName : "Sachin",
    LastName : "Tendulkar",
}

//printFullName.call(names2)

printFullName.apply(names2,["Mumbai","Maharastra"])


let printname = printFullName.bind(names,"Eluru","AndhraPradesh");

console.log(printname)
printname()








