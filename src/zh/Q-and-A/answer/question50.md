---
title: 为什么循环前声明的整数，且在循环中未用到，在循环之后使用为何需要重新声明
icon: object-group
permalink: /zh/Q-and-A/answer/question50.html
category:
  - 问答
tag:
  - 回答
---

# 为什么循环前声明的整数，且在循环中未用到，在循环之后使用为何需要重新声明
## 问题描述：

如图反转数组，10、11行的m、n在循环中没用到，为什么循环后还需要重新声明？
我发现应该问题与循环无关，但为什么要重新声明？
如果将第4行的m、n删去就又正常了；或者如图2直接在循环前赋好值也正常
那为什么图一这样是错误的
![image.png](https://s2.loli.net/2024/10/10/NHKs9UJuQnZdf7e.png)
![image.png](https://s2.loli.net/2024/10/10/sG3xVSKq6nar9IM.png)