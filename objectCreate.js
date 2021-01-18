//Object.create

//Bir objenin özelliklerinin bir başka nesnenin prototype olarak ayarladık

let personProto = {
  calculateAge: function () {
    return 2021 - this.yearOfBirth;
  },
};

let cemre = Object.create(personProto);

cemre.name = "cemre";
cemre.yearOfBirth = 1990;
cemre.job = "jr";

let sinem = Object.create(personProto, {
  name: { value: "sinem" },
  yearOfBirth: { value: 1990 },
  job: { value: "jr" },
});

console.log(sinem);
console.log(sinem.calculateAge());
console.log("*******************************************");
console.log(cemre);
console.log(cemre.calculateAge());
