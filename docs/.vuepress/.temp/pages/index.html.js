import comp from "/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"欢迎来到王小明的博客\",\"tagline\":\"记录学习与生活\",\"actions\":[{\"text\":\"开始阅读\",\"link\":\"/IT/\",\"type\":\"primary\"},{\"text\":\"GitHub\",\"link\":\"https://github.com\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简洁至上\",\"details\":\"以 Markdown 为中心的项目结构，专注于写作\"},{\"title\":\"VuePress 驱动\",\"details\":\"享受 Vue + webpack 的开发体验\"},{\"title\":\"高性能\",\"details\":\"VuePress 为每个页面预渲染生成静态的 HTML\"}]},\"git\":{\"updatedTime\":1764246015000,\"contributors\":[{\"name\":\"许鹏\",\"username\":\"\",\"email\":\"cngrassroot@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"25a2cfb7d8162b6b23f3e988fb9a58c896c2ae6d\",\"time\":1764246015000,\"email\":\"cngrassroot@gmail.com\",\"author\":\"许鹏\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"README.md\"}")
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
