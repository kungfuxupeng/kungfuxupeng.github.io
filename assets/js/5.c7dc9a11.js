(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{107:function(a,n,e){a.exports=e.p+"assets/img/kernel.4a0d1ecf.png"},230:function(a,n,e){"use strict";e.r(n);var s=e(0),t=Object(s.a)({},(function(){var a=this,n=a.$createElement,s=a._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"小技巧"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[a._v("#")]),a._v(" 小技巧")]),a._v(" "),s("h2",{attrs:{id:"安装conda后取消命令行前出现的base，取消每次启动自动激活conda的基础环境-使用ubuntu-自带的python环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装conda后取消命令行前出现的base，取消每次启动自动激活conda的基础环境-使用ubuntu-自带的python环境"}},[a._v("#")]),a._v(" 安装conda后取消命令行前出现的base，取消每次启动自动激活conda的基础环境, 使用ubuntu 自带的Python环境")]),a._v(" "),s("p",[a._v("方法一：")]),a._v(" "),s("p",[a._v("退出base环境回到系统自带的环境")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda deactivate \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("方法二")]),a._v(" "),s("p",[a._v("1，通过将auto_activate_base参数设置为false实现：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda config --set auto_activate_base false\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("2，那要进入的话通过conda activate base")]),a._v(" "),s("p",[a._v("3，如果反悔了还是希望base一直留着的话通过")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("conda config --set auto_activate_base true\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("来恢复")]),a._v(" "),s("h2",{attrs:{id:"conda创建环境和kernel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#conda创建环境和kernel"}},[a._v("#")]),a._v(" conda创建环境和kernel")]),a._v(" "),s("h3",{attrs:{id:"创建环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建环境"}},[a._v("#")]),a._v(" 创建环境")]),a._v(" "),s("ul",[s("li",[a._v("创建环境不带kernel\n"),s("code",[a._v("conda create -n [env_name]")])]),a._v(" "),s("li",[a._v("如果经常需要用jupyter notebook，那么最好在创建虚拟环境的时候便安装好ipykernel"),s("br"),a._v(" "),s("code",[a._v("conda create -n [env_name] python=[version] ipykernel")])])]),a._v(" "),s("h3",{attrs:{id:"后期给环境配置kernel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后期给环境配置kernel"}},[a._v("#")]),a._v(" 后期给环境配置kernel")]),a._v(" "),s("ol",[s("li",[a._v("如果没有安装，先安装kernel"),s("br"),a._v(" "),s("code",[a._v("ipykernel：conda install ipykernel")]),s("br"),a._v("\n在虚拟环境下创建kernel文件："),s("code",[a._v("conda install -n [env_name] ipykernel")]),a._v("（是否有用暂时不详）")]),a._v(" "),s("li",[a._v("激活环境"),s("br"),a._v(" "),s("code",[a._v("source activate [env_name]")]),a._v("或者"),s("code",[a._v("conda activate [env_name]")])]),a._v(" "),s("li",[a._v("写入"),s("br"),a._v(" "),s("code",[a._v("python -m ipykernel install --name [kernel_name]")]),a._v("（亲测）"),s("br"),a._v("\n或者"),s("code",[a._v("python -m ipykernel install --user --name [env_name] --display-name [kernel_name]")]),a._v("（未测试，不知与上条命令的区别）"),s("br"),a._v("\n这样在目录'/usr/local/share/jupyter/kernels/[env_name]/'下会生成一个kernel.json文件，内容如下：")])]),a._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"argv"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/home/xupeng/anaconda3/envs/tensorflow/bin/python"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-m"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ipykernel_launcher"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"-f"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{connection_file}"')]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"display_name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"tensorflow"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"language"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"python"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("p",[a._v("在jupyter notebook 新建文件的时候可以看到该kernel")]),a._v(" "),s("p",[s("img",{attrs:{src:e(107),alt:"An image"}})]),a._v(" "),s("p",[s("img",{attrs:{src:e(107),alt:"solar"}})]),a._v(" "),s("h2",{attrs:{id:"ipynb文件转换为markdown文件："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipynb文件转换为markdown文件："}},[a._v("#")]),a._v(" ipynb文件转换为markdown文件：")]),a._v(" "),s("p",[s("code",[a._v('jupyter nbconvert --to markdown "numpy_base.ipynb"')])])])}),[],!1,null,null,null);n.default=t.exports}}]);