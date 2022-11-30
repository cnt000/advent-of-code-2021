import { readFile, getFile } from '../lib/file.mjs'

const input0 = readFile(getFile('input.txt', import.meta.url)).split('\n')
const input1 = [null, ...input0]
const input2 = [null, ...input1]

const results = []
for (let i = 2; i < input0.length; i++) {
  results.push(+input0[i] + +input1[i] + +input2[i])
}

let counter = 0
results.forEach((_, i) => {
  const shouldIncrement = i !== 0 && +results[i] > +results[i - 1]
  counter = shouldIncrement ? counter + 1 : counter
})

console.log('day1.1', 'solution:', counter)
