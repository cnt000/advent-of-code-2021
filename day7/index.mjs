import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url))
  .split(',')
  .map(Number)

let resultList = []

const getDifferences = (num) => {
  return input.reduce((acc, curr) => {
    return Math.abs(curr - num) + acc
  }, 0)
}

input.forEach((elm, pos) => {
  resultList[pos] = getDifferences(elm)
})

console.log('day7', 'solution:', Math.min(...resultList))
