---
title: Theory
description: What the fuck is recursion?
---

## What is recursion?

In plain words, recursion is what you get when you want to flex to everyone around you whilst you're trying to hide the smokes coming out of your stack cause your code cause a stack overflow. Normal people use loops and stacks but nooooo, you have to be a 1337c0d3 kid to solve your fancy tree and graph traversal problems hehe.

Anyways, I digress. A recursive function is a function that calls itself.

```java
private int func(int n) {
    if (n == 0) return 0;
    System.out.println(n); // prints numbers from n to 0
    return func(n - 1);
}
```

Recursive functions have two phases, the __ascending__ and the __descending__. __Ascending__ phase is the phase before the recursive call whereas __descending__ is the phase after the recursive call.

```java
private void func(int n) {
    if (n > 0)
    // Any calls here are part of the ascending phase
    func(n - 1) + n; // <--- + n will be done at descending phase as it is after the method call
    // Any calls here are part of the descending phase
}
```

## Types of Recursion
1. Tail Recursion
2. Head Recursion
3. Tree Recursion
4. Indirect Recursion
5. Nested Recursion

### Tail Recursion

If a recursive function's last statement is the recursive call then this is a __Tail Recursive Function__.

```java
private void fun(int n) {
    if (n > 0) {
        System.out.println(n);
        fun(n - 1);
    }
}
```

This means that all the operations prior to the recursive call will be performed at calling time (__ascending__) and no operations will be performed at returning time (__descending__).

### Head Recursion

If a recursive function's first statement is the recursive call then this is a __Head Recursive Function__.

```java
private void fun(int n) {
    if (n > 0) {
        fun(n - 1);
        System.out.println(n);
    }
}
```

This means that all the operations after the recursive call will be performed at returning time (__descending__) and no operations will be performed at calling time (__ascending__).

### Tree Recursion

If a recursive function is calling itself more than one time then it is a __Tree Recursive Function__.

```java
private void fun(int n) {
    if (n > 0) {
        System.out.println(n);
        fun(n - 1);
        fun(n - 1);
    }
}
```

### Indirect Recursion

In __Indirect Recursion__, there may be a function __A__ which may call a function __B__ which may then call a function __C__, all that in a circular fashion.

```java
private void fun1(int n) {
    if (n > 0) {
        System.out.println(n);
        fun2(n - 1);
    }
}

private void fun2(int n) {
    if (n > 0) {
        System.out.println(n);
        fun1(n - 2);
    }
}
```
