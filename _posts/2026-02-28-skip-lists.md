---
layout: post
title: "Skip Lists"
date: 2026-02-28 00:00:00
description: "Skip Lists Memtables for LSM Trees"
tags: database-internals rust
categories: system-design 
giscus_comments: false
related_posts: false
---

In order to build the MemTable for my [Rusty LSM-Tree](https://github.com/vgraman0/RustyLSM-Storage-Engine), I used skip lists. 

Skip lists are typically preferred over balanced binary search trees since storage engines are highly concurrent.
- Rebalancing a binary tree would require a global lock that would add a lot of overhead. 
- Insertion in a skip list can be done using lock-free or wait-free algos (using compare-and-swap).


## Skip Lists

A skip list is a probabilistic data structure that provides $O(\log n)$ average-case search, insertion, and deletion within a sorted list of elements.

<p align="center">
  <img src="/assets/img/skip-lists/image-21.png" width="650">
</p>


### Search

We always start at the top-most layer at the sentinel node.
1. If the next node's key is less than of equal to the key we are looking for,we hop to that node.
2. If the next node's key is greater than our target (or if there is no next node), we drop down one level to the layer below and try moving forward again.
3. Repeat this until we reach the bottom layer. If the key is not found on layer 0, then it does not exist in the list.

### Insertion 

1. Search for the key. As we move right and drop down, we keep track of the last node we visited at every level.
2. Pick a random height $H$ for the new node.
3. For every level from $0$ to $H-1$, we point the new node's `next` to the node that the update neighbor was previously pointing to. Then, we point the update neighbor to our new node.

### Deletion

