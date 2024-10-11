---
title:在扩散题目中，在编译器中运行正常，测试通过，在洛谷中测试显示编译错误
icon: object-group
permalink: /zh/Q-and-A/answer/question51.html
category:
  - 问答
tag:
  - 回答
---

# 在扩散题目中，在编译器中运行正常，测试通过，在洛谷中测试显示编译错误
## 问题描述：
已经问过了大模型，对其中可以修正的地方已经进行了修正，但依然显示编译失败，代码中已经给出必要说明

::: code-tabs#shell
@tab c
```bash
#include<stdio.h>
int max(int a,int b)
{
        return a > b ? a : b;
}
int time(int ix, int iy, int jx, int jy)
{
        int xd, yd, zd;

        if (ix > jx)
        {
                xd = ix - jx;
        }
        else if (ix < jx)
        {
                xd = jx - ix;
        }
        else
        {
                xd = 0;
        }
        if (iy > jy)
        {
                yd = iy - jy;
        }
        else if (iy < jy)
        {
                yd = jy - iy;
        }
        else
        {
                yd = 0;
        }
        if (((xd + yd) % 2) == 1)
        {
                zd = (xd + yd) / 2 + 1;
        }
        else
        {
                zd = (xd + yd) / 2;
        }
        return zd;
}
int main()
{
        int nrr[51][2] = { {0,0} };
        int n,i,j;
        scanf("%d", &n);
        for (i = 0; i < n; i++)
        {
                scanf("%d %d", &nrr[i][0],&nrr[i][1]);
        }
        int mintim = 0;
        for (i = 0; i < n; i++)
        {
                for (j = 0; j < i; j++)
                {
                        int xi = nrr[i][0];
                        int yi = nrr[i][1];
                        int xj = nrr[j][0];
                        int yj = nrr[j][1];//将所有可能的情况全部枚举
                        int xbig = xi > xj ?xi : xj;//此处是将两个点之间，还有其他点的情况舍去
                        int xmin = xi < xj ? xi : xj;
                        int ybig = yi > yj ? yi : yj;
                        int ymin = yi < yj ? yi : yj;
                        int m;
                        for (m = 0; m < n; m++)
                        {
                                if (((xbig == nrr[m][0]) && (ybig == nrr[m][1])) || ((xmin == nrr[m][0]) &&( ymin == nrr[m][1])))
                                {
                                        continue;//如果取得的检测点在两点上，检测无意义，退出此次检测
                                }
                                if (((xbig >= nrr[m][0]) && (xmin <= nrr[m][0])) && ((ybig >= nrr[m][1]) && (ymin <= nrr[m][1])))
                                {
                                        goto plac1;//如果取得的检测点在两点之间,检测成立，退出此次计算
                                }
                        }//舍去两点之间有其他点的情况
                        int tim = time(xi, yi, xj,yj);//返回两点之间扩散需要的时间
                        mintim = max(mintim,tim);//将时间不断更新，得到最大值
                plac1:
                        continue;
                }
        }
        printf("%d",mintim);
        return 0;
}
```
:::

![image.png](https://s2.loli.net/2024/10/11/YuMZ9WUSNpamGgK.png)
![image.png](https://s2.loli.net/2024/10/11/MlC61onYrh7QWqJ.png)