
  function(name,salary){
  this.name = name;
  this.salary = salary;
}

Employee.prototype.calculateSalary = function () {
  var month = new Date().getMonth() + 1;
  var tax = 0;
  total = this.salary * month;

  if (total <= 20000) {
    tax = total * 0.2;
  } else if (total > 20000 && total <= 30000) {
    total = total * 0.25;
  } else {
    tax = total * 0.3;
  }
  return {
    tax: tax,
    paid: total - tax,
  };
};

var em1 = new Employee("Cemre", 500);

console.log(em1.calculateSalary());

var em2 = new Employee("sinem", 1000);
console.log(em2);
