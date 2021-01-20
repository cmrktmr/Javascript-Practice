//from
let arr = Array.from("Modern Javascript");
console.log(arr);

const products = [
  { name: "Samsung S8", price: 3000 },
  { name: "Iphone 12", price: 1200 },
  { name: "Samsung S7", price: 2000 },
  { name: "Samsung A3", price: 4000 },
  { name: "Samsung S8", price: 9000 },
];

console.log(Array.from(products, (prd) => prd.name));

console.log(Array.from(products, (prd) => prd.price == 2000));

console.log(products.find((prd) => prd.name == "Samsung S7"));

console.log(products.filter((prd) => prd.name == "Samsung S8"));
/****************************************************************** */

let numbers = ["telefon", "bilgisayar", "tv"];
let entries = numbers.entries();

for (let i of entries) {
  console.log(i);
}

let keys = numbers.keys();
for (let i of keys) {
  console.log(i);
}
