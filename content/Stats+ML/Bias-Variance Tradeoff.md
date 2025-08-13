---
title: Bias-Variance Tradeoff
tags:
---
---
When it comes to predictive models, there are 2 sources of reducible error: **Bias** and **Variance**.
- **Bias**: how far the average prediction is from the truth
	- High bias when a model is too simple and misses true patterns in the data, leading to *underfitting.
	- High Bias, Low Variance models: Linear regression, Logistic regression, Shallow Decision Trees
- **Variance**: how much predictions fluctuate across different datasets
	- High variance when a model is too complex and captures noise as if it were informative patterns in the data, leading to *overfitting*.
	- Low Bias, High Variance models: k-Nearest Neighbours with small k, Deep Decision Trees, Deep Neural Networks
Ideally, we want to minimize both, but in reality, there is some tradeoff between the two (i.e. decreasing bias increases variance, and vice versa). Instead, we minimize the total error, which tends to be somewhere in the middle in terms of model complexity (See [[Bias-Variance Tradeoff#^ef7f36|Figure]] below). For this reason, choosing an unbiased estimator may not always yield the best performance.

>[!tip] Bias and Variance as a function of Model Complexity
>**Overfit**: Right of optimum
>**Underfit**: Left of optimum
![[Bias-Variance.png]]

^ef7f36

### Bias-Variance Decomposition with MSE
MSE can be shown to be a summation of bias, variance, and some irreducible error.

>[!note] Derivation
>Let $\hat f(x)$ be a function that approximates the true function $f(x)$
>$$
>\begin{align*}
>MSE_{test} &= E\left[(y-\hat f(x))^2\right] \\
>&= E\left[(f(x)+\epsilon-\hat f(x))^2\right] && y = f(x) + \epsilon \\
>&= E\left[(f(x)-\hat f(x))^2 + \epsilon^2 + 2\epsilon \cdot(f(x) - \hat f(x))\right] \\
>&= E\left[(f(x)-\hat f(x))^2\right] + E\left[\epsilon^2\right] + 2E[\epsilon] \cdot E\left[(f(x) - \hat f(x))\right] && \epsilon \perp \!\!\! \perp \hat f(x)\\
>&= E\left[(f(x)-\hat f(x))^2\right] + \sigma^2  && E[\epsilon]=0, \ E\left[ \epsilon^2 \right] = \sigma^2\\
>\end{align*}
>$$
>>[!tip] $E\left[(f(x)-\hat f(x))^2\right] = \text{Bias}^2[\hat f(x)] + \text{Var}[\hat f(x)]$
>>$$
>>\begin{align*}
>>E\left[(f(x)-\hat f(x))^2\right] &= E\left[(f(x) - E[\hat f(x)] + E[\hat f(x)]-\hat f(x))^2\right] \\
>>&= E\left[(f(x) - E[\hat f(x)])^2 + (E[\hat f(x)]-\hat f(x))^2 + 2(f(x) - E[\hat f(x)])\cdot(E[\hat f(x)]-\hat f(x))\right] \\
>>&= E\left[(f(x) - E[\hat f(x)])^2\right] + E\left[(E[\hat f(x)]-\hat f(x))^2\right] \\
>>&= (f(x) - E[\hat f(x)])^2 + E\left[(E[\hat f(x)]-\hat f(x))^2\right] \\
>>&= \text{Bias}^2[\hat f(x)] + \text{Var}[\hat f(x)]
>>\end{align*}
>>$$
>
>$\therefore MSE_{test} = \text{Bias}^2[\hat f(x)] + \text{Var}[\hat f(x)] + \sigma^2 \quad \text{💖}$

