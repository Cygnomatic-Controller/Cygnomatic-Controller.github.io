---
title: 用dev可以运行但是洛谷上是错的
icon: object-group
permalink: /zh/Q-and-A/answer/question13.html
category:
  - 问答
tag:
  - 回答
---

# 用dev可以运行但是洛谷上是错的
## 问题描述：
第二题为什么代码有问题找了好久

::: code-tabs#shell
@tab c
```bash
#include <stdio.h>
      
#include<stdio.h>
int main()
{
int a,b,n;
int s=0;
scanf("%d %d",&a,&b);
for(int i=a;i<=b;++i)
{
  if(i%10==2)
  { ++s;}
  n=i;
   i=i/10;
 
  for(i;i>=1;i=i/10)
  {
   if(i==2)
    { ++s;}
  } 
  i =n;
}
printf("%d",s);
return 0;
}

    
```
:::
,,,