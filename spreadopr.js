function getTotal(a, b, c) {
  return a + b + c;
}

let numbers = [10, 20, 30];

//ES5

console.log(getTotal.apply(null, numbers));

//ES6
console.log(getTotal(...numbers));

let arr1 = ["two", "three"];
let arr2 = ["one", "four", "five"];

let arr3 = ["one", ...arr1, "four", "five"];

arr1.push(...arr2);

console.log(arr1);

console.log(arr3);



