---
title: "[next topic] NEXT developmet basis"
date: "2025-03-19"
categories: "NEXT"
summary: "A SSR framework based React, is a full stack framework"
---

## 1. NEXT.js  introduction
>The React framework for the Web. 
>
>official: [https://nextjs.org/](https://nextjs.org/)

## 2. code NUXT.js
```shell 
# system requirements:
nodejs >= 18.8
# create a project
npx create-next-app@latest

# or download the project based on the template
# --example with-redux
# --example api-routes-cors
# --example with-electron
# --example with-jest
# --example with-markdown
# --example with-material-ui
# --example with-mobx
npx create-next-app --example api-routes-cors your-app-name
```

## 3. script
```shell
next build --profile  # open React performance analyzer
next start -p 3000    # start the server and assign the port
next build --debug    # open React debugger: `rewrites`、`redirects`、`headers`
npx next dev -H 192.168.1.2   # start the server and assign the hostname
npx next lint --dir utils # check the code and assign the directory
npx next info # get the environment information of the current project
```

## 4. APP Router vs  Pages Router
>The APP Router is a new routing system that is designed to be more flexible and scalable than the Pages Router. It is the default routing system in Next.js 13 and is recommended for most projects.

- Pages Router: 
  - 1.add `/pages` to the `src` directory
- APP Router:
  - 1.add `/app` to the `src` directory
  - 2.`layout.js`:
  - 3.`template.js`:
  - 4.`loading.js`:
  - 5.`error.js`:
  - 6.`not-found.js`:
  - 7.`page.js`:

- Link and Redirect:
  - 1.`Link`: use `<Link>` to navigate between pages
  - 2.`useRouter`: use `useRouter().push()` to redirect to another page
  - 3.`usePathname`: use `usePathname()` to get the current page
  - 4.`redirect`: use `redirect()` to redirect to another page
  - 5.`history`: use `history.pushState()` to redirect to another page

- Dynamic Routes:
  - [folderName]: `/app/[folderName]/page.js`  ==> params: { folderName: value }
  - [...folderName]: `/app/[...folderName]/page.js` ==> params: { folderName: [value1, value2] }
  - Router Groups: `(forderName)` 
    - 路由组的命名不会影响URL路径
    - 路由组下不允许存在相同的URL路径
    - 创建多个跟布局时，需要注意访问`/`和`/404`的为问题
    - 跨根布局导航会导致页面完全重新加载
  - Parallel Routes: `@forderName` ==> like slots in Vue
    - 平行路由可以将单个布局拆分为多个插槽，使代码更易于管理，适用于团队协作
    - 每个插槽都可以定义自己的加载界面和错误状态
    - 每个插槽都可以有自己独立的导航和状态管理
    - default.js: 当路由不匹配时，加载默认的组件
  - Intercepting Routers: `(.)forderName`
    - `(.)` 表示匹配同一层级
    - `(..)` 表示匹配上一层级
    - `(..)(..)` 表示匹配上上层级。
    - `(...)` 表示匹配根目录

## 5.API Interface
  - add `/app/api/route.js` to the `src` directory
  - `route.js` handle the request and response
  - support `GET`、`POST`、`PUT`、`PATCH`、`DELETE`、`HEAD` 和 `OPTIONS` HTTP Methods
  - remove `GET` cache: 
    - force-dynamic: `export const dynamic = 'force-dynamic'`
    - time-out period: `export const revalidate = 10`
  - setting CORS: new Response(msg, {headers: {}, status: 200})

  ```
  import { NextResponse } from 'next/server'
  export async function GET(request) {
    //  /home, pathname == '/home'
    const pathname = request.nextUrl.pathname
    //  /home?name=lee, searchParams  == { 'name': 'lee' }
    const searchParams = request.nextUrl.searchParams
    const name = searchParams.get('name') // lee
    // get token
    const token = request.cookies.get('token')
    const res = fetch('https://mock.mengxuegu.com/mock/67d8bd9c57433c0850b11918/base/v1/getList')
    const data = await res.json()
    return NextResponse.json({data}, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    })
  }
  export async function POST(request, context) {
    // context: { params: { id: '1' } }
    const data  = await request.json()
    return NextResponse.json({id: Math.random().toString(36).slice(-8) ,data}, {status: 201})
  }
  ```

## 6. Middleware
- add `middleware.js` to the `src` directory




