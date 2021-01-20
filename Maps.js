//Maps 

let val;
const numbers = new Map();

numbers.set(1, "Cemre");
numbers.set("2", "Aktemur");
numbers.set(3, "Istanbul");
numbers.set("4", "Türkiye");

val = numbers;
val = numbers.get(3);
val = numbers.get("4");
val = numbers.size;

console.log(val);

for (var [key, value] of numbers) {
  console.log(key + " = " + value);
}


numbers.forEach(function (key,value) {
  console.log(key +" - " +value);

})


