//Arrow func

const phones = [
  { name: "Iphone 8", price: 3000 },
  { name: "Iphone 8", price: 3000 },
  { name: "Iphone 8", price: 3000 },
  { name: "Iphone 8", price: 3000 },
];

//ES5
let princesES5 = phones.map(function (phone) {
  return phone.price;
});

console.log(princesES5);

//ES6

let pricesES6 = phones.map((phone) => phone.name);
console.log(pricesES6);

/*******************************************************************************/

