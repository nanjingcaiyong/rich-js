import { defineConfig } from 'vitepress'
const config = defineConfig({
  base: '/cupshe-js/',
  lang: 'zh-CN',
  title: 'cupshe-js 中文文档',
  description: 'The official router for Vue.js.',
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: 'Dom',
        collapsible: true,
        items: [
          { 
            text: 'addEventListener', 
            link: '/Dom/addEventListener.md' 
          },
          { 
            text: 'disabledScroll', 
            link: '/Dom/disabledScroll.md' 
          },
          { 
            text: 'getClientRect', 
            link: '/Dom/getClientRect.md' 
          },
          { 
            text: 'isElementInViewport', 
            link: '/Dom/isElementInViewport.md' 
          }
        ]
      },
      {
        text: 'Math',
        collapsible: true,
        items: [
          { 
            text: 'plus', 
            link: '/Math/plus.md' 
          },
          { 
            text: 'minus', 
            link: '/Math/minus.md' 
          },
          { 
            text: 'times', 
            link: '/Math/times.md' 
          },
          { 
            text: 'div', 
            link: '/Math/div.md' 
          }
        ]
      },
      {
        text: 'Terminal',
        collapsible: true,
        items: [
          { 
            text: 'isMobile', 
            link: '/Terminal/isMobile.md' 
          },
          { 
            text: 'getTerminal', 
            link: '/Terminal/getTerminal.md' 
          },
        ]
      },
      {
        text: 'Other',
        collapsible: true,
        items: [
          { 
            text: 'queryString', 
            link: '/Other/queryString.md' 
          },
          { 
            text: 'regex', 
            link: '/Other/regex.md' 
          },
          {
            text: 'Storage',
            link: '/Other/storage.md' 
          }
        ]
      }
    ],
    nav:  [
      { 
        text: '介绍', 
        link: '/guide.md',
      },
      {
        text: '版本',
        link: '/CHANGELOG.md'
      }
    ],
    editLink: {
      pattern: 'https://github.com/nanjingcaiyong/cupshe-js/edit/main/docs/:path',
      text: '编辑页面'
    },
    algolia: {
      apiKey: '6b309d5f974ba74bf99a3613aa539ff7',
      appId: '3Z4NVAYK05',
      indexName: 'cupshe-js',
      algoliaOptions: {
        hitsPerPage: 10,
      },
    },
    // github
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nanjingcaiyong/cupshe-js' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})

export default config