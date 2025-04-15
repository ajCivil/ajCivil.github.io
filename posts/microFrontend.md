---
title: "[micro frontend] micro-frontend series"
date: "2025-04-15"
categories: "MICRO"
summary: "micro-frontend is a term that describes a pattern for building a single application from multiple frontend applications."
---

### 1. what is the micro-frontend?
将应用划分成若干子应用，将子应用打包成一个个模块，当路径切换时加载不同的子应用，技术栈也不用做限制；
从而解决前端协同开发的问题。

### 2. how to do?
  - 采用何种方案进行应用拆分？
  - 采用何种方式进行通信？
  - 应用之间如何进行隔离？

### 3. historical development of micro-frontend
  - ifream
    - 微前端最简单的方案，通过iframe加载子应用
    - 通信可以通过postMessage进行通信
    - 完美沙箱机制自带应用隔离
    - 【缺点】用户体验差
  - Web Components
    - 将前端应用程序分解为自定义HTML元素
    - 基于CustomEvent实现通信
    - Shadow DOM天生作用域隔离
    - 【缺点】浏览器支持问题、学习成本、测试困难、修改样式困难
  - single-spa
    - 通过路由劫持实现应用加载（采用Systemjs），提供应用间公共组件加载及公共业务员逻辑处理
    - 子应用需要暴露固定钩子bootstrap、mount、unmount来接入协议
    - 基于props主应用间通信
    - 无沙箱机制，需要自己实现JS沙箱以及CSS沙箱
    - 【缺点】学习成本高、无沙箱机制、需要对原有应用进行改造，子应用之间相同资源重复叠加
  - Module Federation
    - 组件打包导出使用
    - 共享模块的方式进行通信
    - 无CSS沙箱和JS沙箱
    - 【缺点】需要webpack5
  - qiankun
    - 基于single-spa
  - wujie
    - 基于single-spa