import fs from "fs";

export const readFile = (fileName) => {
  try {
    return fs.readFileSync(fileName, {
      encoding: "utf8",
      flag: "r",
    });
  } catch (err) {
    console.error(err);
  }
};

export const readDir = (dirName) => {
  try {
    return fs.readdirSync(dirName);
  } catch (err) {
    console.error(err);
  }
};
