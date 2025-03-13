const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ];

console.log(products.reduce((acc,products)=>acc+=products.price,0)*1.25);