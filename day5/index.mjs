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
  const [x1, y1] = path[0];
  const [x2, y2] = path[1];
  if (x1 === x2) {
    const times = Math.abs(y1 - y2) + 1;
    let min = Math.min(y1, y2);
    for (let i = 0; i < times; i++) {
      const x = min++;
      table[x][x1] = table[x][x1] + 1;
    }
  }
  if (y1 === y2) {
    const times = Math.abs(x1 - x2) + 1;
    let min = Math.min(x1, x2);
    for (let i = 0; i < times; i++) {
      const x = min++;
      table[y1][x] = table[y1][x] + 1;
    }
  }
});

console.log("day5", "solution:", table.flat(3).filter(val => val > 1).length);
