import { GitContributors } from "/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/Users/xupeng/Documents/Obsidian Vault/vuepressBlog/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
