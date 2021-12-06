import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("input.txt", import.meta.url)).split("\n\n");
const extractions = input[0].split(",").map((v) => +v);
const tables = input.slice(1).map((table) =>
  table.split("\n").map((row) =>
    row
      .split(" ")
      .filter(Boolean)
      .map((val) => +val)
  )
);
const tablesInGame = Array(tables.length).fill(1);

console.log("day4.1", "solution:", resolve());

function resolve() {
  for (let numberIndex = 0; numberIndex < extractions.length; numberIndex++) {
    const number = extractions[numberIndex];
    for (let i = 0; i < tables.length; i++) {
      const firstTableLength = tables[i].length;
      for (let j = 0; j < firstTableLength; j++) {
        for (let z = 0; z < firstTableLength; z++) {
          if (tables[i][j][z] === number && tablesInGame[i]) {
            tables[i][j][z] = 0;
            const row = getRow(i, j);
            const column = getColumn(i, z);
            const sumRow = row.reduce((curr, acc) => acc + curr, 0);
            const sumColumn = column.reduce((curr, acc) => acc + curr, 0);
            if (sumRow === 0 || sumColumn === 0) {
              tablesInGame[i] = 0;
              const sumTablesInGame = tablesInGame.reduce((acc, curr) => {
                return acc + curr;
              }, 0);
              if (sumTablesInGame === 0) {
                const result = sumAll(tables[i]) * number;
                return result;
              }
            }
          }
        }
      }
    }
  }
}

function getRow(table, x) {
  return tables[table][x];
}

function getColumn(table, y) {
  let result = [];
  for (let i = 0; i < tables[table].length; i++) {
    result.push(tables[table][i][y]);
  }
  return result;
}

function sumAll(matrix) {
  return matrix
    .flat()
    .filter(Boolean)
    .reduce((acc, curr) => {
      return acc + curr;
    }, 0);
}
