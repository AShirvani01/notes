---
title: Kolmogorov's Probability Axioms
created: 2025-09-13
modified: 2025-10-04
---
## Using Expectation

A probability space (or distribution) is a triple of objects ($\Omega, L, E$) consisting in
1. **Sample space** $(\Omega):$ any set of outcomes
2. **Random variable space** $(L):$ any vector space of $\mathbb{R}$-valued functions on $\Omega$ that contains the constants, and is closed under absolute values (*i.e.* $X \in L \Rightarrow |X| \in L$)
3. **Expectation operator** $(E): L \longrightarrow \mathbb{R}$  any functional that is
	- Normed: $E1 = 1$
	- Non-negative: $X \ge 0 \Rightarrow EX \ge 0$
	- Linear: $E \sum\limits ^n_{i=1} a_i X_i = \sum \limits^n_{i=1} a_i EX_i$
	- Continuous: $0 \le X_n \uparrow X \Rightarrow 0 \le EX_n \uparrow EX$

## Reduced Form

*More popular, equivalent model, restricted to indicator functions*

A probability space (or distribution) is a triple of objects ($\Omega, \mathcal{F}, P$) consisting in
1. **Sample space** $(\Omega):$ any set of outcomes
2. **Event space** $(\mathcal{F}):$ any $\sigma$-algebra of subsets of $\Omega$, that is non-empty, and closed under countable unions and complements
3. **Probability measure** $(P): \mathcal{F} \longrightarrow [0,1]$ any set-function that is
	- Normed: $P(\Omega)=1$
	- Non-negative: $A \in \mathcal{F} \Rightarrow P(A) \ge 0$
	- $\sigma$-additive: $P\left(\sum\limits^\infty_{i=1} A_i\right) = \sum\limits^\infty_{i=1} P(A_i)$

>[!tip] Note
>$\boldsymbol\sigma$***-additivity*** can be factored into:
>> 1. ***finite-additivity***: $P\left(\sum\limits_{i=1}^n A_i\right) = \sum\limits_{i=1}^n P(A_i)$ 
>> 2. ***continuity***: $A_n \rightarrow A \Longrightarrow P(A_n) \rightarrow P(A)$
>

From these axioms, we can derive some useful properties:
- Nullity: $P(\varnothing)=0$
>[!note]- Proof
>Let $A_i = \varnothing$ for $i \ge 1$, and notice $\varnothing = \bigcup\limits_{i=1}^\infty A_i \overset{or}{=}\sum\limits^\infty_{i=1} A_i$. Applying the probability measure, we get
>$$
>\begin{align*}
>P(\varnothing) &= P(\sum\limits^\infty_{i=1} A_i) \\
>&= \sum\limits^\infty_{i=1} P(\varnothing) && \text{from }\sigma\text{-additivity}\\
>\end{align*}
>$$
>Given $P$ is bounded by $[0,1]$, $P(\varnothing)$ must be $0$. 💖

- Finite-additivity: $P(A+B) = P(A) + P(B)$
>[!note]- Proof
>Let $A_1,\dots,A_n$ be a sequence of disjoint sets for any $n \in \mathbb{N}$, and $A_{n+1}=\varnothing, \dots$ and so on. Applying $\sigma$-additivity, we get
>$$
>\begin{align*}
>P(\sum\limits^\infty_{i=1} A_i) &= \sum\limits^\infty_{i=1} P(A_i) \\
>P(\sum\limits^n_{i=1} A_i + \sum\limits^\infty_{i=n} \varnothing) &= \sum\limits^n_{i=1} P(A_i) + \sum\limits^\infty_{i=n} P(\varnothing) \\
>P(\sum\limits^n_{i=1} A_i) &= \sum\limits^n_{i=1} P(A_i) \quad \text{💖} && \text{from nullity: }P(\varnothing)=0 
>\end{align*}
>$$
>

- Complementarity: $P(A^c) = 1 - P(A)$
>[!note]- Proof
>$P(A \cup A^c) \overset{\sigma-add}{=} P(A) + P(A^c) = P(\Omega) \overset{normed}{=} 1 \Longrightarrow P(A^c) = 1-P(A)$ 💖
- Negative additivity: $P(A-B) = P(A)-P(AB)$
>[!note]- Proof
>$$
\begin{align*}
P(A) &= P((AB)\cup(AB^c)) \\
&= P(AB) + P(AB^c) && \text{finite-additivity} \\
\Longrightarrow P(AB^c) \overset{or}{=} P(A-B) &= P(A) - P(AB) \quad \text{💖}
\end{align*}
$$

- Monotonicity: $A \subseteq B \Rightarrow P(A) \le P(B)$
>[!note]- Proof
>Given $A \subseteq B$, we can write $P(B)$ as:
>$$
\begin{align*}
P(B) &= P(A\cup(B-A)) \\
 &= P(A) + P(B-A) && \text{finite-additivity} \\
 &\ge P(A)\quad \text{💖}
\end{align*}
$$