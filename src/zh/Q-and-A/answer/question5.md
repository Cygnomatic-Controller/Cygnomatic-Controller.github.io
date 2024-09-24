---
title: 程序正确，洛谷提交错误
icon: object-group
permalink: /zh/Q-and-A/answer/question5.html
category:
  - 问答
tag:
  - 回答
---

# 程序正确，洛谷提交错误
## 问题描述：
使用函数递归，程序正确，但在洛谷上提交错误，源代码（已加入必要说明）

![](https://s2.loli.net/2024/09/24/v4XLOTnWj3e7wJy.png)
![](https://s2.loli.net/2024/09/24/X8VwPRmEpvf5nKs.png)
![](https://s2.loli.net/2024/09/24/iLIKoCVbtTAOQJ5.png)

::: code-tabs#shell
@tab c
```bash
#include <stdio.h>
int end(int right)//对于最后一位的判断函数，为2则输出一，否则输出0
{
        while (right > 9)
        {
                right /= 10;

        }
        if (right == 2)
        {
                return 1;
        }
        else
                return 0;


}


int judge(int right)
{
        int q = 0;
        int i = 0;
        i = end(right);
        if (right > 9)
        {
                
                q = judge(right / 10) + i;//right中的2的个数，实际上求除个位外的2的个数，再加上个位
        }
        else if (right<9&&right % 10 == 2)
        {
                q++;
        }
        else
        {
                q = q + 0;
        }
        return q;
}
int main()
{
        int left, right;
        scanf("%d %d", &left, &right);
        int m = 0;
                while (right > left)
                {
                        int n = judge(right);//此函数判断right中的2的个数，将right中的含2个数放入n中

                        m += n;//将每一个n加到m上
                        right--;
                }
                printf("%d\n",m);

        return 0;
}
```
:::

