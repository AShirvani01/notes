---
title: Law of Large Numbers
created: 2025-10-26
modified: 2025-10-29
---
---

Let $X_1, \dots, X_n \overset{iid}{\sim} \mathbb{P}$ with mean $\mu$ and variance $\sigma^2$, $\quad \bar X_n := \frac{1}{n} \sum\limits^n_{i=1} X_i$
## Weak LLN

$$\text{Finite mean}\Longleftrightarrow E\left[|\bar X_n|\right] < \infty \Longleftrightarrow\bar X_n \in L_1 \Longrightarrow\bar X_n \overset{P}{\rightarrow} \mu$$

## Strong LLN

$$\text{Finite variance} \Longleftrightarrow E\left[|\bar X_n|^2\right] < \infty \Longleftrightarrow\bar X_n \in L_2 \Longrightarrow \bar X_n \overset{a.s.}{\rightarrow} \mu$$

## Uniform LLN
Stronger version where the convergence holds uniformly for all parameter values $\theta$ in the parameter space $\Theta$.
$$\sup_{\theta \in \Theta}\left|\frac{1}{n} \sum_{i=1}^n X_i(\theta) - \mu(\theta)\right| \overset{p}{\longrightarrow} 0$$
### Special case: Glivenko-Cantelli Theorem
Let $X_i(\theta) := I(X_i \le \cdot)$