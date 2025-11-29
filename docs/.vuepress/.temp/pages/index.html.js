import comp from "/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"欢迎来到王小明的博客\",\"tagline\":\"记录学习、工作和生活\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/IT/\",\"type\":\"primary\"},{\"text\":\"快速上手 →\",\"link\":\"/IT/使用 VuePress 搭建 GitHub Pages 博客完整指南.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，专注于写作\"},{\"title\":\"VuePress 驱动\",\"details\":\"享受 Vue + webpack 的开发体验\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面预渲染生成静态的 HTML\"}]},\"git\":{\"updatedTime\":1764417541000,\"contributors\":[{\"name\":\"许鹏\",\"username\":\"\",\"email\":\"cngrassroot@gmail.com\",\"commits\":5}],\"changelog\":[{\"hash\":\"8b53ed9c3bfd57650c19038ed29e4e1171333001\",\"time\":1764417541000,\"email\":\"cngrassroot@gmail.com\",\"author\":\"许鹏\",\"message\":\"更新文章\"},{\"hash\":\"65769c8bda976214eed2db289ee8c560b8daf06e\",\"time\":1764296894000,\"email\":\"cngrassroot@gmail.com\",\"author\":\"许鹏\",\"message\":\"首页链接修改\"},{\"hash\":\"647e88d2a24719826998c2ce26b9a940dab4b043\",\"time\":1764296376000,\"email\":\"cngrassroot@gmail.com\",\"author\":\"许鹏\",\"message\":\"修改王小明为许鹏\"},{\"hash\":\"4fd3c9785e0ba1d3f0c9394f3ddde5399ab7841e\",\"time\":1764289798000,\"email\":\"cngrassroot@gmail.com\",\"author\":\"许鹏\",\"message\":\"更新博客内容\"},{\"hash\":\"25a2cfb7d8162b6b23f3e988fb9a58c896c2ae6d\",\"time\":1764246015000,\"email\":\"cngrassroot@gmail.com\",\"author\":\"许鹏\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
