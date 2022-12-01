import { readFile, getFile } from '../lib/file.mjs'

const microInput = readFile(getFile('micro-input.txt', import.meta.url)).trim()
const smallInput = readFile(getFile('small-input.txt', import.meta.url)).trim()
const testInput = readFile(getFile('test-input.txt', import.meta.url)).trim()
const input = readFile(getFile('input.txt', import.meta.url)).trim()

const doTheThing = (input) => {
  const results = []
  const uniqueValues = [
    ...new Set(input.replaceAll('\n', '-').split('-').filter(Boolean))
  ]

  const lines = input.split('\n')

  const getLinksFor = (value) =>
    lines
      .filter((line) => new RegExp(`\\b${value}\\b`).test(line))
      .map((line) =>
        line.replace(new RegExp(`\\b${value}\\b`, 'g'), '').replaceAll('-', '')
      )
      .filter((value) => value !== 'start')

  const nodes = uniqueValues.map((value) => ({
    value,
    links: getLinksFor(value)
  }))
  // console.log('🚀 ~ file: day12.js:17 ~ nodes', nodes)

  const getNode = (value) => nodes.find((node) => node.value === value)

  const visit = (node, path) => {
    const { value, links } = node
    if (/^[a-z]+$/.test(value) && path.includes(value)) {
      return path
    }
    const updatedPath = [...path, value]
    if (value === 'end') {
      results.push(updatedPath)
      // console.log('🚀 ~ file: index.mjs:44', results)
      return path
    }
    links.forEach((link) => visit(getNode(link), updatedPath))
  }

  const hasLowerCaseCouple = (path) => {
    const items = path.filter((item) => /[a-z]/g.test(item))
    const unique = new Set(items)
    return unique.size !== items.length
  }

  const visitSecondPart = (node, path) => {
    const { value, links } = node

    if (
      /^[a-z]+$/.test(value) &&
      hasLowerCaseCouple(path) &&
      path.includes(value)
    ) {
      return path
    }
    const updatedPath = [...path, value]
    if (value === 'end') {
      results.push(updatedPath)
      return path
    }
    links.forEach((link) => visitSecondPart(getNode(link), updatedPath))
  }

  visitSecondPart(getNode('start'), [])
  console.log(
    'Part 1:',
    // results,
    results.length
  )

  visitSecondPart(getNode('start'), [])
  console.log(
    'Part 2:',
    // results,
    results.length
  )
}

doTheThing(input)
