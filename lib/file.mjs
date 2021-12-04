import fs from "fs";
import path from "path";

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

export function getFile(file, url) {
  const __dirname = path.dirname(new URL(url).pathname);
  const fileName = path.resolve(__dirname, file);
  return fileName;
}

export const readDir = (dirName) => {
  try {
    return fs.readdirSync(dirName);
  } catch (err) {
    console.error(err);
  }
};
