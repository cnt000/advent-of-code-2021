import { readFile } from "../lib/file.mjs";

const input = readFile("./input.txt").split("\n");

let increments = 0;
input.forEach((line, i) => {
  if (i !== 0 && parseInt(input[i]) > parseInt(input[i - 1])) {
    increments++;
  }
});

console.log("day1", "solution:", increments);
