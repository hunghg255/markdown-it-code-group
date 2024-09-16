<p align="center">
<a href="https://www.npmjs.com/package/markdown-it-code-group" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/teenyicons:markdown-outline.svg?color=%2300bfff" alt="logo" width='100'/></a>
</p>

<p align="center">
  A markdown-it plugin to support convert markdown to html with code group style.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/markdown-it-code-group" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/markdown-it-code-group" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=markdown-it-code-group" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/markdown-it-code-group" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/markdown-it-code-group/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/markdown-it-code-group/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/markdown-it-code-group" alt="License" /></a>
</p>

## Usage

:::code-group-open
```bash [npm]
 npm install markdown-it-code-group --save-dev
```
```bash [yarn]
 yarn add markdown-it-code-group --dev
```
```bash [pnpm]
 pnpm i -D markdown-it-code-group
```
```bash [bun]
 bun install markdown-it-code-group --save-dev
```
:::code-group-close

```js
import MarkdownIt from 'markdown-it'
import MarkdownItCodeGroup from 'markdown-it-code-group'

const md = MarkdownIt()

md.use(MarkdownItCodeGroup, /* Options */)

const html = md.render(/* ... */)
```

### DOM Actions

```ts
import { markdownItCodeGroupDom } from 'markdown-it-code-group/dom'

markdownItCodeGroupDom()
```

You might change `code-group-colors-dark-media.css` to `code-group-colors-dark-class.css` if you are using class-based (`.dark`) dark mode.

Refer to the [source code](https://github.com/hunghg255/markdown-it-code-group/tree/main/styles) for more details.

## License

[MIT](https://github.com/hunghg255/markdown-it-code-group/blob/main/LICENSE) License © 2024-PRESENT [Hung](https://github.com/hunghg255)
