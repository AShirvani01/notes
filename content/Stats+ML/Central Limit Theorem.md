---
title: Central Limit Theorem
created: 2025-10-26
modified: 2025-10-29
---
---
## Univariate
Let $X_1, \dots, X_n \overset{iid}{\sim} \mathbb{P}$ with mean $\mu$ and variance $\sigma^2$, $\quad \bar X_n := \frac{1}{n} \sum\limits^n_{i=1} X_i$

$$\text{Finite variance} \Longleftrightarrow 
E\left[|X_i|^2\right]  < \infty \Longleftrightarrow
E\left[|\bar X_n|^2\right]  < \infty \Longleftrightarrow
\bar X_n \in L_2 \Longrightarrow 
\sqrt{n}(\bar X_n - \mu) \overset{d}{\longrightarrow} N\left(0,\sigma^2\right) $$

## Multivariate
Let $\mathbf{X}_1, \dots, \mathbf{X}_n \overset{iid}{\sim} \mathbb{P}$ with random vectors $\mathbf{X}_i \in \mathbb{R}^d$ for all $i = 1,\dots,n$, mean vector $\boldsymbol\mu \in \mathbb{R}^d$, and covariance matrix $\boldsymbol\Sigma \in \mathbb{R}^{d \times d}$, $\quad \mathbf{\bar X}_n := \frac{1}{n} \sum\limits^n_{i=1} \mathbf{X}_i$

$$\text{Finite covariance} \Longleftrightarrow 
E\left[\lVert \mathbf{X}_i \rVert_2^2\right] < \infty \Longleftrightarrow 
E\left[\lVert \mathbf{\bar X}_n \rVert_2^2\right] < \infty \Longleftrightarrow 
\mathbf{\bar X}_n \in L_2^d \Longrightarrow 
\sqrt{n}(\mathbf{\bar X}_n - \boldsymbol\mu) \overset{d}{\longrightarrow} N_d\left(\mathbf{0},\boldsymbol\Sigma\right)$$