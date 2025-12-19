---
title: "[micro frontend] micro-frontend series - SystemJS"
date: "2025-04-15"
categories: "MICRO"
summary: ""
---

### 1. SystemJs  usage  background?

- 诞生于2015
- SystemJs为了实现一个通过加载器，实现对CommonJs、AMD、UMD等各个模块的加载

### 2. SystemJs feature

- Import Maps：让浏览器支持指定位置去获取模块
    ```js
    <script type="systemjs-importmap">
      {
        "imports": {
          "react": "https://airpack.alibaba-inc.com/react",
          "react-dom": "https://airpack.alibaba-inc.com/react-dom"
        }
      }
    </script>
    
    <div id="app"></div>
    
    <script type="systemjs-module">
      import React from 'react'
      import ReactDOM from 'react-dom'
    
      ReactDOM.render('Hello React', document.getElementById('root'))
    </script>
    <script src="https://lib.baomitu.com/systemjs/latest/system.js"></script>
    ```

### 3. 实现自己的SystemJs
  3.1 System.import 开始加载一个本地模块
  3.2 第一步处理关系映射表
  3.3 加载需要处理的依赖
  3.4 依赖全部加载完后，每个依赖会在全局(window)上添加一个对应属性，此时使用快照的方式得到这个属性
  3.5 执行渲染逻辑

> 本质就是先加载依赖列表， 再去加载真正的逻辑
  内部通过script脚本加载资源，给window拍照保存先后状态



4. demo source:  https://github.com/ajCivil/SystemJs-base