---
title: 程序满足题目条件，但洛谷上显示错误，这是为什么呢？
icon: object-group
permalink: /zh/Q-and-A/answer/question16.html
category:
  - 问答
tag:
  - 回答
---

# 程序满足题目条件，但洛谷上显示错误，这是为什么呢？
## 问题描述：
我通过洛谷看到了“替身”的描述，但不完全了解，希望大佬们能详细讲讲。
![image.png](https://s2.loli.net/2024/09/26/Mf5SxNkuG7QoHWC.png)

::: code-tabs#shell
@tab c
```bash
#include <stdio.h>
int main() {

    int L;
    int R;
    int count = 0;
    scanf("%d %d", &L, &R);
    int max = R >= L ? R : L;
    int min = R >= L ? L : R;
    if (1 <= min <= max <= 100000)
    {
        for (int i = L; i <= R; i++)
        {
            int m = i % 10;
            int n = (i - m) / 10;
            if (m == 2 && n == 2)
            {
                count = count + 2;
            }
            else if (m != 2 && n == 2)
            {
                count++;
            }
            else if (m == 2 && n != 2)
            {
                count++;
            }
        }

        printf("%d", count);
    }
    return 0;
}

```
:::