import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url)).split('\n')

const closings = [')', ']', '}', '>']

const points = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137
}

const resultsPerType = {
  ')': [],
  ']': [],
  '}': [],
  '>': []
}

const removePair = (string) => {
  if (
    !/\(\)/.test(string) &&
    !/\[\]/.test(string) &&
    !/\{\}/.test(string) &&
    !/\<\>/.test(string)
  ) {
    return string
  }
  return removePair(
    string
      .replace('()', '')
      .replace('[]', '')
      .replace('{}', '')
      .replace('<>', '')
  )
}

const findFirstClosing = (string) => {
  let first = -1
  string.split('').forEach((char, i) => {
    if (closings.includes(char) && first === -1) {
      first = i
    }
  })
  return first
}

input.forEach((line) => {
  const cleaned = removePair(line)
  const firstClosing = findFirstClosing(cleaned)
  const errorPoints = points[cleaned[firstClosing]]
  const list = resultsPerType?.[cleaned?.[firstClosing]]
  if (list) {
    resultsPerType[cleaned[firstClosing]].push(errorPoints)
  }
})

const result = Object.values(resultsPerType).reduce((acc, curr) => {
  return acc + curr[0] * curr.length
}, 0)

console.log('day10', 'solution:', result)
