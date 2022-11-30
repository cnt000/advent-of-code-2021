const input = `
start-A
start-b
A-c
A-b
b-d
A-end
b-end
`.trim()

const input2 = `
dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc
`.trim()

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
