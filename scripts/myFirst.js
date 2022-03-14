"use strict";

let cat = {
  head: [],
  wear(hat) {
    this.head = hat;
  },
};

let white = {
  __proto__: cat,
};

let black = {
  __proto__: cat,
};


white.wear('Shapka');
console.log(white.head);


console.log(black.head);