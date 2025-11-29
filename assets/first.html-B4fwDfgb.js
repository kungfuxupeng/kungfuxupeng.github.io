import{_ as o,c as s,e as r,o as p}from"./app-DtvqkEnL.js";const n={};function t(a,e){return p(),s("div",null,[...e[0]||(e[0]=[r(`<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h1><pre><code>本博客VuePress主版本为0.x，相关配置最新的1.x也兼容，请放心使用。另请确认你的Node.js &gt;= 8 
</code></pre><p>全局安装(推荐)</p><p>通常而言，全局安装 VuePress 会非常省心，可以通过如下命令进行全局安装</p><pre><code>$ npm install -g vuepress
复制代码
</code></pre><p>本地安装</p><p>区别于全局安装，本地安装会把npm包安装在本项目上，生成一个叫node_modules目录，可以通过如下命令进行本地安装（需同时安装vuepress和webpack-dev-middleware）</p><pre><code>$ npm install vuepress webpack-dev-middleware --save-dev
复制代码
</code></pre><p>基本配置</p><pre><code>基本配置下的内容适用于 VuePress 的默认主题，对于自定义主题配置可能会不太一样 
</code></pre><p>脚本命令</p><p>我们需要至少两个脚本命令，分别用于本地开发和打包上线，脚本命令需要配置在docs/package.json文件中，它的配置如下</p><pre><code>{
  &quot;scripts&quot;: {
    // 本地开发
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,
    // 打包上线
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;
  }
}
复制代码
</code></pre><p>本地开发请使用如下命令，它在本地启用了一个小型的服务器，你可以在浏览器中使用localhost:8080(默认情况下)进行访问</p><pre><code>$ npm run docs:dev
复制代码
</code></pre><p>打包命令请使用如下命令，它在.vuepress目录下生成一个dist文件夹</p><pre><code>$ npm run docs:build
复制代码
</code></pre>`,17)])])}const c=o(n,[["render",t]]),i=JSON.parse('{"path":"/IT/ai/tensorflow/first.html","title":"安装","lang":"zh-CN","frontmatter":{},"git":{"updatedTime":1764434042000,"contributors":[{"name":"许鹏","username":"","email":"cngrassroot@gmail.com","commits":1}],"changelog":[{"hash":"96872e08f6a58dbe777ab490dd63a7acf166fd71","time":1764434042000,"email":"cngrassroot@gmail.com","author":"许鹏","message":"更新文章"}]},"filePathRelative":"IT/ai/tensorflow/first.md"}');export{c as comp,i as data};
