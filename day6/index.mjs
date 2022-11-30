import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url))
  .split(',')
  .map(Number)

const totalDays = 80

const state = [...input]

for (let i = 0; i < totalDays; i++) {
  // console.log(`Day${i}`, state.join(','));
  state.forEach((_, i) => {
    if (state[i] === 0) {
      state[i] = 6
      state.push(8)
    } else {
      state[i] = state[i] - 1
    }
  })
}

console.log('day6', 'solution:', state.length)
