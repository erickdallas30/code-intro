console.log("Hello Universe");

//variables with string value
const firstName = "Dhananjoy";
const lastName = "Tiwari";

// undefined example
let isOld
let age = 29;

//boolean
let isCool = true;

console.log(age);

//null example
let isYoung = null;

//conditional if statement
if(age > 30){
    isOld = true
    isYoung = false
} else {
    isOld = false
    isYoung = true
}

console.log(isOld, "-------", isYoung);

//Mathematical Operations

let x = 6
let y = 10
let z = 7 + 8

let sum = x + y + z

let product =  x * y * z

let remainder = y % x

console.log(sum, product,remainder)

//checking for equality
if(x % 2 !== 0){
    console.log('number is odd')
} else {
    console.log('number is even')
}

//strings
let fullName = firstName + ' ' + lastName

console.log(fullName)

let greeting = "Hello, " + fullName + " you are " + age + " years old."


let greeting2 = `Hello, ${fullName} you are ${age} year's old`
console.log(greeting2)


//conditionals

//checking for comparison
let score1 = 95

let score2 = 95

if(score1 >= score2){
    console.log(`${score1} is bigger than ${score2}`)
} else {
    console.log(`${score2} is bigger`)
}
