---
title: 为什么第二次培训的链表内容中函数的参数列表一定要先指针再整型
icon: object-group
permalink: /zh/Q-and-A/answer/question22.html
category:
  - 问答
tag:
  - 回答
---

# 为什么第二次培训的链表内容中函数的参数列表一定要先指针再整型
## 问题描述：
在尝试第二次培训中讲解的链表知识是发现程序报错，经过了对照文件一行行代码查找修改尝试，解决了问题，发现是在定义初始化函数的时候函数参数里(Node*node,int data=0)在自己写的时候写反了(后面调用的时候也是反的)，都调换一下位置就可以运行了，但有个疑问为啥非得这么做？
![image.png](https://s2.loli.net/2024/09/28/pP6r1JYN72n95da.png)