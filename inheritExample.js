/*   Person-->Student Person-->Teacher 

Person ;name Introduce() -->Teacher,Headmaster
Student: name Introduce()+ number study()
Teacher:name Introduce() + branch teach()

*/

//Person Constructor
function Person(name) {
  this.name = name;
}

Person.prototype.Introduce = function () {
  console.log("My name is " + this.name);
};

//Teacher Constructor
function Teacher(name, branch) {
  Person.call(this, name);
  this.branch = branch;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
  console.log("I teach " + this.branch);
};

//Student Constructor
function Student(name, number) {
  Person.call(this, name);
  this.number = number;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.class = function () {
  console.log("Im " + this.number);
};

//Outputs

let p1 = new Person("Cemre");
p1.Introduce();

let t1 = new Teacher("Snm", "bio");
t1.Introduce();
t1.teach();

let s1 = new Student("Emre", 2);
s1.Introduce();
s1.class();
