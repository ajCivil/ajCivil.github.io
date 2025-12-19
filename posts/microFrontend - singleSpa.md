---
title: "[micro frontend] micro-frontend series - singleSpa"
date: "2025-04-25"
categories: "MICRO"
summary: ""
---

1. [singleSpa](https://single-spa.js.org/docs/getting-started-overview.html)
> 核心是劫持路由，加载资源

2. 使用single-spa脚手架搭建
    ```
    > npm install create-single-spa   ##安装依赖
    
    > npx create-single-spa substrate ##创建基座
    	? Select type to generate
      	  single-spa application / parcel  ##生成一个spa子应用/物料【多个项目共享的物料】
      	  in-browser utility module (styleguide, api cache, etc)  //通用共享的工具类
    	> single-spa root config  //根配置
    	? Organization name   //组织名
    
    PS: webpack-config-single-spa@8.x.x 有异常； 使用@7.0.0即可
    ```

3. 加载步骤

```
1. 基座应用加载过程： index.ejs -- @aj/root-config  -- aj-root-config.js
   匹配路径 加载资源
   
 2. 子应用打开两种模式用两种不同的命令
 	单独打开：npm run start:standalone
 	集成打开：npm run start
 	
 3. 集成运行时，会生成一个子应用的system模块：/orgName-projName.js
 	如react：  localhost:8981/aj-react.js
 	
 4. 在基座项目中新注册一个应用
 
```

4. single-spa的加载状态

   ![single-spa-status](..\assets\images\single-spa-status.png)

   

demo source: https://github.com/ajCivil/single-spa-base
