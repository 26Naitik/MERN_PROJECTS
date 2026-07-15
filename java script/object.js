//Object JavaScript me ek non-primitive data type hai jisme key-value pairs store hote hain.
//it is used to represent real world entaties and their properties.

// let student = {
//     name: "Rahul",
//     id:123
// }
// //dot notation
// console.log(student.name); // Rahul
// console.log(student.id); // 123

// //bracket notation
// console.log(student["name"]); // Rahul
// console.log(student["id"]); // 123

// // let student1 = {
// //     "full name": "Rahul Sharma",
// //     id: 123
// // }

// // console.log(student1["full name"]); // Rahul Sharma
// // console.log(student1["id"]); // 123

// let student1 = {
//     "full-name": "Rahul Sharma",
//     id: 123,
//     age: 100
// }

// let k = "age";

// console.log(student1["full-name"]); // Rahul Sharma
// console.log(student1["id"]); // 123
// console.log(student1[k]); // 100 dynamic key

// //agar koi property key hai object nahi hai to undefined return karega
// console.log(student1["address"]); // undefined

// //adding new property to object
// student1.address = "Delhi";
// console.log(student1.address); // Delhi

// //adding new property usinh bracket notation
// student1["phone"] = 1234567890;
// console.log(student1.phone); // 1234567890

// //## freezing object
// Object.freeze(student1); // object ko freeze kar diya jisse usme koi bhi property add, delete ya modify nahi kar sakte.

// //deleting property from object
// delete student1.age;
// console.log(student1.age); // undefined

//create object car brand ,color, price , model and create an object laptop brand ,color, price,model
let car = {
    brand: "Toyota",
    color: "blue",
    price: 20000,
    model: "Camry",
    year: 2020
};

let laptop = {
    brand: "Dell",
    color: "silver",
    price: 15000,
    model: "XPS 13",
    year: 2021
};

//acess three elements from both using dot notation and bracket notation
console.log(car.brand);
console.log(car["color"]);
console.log(car["price"]);
console.log(laptop.brand);
console.log(laptop["color"]);
console.log(laptop["price"]);
console.log(laptop["year"]);

//adding new property to object
car.owner = "Rahul";
laptop.owner = "Aman";

console.log(car.owner);
console.log(laptop.owner);

// //using freeze method to freeze the object
// Object.freeze(car);
// Object.freeze(laptop);

// //adding new property to object after freezing
// car.owner = "Riya";
// laptop.owner = "Priya";
// console.log(car.owner);
// console.log(laptop.owner);

//deleting property from object
delete car.year;
delete laptop.year;
console.log(car.year);
console.log(laptop.year);


const uesr = {
    name:"john",
    // address:{
    //     city:"New York",
    // }
}

console.log(uesr.address?.city);//undefined
console.log("welcome") //welcome

//symbol
const sym1 = Symbol();

const user2 = {
    age:20,
    id:100,
    [sym1]:1
}

console.log(user2.age); //20
console.log(user2.id); //100
console.log(user2[sym1]); //1

const sym2 = Symbol("id");

//symbol and optional chaining together 

const user3 = {
    name:"john",
    address:{
        city:"New York",
    }
}
console.log(user3.address?.city);
//twwo ways t check key arw :
console.log(Object.keys(user3)); //["name","address"]
for (const key in user3) {
    console.log(key); //name,address
}

//Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.
const user4 = {
    name:"john",
    address:{
        city:"New York",
    }
}
console.log(Object.getOwnPropertyNames(user4)); //["name","address"]

//Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.
const sym3 = Symbol("id");
const user5 = {
    name:"john",
    [sym3]:1
}

console.log(Object.getOwnPropertySymbols(user5)); //[Symbol(id)]

let securitytoken = Symbol("token");

let bankAccount = {
    accountNumber: 123456789,
    balance: 1000,
    [securitytoken]: "abc123"
};
bankAccount.securitytoken = "xyz456"; // This will not overwrite the symbol property
console.log(bankAccount.accountNumber); // 123456789
console.log(bankAccount.balance); // 1000
console.log(bankAccount[securitytoken]); // abc123
console.log(bankAccount.securitytoken); // xyz456 (this is a different property, not the symbol property)
//object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
console.log(Object.keys(bankAccount)); // ["accountNumber", "balance", "securitytoken"]

// object.values() method returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.
console.log(Object.values(bankAccount)); // [123456789, 1000, "xyz456"]
// object.Object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop.
console.log(Object.entries(bankAccount)); // [["accountNumber", 123456789], ["balance", 1000], ["securitytoken", "xyz456"]]

for(let key in bankAccount){
    console.log(bankAccount[key]); // 123456789, 1000, "xyz456"
}

let person = {
    name: "John",
    age: 30,
    city: "New York"
};
//for in loop
for(let key in person){
    console.log(person[key]); // John, 30, New York
}

//for of loop
for(let value of Object.values(person)){
    console.log(value); // John, 30, New York
}