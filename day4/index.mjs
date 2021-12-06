import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("input.txt", import.meta.url)).split("\n\n");

const extractions = input[0].split(",");
const tables = input.slice(1).map((table) =>
  table.split("\n").map((row) =>
    row
      .split(" ")
      .filter(Boolean)
      .map((val) => +val)
  )
);
const checkingTable = JSON.parse(JSON.stringify(tables)).map((matrix) =>
  matrix.map((row) => row.map((_) => 0))
);

function resolve() {
  let result;
  for (let x = 0; x < extractions.length; x++) {
    const number = +extractions[x];
    for (let i = 0; i < tables.length; i++) {
      const firstTableLength = tables[i].length
      for (let j = 0; j < firstTableLength; j++) {
        for (let z = 0; z < firstTableLength; z++) {
          if (number === tables[i][j][z]) {
            checkingTable[i][j][z] = 1;
            tables[i][j][z] = 0;
            if (
              sum(checkingTable[i], j) === firstTableLength ||
              sum(transpose(checkingTable[i]), z) === firstTableLength
            ) {
              result = sumAll(tables[i]) * number;
              return result;
            }
          }
        }
      }
    }
  }
}

console.log("day4", "solution:", resolve());

function transpose(a) {
  return Object.keys(a[0]).map(function (c) {
    return a.map(function (r) {
      return r[c];
    });
  });
}

function sum(matrix, index) {
  return matrix[index].reduce((acc, curr) => {
    return acc + curr;
  }, 0);
}

function sumAll(matrix) {
  return matrix
    .flat()
    .filter(Boolean)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}
