"use strict";

{
  const income = +prompt("Введите сумму дохода.");
  let tax = 0;

  if (income < 15000) {
    tax = income * 0.13;
  } else if (income >= 15000 && income < 50000) {
    tax = (income - 15000) * 0.2;
  } else {
    tax = (income - 50000) * 0.3;
  }

  console.log(tax);
}
