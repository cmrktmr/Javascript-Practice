//Destructuring
//Destructuring Assingment
var a, b, rest;

[a, b] = [10, 20];
console.log(a);
console.log(b);

[a, b, ...rest] = [10, 20, 30, 40, 50, 60, 70];

console.log(rest);

//Array destructuring
//Dizi elemanlarının sıraysıyla indexlenmesi

//Yorum satırını açınız
//const arrConfig = ["localhost", "8080", "900"];
//const [server, port, timeout] = arrConfig;
//console.log(server, port, timeout);

//Object destructuring

const objConfig = {
  server: "local",
  port: "8080",
  timeout: 900,
};
const { server, port, timeout } = objConfig;

console.log(server, port, timeout);

let { timeout: t } = objConfig;
console.log(t);
