import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("input.txt", import.meta.url)).split("\n");

const closings = [")", "]", "}", ">"];

const points = {
  "(": 1,
  "[": 2,
  "{": 3,
  "<": 4,
};

const removePair = (string) => {
  if (
    !/\(\)/.test(string) &&
    !/\[\]/.test(string) &&
    !/\{\}/.test(string) &&
    !/\<\>/.test(string)
  ) {
    return string;
  }
  return removePair(
    string
      .replace("()", "")
      .replace("[]", "")
      .replace("{}", "")
      .replace("<>", "")
  );
};

const findFirstClosing = (string) => {
  let first = -1;
  string.split("").forEach((char, i) => {
    if (closings.includes(char) && first === -1) {
      first = i;
    }
  });
  return first;
};

const pointsPerLine = input
  .map((line) => {
    const cleaned = removePair(line);
    return (findFirstClosing(cleaned) !== -1) ? undefined : cleaned
      .split("")
      .reverse()
      .reduce((acc, curr) => acc * 5 + points[curr], 0);
  })
  .filter(Boolean)
  .sort((a, b) => a - b);

const result = pointsPerLine[Math.floor(pointsPerLine.length / 2)];

console.log("day10.1", "solution:", result);
