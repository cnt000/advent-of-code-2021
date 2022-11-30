import { readFile, getFile } from '../lib/file.mjs'

const microInput = readFile(getFile('micro-input.txt', import.meta.url)).trim()
const smallInput = readFile(getFile('small-input.txt', import.meta.url)).trim()
const testInput = readFile(getFile('test-input.txt', import.meta.url)).trim()
const input = readFile(getFile('input.txt', import.meta.url)).trim()

const doTheThing = (input) => {
  const uniqueValues = [
    ...new Set(input.replaceAll('\n', '-').split('-').filter(Boolean))
  ]
  console.log('🚀 ~ file: Untitled-2:15 ~ uniqueValues', uniqueValues)

  const lines = input.split('\n')
  console.log('🚀 ~ file: day12.js:15 ~ lines', lines)

  const getLinksFor = (value) =>
    lines
      .filter((line) => new RegExp(`\\b${value}\\b`).test(line))
      .map((line) =>
        line.replace(new RegExp(`\\b${value}\\b`, 'g'), '').replaceAll('-', '')
      )
      .filter((value) => value !== 'start')
  console.log("🚀 ~ file: day12.js:22 ~ getLinksFor('start')", getLinksFor('d'))

  const nodes = uniqueValues.map((value) => ({
    value,
    links: getLinksFor(value)
  }))
  console.log('🚀 ~ file: day12.js:17 ~ nodes', nodes)
}

doTheThing(input)
