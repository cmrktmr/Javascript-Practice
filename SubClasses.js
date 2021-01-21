class PersonES6 {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  sayHi() {
    return `I'm ${this.firstname} ${this.lastname}`;
  }
}

class CustomerES6 extends PersonES6 {
  constructor(firstname, lastname, phone, username) {
    super(firstname, lastname);
    this.phone = phone;
    this.username = username;
  }

  static getTotal() {
    return 1000;
  }
}

let customer1 = new CustomerES6("cemre", "aktemur", "1234", "1cemre1");

console.log(customer1.sayHi());

console.log(CustomerES6.getTotal());