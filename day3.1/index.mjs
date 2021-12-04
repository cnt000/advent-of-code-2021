import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("input.txt", import.meta.url)).split("\n");

function filter(input, count, bit) {
  if (input.length === 1) {
    return input;
  }
  const ones = input.filter((line) => {
    return +line[count] === 1;
  });
  const zeros = input.filter((line) => {
    return +line[count] === 0;
  });
  return ones.length >= zeros.length
    ? filter(bit ? ones : zeros, ++count, bit)
    : filter(bit ? zeros : ones, ++count, bit);
}

console.log(
  "day3.1",
  "solution:",
  parseInt(filter(input, 0, 1).pop(), 2) *
    parseInt(filter(input, 0, 0).pop(), 2)
);
