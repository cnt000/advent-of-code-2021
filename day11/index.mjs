import { readFile, getFile } from '../lib/file.mjs'

const input = readFile(getFile('input.txt', import.meta.url))
  .split('\n')
  .map((line) => line.split('').map(Number))

let flashes = []
let flashesCount = 0
let result = 0

const shouldFlash = ([x, y]) => {
  return (
    input[x][y] > 9 &&
    !flashes.some((flash) => flash[0] === x && flash[1] === y)
  )
}

const flashIfPossible = ([x, y]) => {
  if (input?.[x]?.[y] && shouldFlash([x, y])) {
    flashes.push([x, y])
    flashesCount++
    incrementAdiacent([x, y], input)
    input[x][y] = 0
  }
}

const increment = ([x, y]) => {
  if (input?.[x]?.[y]) {
    input[x][y] = input[x][y] + 1
  }
}

const incrementAdiacent = ([x, y]) => {
  increment([x + 1, y - 1])
  increment([x - 1, y + 1])
  increment([x + 1, y + 1])
  increment([x - 1, y - 1])
  increment([x + 1, y])
  increment([x - 1, y])
  increment([x, y - 1])
  increment([x, y + 1])

  flashIfPossible([x + 1, y - 1])
  flashIfPossible([x - 1, y + 1])
  flashIfPossible([x + 1, y + 1])
  flashIfPossible([x - 1, y - 1])
  flashIfPossible([x + 1, y])
  flashIfPossible([x - 1, y])
  flashIfPossible([x, y + 1])
  flashIfPossible([x, y - 1])
}

const octopuses = () => {
  let step = 0
  while (true) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        input[i][j] = input[i][j] + 1
      }
    }
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        flashIfPossible([i, j])
      }
    }
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] > 9) {
          input[i][j] = 0
        }
      }
    }
    printMatrix(input, step + 1)
    if (flashes.length === input.flat(2).length) {
      return step + 1
    }
    if (step === 99) {
      result = flashesCount
    }
    flashes = []
    step++
  }
}

function printMatrix(input, day) {
  console.log(`After step ${day}:`)
  console.log(input.map((line) => line.join('') + '\n').join(''))
}

const result2 = octopuses()
console.log('day11', 'solution:', result)
console.log('day11.1', 'solution:', result2)
