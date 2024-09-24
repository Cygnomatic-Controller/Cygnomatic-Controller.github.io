---
title: 为什么我的输出总不对
icon: object-group
permalink: /zh/Q-and-A/answer/question3.html
category:
  - 问答
tag:
  - 回答
---

# 为什么我的输出总不对
## 问题描述：
这道题不就是分离整数，再判断是不是2吗？硬控我15分钟了
![](https://s2.loli.net/2024/09/24/23Pqjh67Nr4zpfd.png)
::: code-tabs#shell
@tab c
```bash

#include <stdio.h>
      
#include <stdio.h>
int main (void)
{
    int num = 0;
    int i;
    int a,b;
    scanf("%d %d",&a, &b);


    for (i=a;i<=b;i++)
    {
          if(i>=10 && i/10 == 2)
          {
               num++;
          }
       
          if(i%10 == 2)
          {
               num++;
          }
            
        
    }
    printf("%d\n",num);
    return 0;
}

    
```
:::

