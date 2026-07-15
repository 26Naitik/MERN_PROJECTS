// Q1. Reference Copy (=)
// ----------------------
// Create an object student1 with:
// - name
// - age

// Assign it to student2 using (=).

// Tasks:
// 1. Change student2.name.
// 2. Print both objects.
// 3. Explain why both objects changed.
let student1 = {
    name:"jhon",
    age:20
}

let student2 = student1; //shallow copy
student2.name = "Riya";
console.log(student1.name);
console.log(student2.name);

//js me objects refrence type ke hote hai. toh jab hum likhte hai ki student2=student1 toh naya object create nahi hota hai sirf student11 ka refrence student2 me copy hota hai. isiliye dono same object ko pint karte hai.

// Q2. Shallow Copy
// ----------------
// Create an object employee with:
// - name
// - department

// Tasks:
// 1. Create a shallow copy using the spread operator (...).
// 2. Change the department in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did or did not change.

let employee = {
    name:"Prince",
    department:"IT"
}

let employee2 = {...employee};
employee2.department = "HR";
console.log(employee.department);
console.log(employee2.department);

//spread operator se shallow copy karne pe sirf top level properties copy hoti hai. nested objects ya arrays ke liye ye kaam nahi karta. isiliye employee2 me department change karne pe employee me koi change nahi hua.

// Q3. Shallow Copy with Nested Object
// -----------------------------------
// Create an object user with:
// - name
// - address
//     - city
//     - pincode

// Tasks:
// 1. Create a shallow copy using the spread operator.
// 2. Change address.city in the copied object.
// 3. Print both objects.
// 4. Explain why both objects show the same city.

let user = {
    name:"shrey",
    address:{
        city:"New York",
        pincode:10001
    }
}

let user2 = {...user};
user2.address.city = "Los Angeles";
console.log(user.address.city);
console.log(user2.address.city);

//spread operator se shallow copy karne pe sirf top level properties copy hoti hai. nested objects ya arrays ke liye ye kaam nahi karta. isiliye user2 me address.city change karne pe user me bhi same city show ho rahi hai.

// Q4. Deep Copy
// -------------
// Using the same user object:

// Tasks:
// 1. Create a deep copy using structuredClone().
// 2. Change address.pincode in the copied object.
// 3. Print both objects.
// 4. Explain why the original object did not change.


let user3 = structuredClone(user);
user3.address.pincode = 10002;
console.log(user.address.pincode);
console.log(user3.address.pincode);

//structuredClone() method se deep copy karne pe nested objects ya arrays bhi copy ho jate hai. isiliye user3 me address.pincode change karne pe user me koi change nahi hua.

// Q5. Bank Account
// ----------------
// Create an object with:
// - accountHolder
// - balance

// Create methods:
// 1. deposit(amount)
// 2. withdraw(amount)

// Requirements:
// - Update balance using this.balance.
// - Print balance after every transaction.

let bankAccount = {
    accountHolder:"John Doe",
    balance:1000,
    deposit:function(amount){
        this.balance += amount;
        console.log(this.balance);
    },
    withdraw:function(amount){
        if(this.balance >= amount){
            this.balance-=amount;
            console.log(this.balance);
        }
        else{
            console.log("Insufficient balance");
        }
    }
}
bankAccount.deposit(500);
bankAccount.withdraw(200);

//arrow function X

let p1 = {
    name:"shrey",
    hibolo:()=>{
        console.log(this.name);
    }
}
p1.hibolo();