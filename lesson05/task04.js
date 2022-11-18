"use strict";

const calculate = (sum, amount, promo) => {
  let discountOfAmount = 0;
  if (amount > 10) {
    discountOfAmount = sum * 0.03;
  }

  let discountOfSum = 0;
  if (sum > 30000) {
    discountOfSum = (sum - 30000) * 0.15;
  }

  let discountWithoutPromo = discountOfAmount + discountOfSum;

  let discountOfPromo = 0;
  if (promo === "METHED") {
    discountOfPromo = sum * 0.1;
  } else if (promo === "G3H2Z1" && sum - discountWithoutPromo > 2000) {
    discountOfPromo = 500;
  }

  let discount = discountWithoutPromo + discountOfPromo;
  return sum - discount;
};

console.log(calculate(100000, 15, "G3H2Z1"));
