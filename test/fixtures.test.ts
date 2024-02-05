/// <reference types="vite/client" />

import process from 'node:process'
import { describe, expect, it } from 'vitest'
import MarkdownIt from 'markdown-it'
import cssBase from '../styles/code-group-base.css?raw'
import cssColorsLight from '../styles/code-group-colors-light.css?raw'
import cssColorsDark from '../styles/code-group-colors-dark-media.css?raw'
import MarkdownItCodeGroup from '../src'

const CSS = `
html {
  font-family: sans-serif;
}

* {
  box-sizing: border-box;
}

${cssColorsLight}
${cssColorsDark}
${cssBase}
`

describe('fixtures', () => {
  const files = import.meta.glob('./input/*.md', { as: 'raw', eager: true })
  const filter = process.env.FILTER
  Object.entries(files)
    .forEach(([path, content]) => {
      const run = !filter || path.includes(filter)
        ? it
        : it.skip

      run(`render ${path}`, async () => {
        const md = new MarkdownIt({
          html: true,
          linkify: true,
          xhtmlOut: true,
        })

        md.use(MarkdownItCodeGroup, {
          markers: '*',
        })

        const rendered = [
          md.render(content),
        ].join('\n').trim().replace(/\r\n/g, '\n')

        expect(`
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>${CSS}</style>
<body>

${rendered}
</body>
</html>
        `)
          .toMatchFileSnapshot(path.replace('input', 'output').replace('.md', '.html'))
      })
    })
})
