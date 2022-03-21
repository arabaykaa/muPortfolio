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

class User {
  constructor(name, secondname) {
    this.name = name;
    this.secondname = secondname;
  }
  printName() {
    console.log(this.name, this.secondname);
  }
}

class Worker extends User{
  constructor(name, secondname, salary){
    super(name, secondname);
    this.salary = salary;
  }
  salaryTax(){
    console.log(this.salary * 0.8);
  }
}

let martin = new User("Martin", "Jhonson");
martin.printName();

let newWorker = new Worker("Sam", "Smith", 3000);
newWorker.salaryTax();
newWorker.printName();