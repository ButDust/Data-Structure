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
## Binary Insertion Sort
```cpp
void BinaryInsertSort(Sqlist* L)
{
    int i,j,low,high,mid;
    i = 2;
    while(i <= L->length){
    L->r[0] = L->r[i];
    low = 1 , high = i - 1;         //Searching for the last record that is not greater than r[0].
    while(low <= high){
    mid = (low + high) / 2;
    if(L->r[0].key < L->r[mid].key){    
    high = mid - 1;
    } else {
    low = mid + 1;
    } 
  }
    for(j = i - 1; j > high; j --){
    L->r[j+1] = L->r[j];            //Shift all records after r[high] backward by one position
    }
    L->r[high+1] = L->r[0];         //The insertion position is always at r[high+1]
}
```
