let Person = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  return 2021 - this.yearOfBirth;
};

Person.prototype.getName = function () {
  return this.name;
};

let cemre = new Person("cemre", 1995, "jr");

let sinem = new Person("sinem", 1999, "phd");

console.log(cemre.calculateAge());

console.log(cemre);

console.log("********");
console.log(sinem);

console.log(sinem.getName());
