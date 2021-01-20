function sumES6(...arr) {
  let result = 0;
  arr.forEach((item) => (result += item));
  return result;
}

console.log(sumES6(1, 3, 4));

//rest parametresi en sonda olması lazım eğer başka parametre göndeerilecekse.

function isDriver(age, ...years) {
  years.forEach((year) => console.log(2018 - year >= age));
}

isDriver(17, 2020, 1990, 2002);
