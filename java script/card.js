const products = [

{
    name:"iPhone 15",
    price:"₹79,999",
    image:"https://picsum.photos/200?1"
},

{
    name:"Samsung S24",
    price:"₹74,999",
    image:"https://picsum.photos/200?2"
},

{
    name:"MacBook Air",
    price:"₹1,10,000",
    image:"https://picsum.photos/200?3"
},

{
    name:"HP Victus",
    price:"₹75,000",
    image:"https://picsum.photos/200?4"
},

{
    name:"Nike Shoes",
    price:"₹5,999",
    image:"https://picsum.photos/200?5"
},

{
    name:"Adidas Shoes",
    price:"₹4,999",
    image:"https://picsum.photos/200?6"
},

{
    name:"Apple Watch",
    price:"₹39,999",
    image:"https://picsum.photos/200?7"
},

{
    name:"Boat Watch",
    price:"₹2,499",
    image:"https://picsum.photos/200?8"
}

];

function randomProducts(){

    let container = document.getElementById("products");

    container.innerHTML = "";

    let copy = [...products];

    copy.sort(() => Math.random() - 0.5);

    for(let i=0;i<4;i++){

        container.innerHTML += `
        <div class="card">
            <img src="${copy[i].image}">
            <h3>${copy[i].name}</h3>
            <p>${copy[i].price}</p>
        </div>
        `;

    }

}

randomProducts();