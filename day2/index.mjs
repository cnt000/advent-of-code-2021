import { readFile } from "../lib/file.mjs";

const input = readFile("./input.txt").split("\n");

let horizontal = 0;
let depth = 0;

const actions = {
  forward: (n) => (horizontal += n),
  down: (n) => (depth += n),
  up: (n) => (depth -= n),
};

input.forEach((line) => {
  const [action, value] = line.split(" ");
  actions[action](+value);
});

console.log("day2", "solution:", depth * horizontal);
