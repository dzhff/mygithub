# project5

> A Vue.js project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## ViewUI 安装与引入

### 安装

npm install view-design --save

# 不行的话，用这个

npm install view-design --save -g

### 引入

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);

## less or sass 安装

若安装了 UI 库后，抱 cass 和 less 错误，则一下安装
npm install --save sass-loader node-sass
npm install --save less-loader node-less

## axios 的安装和使用

因为 vue 里面并没有 axios 这个框架所以得在终端安装

### 安装

npm install axios --save

### 使用

# 导入 可放在 App.vue 中的 script 或是 main.js 中

import axios from 'axios'

## 路由 router 的安装和使用

## vue-cli 安装与新建

# 1.安装 node.js

去官网下载或者去菜鸟上面有下载给方法

## git 的安装与使用

# ## 安装

### 使用

# 右键打开 Git Bush Here

# 输入相应命令

#### 1.git init ==》初始化一 git

## 后多了一个.git 的文件夹，若没有看到这个文件，则点击查看，勾选隐藏的项目即可看到

## 自己建立一个文件，用于提交的文件

#### 2.git add +文件名（或路径）==》是将文件被 git 追踪到，提交到暂存区

#### 3.git commit -m ''==》将文件提交到 git 仓库里

## ''里面写的是你对你要提交的文件的说明

## 提交的时候则会将你的暂存区的文件全提交给仓库区内

#### 4.git status==》查看暂存区的状态

# （1）.在 git add 后输入， 则可以出现 new file：你的工作文件名 这一行命令（绿色）

# （2）.在 git commit 后输入，则可以出现 nothing to commit，working tree clear 这一行命令==》表明暂存区里没东西

#### 5.git log==》查看你提交完日志的具体情况

#### 6.git reset HEAD 文件名==》即可撤销你添加错误到暂存区的文件

#### 7.git commit -a -m ==》先被追踪到暂存区后被提交到仓库

#### 8.git reset --hard HEAD^ 或 git reset --hard HEAD~1 ==》表示将在仓库里的文件回退到上一个版本，后你的文件也会变更到上一个版本的内容

## 而 ^ 有几个这种箭头，则回退到几个版本前

#### 9.git reflog ==》可以查看之前撤回的文件以及现有的文件的 id 名

#### 10.git reset --hard id 名==》则可以返回之前撤销掉的文件

#### 11.git log --pretty=oneline ==》可以返回全部的 id 名，不会只返回易班的 id 名

#### 12.git restore 文件名 或 git checkout 文件名 ==》增加删除在工作区的文件（前提这个文件放在了版本库区）

#### 13.git rm 文件名 ==》删除了版本库里的文件

#### 14.git ls-files ==》查看本地文件
