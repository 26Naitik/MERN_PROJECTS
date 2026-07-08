// // password
// // let password = "";

// // while (password !== "admin123") {
// //     password = prompt("Enter Password:");
// // }

// // console.log("Login Successful!");

// //even number form 1 to 20
// // for (let i = 1; i <= 20; i++) {
// //     if (i % 2 === 0) {
// //         console.log(i);
// //     }
// // }

// //sum of 1 to 100
// // let sum = 0;

// // for (let i = 1; i <= 100; i++) {
// //     sum += i;
// // }

// // console.log("Sum =", sum);

// //print all the number between 1 to 50 that are divisible by 3
// // for (let i = 1; i <= 50; i++) {
// //     if (i % 3 === 0) {
// //         console.log(i);
// //     }
// // }

// //functions

// // function functionname(parameter) {
// //     //code
// //     return parameter;   
// // }

// // function greet(name) {
// //     console.log("Hello " + name);
// // }

// // greet("Naitik");

// ///2.Function Expression
// //const variableName = function(parameter) {
//     //code
// //     return parameter;
// // }

// // const greet = function(name) {
// //     console.log("Good Morning! " + name);
// // };

// // greet("Naitik");


// //3. Anonymous Function:A function withou name

// function() {
//     console.log("Hello");
// }

// setTimeout(function() {
//     console.log("Hello");
// }, 2000);

// //4. Arrow Function

// const greet = (name) => {
//     console.log("Good Morning! " + name);
// };
// // greet("Naitik");

// //5.callback Function: A function that is passed as an argument to another function

// function greet(name, callback) {
//     console.log("Good Morning! " + name);
//     callback();
// }

// greet("Naitik", () => {
//     console.log("Callback function executed!");
// });

// //6. IIFE (Immediately Invoked Function Expression): A function that is executed immediately after it is defined

// (function() {
//     console.log("IIFE executed!");
// })();

// let num1 = Number(prompt("Enter first number:"));
// let num2 = Number(prompt("Enter second number:"));
// let operator = prompt("Enter operator (+, -, *, /, %):");

// let result;

// switch (operator) {
//     case "+":
//         result = num1 + num2;
//         break;

//     case "-":
//         result = num1 - num2;
//         break;

//     case "*":
//         result = num1 * num2;
//         break;

//     case "/":
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "Division by zero is not allowed.";
//         }
//         break;

//     case "%":
//         if (num2 !== 0) {
//             result = num1 % num2;
//         } else {
//             result = "Modulo by zero is not allowed.";
//         }
//         break;

//     default:
//         result = "Invalid Operator";
// }

// console.log("Result:", result);
// alert("Result: " + result);

//javascript
// ===============================
// Q1. Print numbers from 1 to 10 using a for loop.
//===============================

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// javascript
// // ===============================
// // Q2. Print numbers from 10 to 1 using a while loop.
// // ===============================

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


//javascript
// ===============================
// Q3. Print even numbers from 1 to 20 using a for loop.
// ===============================

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// ---

// ```javascript
// // ===============================
// // Q4. Print odd numbers from 1 to 15 using a while loop.
// // ===============================

// let i = 1;

// while (i <= 15) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
//     i++;
// }
// ```

// ---

// ```javascript
// // ===============================
// // Q5. Print the multiplication table of 5.
// // ===============================

// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }
// ```

// ---

// ```javascript
// // ===============================
// // Q6. Find the sum of numbers from 1 to 100 using a loop.
// // ===============================

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }

// console.log("Sum =", sum);
// ```

// ---

// ```javascript
// // ===============================
// // Q7. Print all numbers between 1 to 50 that are divisible by 3.
// // ===============================

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }
// ```

// ---

// ## Q8 (Browser Version using `prompt()`)

// ```javascript
// // ===============================
// // Q8. Ask the user for a number and print
// // whether each number from 1 to that number
// // is odd or even.
// // ===============================

// let num = Number(prompt("Enter a Number:"));

// for (let i = 1; i <= num; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is Even");
//     } else {
//         console.log(i + " is Odd");
//     }
// }
// ```

// ---

// ## Q8 (Node.js Version using `readline`)

// ```javascript
// // ===============================
// // Q8. Ask the user for a number and print
// // whether each number from 1 to that number
// // is odd or even.
// // ===============================

// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a Number: ", (input) => {

//     let num = Number(input);

//     for (let i = 1; i <= num; i++) {
//         if (i % 2 === 0) {
//             console.log(i + " is Even");
//         } else {
//             console.log(i + " is Odd");
//         }
//     }

//     rl.close();
// });
//```

// let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// console.log("Fruits Array:", fruits);
// fruits.push("Fig");
// console.log("After Adding Fig:", fruits);   

// //push pop method in array
// let num = [];
// num.push(1);
// num.push(2);
// num.push(3);
// num.push(4);
// num.push(5);
// console.log("Numbers Array:", num);
// num.pop(5);
// console.log("After Removing Last Element:", num);
// //shift unshift method in array
// num.shift();
// console.log("After Removing First Element:", num);
// num.unshift(0);
// console.log("After Adding 0 at the Beginning:", num);
// //includes method in array
// num.includes(3);
// console.log("Does the array include 3?", num.includes(3));

// ['a', 'b', 'c'].forEach((element) => {
//     console.log(element);
// });

// function greet(name) {
//     console.log("Good Morning");
// }

// function SayBye(){
//     console.log("Naitik");
// }

// greet(SayBye());

// function greet2(name) {
//     console.log("Hello " + name);
// }

// function processUser(callback) {
//     console.log("Processing User...");
//     callback("Naitik");
// }

// processUser(greet2);

// function add(a, b) {
//     console.log(a+b);
// }
// function subtract(a, b) {
//     console.log(a-b);
// }
// function multiply(a, b) {
//     console.log(a*b);
// }
// function divide(a, b) {
//     console.log(a/b);
// }
// function calc(a, b, callback) {
//     callback(a, b);
// }
// calc(10,5,add);
// calc(10,5,subtract);
// calc(10,5,multiply);
// calc(10,5,divide);  

// let res = [
//   {
//     id: 1,
//     name: "Naitik",
//     bill: 250
//   },
//   {
//     id: 2,
//     name: "Rahul",
//     bill: 400
//   },
//   {
//     id: 3,
//     name: "Aman",
//     bill: 150
//   },
//   {
//     id: 4,
//     name: "Priya",
//     bill: 600
//   }
// ];

// let names = res.map((key) => {
//     return key.name;
// });

// console.log(names);

// // let num4 = [10,20,30,40];

// let num4 = [10,20,30,40];

// let result = num4.map(num => num * 2);

// console.log(result);

function add(a,b){
    return a+b;
}
console.log(add(5,0));