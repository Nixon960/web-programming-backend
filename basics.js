
var Number1 = 12;

var Number2 = 11.5;

console.log(Number1+Number2);


// strings
let name1 = "Charles";
let firstName = 'John';
let lastName = `Simon`;

let welcome = `Welcome back ${name1};)`;

console.log(welcome);

console.log(firstName.toUpperCase());
console.log(firstName.length);

// booleans
let isStudent = true;
let isInHall = false;

// logical Operations
console.log(isStudent && isInHall);
console.log(isStudent || isInHall);
// console.log(isStudent && isInHall);


// arrays
let fruits = ["mangoes", "Oranges", "grapes"];
console.log(fruits);

fruits.push("apples","pineapples");//appending items to the array
// fruits.push("pineapples");
fruits.pop();// removing values from the array
console.log(fruits);


//objects
let credentials = {
    "email": "matako@ucu.ac.ug",
    "password": "1234"
}

console.log(credentials);
credentials["username"] = "charles"
console.log(credentials);

// console.log(credentials.email);
// console.log(credentials.password);

let signUp = {
    "userName": "Fatuma Fresh",
    "email": "fatuma@gmail.com",
    "password": 1234,
    "age": "18",
    "pronouns": "his and hers plus them"
}

signUp["confirmPassword"] = "1234";

// Comparison OPerators
console.log(signUp.password == signUp.confirmPassword);

console.log(signUp.password === signUp.confirmPassword);


// let a = 'abc';
// let b = 'ABC';
// console.log(a == b)
// console.log(a === b)



