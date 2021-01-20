let val;

const numbers = new Map();

numbers.set(1, "Cemre");
numbers.set("2", "aktemur");
numbers.set(3, "Avcılar");
numbers.set("4", "Istanbul");

val = numbers;
val = numbers.get(3);
val = numbers.get("4");
val = numbers.size;

console.log(val);

for (var [key, value] of numbers) {
  console.log(key + " = " + value);
}
