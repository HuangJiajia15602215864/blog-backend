# blog-backend
基于Nest.js、MongoDB 和 Vue.js 搭建一个博客。Nest.js 构建 RESTful 后端 API；Vue.js 构建前端；应用数据持久化到 MongoDB 中，MongoDB 是一种无模式（schema-less）的 NoSQL 数据库，可以接收和存储 JSON 文件。

# 目录结构
├── README.md  //文字说明
├── nest-cli.json
├── node_modules/
├── nodemon-debug.json
├── nodemon.json
├── package-lock.json
├── package.json
├── src  # 源码目录
│   ├── app.controller.spec.ts
│   ├── app.controller.ts # 控制器类
│   ├── app.module.ts  # 模块
│   ├── app.service.ts # 服务类
│   └── main.ts   # 入口文件
├── test   # 测试目录
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── tslint.json


