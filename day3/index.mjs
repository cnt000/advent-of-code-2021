import { readFile } from "../lib/file.mjs";

const input = readFile("./input.txt").split("\n");

let counters = Array(input[0].length).fill(0);

input.forEach((line) => {
  const digits = line.split("");
  counters = counters.map((counter, i) => counter + +digits[i]);
});

const gamma = counters.map((counter) => +(counter * 2 > input.length));
const epsilon = gamma.map((counter) => +!counter);

console.log(
  "day3",
  "solution:",
  parseInt(gamma.join(""), 2) * parseInt(epsilon.join(""), 2)
);
