import { readFile } from "../lib/file.mjs";

const input = readFile("./input.txt").split("\n");

let horizontal = 0;
let depth = 0;
let aim = 0;

const actions = {
  forward: (n) => {
    horizontal += n;
    depth += aim * n;
  },
  down: (n) => {
    aim += n;
  },
  up: (n) => {
    aim -= n;
  },
};

input.forEach((line) => {
  const [action, value] = line.split(" ");
  actions[action](+value);
});

console.log("day2.2", "solution:", depth * horizontal);
