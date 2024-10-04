---
title: 优化代码提高速度
icon: object-group
permalink: /zh/Q-and-A/answer/question31.html
category:
  - 问答
tag:
  - 回答
---

# 优化代码提高速度
## 问题描述：
在洛谷上提交代码，测试点均正确，但是最后代码运行时间超时，代码可以再优化吗，这里使用long是为了符合题目所给范围

::: code-tabs#shell
@tab c
```bash
#include<stdio.h>
#include<stdlib.h>
#include <stdio.h>
int main()
{
        long a, b, n;
        long fnsh = 0;
        int day = 0;
        scanf("%ld %ld %ld", &a, &b, &n);
        while(fnsh<n)
        {
                int temp = (day % 7)+1;
                        if (temp < 6)
                        {
                                fnsh += a;
                        }
                        else
                        {
                                fnsh += b;
                        }
                        day++;
        }
        printf("%ld", day);
        return 0;
}
```
:::

![image.png](https://s2.loli.net/2024/10/04/4NnCdxbckKIzTLD.png)