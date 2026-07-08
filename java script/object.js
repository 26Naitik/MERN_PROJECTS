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

