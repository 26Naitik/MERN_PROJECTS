// const orders = [
//   {
//     id: 1,
//     customer: "Rahul",
//     food: "Pizza",
//     price: 500,
//     delivered: true
//   },
//   {
//     id: 2,
//     customer: "Aman",
//     food: "Burger",
//     price: 250,
//     delivered: false
//   },
//   {
//     id: 3,
//     customer: "Priya",
//     food: "Pasta",
//     price: 400,
//     delivered: true
//   },
//   {
//     id: 4,
//     customer: "Riya",
//     food: "Momos",
//     price: 150,
//     delivered: false
//   }
// ];

// Print name using map function

// let name = orders.map(order => order.customer);
// console.log(name);

// // ["Rahul", "Aman", "Priya", "Riya"]

// // Print price using map function

// let price = orders.map(order => order.price);
// console.log(price);

// // [500, 250, 400, 150]

// // Filter the delivered orders using filter function for true values

// let deliveredOrders = orders.filter(order => order.delivered == true);
// console.log(deliveredOrders);

// [
//   { id: 1, customer: 'Rahul', food: 'Pizza', price: 500, delivered: true },
//   { id: 3, customer: 'Priya', food: 'Pasta', price: 400, delivered: true }
// ]


// Use find function to find the order with id 3

// let ordersWithId3 = orders.find(order => order.id == 3);
// console.log(ordersWithId3);

// // { id: 3, customer: 'Priya', food: 'Pasta', price: 400, delivered: true }

// // Use reduce function to calculate the total price of all orders

// let totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
// console.log(totalPrice);

// // 1300

// Accumulator ---> Ye previous result store karta hai.
// order ---> Current array element
// 0 ---> Initial value of accumulator

//reduce()

//filter()
// let nums = [1, 2, 3, 4, 5];
// // let evenNums = nums.filter(num => num % 2 == 0);
// // console.log(evenNums);

// nums.filter(function(num) {
//     if (num % 2 === 0) {
//         console.log(num);
//     }
// }
// );

// //reduce()
// //in reduce we have two parameters, first is accumulator and second is current value
// let sum = nums.reduce(function(acc, num) {
//     return acc + num;
// }, 0);
// console.log(sum);

// //find()
// //find method returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// let arr4 = [10, 20, 30, 40, 50];
// let ans=arr4.find((num) => num > 25);
// console.log(ans);

// let front = ["HTML", "CSS", "JS"];
// let back = ["Node", "Express", "MongoDB"];

// let full = front.concat(back);
// console.log(full);

// //reverse()
// let reversed = nums.reverse();
// console.log(reversed);

// //sort()
// // minus pe negetive toh ddont swap 
// //minus karne pe 0 dont swap
// //plus pe positive toh swap
// let sorted = nums.sort();
// console.log(sorted);

// let sorted2 = nums.sort((a, b) => a - b);
// console.log(sorted2);

// let sorted3 = nums.sort((a, b) => b - a);
// console.log(sorted3);

// //decontructuring
// let bikes = ["GT", "H", "S"];
// let fb = bikes[0];
// let sb = bikes[1];
// let tb = bikes[2];

// // console.log(fb, sb, tb);

// // let [firstBike, secondBike, thirdBike] = bikes;
// // console.log(firstBike, secondBike, thirdBike

// let n1 = 10;
// let n2 = 20;

// [n1, n2] = [n2, n1];
// console.log(n1, n2);

const orders = [
  {
    id: 1,
    customer: "Rahul",
    food: "Pizza",
    price: 500,
    delivered: true
  },
  {
    id: 2,
    customer: "Aman",
    food: "Burger",
    price: 250,
    delivered: false
  },
  {
    id: 3,
    customer: "Priya",
    food: "Pasta",
    price: 400,
    delivered: true
  },
  {
    id: 4,
    customer: "Riya",
    food: "Momos",
    price: 150,
    delivered: false
  }
];

//map()
let name = orders.map(order => order.customer);
console.log(name);
//filter()
let deliveredOrders = orders.filter(order => order.delivered == true);
console.log(deliveredOrders);

//reduce()
let totalPrice = orders.reduce((acc, order) => acc + order.price, 0);
console.log(totalPrice);

//find()
let orderWithId3 = orders.find(order => order.id == 3);
console.log(orderWithId3);

//sort()
let sortedOrders = orders.sort((a, b) => a.price - b.price);
console.log(sortedOrders);

