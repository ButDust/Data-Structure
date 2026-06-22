---
outline: deep
title: Graphs
---
# Graphs
## 图的深度优先遍历
```cpp
void DFS(ALGraph G,int v,bool visited[],status(*visit)(ALGraph, int)){
    visited[v] = true; //标注访问过的标记
    visit(G,v);        //访问序号为v的顶点，需要注意的是，此处应先标记待访问顶点后再对该顶点进行访问
    for(int w=FirstAdjVex(G,v); w>=0; w=NextAdjVex(G,v,w)){ //处理所有未访问的邻接顶点
    if(!visit[w]){
    DFS(G,w,visited,visit);
    }
  }
}
void DFSTraverse(ALGraph G,status
```

## Example
Input:

```text
[Input]
```

Output:

```text
[Output]
```

