---
title: "[git] several skill is required in common scenarious"
date: "2025-03-17"
categories: "GIT"
summary: ""
---


### 01. local repositories coneect to remote repositories
```shell
# init local repositories
> git init

# start by create a remote repository 
> git remote add origin https://github.com/<username>/<repository>.git

> git add . 

> git commit -m "init commit"

> git push -u origin master
```

### 02. configure git email and name
```shell
git config --global user.email "example@example.com"

git config --global user.name "example"
```
### 03. pull and push
