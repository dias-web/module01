"use strict";

const commonDivisor = (a, b) => {
  let divisor = 1;
  for (let i = 0; i <= a; i++) {
    if (a > b && i > b) {
      break;
    }
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
};

console.log(commonDivisor(24, 36));
