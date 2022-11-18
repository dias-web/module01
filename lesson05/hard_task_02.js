"use strict";

const a = +prompt("Введите первое число");
const b = +prompt("Введите второе число");

const getMinimum = (x, y) => {
  return "Минимальным числом является " + (x + y - Math.abs(x - y)) / 2;
};

console.log(getMinimum(a, b));
