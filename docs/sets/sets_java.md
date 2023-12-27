---
title: Sets in Java
description: Java-related Set stuff for Leetcodez
---

## Initialization

Use the interface as the type and initialize a `new HashSet<>();`

```java
Set<T> set = new HashSet<>();
```

## Operations

### Adding

Adding is done in constant time `O(1)`. Returns `true` if operation is successful otherwise returns `false` if entry already exists.

```java
Set<Integer> set = new HashSet<>();
set.add(1); // Returns true
set.add(1); // Returns false
```
