---
title: O Notation
created: 2025-10-27
modified: 2025-10-29
---
---
$O$ notation is shorthand for describing the asymptotic behaviour of deterministic/probabilistic functions.

## Deterministic
Let $x_n$ and $a_n>0$ be deterministic sequences

### Small o
*Convergence*

$$x_n = o(a_n) \Longleftrightarrow \frac{x_n}{a_n} \rightarrow 0$$

Intuitively, $x_n << a_n$ as $n \to \infty$.

### Big O
*Eventually bounded by a constant*

$$x_n = O(a_n) \Longleftrightarrow \limsup_{n \to \infty} \left|\frac{x_n}{a_n}\right| < \infty$$
>[!tip]
>When people talk about Big O notation for algorithm time/space complexity, this is usually what they're referring to.

>[!example] Algorithm example
>Suppose we have some algorithm with a runtime of $f(n)=2n+5$. 
>- Claim: Constant time complexity $O(1)$
>$$\limsup_{n \to \infty} \left|\frac{2n+5}{1}\right| = \infty \Rightarrow \text{not satisfied}$$
>- Claim: Linear time complexity, $O(n)$
>$$\limsup_{n \to \infty} \left|\frac{2n+5}{n}\right| = \limsup_{n \to \infty} \left|2 + \frac{5}{n}\right| = 2 < \infty \Rightarrow \text{Bounded by n}$$
>- Claim: Quadratic time complexity, $O(n^2)$
>$$\limsup_{n \to \infty} \left|\frac{2n+5}{n^2}\right| = \limsup_{n \to \infty} \left|\frac{2}{n} + \frac{5}{n^2}\right| = 0 < \infty \Rightarrow \text{Bounded by $n^2$, but not tight}$$
## Probabilistic
Let $X_n$ be a sequence of random variables
### Small o
*Convergence in Probability*

$$X_n = o_p(a_n) \Longleftrightarrow \frac{X_n}{a_n} \overset{P}{\rightarrow} 0$$

### Big O
*Stochastically Bounded*

$$X_n = O_p(a_n) \Longleftrightarrow \forall \ \epsilon > 0, \ \exists \ M < \infty \text{ such that } \limsup_{n \to \infty} P\left(\left|\frac{X_n}{a_n}\right| > M\right)<\epsilon$$

- Small $o$ implies Big $O$, i.e. $X_n = o_p(a_n) \Rightarrow X_n = O_p(a_n)$
- $O_p(1) + o_p(1) = O_p(1)$
- $O_p(1) \cdot o_p(1) = o_p(1)$
