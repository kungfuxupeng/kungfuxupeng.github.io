<template><div><p>#卡片/git</p>
<p>以下是常见的 Git 命令及解释，按照从常见到不常用的顺序排列：</p>
<hr>
<h3 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作"><span>基础操作</span></a></h3>
<p><code v-pre>git init</code>:: 在当前目录初始化一个新的 Git 仓库</p>
<!--SR:!2025-12-03,4,270-->
<p><code v-pre>git clone &lt;url&gt;</code>:: 克隆远程仓库到本地</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git add &lt;file&gt;</code>:: 将文件添加到暂存区（<code v-pre>git add .</code> 添加所有文件）</p>
<!--SR:!2025-12-03,4,270-->
<p><code v-pre>git commit -m &quot;message&quot;</code>:: 提交暂存区的文件到仓库并添加描述信息</p>
<!--SR:!2025-12-03,4,270-->
<p><code v-pre>git status</code>:: 查看工作区和暂存区的状态</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git push</code>:: 将本地提交推送到远程仓库</p>
<!--SR:!2025-12-03,4,270-->
<p><code v-pre>git pull</code>:: 从远程仓库拉取更新并合并到本地（<code v-pre>git fetch + git merge</code>）</p>
<!--SR:!2025-12-03,4,270-->
<p><code v-pre>git log</code>:: 查看提交历史记录</p>
<!--SR:!2025-12-03,4,270-->
<hr>
<h3 id="分支管理" tabindex="-1"><a class="header-anchor" href="#分支管理"><span>分支管理</span></a></h3>
<p><code v-pre>git branch</code>:: 查看所有本地分支（<code v-pre>-r</code> 查看远程分支，<code v-pre>-a</code> 查看所有分支）</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git branch &lt;branch-name&gt;</code>:: 创建新分支</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git checkout &lt;branch-name&gt;</code>:: 切换到指定分支</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git checkout -b &lt;branch-name&gt;</code>:: 创建并切换到新分支</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git merge &lt;branch-name&gt;</code>:: 将指定分支合并到当前分支</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git branch -d &lt;branch-name&gt;</code>:: 删除本地分支（<code v-pre>-D</code> 强制删除）</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git push origin --delete &lt;branch-name&gt;</code>:: 删除远程分支</p>
<!--SR:!2025-11-30,1,230-->
<hr>
<h3 id="撤销与恢复" tabindex="-1"><a class="header-anchor" href="#撤销与恢复"><span>撤销与恢复</span></a></h3>
<p><code v-pre>git restore &lt;file&gt;</code>:: 恢复工作区的文件到最新提交状态（Git 2.23+）</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git restore --staged &lt;file&gt;</code>:: 将文件从暂存区移回工作区</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git reset &lt;file&gt;</code>:: 将文件从暂存区撤出（同 <code v-pre>git restore --staged</code>）</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git reset --hard &lt;commit&gt;</code>:: 重置工作区和暂存区到指定提交（谨慎使用）</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git revert &lt;commit&gt;</code>:: 创建一个新提交来撤销指定提交的更改</p>
<!--SR:!2025-11-30,1,230-->
<hr>
<h3 id="远程仓库操作" tabindex="-1"><a class="header-anchor" href="#远程仓库操作"><span>远程仓库操作</span></a></h3>
<p><code v-pre>git remote -v</code>:: 查看远程仓库地址</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git remote add &lt;name&gt; &lt;url&gt;</code>:: 添加远程仓库</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git fetch &lt;remote&gt;</code>:: 从远程仓库下载数据但不合并</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git push -u origin &lt;branch&gt;</code>:: 推送分支并设置上游跟踪（首次推送时常用）</p>
<!--SR:!2025-12-02,3,250-->
<hr>
<h3 id="高级操作" tabindex="-1"><a class="header-anchor" href="#高级操作"><span>高级操作</span></a></h3>
<p><code v-pre>git stash</code>:: 临时保存工作区的修改（<code v-pre>git stash pop</code> 恢复）</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git tag &lt;tag-name&gt;</code>:: 为当前提交打标签（<code v-pre>-a</code> 创建附注标签）</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git diff</code>:: 查看工作区与暂存区的差异（<code v-pre>--staged</code> 查看暂存区与仓库差异）</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git rebase &lt;branch&gt;</code>:: 将当前分支变基到指定分支（重写提交历史）</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git cherry-pick &lt;commit&gt;</code>:: 将指定提交应用到当前分支</p>
<!--SR:!2025-11-30,1,230-->
<hr>
<h3 id="不常用但实用" tabindex="-1"><a class="header-anchor" href="#不常用但实用"><span>不常用但实用</span></a></h3>
<p><code v-pre>git bisect</code>:: 使用二分查找定位引入问题的提交</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git blame &lt;file&gt;</code>:: 查看文件的每一行最后修改信息</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git submodule</code>:: 管理子模块（如 <code v-pre>add</code>、<code v-pre>update</code>）</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git reflog</code>:: 查看本地仓库的操作记录（用于恢复误操作）</p>
<!--SR:!2025-11-30,1,230-->
<p><code v-pre>git archive</code>:: 将仓库文件打包成压缩包</p>
<!--SR:!2025-11-30,1,230-->
<hr>
<h3 id="配置相关" tabindex="-1"><a class="header-anchor" href="#配置相关"><span>配置相关</span></a></h3>
<p><code v-pre>git config --global user.name &quot;name&quot;</code>:: 配置全局用户名</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git config --global user.email &quot;email&quot;</code>:: 配置全局邮箱</p>
<!--SR:!2025-12-02,3,250-->
<p><code v-pre>git config --list</code>:: 查看所有配置项</p>
<!--SR:!2025-12-02,3,250-->
<hr>
<p>以上命令覆盖了日常开发中 90% 以上的场景，建议优先掌握基础操作和分支管理部分。</p>
</div></template>


