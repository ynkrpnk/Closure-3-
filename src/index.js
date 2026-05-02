"use strict";

function createFilter(callback) {
  return function (array) {
    if (!Array.isArray(array)) return [];

    const result = [];

    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        result.push(array[i]);
      }
    }

    return result;
  };
}

const arrNumb = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const getEvenNumbers = createFilter((el) => el % 2 === 0);
console.log(getEvenNumbers(arrNumb));

 
let num;


const getGreateTenNumbers = createFilter((el) => el > 10);
console.log(getGreateTenNumbers(arrNumb));
