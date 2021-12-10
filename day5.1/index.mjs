import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("input.txt", import.meta.url))
  .split("\n")
  .map((line) =>
    line.split(" -> ").map((values) => values.split(",").map((val) => +val))
  );

const length = Math.max(...input.flat(3)) + 1;

const table = Array(length)
  .fill(0)
  .map((_) => Array(length).fill(0));

input.forEach((path) => {
  let [x1, y1] = path[0];
  let [x2, y2] = path[1];
  if (Math.abs(x1 - x2) === Math.abs(y1 - y2)) {
    let x = x1;
    let y = y1;
    for (let i = 0; i <= Math.abs(x1 - x2); i++) {
      table[y][x] += 1;
      x = x1 < x2 ? x + 1 : x - 1;
      y = y1 < y2 ? y + 1 : y - 1;
    }
  }
  if (x1 === x2) {
    let x = Math.min(y1, y2);
    for (let i = 0; i <= Math.abs(y1 - y2); i++) {
      table[x][x1] = table[x][x1] + 1;
      x++;
    }
  }
  if (y1 === y2) {
    let x = Math.min(x1, x2);
    for (let i = 0; i <= Math.abs(x1 - x2); i++) {
      table[y1][x] = table[y1][x] + 1;
      x++;
    }
  }
});

const tablePrinted = table
  .map((row) => row.join("").replace(/0/g, ".")
  ).join('\n');
console.log(tablePrinted);

console.log(
  "day5.1",
  "solution:",
  table.flat(3).filter((val) => val > 1).length
);
