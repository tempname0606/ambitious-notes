---
title: Stacks in Java
description: Java-related Set stuff for Leetcodez
---


## Initialization

There are two ways of creating a Stack in Java

1. With the `Stack` class: 
```java
Stack<T> stack = new Stack<>();
```
2. With the `Deque` interface: `Deque<T> stack = new ArrayDeque();`
```java
Deque<T> stack = new ArrayDeque<>();
```

### Which one to choose?

1. The `Deque` interface brings us more flexibility than the `Stack` class.
2. The `Stack` class is Synchronized whereas the `Deque` interface isn't.
3. 

## Operations on Stack Class

### Push to the top of the stack

Pushing is done in constant time `O(1)`. Returns the argument back.

```java
Stack<T> stack = new Stack<>();
stack.push(1); // Returns 1
```


### Pop from the top of the stack

Popping is done in constant time `O(1)`. It returns the top element from the `Stack` if not empty, otherwise throws `EmptyStackException`.

```java
Stack<T> stack = new Stack<>();
stack.push(1); // Returns 1
stack.pop(); // Stack is now empty, pop returns number 1
```

### Peeking

Peeking is done in constant time `O(1)`. It returns the top element from the `Stack` without removing it if not empty, otherwise throws `EmptyStackException`.

```java
Stack<T> stack = new Stack<>();
stack.push(1); // Returns 1
stack.peek(); // Returns 1 without removing from the stack
```

### Check if Stack is empty

To check if the `Stack` is empty

```java
Stack<T> stack = new Stack<>();
stack.isEmpty(); // Returns true
stack.push(1); // Returns 1
stack.isEmpty() // returns false
```