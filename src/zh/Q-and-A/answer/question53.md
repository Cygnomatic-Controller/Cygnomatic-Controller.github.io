---
title: 使用归并排序统计分数，但超时了，还能怎样优化吗
icon: object-group
permalink: /zh/Q-and-A/answer/question53.html
category:
  - 问答
tag:
  - 回答
---

# 使用归并排序统计分数，但超时了，还能怎样优化吗
## 问题描述：
笔试题中的统计分数，使用归并排序，但显示超时

::: code-tabs#shell
@tab c
```bash
#include<stdio.h>
#include<string.h>
struct Stu
{
    char name[21];
    float score;
};

struct Stu students[100001]; struct Stu veil[100001];

int compare(const struct Stu* a,struct Stu* b)//a大返回1，b大返回0;
{
    if (a->score > b->score)
    {
         return -1;
    }
    if (a->score < b->score)
    {
        return 1;
    }
    return strcmp(a->name, b->name);
}
void merge(struct Stu arr[], int l,int mid,int r)
{
    int i = l;
    int k = l;
    int j = mid + 1;
    while(i <= mid && j <= r)
    {
        if (compare(&arr[i], &arr[j])<0)
        {        
            veil[k] = arr[i];
            i++;
            k++;
        }
        else
        {
            veil[k] = arr[j];
            k++;
            j++;
        }
    }
    while (i <= mid)
    {
        veil[k] = arr[i];
        i++;
        k++;
    }
    while (j <= r)
    {
        veil[k] = arr[j];
        k++;
        j++;
    }
    for (i = 0; i <= r; i++)
    {
        arr[i] = veil[i];
    }
}
void mergesort(struct Stu arr[],int l,int r)
{
    if (l == r)
    {
        return;
    }
    int mid = (l + r) / 2;
    mergesort(arr, l, mid);
    mergesort(arr, mid + 1, r);
    merge(arr, l, mid, r);

}
int main()
{
    int n, i;
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        scanf("%s %f", students[i].name, &students[i].score);
    }

    int l = 0;
    mergesort(students,l,n-1);

    for (i = 0; i < n; i++)
    {
        printf("%s %.1f\n", students[i].name, students[i].score);
    }
    return 0;
}
```
:::

![image.png](https://s2.loli.net/2024/10/14/BJXvLpNkUKoI8qR.png)