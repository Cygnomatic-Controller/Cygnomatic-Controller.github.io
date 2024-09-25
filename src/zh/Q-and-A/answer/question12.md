---
title: while(1){if(1) break;}return 0;和while(1){if(1) return 0;}有什么区别
icon: object-group
permalink: /zh/Q-and-A/answer/question12.html
category:
  - 问答
tag:
  - 回答
---

# while(1){if(1) break;}return 0;和while(1){if(1) return 0;}有什么区别
## 问题描述：
我不太明白嵌套情况下break是如何发挥退出循环的作用。使用while(){if() return 0;}能AC通过，但是while(){if() break;}return 0;不能通过。
问了AI，说“break;当 count < 0 时，跳出当前 while 循环".

::: code-tabs#shell
@tab c
```bash
#include <stdio.h>
int main()
{
    char str[255];
    scanf("%s",str);
    char temp;
    int n = 0,count = 0;
    while(1){
        if (str[n]=='(')
        {
            count++;
        }
        if (str[n]==')')
        {
            count--;
        }
        n++;
        if (count<0)
        {
            printf("NO");
            return 0;
            //break;
        }
    }
    if (count == 0)
    {
        printf("YES");
    }
    else
    {
        printf("NO");
    }
    return 0;
}

```
:::

保留第20行能成功，保留第21行不能成功 我只了解break能退出循环，但不懂遇到这种嵌套里面退出的是哪个循环
