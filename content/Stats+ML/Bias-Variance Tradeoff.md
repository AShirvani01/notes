---
title: Bias-Variance Tradeoff
tags:
---
---
When it comes to predictive models, there are generally 2 sources of error: bias and variance. Ideally, we want to minimize both, but in reality, there is some tradeoff between the two (i.e. at some point, decreasing bias increases variance, and vice versa). For this reason, choosing an unbiased estimator may not always yield the best performance.
>[!quote]
>


### Bias-Variance Decomposition with MSE
MSE can be shown to be a summation of bias and variance

>[!note] Derivation
>$$
>\begin{align*}
>MSE_{test} &= E\left[(y-\hat f(x))^2\right] \\
>&= E\left[(f(x)+\epsilon-\hat f(x))^2\right] && y = f(x) + \epsilon \\
>&= E\left[(f(x)-\hat f(x))^2 + \epsilon^2 + 2\epsilon \cdot(f(x) - \hat f(x))\right] \\
>&= E\left[(f(x)-\hat f(x))^2\right] + E\left[\epsilon^2\right] + 2E[\epsilon] \cdot E\left[(f(x) - \hat f(x))\right] && \epsilon \perp \!\!\! \perp \hat f(x)\\
>&= E\left[(f(x)-\hat f(x))^2\right] + \sigma^2  && E[\epsilon]=0, \ E\left[ \epsilon^2 \right] = \sigma^2\\
>\end{align*}
>$$
>>[!tip]- $E\left[(f(x)-\hat f(x))^2\right] = \text{Bias}^2 + \text{Variance}$
>>$$
>>\begin{align*}
>>E\left[(f(x)-\hat f(x))^2\right] &= E\left[(f(x) - E[\hat f(x)] + E[\hat f(x)]-\hat f(x))^2\right] \\
>>&= E\left[(f(x) - E[\hat f(x)])^2 + (E[\hat f(x)]-\hat f(x))^2 + 2(f(x) - E[\hat f(x)])\cdot(E[\hat f(x)]-\hat f(x))\right] \\
>>&= E\left[(f(x) - E[\hat f(x)])^2\right] + E\left[(E[\hat f(x)]-\hat f(x))^2\right] \\
>>&= (f(x) - E[\hat f(x)])^2 + E\left[(E[\hat f(x)]-\hat f(x))^2\right] \\
>>&= \text{Bias}^2 + \text{Variance}
>>\end{align*}
>>$$
>
>$\therefore MSE_{test} = \text{Bias}^2 + \text{Variance} + \sigma^2 \quad \text{💖}$

