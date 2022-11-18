"use strict";

const convertString = (str) => {
  const res = str.toLowerCase();
  return res.charAt(0).toUpperCase() + res.slice(1);
};

console.log(convertString("hello WoRLd"));
