// //Shallow copy

// // let a = 10;
// // let b = a;
// // b=20;
// // console.log(a);
// // console.log(b);

// let emp1 = {
//     name: "John",
// }

// let emp2 = emp1;

// emp2.name = "bob"
// console.log(emp1.name);
// console.log(emp2.name);
// //yahan pe bass address copy ho rahi hai, dono emp1 aur emp2 same address ko point kar rahe hai, isliye dono me change ho raha hai

// let emp3 = {
//     name: "Prince",
//     age:20
// }
// //1. spread oprator.
// let emp4 = {...emp3}; //spread operator se shallow copy kar rahe hai
// emp4.name = "Rahul";
// console.log(emp3.name);
// console.log(emp4.name);

// //2.Object.assign() method
// let emp5 = {
//     name: "Aman",
//     age: 25
// }

// let emp6 = Object.assign({}, emp5); //Object.assign() method se shallow copy kar rahe hai
// emp6.name = "Riya";
// console.log(emp5.name);
// console.log(emp6.name);


// //deep copy copies everything includng all objects and arraays.

// // let emp7 = {
// //     name:"shrey",
// //     address:{
// //         city:"New York",
// //         state:"NY"
// //     }
// // }
// // //structuredclone method se deep copy kar rahe hai
// // let newObj = structuredClone(emp7);
// // newObj.name = "Riya";
// // console.log(emp7.name);
// // console.log(newObj.name);
// // newObj.address.city = "Los Angeles";
// // console.log(emp7.address.city);
// // console.log(newObj.address.city);

// //final example of shallow copy

// let stu1 = {
//     name:"jhon",
//     address:{
//         city:"New York",
//         state:"NY"
//     }
// }

// const stu2 = {...stu1}; //shallow copy
// stu2.name = "Riya";
// console.log(stu1.name);
// console.log(stu2.name);
// stu2.address.city = "Los Angeles";
// console.log(stu1.address.city);
// console.log(stu2.address.city);

// //final example of deep copy

// let stu3 = {
//     name:"jhon",
//     address:{
//         city:"New York",
//         state:"NY"
//     }
// }
// console.log(stu3.address.city);
// const stu4 = structuredClone(stu3);
// stu4.name = "Riya";
// console.log(stu3.name);
// console.log(stu4.name);
// stu4.address.city = "Los Angeles";
// console.log(stu3.address.city);
// console.log(stu4.address.city);

// //final example of nullish coalescing operator

// let stu5 = {
//     name:"jhon",
//     address:{
//         city:"New York",
//         state:"NY"
//     }
// }
// console.log(stu5.address?.city ?? "city not found");
// console.log(stu5.address?.country ?? "country not found");
// //shalow cpy
// let a = [10,20,30]
// let b = [...a];
// b.push(40);
// console.log(a);
// console.log(b);

// //deep copy
// let c = [1,2,[3,4]];
// let d = [...c];
// d[0][0] =10;
// console.log(c);
// console.log(d);

// let a = [[1,2],[3,4]];
// let b = [...a];
// b[0][0] = 10;
// console.log(a);
// console.log(b);

//let newCopy = JSON.parse(JSON.stringify(a));

//THIS KEYWORD

// let student = {
//     name:"John",
//     age:20,
//     study:function(){
//         console.log("Student is studying");
//     }
// }
// console.log(student.name);
// // student.study();

// let car = {
//     brand: "BMW",
//     color: "Black",
//     start: function(){
//         console.log("Car is starting");
//     },
//     stop: function(){
//         console.log("Car is stopping");
//     },
//     showBrand: function(){
//         console.log(this.brand);    
//     }
// }
// car.start();
// car.stop();
// car.showBrand();

emp4 = {
    name: "John",
    age: 20,
    address: {
        city: "New York",
        state: "NY"
    }
}

function deep(obj){
    let e = {};
    for(let key in obj){
        if(typeof[name] === "object"){
            deep(obj[key]);
        }else{
            e[key] = obj[key];
    }
}
}