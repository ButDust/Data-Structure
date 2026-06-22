---
outline: deep
title: Sorting
---

# Sorting
## Straight Insertion Sort
```cpp
void InsertSort(SqList* L)
{   
    int i,j;       
    i = 2;                  //Consider the first element (r[1]) as already sorted, initializing the sorted region to contain only a single element
    while(i <= L->length){
    L->r[0] = L->r[i];      //Store the first record of the unsorted subfile into the sentinel $r[0]$
    j = i - 1;              //Traverse the elements from index i-1 down to 1 in a backward direction
    if(L->r[j].key > L->r[0].key){
    L->r[j+1] = L->r[j];    //Shift the current record $r[j]$ backward by one position
    j --;                   //update the value of j
    }
    L->r[j+1] = L->r[0];    //assign the value of the sentinel $r[0]$ to $r[j+1]$
    i ++;
  }
}
```

## Common Mistakes
- [Mistake]: [Correction.]

## Review Questions
1. [Question]

## Summary
- [Key point]
