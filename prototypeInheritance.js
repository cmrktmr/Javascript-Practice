//Prototype Inheritance

let Person = function (name, year, job) {
  this.name = name;
  this.year = year;
  this.job = job;
};

Person.prototype.calculateAge = function () {
  return 2021 - this.year;
};

console.log(Person);

let Teacher = function (name, year, job, subject) {
  Person.call(this, name, year, job);
  this.subject = subject;
};

Teacher.prototype = Object.create(Person.prototype);

Teacher.prototype.constructor = Teacher;

let cemre = new Teacher("cemre", 1995, "jr", "node");

console.log(cemre);

console.log(cemre.calculateAge());
