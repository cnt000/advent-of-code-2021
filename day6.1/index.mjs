import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url))
  .split(',')
  .map(Number)

const occurrences = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
input.forEach((val) => {
  occurrences[val] += 1
})

console.log('Initial state:', input.join(','))

const totalDays = 257

for (let i = 1; i < totalDays; i++) {
  for (let j = 0; j < occurrences.length; j++) {
    if (occurrences[j] > 0) {
      if (j === 0) {
        occurrences[7] = occurrences[j] + occurrences[7]
        occurrences[9] = occurrences[9] + occurrences[j]
      } else {
        occurrences[j - 1] = occurrences[j]
      }
      occurrences[j] = 0
    }
  }
}

console.log(
  'day6.1',
  'solution:',
  occurrences.reduce((acc, curr) => acc + curr)
)
