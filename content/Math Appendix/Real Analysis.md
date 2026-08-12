---
title: Real Analysis
---
# Motivation

Real Analysis is essentially calculus done rigorously. The central challenge in analysis is to exploit the power of the mathematical infinite via limits, series, derivatives, integrals, etc. without falling victim to faulty intuition. This is important because a lot of what we do in (frequentist) statistics involves convergence/limits/asymptotic arguments.

# The Real Numbers

> [!definition] **Definition**: Supremum and infimum
> 
> A real number $s$ is the _**supremum**_ (least upper bound) of $A \subseteq \mathbb R$, written as $s:=\sup A$, if $s$ is an upper bound for $A$ and $s\le b$ for every other upper bound $b$. Similarly, $i:=\inf A$ is the _**infimum**_ (greatest lower bound) of $A$ if $i$ is a lower bound for $A$ and $i\ge \ell$ for every other lower bound $\ell$.

> [!definition] **Definition**: Maximum and minimum
> 
> If $\sup A$ exists and $\sup A \in A$, it is called the _**maximum**_ of $A$, written $\max A$. Likewise, if $\inf A \in A$, it is called the _**minimum**_ of $A$, written $\min A$.

$\max A$ and $\min A$ may not exist.

> [!axiom] **Axiom**: Completeness
> 
> Every nonempty set of real numbers that is bounded above has a least upper bound (supremum).

> [!theorem] **Theorem**: Archimedean Property
> 
> 1. For any $x\in\mathbb R$ there exists $n\in\mathbb N$ with $n>x$
> 2. For any $y>0$ there exists $n\in\mathbb N$ with $\frac1n<y$.

> [!theorem] **Theorem**: Density of $\mathbb Q$ and $\mathbb I$ in $\mathbb R$
> 
> For every $a,b \in \mathbb R$ such that $a<b$, there exists a rational $r$ such that $a<r<b$ and an irrational $t$ such that $a<t<b$.

# Sequences

> [!definition] **Definition**: Convergence (sequence)
> 
> A sequence $(a_n)$ ***converges*** to a real number $a$, written as $(a_n) \to a$ or $\lim_{n \to \infty} a_n = a$, if for every $\epsilon>0$ there exists $N\in\mathbb N$ such that 
> $$
> n\ge N \implies |a_n-a|<\epsilon
> $$

A sequence that does not converge is said to ***diverge***.

> [!theorem] **Theorem**: Uniqueness of Limits
> 
> The limit of a sequence, when it exists, is unique.

>[!definition] **Definition**: Boundedness (sequences)
>A sequence $(x_n)$ is ***bounded*** if there exists a number $M>0$ such that
>$$
>|x_n| \le M \text{ for all } n \in \mathbb N
>$$

Every convergent sequence is bounded.

> [!theorem] **Theorem**: Algebraic Limit Theorem
> 
> Let $a := \lim a_n$ and $b := \lim b_n$. Then,
> 1. $\lim(ca_n)=ca$ for all $c \in \mathbb R$
> 2. $\lim(a_n+b_n)=a+b$
> 3. $\lim(a_nb_n)=ab$
> 4. $\lim\left(\frac{a_n}{b_n}\right)=\frac{a}{b}$, provided $b\ne0$

> [!theorem] **Theorem**: Order Limit Theorem
> 
> Let $a := \lim a_n$ and $b := \lim b_n$. Then,
> $$
> a_n\le b_n \text{ for all } n \in \mathbb N \Longrightarrow a \le b
> $$

>[!definition] **Definition**: Monotone
>A sequence $(a_n)$ is ***monotone*** if it is either increasing or decreasing. A sequence is ***increasing*** if 
>$$
>a_n \le a_{n+1} \text{ for all } n\in\mathbb N
>$$
>and ***decreasing*** if
>$$
>a_n \ge a_{n+1} \text{ for all } n\in\mathbb N
>$$

> [!theorem] **Theorem**: Monotone Convergence Theorem
> 
> If a sequence is monotone and bounded, then it converges.

> [!theorem] **Theorem**: Bolzano–Weierstrass Theorem
> 
> Every bounded sequence contains a convergent subsequence.

> [!definition] **Definition**: Cauchy sequence
> 
> A sequence $(a_n)$ is a ***Cauchy sequence*** if for every $\epsilon>0$ there exists $N \in \mathbb N$ such that 
> $$
> m,n\ge N \implies |a_n-a_m|<\epsilon
> $$

> [!theorem] **Theorem**: Cauchy Criterion
> 
> A sequence converges if and only if it is a Cauchy sequence.

# Series

> [!definition] **Definition**: Convergence (series)
> 
> Let $(b_n)$ be a sequence. The series $\sum_{n=1}^\infty b_n$ converges to $B$ if the sequence of partial sums $(s_m) = b_1+\cdots+b_m$ converges to $B$.

> [!theorem] **Theorem**: $p$-series test
> 
> $\sum \limits_{n=1}^\infty \frac1{n^p}$ converges iff $p>1$.

> [!theorem] **Theorem**: Necessary condition
> 
> If $\sum \limits_{k=1}^\infty a_k$ converges, then $a_k \to 0$.

> [!theorem] **Theorem**: Comparison Test
> 
> If $0\le a_k\le b_k$ for all $k \in \mathbb N$. Then,
> 1. $\sum \limits_{k=1}^\infty b_k$ converges $\implies \sum \limits_{k=1}^\infty a_k$ converges
> 2. $\sum \limits_{k=1}^\infty a_k$ diverges $\implies \sum \limits_{k=1}^\infty b_k$ diverges

> [!theorem] **Theorem**: Absolute Convergence Test
> 
> If $\sum \limits_{n=1}^\infty |a_n|$ converges, then $\sum \limits_{n=1}^\infty a_n$ converges.

> [!theorem] **Theorem**: Alternating Series Test
> 
> If $(a_n)$ is decreasing and $a_n\to0$, then $\sum \limits_{n=1}^\infty (-1)^{n+1}a_n$ converges.

# Open, Closed, and Compact Sets

>[!definition] **Definition**: $\epsilon$-neighbourhood
>The $\epsilon$-neighbourhood of $a \in \mathbb R$, written as $V_\epsilon(a)$ is defined by
>$$
>V_\epsilon(a) := \{x \in \mathbb R : |x-a| < \epsilon\}
>$$

> [!definition] **Definition**: Open set
> 
> A set $O \subseteq \mathbb R$ is _**open**_ if for every $a \in O$, there exists an $\epsilon$-neighbourhood $V_\epsilon(a) \subseteq O$.

> [!definition] **Definition**: Limit point
> 
> A point $x$ is a _**limit point**_ of a set $A$ if every $\epsilon$-neighbourhood $V_\epsilon(x)$ of $x$ intersects the set $A$ at some point other than $x$.

>[!theorem] **Theorem**: Limit point
>A point $x$ is a ***limit point*** of a set $A$ if and only if $x=\lim a_n$ for some sequence $(a_n)$ contained in $A$ satisfying $a_n \ne x$ for all $n \in \mathbb N$.

>[!definition] **Definition**: Isolated point
>A point $a \in A$ is an ***isolated point*** of $A$ if it is not a limit point of $A$.

>[!definition] **Definition**: Closed set
>A set $F \subseteq \mathbb R$ is ***closed*** if it contains its limit points.

> [!definition] **Definition**: Closure
> 
> Let $A \subseteq \mathbb R$ be a set with a set of limit points $L$. The ***closure*** of $A$, written as $\bar A$, is defined by
> $$
> \bar A := A \cup L
> $$

$\bar A$ is the smallest closed set containing $A$.

> [!definition] **Definition**: Compact set
> 
> A set $K \subseteq \mathbb R$ is _**compact**_ if every sequence in $K$ has a subsequence converging to a limit in $K$.

>[!definition] **Definition**: Boundedness (sets)
>A set $A \subseteq \mathbb R$ is ***bounded*** if there exists $M>0$ such that
>$$
>|a| \le M \text{ for all } a \in A
>$$

### Open covers

>[!definition] **Definition**: Open cover
>Let $A \subseteq \mathbb R$. An *open cover* for $A$ is a (possibly infinite) collection of open sets $\{O_\lambda : \lambda \in \Lambda\}$ whose union contains the set $A$; that is, $A \subseteq \bigcup_{\lambda \in \Lambda} O_\lambda$. Given an open cover for $A$, a *finite subcover* is a finite subcollection of open sets from the original open cover whose union still manages to completely contain $A$.

> [!theorem] **Theorem**: Heine–Borel Theorem
> Let $K \subseteq \mathbb R$. All of the following statements are equivalent in the sense that any one of them implies the two others:
> 1. $K$ is compact.
> 2. $K$ is closed and bounded.
> 3. Every open cover for $K$ has a finite subcover.
> 

^heine-borel

It is more useful to think of compact sets as generalizations of closed intervals. Whenever a fact involving closed intervals is true (e.g., Extreme Value Theorem, uniform continuity), it is often the case that the same result holds when we replace “closed interval” with “compact set.”

# Continuity

> [!definition] **Definition**: Continuous
> 
> A function $f:A\to\mathbb R$ is ***continuous*** at $c$ if for every $\epsilon>0$ there exists $\delta>0$ such that 
> $$
> |x-c|<\delta \implies |f(x)-f(c)|<\epsilon
> $$
> Equivalently, $(x_n)\to c \implies f(x_n)\to f(c)$.

> [!theorem] **Theorem**: Algebraic Continuity Theorem
> 
> Sums, scalar multiples, products, and quotients (where defined) of continuous functions are continuous. Compositions of continuous functions are continuous.

> [!theorem] **Theorem**: Extreme Value Theorem
> 
> A continuous function on a compact set attains a maximum and a minimum.

> [!definition] **Definition**: Uniform continuity
> 
> $f$ is uniformly continuous on $A$ if for every $\epsilon>0$ there exists $\delta>0$ such that $x,y\in A, |x-y|<\delta \implies |f(x)-f(y)|<\epsilon$ ($\delta$ independent of $x,y$).

> [!theorem] **Theorem**: Uniform continuity on compact sets
> 
> A function continuous on a compact set is uniformly continuous there.

> [!theorem] **Theorem**: Intermediate Value Theorem
> 
> If $f:[a,b]\to\mathbb R$ is continuous and $L$ lies between $f(a)$ and $f(b)$, then $f(c)=L$ for some $c\in(a,b)$.

# Derivatives

> [!definition] **Definition**: Differentiability
> 
> $g'(c) = \lim_{x\to c} \dfrac{g(x)-g(c)}{x-c}$, when this limit exists.

> [!theorem] **Theorem**: Differentiable $\implies$ continuous
> 
> If $g$ is differentiable at $c$, it is continuous at $c$.

> [!theorem] **Theorem**: Algebraic Differentiability Theorem
> 
> $(f+g)'=f'+g'$, $(kf)'=kf'$, $(fg)'=f'g+fg'$, $(f/g)'=\dfrac{gf'-fg'}{g^2}$ (where defined).

> [!theorem] **Theorem**: Chain Rule
> 
> $(g\circ f)'(c) = g'(f(c))\cdot f'(c)$.

> [!theorem] **Theorem**: Mean Value Theorem
> 
> If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f'(c) = \dfrac{f(b)-f(a)}{b-a}$ for some $c\in(a,b)$.
> 
> > [!corollary]
> > 
> > If $g'=0$ on an interval, $g$ is constant there. If $f'=g'$ on an interval, $f=g+k$ for some constant $k$.

> [!theorem] **Theorem**: L'Hôpital's Rule
> 
> If $f(a)=g(a)=0$ (or $g\to\pm\infty$), $g'\ne0$ nearby, and $\lim \frac{f'}{g'}=L$, then $\lim \frac fg = L$.

# Sequences and Series of Functions

> [!definition] **Definition**: Uniform convergence
> 
> $(f_n)\to f$ uniformly on $A$ if for every $\epsilon>0$ there exists $N$ (independent of $x$) such that $n\ge N, x\in A \implies |f_n(x)-f(x)|<\epsilon$.

> [!theorem] **Theorem**: Continuous Limit Theorem
> 
> If $(f_n)$ are continuous and converge uniformly to $f$, then $f$ is continuous.

> [!theorem] **Theorem**: Differentiable Limit Theorem
> 
> If $f_n\to f$ pointwise, each $f_n$ differentiable, and $(f_n')$ converges uniformly to $g$, then $f'=g$.

> [!theorem] **Theorem**: Term-by-term Differentiability Theorem
> 
> If $\sum f_n'$ converges uniformly to $g$ and $\sum f_n(x_0)$ converges for some $x_0$, then $\sum f_n = f$ uniformly, with $f'=g$.

> [!theorem] **Corollary**: Weierstrass $M$-Test
> 
> If $|f_n(x)|\le M_n$ for all $x\in A$ and $\sum M_n$ converges, then $\sum f_n$ converges uniformly on $A$.


