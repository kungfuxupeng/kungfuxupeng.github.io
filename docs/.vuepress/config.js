import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '我的博客',
  description: '使用 VuePress 搭建的个人博客',
  base: '/',
  
  bundler: viteBundler(),
  
  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/IT/' },
      { text: 'GitHub', link: 'https://github.com/kungfuxupeng' }
    ],
    sidebar: 'auto'
  })
})
