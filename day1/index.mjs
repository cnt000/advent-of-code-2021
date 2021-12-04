import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("input.txt", import.meta.url)).split("\n");

let counter = 0;
input.forEach((_, i) => {
  const shouldIncrement = i !== 0 && +input[i] > +input[i - 1];
  counter = shouldIncrement ? counter + 1 : counter;
});

console.log("day1", "solution:", counter);
