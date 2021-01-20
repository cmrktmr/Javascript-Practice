var num = 50;
var account = {
  name: "cemre",
  accountNumber: "12345",
};

console.log(account);

function update(a, b) {
  a = 100;
  b.accountNumber = "222";
}

update(num, account);

console.log(num);
console.log(account);
