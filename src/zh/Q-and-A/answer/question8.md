---
title: 为什么洛谷打马里奥的printf中用\n\表示换行且继续运行函数不正确。
icon: object-group
permalink: /zh/Q-and-A/answer/question8.html
category:
  - 问答
tag:
  - 回答
---

# 为什么洛谷打马里奥的printf中用\n\表示换行且继续运行函数不正确。
## 问题描述：
今天写洛谷那个打印符号组成的超级玛丽。洛谷报错说too short on line one，我就copy了题解把修饰字符串的""仅保留了最外层用\n\表示换行。但是还是错了，我就以为是知识有漏洞，但我查了chatgpt说可以用\n\来换行。我就不知道哪里错了，还是说我不符合洛谷“系统将忽略每一行结尾的空格，以及最后一行之后多余的换行符。”

![image.png](https://s2.loli.net/2024/09/25/cfgQPMZ6kvoAe94.png)
![image.png](https://s2.loli.net/2024/09/25/VHQDCfJLwe1h4rA.png)
![image.png](https://s2.loli.net/2024/09/25/oc5wKtmAkji8yrQ.png)
![image.png](https://s2.loli.net/2024/09/25/WhyFkwbZQlcfEx5.png)