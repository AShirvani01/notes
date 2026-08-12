---
title: Probability
tags:
  - fundamentals
---
# Surface-level

Statistics is essentially the study of data, and data is inherently uncertain; we can never say for sure what outcome will occur. The best we can do is try to quantify the uncertainty of said outcomes. This is where Probability comes in. Before we jump into statistics, we need some base in probability, which is why I label this page 00.



# Standard-level

## Probability model

Probability begins with 3 important objects: Sample space, Events, and the Probability measure.

>[!definition] **Definition**: Sample space
>A ***sample space*** $\Omega$ is the set of all possible outcomes of some random experiment.

Example: Flipping a coin has sample space $\Omega = \{Heads, Tails\}$.

>[!definition] **Definition**: Event
>An ***event*** $A$ is a subset of the sample space, i.e., $A \subseteq \Omega$.

Example: Flipping a coin has 4 possible events: $\emptyset, \{Heads\}, \{Tails\}, \{Heads, Tails\}$.

>[!definition] **Definition**: Probability measure
>A ***probability measure*** $\mathbb P$ assigns to each event $A$ a number $\mathbb P(A)$ satisfying:
>1. **Non-negative**: $\mathbb P(A) \ge 0$ for all events $A$
>2. **Normed**: $\mathbb P(\Omega) = 1$
>3. **(Countable) additivity**: if $A_1, A_2, \dots$ are [[Set theory#^pairwise-disjoint|pairwise disjoint]] events, then
>$$
>\mathbb P\left(\bigcup_{n=1}^\infty A_n\right) = \sum_{n=1}^\infty \mathbb P(A_n)
>$$

## Properties of Probability

From these 3 axioms, we can derive some useful properties of $\mathbb P$.

>[!corollary] **Corollary**: Basic properties of $\mathbb P$
>Let $A$ and $B$ be events, and let $A_1, \dots, A_n$ be [[Set theory#^pairwise-disjoint|pairwise disjoint]] events.
>1. **Nullity**: $\mathbb P(\emptyset)=0$
>2. **Finite additivity**: $\mathbb P\left(\bigcup\limits_{i=1}^n A_i\right) = \sum \limits_{i=1}^n \mathbb P(A_i)$
>3. **Complementarity**: $\mathbb P(A^c) = 1 - \mathbb P(A)$
>4. **Monotonicity**: $A \subseteq B \Rightarrow \mathbb P(A) \le \mathbb P(B)$
>5. **Negative additivity**: $\mathbb P(A \cap B^c) = \mathbb P(A) - \mathbb P(A\cap B)$
>>[!proof]-
>>
>>1. Let $A_1 = A_2 = \emptyset$. Applying countable additivity, 
>>$$
>>\mathbb P(\emptyset) = \mathbb P(\emptyset) + \mathbb P(\emptyset) \Rightarrow \mathbb P(\emptyset) = 0 \qquad \blacksquare
>>$$
>>2. Let $A_1,\dots,A_n$ be pairwise disjoint and set $A_{n+1}=A_{n+2}=\dots=\emptyset$. Applying countable additivity,
>>$$
>>\mathbb P \left(\bigcup\limits^\infty_{i=1} A_i \right) = \sum\limits^\infty_{i=1} \mathbb P(A_i) \Longrightarrow \mathbb P\left(\bigcup\limits^n_{i=1} A_i\right) = \sum\limits^n_{i=1} \mathbb P(A_i)
>>$$
>>since $\mathbb P(\emptyset) = 0$ (which follows from axiom 3 applied to the sequence $\emptyset, \emptyset, \dots$). $\qquad \blacksquare$
>>
>>3. $\mathbb P(A) + \mathbb P(A^c) \overset{f\text{-}add}{=} \mathbb P(A \cup A^c) = \mathbb P(\Omega) = 1 \Longrightarrow \mathbb P(A^c) = 1-\mathbb P(A) \qquad \blacksquare$
>>4. $\mathbb P(B) = \mathbb P(A\cup(B\cap A^c)) \overset{f\text{-}add}{=} \mathbb P(A) + \mathbb P(B \cap A^c) \ge \mathbb P(A) \qquad \blacksquare$
>>5.
>>$$
>>\begin{align*}
>>\mathbb P(A) &= \mathbb P((A\cap B)\cup(A\cap B^c)) \\
>>&= \mathbb P(A\cap B) + \mathbb P(A\cap B^c) && \text{finite additivity} \\
>>&\Longrightarrow \mathbb P(A \cap B^c) = \mathbb P(A) - \mathbb P(A\cap B) \qquad \blacksquare
>>\end{align*}
>>$$

>[!theorem] **Theorem**: Law of Total Probability (Unconditioned)
>Let $A_1, A_2, \dots$ be events that partition the sample space $\Omega$ (pairwise disjoint, and their union is $\Omega$). Let $B$ be any event. Then
>$$
>\mathbb P(B) = \sum_{n} \mathbb P(A_n \cap B)
>$$
>>[!proof]-
>>
>>The events $(A_1 \cap B), (A_2 \cap B), \dots$ are pairwise disjoint, and their union is $B$. The result follows from countable additivity. $\qquad \blacksquare$

>[!theorem] **Theorem**: Principle of Inclusion-Exclusion (2-event case)
>Let $A$ and $B$ be two events. Then,
>$$
>\mathbb P(A \cup B) = \mathbb P(A) + \mathbb P(B) - \mathbb P(A \cap B)
>$$
>>[!proof]-
>>
>>We can write both $A \cup B$ and $A$ as disjoint unions:
>>$$
>>\begin{align*}
>>A \cup B &= B \cup (A \cap B^c) \\
>>A &= (A\cap B) \cup (A \cap B^c)
>>\end{align*}
>>$$
>>Applying probability measures and finite-additivity yields
>>$$
>>\begin{align*}
>>\mathbb P (A \cup B) &= \mathbb P(B) + \mathbb P (A \cap B^c)  \\
>>\mathbb P(A) &= \mathbb P(A\cap B) + \mathbb P(A \cap B^c) \\
>>\Longrightarrow \mathbb P(A \cup B) &= \mathbb P(A) + \mathbb P(B) - \mathbb P(A \cap B) \qquad \blacksquare
>>\end{align*}
>>$$

## Inequalities

The following theorems provide bounds for our probabilities, which is particularly useful when it is difficult (or even impossible) to calculate the desired probability.

>[!theorem] **Theorem**: Boole's Inequality (Subadditivity)
>Let $A_1, A_2, \dots$ be a countable sequence of events. Then,
>$$
>\mathbb P\left(\bigcup_{n=1}^\infty A_n\right) \le \sum_{n=1}^\infty \mathbb P(A_n)
>$$
>>[!proof]-
>>
>>Let $B_1, B_2, \dots$ be a countable sequence of events such that 
>>$$
>>\begin{align*}
>>B_1 &:= A_1 \\
>>B_2 &:= A_2 \cap A_1^c  \\
>>B_3 &:= A_3 \cap (A_1 \cup A_2)^c
>>\end{align*}
>>$$
>>and so on, making the sequence of $B_n$'s [[Set theory#^pairwise-disjoint|pairwise disjoint]] with $\mathbb P(B_n) \le \mathbb P(A_n)$ for all $n$. Thus, applying countable additivity, it follows that
>>$$
>>\mathbb P\left(\bigcup_{n=1}^\infty A_n\right) = \mathbb P\left(\bigcup_{n=1}^\infty B_n\right) = \sum_{n=1}^\infty \mathbb P(B_n) \le \sum_{n=1}^\infty \mathbb P(A_n) \qquad \blacksquare
>>$$

Boole's inequality may be extended to lower bounds as well.

>[!theorem] **Theorem**: Bonferonni's Inequality
>Let $A_1, A_2, \dots$ be a countable sequence of events. Then,
>$$
>\mathbb P\left(\bigcap_{n=1}^\infty A_n\right) \ge 1 - \sum_{n=1}^\infty \mathbb P(A_n^c)
>$$
>>[!proof]-
>>
>>$$
>>\mathbb P\left(\bigcap_{n=1}^\infty A_n\right) \overset{(1)}{=} 1 - \mathbb P\left(\left(\bigcap_{n=1}^\infty A_n\right)^c\right) \overset{(2)}{=} 1 - \mathbb P\left(\bigcup_{n=1}^\infty A_n^c \right) \overset{(3)}{\ge} 1 - \sum_{n=1}^\infty \mathbb P(A_n^c) \qquad \blacksquare
>>$$
>>$(1)$ Complementarity
>>$(2)$ De Morgan's Law
>>$(3)$ Boole's Inequality

This lower bound is not always informative (could be negative).

## Conditional Probability

>[!definition] **Definition**: Conditional Probability
>For events $A, B$ with $\mathbb P(B) > 0$,
>$$
>\mathbb P(A \mid B) := \frac{\mathbb P(A \cap B)}{\mathbb P(B)}
>$$

Intuitively, this restricts the sample space to $B$ and renormalizes so $\mathbb P(B \mid B) = 1$.

>[!theorem] **Theorem**: Law of Total Probability (conditioned)
>Let $A_1, A_2, \dots$ partition $\Omega$, each with $\mathbb P(A_n) > 0$. Then for any event $B$,
>$$
>\mathbb P(B) = \sum_{n} \mathbb P(B \mid A_n)\, \mathbb P(A_n)
>$$
>>[!proof]-
>>
>>$$
>>\mathbb P(B) \overset{(1)}{=} \sum_n \mathbb P(A_n \cap B) \overset{(2)}{=} \sum_n \mathbb P(B \mid A_n)\mathbb P(A_n) \qquad \blacksquare
>>$$
>>$(1)$ Law of Total Probability (Unconditioned)
>>$(2)$ Definition of Conditional Probability

>[!theorem] **Theorem**: Bayes' Theorem
>Let $A$ and $B$ be events with positive probability. Then
>$$
>\mathbb P(A \mid B) = \frac{\mathbb P(B \mid A)\,\mathbb P(A)}{\mathbb P(B)}
>$$
>>[!proof]-
>>
>>Follows from definition of Conditional Probability. $\qquad \blacksquare$

Combined with the Law of Total Probability, this lets us expand the denominator:
$$
\mathbb P(A \mid B) = \frac{\mathbb P(B \mid A)\,\mathbb P(A)}{\sum_n \mathbb P(B \mid A_n)\,\mathbb P(A_n)}
$$

## Independence
## Independence

>[!definition] **Definition**: Independence
>Two events $A$ and $B$ are ***independent*** if
>$$
>\mathbb P(A \cap B) = \mathbb P(A)\, \mathbb P(B)
>$$

Equivalently, if $\mathbb P(B) > 0$, independence means $\mathbb P(A \mid B) = \mathbb P(A)$, i.e., knowing $B$ occurred tells you nothing about $A$.

>[!definition] **Definition**: Pairwise independence
>Events $A_1, \dots, A_n$ are ***pairwise independent*** if
>$$
>\mathbb P(A_i \cap A_j) = \mathbb P(A_i)\, \mathbb P(A_j) \quad \text{for all } i \ne j
>$$

>[!definition] **Definition**: Mutual independence
>Events $A_1, \dots, A_n$ are ***mutually independent*** if for every subset $I \subseteq \{1, \dots, n\}$,
>$$
>\mathbb P\left(\bigcap_{i \in I} A_i\right) = \prod_{i \in I} \mathbb P(A_i)
>$$

Note: pairwise independence does **not** imply mutual independence in general.

Example: 
Flip two fair coins independently, and let $C$ be the event that the two flips match (same outcome). Let
$$
A = \{\text{first flip is Heads}\}, \quad B = \{\text{second flip is Heads}\}, \quad C = \{\text{flips match}\}
$$
Each pair among $A, B, C$ is independent (e.g. $\mathbb P(A \cap C) = \mathbb P(A)\mathbb P(C) = \tfrac14$), so $A, B, C$ are pairwise independent. But
$$
\mathbb P(A \cap B \cap C) = \mathbb P(\text{both Heads}) = \tfrac14 \ne \tfrac18 = \mathbb P(A)\mathbb P(B)\mathbb P(C)
$$
so $A, B, C$ are **not** mutually independent.

# Measure-theoretic

A lot of these concepts don't require measure-theoretic treatment. For those that do, see the Measure-theoretic probability / measure theory appendix.