---
title: Theory
description: T(h)reeooorrryy
---

## Tree Definition

A <u>**tree**</u> is a collection of <u>nodes</u> (or vertices) and <u>edges</u>. If there are <u>**n** nodes</u>, there will be <u>**n-1** edges</u>. For every node, there is a edge coming from its parent. That is not the case for the <u>root node</u>.

More formally,
> A tree is a collection of nodes where one of the node is taken as the root node and the rest of the nodes are divided into disjoint subsets. Each subset is a tree or subtree. 

> A tree is an undirected and connected acyclic graph. There are no cycles or loops. Each node can be like the root node of its own subtree, making recursion a useful technique for tree traversal. 

## Terminology

1. **Root** - The very first node of a tree is the root node.
2. **Parent** - A node is a parent to its descendants or the child nodes which are connected to it with just one edge.
3. **Child** - A node is a child of the previous node if it's connected to it with one edge.
4. **Siblings** - Sibling nodes are nodes which have the same parent.
5. **Descendants** - Descendant nodes are all the nodes which are reachable from a particular node.
6. **Ancestors** - Ancestor nodes are all the nodes along the path from a particular node all the way to the root node.
7. **Degree of a node** -  The degree of a node is the number of direct children in its possession.
8. **Degree of a tree** - Maximum degree of nodes in the tree
9. **Leaf Nodes** - All the nodes with a degree of 0.
10. **Level** - Level is the minimum number of nodes starting from the root to a particular node. Starts at 1.
11. **Height** - Height of a tree is the number of edges starting from the root to a particular node. Starts at 0.

## Binary Tree Definition

A <u>**binary tree**</u> is a tree which has a degree of less than or equal to 2.

To calculate the number of different trees that can be generated for a number <u>**n**</u>, we use the <u>**Catalan Number Formula**</u> which is:

$$
\frac{Cn^{2n}}{n + 1}
$$

To calculate the number of different trees with a maximum height for a given number <u>**n**</u> of nodes, we do:

$$
2^{(n - 1)}
$$

To calculate the number of different trees that can be generated for a number <u>**n**</u> of labeled nodes, we do:

$$
\frac{Cn^{2n}}{n + 1} \times n!
$$

To calculate the minimum number of nodes given a height of a binary tree, we do:

$$
nodes = height + 1
$$

To calculate the maximum number of nodes given a height of a binary tree, we do:

$$
nodes = 2^{height + 1} - 1
$$

To calculate the minimum height given number of nodes of a binary tree, we do:

$$
height = \log2(nodes+1) - 1
$$

To calculate the maximum height given number of nodes of a binary tree, we do:

$$
height = nodes - 1
$$

And finally, the height of a binary tree can be between:

$$
\log2(nodes+1) - 1 \leq height \leq nodes - 1
$$

And the number of nodes of a binary tree can be between:

$$
height + 1 \leq nodes \leq 2^{height + 1} - 1
$$

### Strict Binary Tree

A <u>**strictly binary**</u> tree is a type of tree where every parent node has exactly zero or two children.


## Representation of Binary Trees

### Array Representation

In an array representation of a binary tree, an element at index $ i $ has its left child at index $ 2i $ and its right child at $ 2i + 1 $.
Additionally, a child's parent can be obtained by $ \lfloor \frac{i}{2} \rfloor $.

### Linked Representation

In a linked representation, the binary tree can be represented as a class which consists of a field of type **T** which is the data and two fields of type **Node**
which represent the left and the right children of the current node

```java
public class Node<T> {
    Node<T> left;
    Node<T> right;
    T data;

    // Constructors, Getters and Setters here...
}
```