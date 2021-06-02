"use strict";

const palindrome = function (str) {
  const bosluksuz = str.split(" ").join("");
  console.log(bosluksuz);
  const arr = str.split(" ").join("").split("").reverse().join("");
  console.log(arr);
  return console.log(arr == bosluksuz ? true : false);
};

palindrome("eye");
palindrome("never odd or even");
