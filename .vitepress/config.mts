import { defineConfig } from 'vitepress'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserOrOrgPage = repositoryName?.endsWith('.github.io')
const base =
  process.env.VITEPRESS_BASE ??
  (process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrgPage
    ? `/${repositoryName}/`
    : '/')

export default defineConfig({
  title: 'Data Structure Notes',
  description: 'Personal notes for data structures',
  base,
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Notes', link: '/chapters/linear-list' },
      { text: 'Writing Format', link: '/writing-format' }
    ],

    sidebar: [
      {
        text: 'Data Structure Notes',
        items: [
          { text: 'Linear Lists', link: '/chapters/linear-list' },
          { text: 'Stacks and Queues', link: '/chapters/stacks-and-queues' },
          {
            text: 'Strings, Multidimensional Arrays, and Generalized Lists',
            link: '/chapters/strings-arrays-generalized-lists'
          },
          { text: 'Trees and Binary Trees', link: '/chapters/trees-and-binary-trees' },
          { text: 'Graphs', link: '/chapters/graphs' },
          { text: 'Sorting', link: '/chapters/sorting' },
          { text: 'Searching', link: '/chapters/searching' }
        ]
      },
      {
        text: 'Guide',
        items: [
          { text: 'Writing Format', link: '/writing-format' }
        ]
      }
    ],

    outline: {
      label: 'On this page',
      level: [2, 3]
    },

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Personal learning notes.',
      copyright: 'Copyright 2026'
    }
  }
})
