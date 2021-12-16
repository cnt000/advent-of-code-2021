import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("test-input.txt", import.meta.url))
  .split(",")
  .map(Number);

const occurrences = [[], [], [], [], [], [], [], [], [], []];
input.forEach((val, i) => {
  occurrences[val].push(i);
});

console.log("Initial state:", input.join(","));

const totalDays = 257;

for (let i = 1; i < totalDays; i++) {
  for (let j = 0; j < occurrences.length; j++) {
    if (occurrences[j].length > 0) {
      if (j !== 0) {
        occurrences[j - 1] = occurrences[j];
      } else if (occurrences[j].length > 0) {
        occurrences[7] = occurrences[j].concat(occurrences[7]);
        occurrences[9] = occurrences[j].map(
          (el, i) => Math.max(...occurrences.flat(2)) + i + 1
        );
      }
      occurrences[j] = [];
    }
  }

  const printResult = (list) => {
    // const result = [];
    // const cleanList = list.filter(Boolean);
    // cleanList.forEach((elm, i) => {
    //   elm.forEach((pos) => {
    //     result[pos] = i;
    //   });
    // });
    // return result.join(",");
  };
  console.log(
    `After ${i} day${i > 1 ? "s" : " "}: `, printResult(occurrences)
  );
}

console.log("day6.1", "solution:", occurrences.flat(2).length);
