---
title: NetEasemusic
excerpt: 基于Vue2、Vue-CLI3的高仿网易云mac客户端播放器（PC） Online Music Player, 音乐播放器虽然烂大街了，但是作为前端没自己撸一个一直是个遗憾，而且偶然间发现 pc 端 web 版的网易云音乐做的实在是太简陋了，社区仿 pc 客户端的网易云也不多见，为了弥补这个遗憾，就用 vue 全家桶模仿 mac 客户端的 ui 实现了一个，欢迎提出意见和 star~

iframe: //www.virkano.com/NetEasemusic/#/discovery
demo: //www.virkano.com/NetEasemusic/#/discovery
src: //github.com/Virkano/NetEasemusic

info:
  idea: 音乐播放器虽然烂大街了，但是作为前端没自己撸一个一直是个遗憾，而且偶然间发现 pc 端 web 版的网易云音乐做的实在是太简陋了，社区仿 pc 客户端的网易云也不多见，为了弥补这个遗憾，就用 vue 全家桶模仿 mac 客户端的 ui 实现了一个，欢迎提出意见和 star~
  tech: [Javascript, Vue]
  links:
    - [ Vue, https://cn.vuejs.org/ ]
---

### 进度

- [x] mv 页（3.0 新增）
- [x] cd 页 (2.0 新增)
- [x] 搜索建议
- [x] 搜索详情
- [x] 播放（版权歌曲无法播放)
- [x] 发现页
- [x] 播放列表
- [x] 播放记录
- [x] 全部歌单
- [x] 歌单详情
- [x] 最新音乐
- [x] 主题换肤功能
- [x] 登录(网易云 uid 登录)

### 后端接口

https://binaryify.github.io/NeteaseCloudMusicApi

### 技术栈

- ***Vue*** 全家桶 Vue-CLI3 create 出来的。
- ***Element-Ui*** 魔改样式。
- ***better-scroll*** 歌词滚动部分用了黄轶老大的 （贼爽）
- ***CSS Variables*** 主题换肤。
- ***ES 6 / 7*** （JavaScript 语言的下一代标准）
- ***Sass***（CSS 预处理器）
- ***postcss-pxtorem***（自动处理 rem，妈妈再也不用担心屏幕太大太小了）
- ***workbox-webpack-plugin*** 谷歌开发的利用 Service Work 预缓存 chunks 的 webpack 插件。

### Screenshots
<style>
 .screenshots img{
    height:auto;
    width:95%;
  }
</style>
<div class="screenshots">

![首页](http://chuantu.xyz/t6/741/1609924297x1033348220.png)

![歌单列表](http://chuantu.xyz/t6/741/1609924343x1822611322.png)

![歌单详情](http://chuantu.xyz/t6/741/1609924402x1033348314.png)

![音乐播放](http://chuantu.xyz/t6/741/1609924434x1033348159.png)
</div>

### 安装与使用

```
npm i
npm run dev
```