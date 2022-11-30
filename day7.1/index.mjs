import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url))
  .split(',')
  .map(Number)

const getFuel = (n, result) => (n === 0 ? result : getFuel(n - 1, result + n))

const getDifferences = (num) =>
  input.reduce((acc, curr) => getFuel(Math.abs(curr - num), 0) + acc, 0)

const resultList = input.map((_, pos) => getDifferences(pos))

console.log('day7.1', 'solution:', Math.min(...resultList))
