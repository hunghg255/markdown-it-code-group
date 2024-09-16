import { defineConfig } from 'convert-markdown-to-html'

export default defineConfig({
  input: 'docs/README.md',
  output: 'docs/index.html',
  isTwoSlash: false,

  title: 'Markdown Code Group',
  description: 'Markdown Code Group',

  logo: '',

  socialLinks: [
    {
      icon: 'twitter',
      url: 'https://twitter.com/hunghg255',
    },
    {
      icon: 'github',
      url: 'https://github.com/hunghg255/markdown-it-code-group',
    },
  ],
  footer: {
    message: 'Released under the MIT License',
    copyright: 'Copyright © 2024-present Hunghg255',
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/png', href: 'https://hung.thedev.id/images/patak-banner.jpg' },
    ],
    ['meta', { property: 'og:type', content: 'website' }],
  ],
})
