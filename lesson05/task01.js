"use strict";

const converter = (euro) => {
  const rub = euro * 1.2 * 64;
  return rub;
};

console.log(converter(5));
