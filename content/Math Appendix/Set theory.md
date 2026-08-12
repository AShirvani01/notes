---
title: Set Theory
---
# Motivation

Set theory is a foundational framework for essentially all of math. This page will cover the non-axiomatic set theory that you'll need for the other math and stats pages.

# Sets

A ***set*** is a collection of distinct objects. These objects are formally called ***elements*** and could be numbers, symbols, words, variables, functions, or even other sets. Given a set $A$, we write $x \in A$ if $x$ (whatever it may be) is an element of $A$. Conversely, if $x$ is not an element of $A$, we write $x \notin A$. Sets are generally notated by listing its elements between curly braces, separated by commas, or alternatively notated using some logical condition ([set-builder notation](https://en.wikipedia.org/wiki/Set-builder_notation)).

Examples:
- $\{1,5,2\}$
- $\{Heads, Tails\}$
- $\{\{1\}, \{2,3\}\}$
- $\{x : x \text{ is an integer}\}$ or $\{x \mid x \text{ is an integer}\}$

>[!definition] **Definition**: Common Number sets
>From basic to most complex:
>- Natural numbers ($\mathbb N$): $\{1,2,3,\dots\}$
>- Whole numbers ($\mathbb W$): $\{0,1,2,3,\dots\}$
>- Integers ($\mathbb Z$): $\{\dots,-3,-2,-1,0,1,2,3,\dots\}$
>- Rationals ($\mathbb Q$): $\{\frac{p}{q}: p\in \mathbb Z, q \in \mathbb N\}$
>- Real numbers ($\mathbb R$): Any value on the number line
>- Irrationals ($\mathbb I$): $\mathbb R \backslash \mathbb Q$
>- Complex numbers ($\mathbb C$): $\{a+bi : a,b \in \mathbb R, i = \sqrt{-1}\}$

## Relations

| Symbol            | Name           | Meaning                                    |
| ----------------- | -------------- | ------------------------------------------ |
| $\omega \in A$    | Membership     | $\omega$ is an element of $A$              |
| $\omega \notin A$ | Non-membership | $\omega$ is not an element of $A$          |
| $A \subseteq B$   | Subset         | every element of $A$ is in $B$             |
| $A \subset B$     | Proper subset  | $A \subseteq B$ but $A \neq B$             |
| $A = B$           | Set equality   | $A$ and $B$ have exactly the same elements |

## Set operations

>[!definition] **Definition**: Union
>The ***union*** of sets $A$ and $B$, written as $A \cup B$ or $A + B$, is defined by 
>$$
>A \cup B := \{\omega: \omega \in A \text{ or } \omega \in B\}
>$$

>[!definition] **Definition**: Intersection
>The ***intersection*** of sets $A$ and $B$, written as $A \cap B$, is defined by 
>$$
>A \cap B := \{\omega: \omega \in A \text{ and } \omega \in B\}
>$$

>[!proposition] **Proposition**: Properties of Unions/Intersections

>[!definition] **Definition**: Disjoint (or mutually exclusive)
>The two sets $A$ and $B$ are ***disjoint*** or ***mutually exclusive*** if 
>$$
>A \cap B = \emptyset
>$$

>[!definition] **Definition**: Pairwise disjoint (or mutually exclusive)
>A set of sets $A_1, A_2, \dots$ are ***pairwise disjoint*** or ***pairwise mutually exclusive*** if
>$$
>A_i \cap A_j = \emptyset \text{ for all } i\ne j
>$$

^pairwise-disjoint

>[!definition] **Definition**: Complement
>The ***complement*** of a set $A \subseteq \Omega$, written as $A^c$, is defined by
>$$
>A^c := \{\omega:\omega \in \Omega \text{ and } \omega \notin A\}
>$$

>[!definition] **Definition**: Set difference
>The ***set difference*** of two sets $A$ and $B$, written as $A \backslash B$ or $A-B$, is defined by
>$$
>A-B \equiv A\backslash B := \{w: \omega \in A \text{ and } \omega \notin B\}
>$$

Set differences may also be written in terms of intersections and complements, $A \cap B^c$. Note that $A\backslash B$ does not necessarily imply $B\backslash A$, which motivates our next operator.

>[!definition] **Definition**: Symmetric difference
>The ***symmetric difference*** of two sets $A$ and $B$, written as $A\Delta B$, is defined by
>$$
>\begin{align*}
>A \Delta B &:= (A-B) + (B-A) \\
>&\equiv (A\backslash B) \cup (B \backslash A) \\
>&\equiv \left(A \cap B^c\right) \cup \left(B\cap A^c\right)
>\end{align*}
>$$

>[!definition] **Definition**: Cartesian product
>The ***cartesian product*** or simply ***product*** of two sets $A$ and $B$, written as $A \times B$, is defined by
>$$
>A \times B := \{(a,b) : a \in A, b \in B\}
>$$

>[!definition] **Definition**: Power Set
>Given a set $\Omega$, a ***power set*** $\mathcal{P}(\Omega)$ is the complete set of all possible subsets of $\Omega$, including the empty set and itself. In set notation,
>$$
>\mathcal P(\Omega) := \{A: A \subseteq \Omega\}
>$$

# Functions

>[!definition] **Definition**: Function
>Let $A$ and $B$ be two sets. A ***function*** from $A$ to $B$ is a rule or mapping that takes each element $x \in A$ and associates with it a single element of $B$, written as 
>$$
>f:A \longrightarrow B
>$$
>Given an element $x \in A$, the expression $f(x)$ is used to represent the element of $B$ associated with $x$ by $f$. The set $A$ is called the ***domain*** of $f$. The ***range*** of $f$ is not necessarily equal to $B$ but refers to the subset of $B$ given by $\{y \in B:y=f(x) \text{ for some } x \in A\}$.

>[!definition] **Definition**: Injective ($1-1$)
>A function $f: A \longrightarrow B$ is ***injective*** or ***one-to-one*** if for any $a_1, a_2 \in A$,
>$$
>a_1 \ne a_2 \Longrightarrow f(a_1) \ne f(a_2)
>$$

>[!definition] **Definition**: Surjective (onto)
>A function $f:A \longrightarrow B$ is ***surjective*** or ***onto*** if for any $b \in B$, there exists an $a \in A$ such that $f(a)=b$.

>[!definition] **Definition**: Bijective ($1-1$ correspondence)
>A function $f: A \longrightarrow B$ is ***bijective*** or in ***$1-1$ correspondence*** if it is both *injective* ($1-1$) and surjective (onto).

>[!definition] **Definition**: Cardinality
>***Cardinality***  is a measure of the number of elements in a set. 

^cardinality

>[!definition] **Definition**: Countable
>A set is ***countable*** if it is either *finite* or *countably infinite*. A set is *countably infinite* if there exists a $1-1$ bijection between the set and the natural numbers $\mathbb N$. In simpler words, you can arrange the elements of the set in an infinite list with every element appearing once.

^countable

>[!definition] **Definition**: Uncountable
>A set is ***uncountable*** or ***uncountably infinite*** if it is not *countable*. 

^uncountable

>[!definition] **Definition**: Sequence
>A ***sequence*** $x$ in a set $X$ is a function with domain $\mathbb N$, written as
>$$
>x: \mathbb N \longrightarrow X
>$$
>>[!notation]-
>>
>>Sequences are generally written with round brackets to distinguish them from sets (although this is not always the case). While the index $n$ is technically an argument of the function $x$, it is typically written as a subscript, i.e., $x_n := x(n)$. The following examples are all equivalent:
>>- $(x_n)_{n=1}^\infty$
>>- $(x_n)_{n\in\mathbb N}$
>>- $(x_n, n\in \mathbb N)$

Informally, you may think of sequences as an ordered set/list. Under this definition, sequences are naturally **always** countable.





>[!theorem] **Theorem**: DeMorgan's laws
>In the two-set case with sets $A$ and $B$,
>1. $(A \cup B)^c = A^c \cap B^c$
>2. $(A \cap B)^c = A^c \cup B^c$
>>[!proof]-
>>
>>1.
>>$$
>>\begin{align*}
>>x \in (A \cup B)^c &\Longleftrightarrow x \notin A \cup B \\
>>&\Longleftrightarrow x \notin A \text{ and } x \notin B \\
>>&\Longleftrightarrow x \in A^c \cap B^c
>>\end{align*}
>>$$
>>2. 
>>$$
>>\begin{align*}
>>x \in (A \cap B)^c &\Longleftrightarrow x \notin A \cap B \\
>>&\Longleftrightarrow x \notin A \text{ or } x \notin B \\
>>&\Longleftrightarrow x \in A^c \cup B^c
>>\end{align*}
>>$$
>
>Extending this to the countably infinite case, given sets $A_1, A_2, \dots$,
>1. $\left(\bigcup \limits_{n=1}^\infty A_n\right)^c = \bigcap \limits_{n=1}^\infty A_n^c$
>2. $\left(\bigcap \limits_{n=1}^\infty A_n\right)^c = \bigcup \limits_{n=1}^\infty A_n^c$
>>[!proof]-
>>
>>1.
>>$$
>>\begin{align*}
>>x \in \left(\bigcup \limits_{n=1}^\infty A_n\right)^c &\Longleftrightarrow x \notin \bigcup \limits_{n=1}^\infty A_n \\
>>&\Longleftrightarrow x \notin A_n \text{ for all } n\in \mathbb N \\
>>&\Longleftrightarrow x \in A_n^c \text{ for all } n\in \mathbb N \\
>>&\Longleftrightarrow x \in \bigcap \limits_{n=1}^\infty A_n^c
>>\end{align*}
>>$$
>>2. 
>>$$
>>\begin{align*}
>>x \in \left(\bigcap \limits_{n=1}^\infty A_n\right)^c &\Longleftrightarrow x \notin \bigcap \limits_{n=1}^\infty A_n \\
>>&\Longleftrightarrow x \notin A_n \text{ for some } n \in \mathbb N \\
>>&\Longleftrightarrow x \in A_n^c \text{ for some } n \in \mathbb N \\
>>&\Longleftrightarrow x \in \bigcup \limits_{n=1}^\infty A_n^c
>>\end{align*}
>>$$



inverse images
convergence of sets