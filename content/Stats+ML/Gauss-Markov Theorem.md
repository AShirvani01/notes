---
title: Gauss-Markov Theorem
tags:
---
---
The Gauss-Markov theorem proves that the OLS estimator is the Best Linear Unbiased Estimator (BLUE; i.e. lowest possible variance for an unbiased estimator). Note: It is possible to achieve lower variance than the lower bound if the estimator is biased (See [[Bias-Variance Tradeoff]]).

>[!note] Proof
>**Goal**: show that the variance of any other estimator of $\boldsymbol \beta$ is at least that of $\boldsymbol{\hat\beta}$.
>
>Let $\boldsymbol{\tilde\beta}$ be another linear unbiased estimator for $\boldsymbol \beta$: \
>$$\boldsymbol{\tilde\beta}:=\mathbf{Cy}, \quad \mathbf{C} = (\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T + \mathbf{D}, \quad \mathbf{D} = \text{P$\times$n non-zero matrix}$$ \
>Since we're only concerned with unbiased estimators, we must first find the value of $\mathbf{D}$ that makes this newly-defined estimator unbiased:
>$$
>\begin{align*}
>E[\boldsymbol{\tilde\beta}] &= E[\mathbf{Cy}] \\
>&= E\left[((\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T + \mathbf{D})\mathbf{y}\right] \\
>&= ((\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T + \mathbf{D})E\left[\mathbf{y}\right] \\
>&= ((\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T + \mathbf{D}) \mathbf{X} \boldsymbol\beta && E[\boldsymbol\epsilon | \mathbf{X}] = 0\\
>&= \boldsymbol{\beta} + \mathbf{DX}\boldsymbol\beta \\
>&= [\mathbf{I_p} + \mathbf{DX}]\boldsymbol\beta \\
>&\Longrightarrow \text{Unbiased @ }\mathbf{DX} = \mathbf{0}_{p\times p} 
>\end{align*}
>$$
>Now, we can compute the covariance
>$$
>\begin{align*}
>Cov[\boldsymbol{\tilde\beta}] &= Cov[\mathbf{Cy}] \\
>&= \mathbf{C} Cov[\mathbf{y}] \mathbf{C}^T \\
>&= \mathbf{C} \sigma^2 \mathbf{I_n} \mathbf{C}^T && Cov[\boldsymbol{\epsilon}] = \sigma^2 \mathbf{I_n} \\
>&= \sigma^2 \mathbf{CC}^T \\
>&= \sigma^2 \left[ (\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T + \mathbf{D} \right] \left[ (\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T + \mathbf{D} \right]^T \\
>&= \sigma^2 \left[ (\mathbf{X}^T\mathbf{X})^{-1} \mathbf{X}^T + \mathbf{D} \right] \left[ \mathbf{X} (\mathbf{X}^T\mathbf{X})^{-1}  + \mathbf{D}^T \right] \\
>&= \sigma^2 \left[ (\mathbf{X}^T\mathbf{X})^{-1} + (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{D}^T + \mathbf{D}\mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1} + \mathbf{DD}^T \right] \\
>&= \sigma^2 \left[ (\mathbf{X}^T\mathbf{X})^{-1} + \mathbf{DD}^T \right] && \mathbf{X}^T\mathbf{D}^T = \mathbf{DX} = \mathbf{0}_{p\times p} \\
>&= Cov[\boldsymbol{\hat\beta}_{OLS}] + \sigma^2 \mathbf{DD}^T \\
>&\geq Cov[\boldsymbol{\hat\beta}_{OLS}] \quad \textcolor{red}{❤️} && \mathbf{DD}^T = \text{positive semi-definite}
>\end{align*}
>$$


For more on why $\mathbf{DD}^T$ is positive semi-definite, see [[Types of Matrices#Positive Semi-definite|Types of Matrices]].
