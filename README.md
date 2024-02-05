# markdown-it-code-group

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

Support [Code Group Style](https://github.com/orgs/community/discussions/16925) for [markdown-it](https://github.com/markdown-it/markdown-it).

## Usage

```bash
npm i markdown-it-code-group
```

```js
import MarkdownIt from 'markdown-it'
import MarkdownItCodeGroup from 'markdown-it-code-group'

const md = MarkdownIt()

md.use(MarkdownItCodeGroup, /* Options */)

const html = md.render(/* ... */)
```

For the options available, please refer to [the jsdoc](./src/index.ts).

### Styling

```js
import 'markdown-it-code-group/styles/code-group-colors-light.css'
import 'markdown-it-code-group/styles/code-group-colors-dark-media.css'
import 'markdown-it-code-group/styles/code-group-base.css'
```

You might change `code-group-colors-dark-media.css` to `code-group-colors-dark-class.css` if you are using class-based (`.dark`) dark mode.

Refer to the [source code](./styles) for more details.

## License

[MIT](./LICENSE) License © 2024-PRESENT [Hung](https://github.com/hunghg255)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/markdown-it-code-group?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/markdown-it-code-group
[npm-downloads-src]: https://img.shields.io/npm/dm/markdown-it-code-group?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/markdown-it-code-group
[bundle-src]: https://img.shields.io/bundlephobia/minzip/markdown-it-code-group?style=flat&colorA=080f12&colorB=1fa669&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=markdown-it-code-group
[license-src]: https://img.shields.io/github/license/antfu/markdown-it-code-group.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/antfu/markdown-it-code-group/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-080f12?style=flat&colorA=080f12&colorB=1fa669
[jsdocs-href]: https://www.jsdocs.io/package/markdown-it-code-group
