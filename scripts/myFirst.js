"use strict";

function Calculator() {
  this.calculate = function (str) {
    let mas = str.split(" ");
    for (let i = 0; i < mas.length; i++) {
      let res;
      if (mas[i] == "+") {
        return (res = +mas[0] + +mas[mas.length - 1]);
      } else if (mas[i] == "-") {
        return (res = +mas[0] - +mas[mas.length - 1]);
      }
    }
    return res;
  };
}

let calc = new Calculator();

let str = "1 + 5";
