---
title: 搜索语法没有错误，调试的时候使用案例也没问题。
icon: object-group
permalink: /zh/Q-and-A/answer/question23.html
category:
  - 问答
tag:
  - 回答
---

# 搜索语法没有错误，调试的时候使用案例也没问题。
## 问题描述：
在洛谷乘积最大3的题目中，我使用了以下方法，使M个数可能平均

::: code-tabs#shell
@tab c
```bash
#include<stdio.h>
#include<stdlib.h>
int main()
{
        int m, n;
        scanf("%d %d", &n, &m);
        int sang = n / m;
        int yu = n % m;
        int* arr;
                arr = (int*)malloc(m * sizeof(int));
                for (int i = 0; i < m; i++)
                {
                        arr[i] = sang;
                }
                for (int j = 0; j < yu; j++)
                {
                        arr[j] = sang + 1;
                }
                int u = 0;
                for (u = 0; u < m; u++)
                {
                        printf("%d ",arr[u]);
                }
                free(arr);
        return 0;
}

```
:::

搜索语法没有错误，，调试的时候使用案例也没问题。

![image.png](https://s2.loli.net/2024/09/28/A8RNp9Jh7MnyeqU.png)
![image.png](https://s2.loli.net/2024/09/28/9VBiEFahRumlyUt.png)
![image.png](https://s2.loli.net/2024/09/28/CEcK9PRoYTHgiqa.png)