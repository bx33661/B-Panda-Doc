import { defineConfig } from 'vitepress'
import { autoGenerateSidebar } from 'press-util'
import vite from './vite.config'

export default defineConfig({
  base: '/',
  appearance: true,
  title: 'B-Panda|自动化工具集',
  lastUpdated: true,
  // 标签页logo
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }], // chrome pwa
  ],
  markdown: {
    lineNumbers: true,
    image: {
      lazyLoading: true,
    }
  },

  themeConfig: {
    logo: '/logo.png',
    ignoreDeadLinks: true,
    lastUpdatedText: '最近更新于',
    // 2/3/4级标题均形成目录
    outline: [2, 4],
    outlineTitle: '目录',
    nav: [{
      text: '🎯介绍',
      link: '/overview.md'
    },
    {
      text: '📒文档',
      link: '/docc/'
    },
    {
      text:'👀网站监控系统',
      link:'/monitor/'
    },
    {
      text: '😄关于我',
      link: '/about.md'
    },
  ],

    sidebar: autoGenerateSidebar() as any,

    // 编辑
    editLink: {
      pattern: 'https://github.com/bx33661/B-Panda',
      text: '在Github编辑',
    },

    // 搜索
    search: {
      provider: 'local',
    },
  },
  vite,
})
