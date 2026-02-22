---
title: Convergence of Random Variables
created: 2025-10-04
modified: 2025-10-28
---
## Types of Convergence
---
Let $X_1, \dots, X_n$ be a sequence of random variables with Cumulative Distribution Functions (CDF) $F_1, \dots, F_n$ and $X$ be another random variable with CDF $F$.
1. **Convergence in probability**
	$X_n \overset{P}{\rightarrow} X \Longleftrightarrow \lim \limits_{n \to \infty} P(|X_n - X| > \epsilon) = 0, \quad \forall \ \epsilon>0$
2. **Convergence in distribution**
	$X_n \overset{d}{\rightarrow} X \Longleftrightarrow \lim \limits_{n \to \infty} F_n(x) = F(x), \quad \forall \ x\in \mathbb{R} \text{ for which F is continuous}$
3. **Almost Sure convergence**
	$X_n \overset{a.s.}{\rightarrow} X \Longleftrightarrow P\left(\lim \limits _{n \to \infty}X_n = X\right) = 1$
4. **$L^p$ convergence**
	*also referred to as convergence in mean*
	$X_n \overset{L^p}{\rightarrow} X \Longleftrightarrow \lim \limits_{n \to \infty} E\left[|X_n -X|^p\right] = 0$
5. **Sure convergence**
	*also referred to as pointwise convergence*
	$X_n \rightarrow X \Longleftrightarrow \lim \limits_{n \to \infty} X_n(\omega) = X(\omega), \quad \forall \ \omega \in \Omega$ 

>[!danger]- Notation
>Almost Sure convergence may also be written as $X_n \overset{wP1}{\rightarrow} X$, where wP1 means "with Probability 1"


## Chain of Implications

$$
\begin{rcases*}
X_n \overset{a.s.}{\rightarrow} X \\
X_n \overset{L^p}{\rightarrow} X
\end{rcases*}
\Longrightarrow \quad X_n\overset{P}{\rightarrow}X \quad \Longrightarrow \quad X_n \overset{d}{\rightarrow}X
$$
>[!tip] Special case
>If $X_n \overset{d}{\rightarrow} c \Longrightarrow X_n \overset{P}{\rightarrow} c$, where $c$ is a constant.

## Algebraic operations
$$X_n \overset{P}{\rightarrow} X, \quad Y_n \overset{P}{\rightarrow} Y \Longrightarrow \begin{cases} 
	X_n + Y_n \overset{P}{\rightarrow} X + Y \\ 
	X_n \cdot Y_n \overset{P}{\rightarrow} X \cdot Y
\end{cases}
$$
$$X_n \overset{L^p}{\rightarrow} X, \quad Y_n \overset{L^p}{\rightarrow} Y \Longrightarrow X_n + Y_n \overset{L^p}{\rightarrow} X + Y$$
### Slutsky's theorem
$$X_n \overset{d}{\rightarrow} X, \quad Y_n \overset{P}{\rightarrow} c \Longrightarrow
\begin{cases}
	X_n + Y_n \overset{d}{\rightarrow} X + c \\
	X_n \cdot Y_n \overset{d}{\rightarrow} Xc \\
	\frac{X_n}{Y_n} \overset{d}{\rightarrow} \frac{X}{c}, & c \ne 0
\end{cases}
$$