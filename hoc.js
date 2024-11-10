let arr = [ 8 , 366 , 756 , 91]



let updtedArr = arr.map(n => n*2);

console.log(updtedArr)

let filterArray = arr.filter(n => n%2 == 0);

console.log(filterArray)


let reduceArray = arr.reduce((acc,curr) => {
acc=acc+curr
return acc
},0)

console.log(reduceArray)

let maxNumber = arr.reduce((acc,curr) => {

    if(curr > acc){
        acc=curr
    }
    return acc

},0)

console.log(maxNumber)


const users = [
    {firstName : "Satya" , lastName : "Murthy" , age : 20},
    {firstName : "Sowji" , lastName : "Naga" , age: 15},
    {firstName : "Mokasha" , lastName : "Lakshmi" , age: 3},
    {firstName : "Chiranjeevi" , lastName : "Konidela" , age : 20}
]

const fullname = users.map((u) => {
    return u.firstName + " " + u.lastName
})

console.log(fullname)

//{20:2 , 10:1 , 3:1}

const output = users.reduce((acc,curr) => {
if(acc[curr.age]){

    acc[curr.age] = acc[curr.age]+1
}
else{
    acc[curr.age]=1
}

return acc

},{})

console.log(output)

const ageFilterFirstName = users.filter((u) => u.age > 10 ).map((u) => u.firstName)

console.log(ageFilterFirstName)


const ageFilterFirstNameReduce = users.reduce((acc,curr) => {
    if(curr.age > 10){
        acc.push(curr.firstName)
    }
    return acc
},[])

console.log(ageFilterFirstNameReduce)

const nums = [ 9 , 2 , 90 , 51 , 92]

const sortedNum = nums.sort(
    (a,b) => {
        if(a>b)
            return 1
        else
        return -1
    }

)

console.log(sortedNum)

//Function currying using bind

function multiply(x,y){
    console.log(x*y)
}

const multiplybyTwo = multiply.bind(this,4)
const multiplybyThree = multiply.bind(this,3)

multiplybyTwo(5);
multiplybyThree(5);


//Function currying using clouser

function multiply_1(x){
    return function(y){
       console.log(x*y)
    }
}

let multiply_c = multiply_1(2)
multiply_c(7);


