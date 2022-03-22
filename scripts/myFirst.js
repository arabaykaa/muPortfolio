"use strict";

// let cat = {
//   head: [],
//   wear(hat) {
//     this.head = hat;
//   },
// };

// let white = {
//   __proto__: cat,
// };

// let black = {
//   __proto__: cat,
// };

// white.wear('Shapka');
// console.log(white.head);

// console.log(black.head);

// Наследование ======================================================

// class User {
//   constructor(name, secondname) {
//     this.name = name;
//     this.secondname = secondname;
//   }
//   printName() {
//     console.log(this.name, this.secondname);
//   }
// }

// class Worker extends User {
//   constructor(name, secondname, salary) {
//     super(name, secondname);
//     this.salary = salary;
//   }
//   salaryTax() {
//     console.log(this.salary * 0.8);
//   }
// }

// let martin = new User("Martin", "Jhonson");
// martin.printName();

// let newWorker = new Worker("Sam", "Smith", 3000);
// newWorker.salaryTax();
// newWorker.printName();

class Rabbit extends Object {
  constructor(name) {
    super();
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

console.log(rabbit.hasOwnProperty("name"));
