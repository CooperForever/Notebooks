<!--
 * @Description: git notes
 * @Author: Jiang chen yi
 * @Date: 2022-04-19 12:42:44
 * @LastEditors: Jiang chen yi
 * @LastEditTime: 2022-04-20 13:58:13
-->
# Git 命令
## 克隆
`git clone`
## 查看分支
### 查看所有分支
查看所有分支
````shell
git branch -a 
````
### 查看所有远程分支
查看远程分支
````shell
git branch -r
````
## 创建分支/删除分支
### 创建本地分支
````shell
git checkout 分支名
git checkout 分支名 origin/分支名 #拉取远程分支并创建本地分支
````
### 本地分支关联远程分支
````shell
git branch --set-upstream-to=origin/分支名
````
### 创建远程分支
### 删除分支
````shell
git branch -d 分支名
````
## 回退提交
### reset
````shell
git reset HEAD^        #回退所有内容到上一个版本
git reset HEAD~1       #回退内容到上一个版本
git reset HEAD^2       #回退内容到上上一个版本


git reset HEAD^ 文件名  #回退某个文件的版本到上一个版本
git reset 版本
````
reset三种模式
`soft` 不撤销缓存区与工作区 
`mixed`清楚缓存区，不撤销工作区（默认）
`hard`清楚缓存区与工作区
### revert
用一次新提交取消前面的提交
````shell
git revert HEAD #撤销前一次提交
git revert HEAD^ #撤销前前一次提交
````
## 查看提交记录
### 查看日志
````shell
git log --oneline --before={3.weeks.ago} --after={2010-04-18} --no-merges
````

