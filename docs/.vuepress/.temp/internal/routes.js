export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/IT/", { loader: () => import(/* webpackChunkName: "IT_index.html" */"/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/IT/index.html.js"), meta: {"title":"文章列表"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/IT/%E4%BD%BF%E7%94%A8%20VuePress%20%E6%90%AD%E5%BB%BA%20GitHub%20Pages%20%E5%8D%9A%E5%AE%A2%E5%AE%8C%E6%95%B4%E6%8C%87%E5%8D%97.html", { loader: () => import(/* webpackChunkName: "IT_使用 VuePress 搭建 GitHub Pages 博客完整指南.html" */"/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/IT/使用 VuePress 搭建 GitHub Pages 博客完整指南.html.js"), meta: {"title":""} }],
  ["/IT/git%E7%9A%84%E5%B8%B8%E8%A7%81%E7%94%A8%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "IT_git的常见用法.html" */"/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/docs/.vuepress/.temp/pages/IT/git的常见用法.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
