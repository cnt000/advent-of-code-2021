import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url))
  .split('\n')
  .map((line) => line.split('|').map((token) => token.trim()))

const result = input.reduce(
  (lineResult, line) =>
    (lineResult += line[1]
      .split(' ')
      .reduce(
        (tokenResult, token) =>
          (tokenResult += [2, 3, 4, 7].includes(token.length) ? 1 : 0),
        0
      )),
  0
)

console.log('day8', 'solution:', result)
