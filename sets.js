//Sets

let val;
var mySet = new Set();
//aynı değeri 1'den fazla alamaz.
mySet.add(1);
mySet.add(2);
mySet.add(2);

var obj = { a: 1, b: 2 };
mySet.add(obj);

console.log(mySet);

for(let item of mySet){
    console.log(item);
}


for(let item of mySet.values()){
    console.log(item);
}
