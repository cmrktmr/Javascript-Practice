//Array

var arr1 = ["cemre", "sinem", "emre"];

Array.prototype.remove = function (member) {
  var index = this.indexOf(member);

  if (index > -1) {
    this.splice(index, 1);
  }
  return this;
};

console.log(arr1.remove("cemre"));
