"use strict";

//LeetCode Task
let num = [3, 2, 2, 3];
let v = 3;

let removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      nums.splice(i, 1);
    }
  }
  return nums;
};

console.log(removeElement(num, v));
//Async/Await
//===================
// class Cat {
//   constructor(name, surname) {
//     this.name = name;
//     this.surname = surname;
//   }

//   async myAsyncMethod(nu) {
//     let news = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(nu * nu);
//       }, 2000);
//     });
//     let res = await news;
//     console.log(res);
//   }
// }

// let asd = new Cat();
// asd.myAsyncMethod(5);
// console.log("asd");

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

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit("Кроль");

// console.log(rabbit.hasOwnProperty("name"));
//=========================
//Promise methods
//=========================
// let urls = [
//   "https://api.github.com/users/iliakan",
//   "https://api.github.com/users/remy",
// ];

// Promise.allSettled(urls.map((url) => fetch(url))).then((res) =>
//   res.forEach((result, num) => {
//     if (result.status == "fulfilled") {
//       alert(`${urls[num]}:${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       alert(`${urls[num]}: ${result.reason}`);
//     }
//   })
// );

// let a = fetch("https://api.github.com/users/iliakan").then((inf) => {
//   console.log(inf);
// });
