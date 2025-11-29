import comp from "/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/IT/git.html.vue"
const data = JSON.parse("{\"path\":\"/IT/git.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764246015000,\"contributors\":[{\"name\":\"许鹏\",\"username\":\"\",\"email\":\"cngrassroot@gmail.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"25a2cfb7d8162b6b23f3e988fb9a58c896c2ae6d\",\"time\":1764246015000,\"email\":\"cngrassroot@gmail.com\",\"author\":\"许鹏\",\"message\":\"Initial commit\"}]},\"filePathRelative\":\"IT/git.md\"}")
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
