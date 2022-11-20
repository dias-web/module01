"use strict";

const isPrime = (n) => {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
    }
  }

  if (count === 2) {
    return console.log(true);
  } else {
    return console.log(false);
  }
};

isPrime(1987);
