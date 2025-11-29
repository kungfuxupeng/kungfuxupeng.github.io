import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '王小明的博客',
  description: '使用 VuePress 搭建的个人博客',
  base: '/',
  
  bundler: viteBundler(),
  
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: 'IT', link: '/IT/' },
      { text: '生活杂谈', link: '/others/' },
      { text: 'GitHub', link: 'https://github.com/kungfuxupeng' }
    ],
    sidebar: 'auto'
  })
})
