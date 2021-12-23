import { readFile, getFile } from "../lib/file.mjs";

const input = readFile(getFile("input.txt", import.meta.url))
  .split("\n")
  .map((line) =>
    line.split("|").map((token) =>
      token
        .trim()
        .split(" ")
        .map((token) => [...token].sort().join(""))
    )
  );

const getWordsFromLength = (list, n) => list.filter((el) => el.length === n);

const minus = (left, right) => {
  const regex = new RegExp(`[${right}]`, "g");
  return left.replace(regex, "");
};

const result = input.map((line) => {
  const one = getWordsFromLength(line[0], 2);
  const four = getWordsFromLength(line[0], 4);
  const seven = getWordsFromLength(line[0], 3);
  const eight = getWordsFromLength(line[0], 7);

  const zeroOrSixOrNine = getWordsFromLength(line[0], 6);

  const six = zeroOrSixOrNine.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 2)).length === 5;
  })[0];

  const zeroOrNine = zeroOrSixOrNine.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 2)).length !== 5;
  });

  const nine = zeroOrNine.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 4)).length === 2;
  })[0];

  const zero = zeroOrNine.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 4)).length !== 2;
  })[0];

  const twoOrThreeOrFive = getWordsFromLength(line[0], 5);

  const three = twoOrThreeOrFive.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 3)).length === 2;
  })[0];

  const twoOrFive = twoOrThreeOrFive.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 3)).length !== 2;
  });

  const five = twoOrFive.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 4)).length === 2;
  })[0];

  const two = twoOrFive.filter((token) => {
    return minus(token, getWordsFromLength(line[0], 4)).length !== 2;
  })[0];

  const dict = {
    [zero]: 0,
    [one]: 1,
    [two]: 2,
    [three]: 3,
    [four]: 4,
    [five]: 5,
    [six]: 6,
    [seven]: 7,
    [eight]: 8,
    [nine]: 9,
  };
  return line[1].map((token) => {
    return dict[token];
  });
});

const sum = result
  .map((line) => line.join(""))
  .reduce((acc, curr) => acc + +curr, 0);

  console.log("day8.1", "solution:", sum);
