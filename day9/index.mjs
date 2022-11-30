import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url))
  .split('\n')
  .map((line) => line.split('').map(Number))

let result = 0
for (let x = 0; x < input.length; x++) {
  for (let y = 0; y < input[x].length; y++) {
    const cell = input[x][y]
    const top = input?.[x - 1]?.[y]
    const down = input?.[x + 1]?.[y]
    const right = input?.[x]?.[y + 1]
    const left = input?.[x]?.[y - 1]

    if (
      (typeof left === 'undefined' || cell < left) &&
      (typeof right === 'undefined' || cell < right) &&
      (typeof top === 'undefined' || cell < top) &&
      (typeof down === 'undefined' || cell < down)
    ) {
      result += cell + 1
    }
  }
}

console.log('day9', 'solution:', result)
