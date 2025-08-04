---
title: Ordinary Least Squares
tags:
  - estimation
---
>[!abstract]- Explain Like I'm 5
> We draw a line through a bunch of points to try to see how a predictor $X$ and a response $Y$ are linearly related. The distance from the line to any one data point is called the error or residual since it is how far off we are from the true value. But how do we know which line fits best? Usually, we take each residual, square it, and add them all together to get the **R**esidual **S**um of **S**quares (**RSS**), which tells us how far off our line is *overall*. The best line would be the line with the ***lowest*** RSS. The actual process of finding the best line is called **O**rdinary **L**east **S**quares (**OLS**).

Ordinary Least Squares (OLS) is the standard method for estimating linear regression parameters. The [[Gauss-Markov Theorem]] proves it's the Best Linear Unbiased Estimator (BLUE) when assumptions hold. We define OLS as the following (in vector/matrix notation):
$$\boldsymbol \beta^* = \underset{\boldsymbol \beta}{\arg\!\min} \ \| \boldsymbol{\epsilon} \|_2^2, \quad \boldsymbol\epsilon = \begin{bmatrix} \epsilon_0 \\ \vdots \\ \epsilon_n \end{bmatrix} = \mathbf{y} - \mathbf{X}\boldsymbol\beta$$

You may interpret the optimal model parameter ($\boldsymbol{\beta}^*$) as the $\boldsymbol{\beta}$ that minimizes the Residual Sum of Squares (RSS). With some derivation and rearranging, we get a nice, closed-form solution:

$$\boldsymbol{\hat\beta} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}$$

>[!danger]- Notation
>- $\boldsymbol \beta$ : true unknown parameter
>- $\boldsymbol{\beta^*}$ : star more typically used in ML to represent hypothetical, optimal parameters
>- $\boldsymbol{\hat \beta}$ : hat favoured in Stats to represent any sample estimate of the true parameter
>	- I like to reserve the star for optimization problems (i.e. $\arg\!\min$) and hat for the rest
>- For clarity, you may see the the estimation process as a subscript (i.e. $\boldsymbol \beta^*_{OLS}$), however in my experience most of the time it's omitted
>- Different ways of writing the Residual Sum of Squares (RSS):
>$$\|\boldsymbol \epsilon \|_2^2 = \boldsymbol{\epsilon}^T \boldsymbol{\epsilon} = \sum_{i=1}^n \epsilon_i^2 = \textbf{RSS}$$
>- The double bar ($\| \|$)around the $\boldsymbol\epsilon$ denotes a [norm](https://en.wikipedia.org/wiki/Norm_(mathematics)), with the subscript $_2$ specifying that it's an L2 norm (aka Euclidean norm), and the superscript $^2$ being an ordinary square. This notation is fairly common for LASSO and RIDGE regularization terms.

>[!note] Derivation
>Note: you can do the derivation in scalar form, but it can be written a lot more concisely in vector/matrix notation.
>
>$$
>\begin{align*}
>\boldsymbol \beta^* &= \underset{\boldsymbol \beta}{\arg\!\min} \ \boldsymbol\epsilon^T \boldsymbol \epsilon \\
>0 &= \frac{\partial \boldsymbol{\epsilon}^T \boldsymbol{\epsilon}}{\partial \boldsymbol{\hat \beta}} \\
>0 &= \frac{\partial \boldsymbol \epsilon^T \boldsymbol \epsilon}{\partial \boldsymbol \epsilon} \cdot\frac{\partial \boldsymbol{\epsilon}}{\partial \boldsymbol{\hat\beta}} && \text{Chain rule}\\
>0 &= 2 \boldsymbol{\epsilon}^T \cdot -\mathbf{X} && \text{Take numerator layout ($\epsilon^T$: row vector) so dimensions match} \\
0 &= (\mathbf{y}-\mathbf{X}\boldsymbol{\hat \beta})^T \cdot \mathbf{X} \\
0 &= \mathbf{X}^T (\mathbf{y}-\mathbf{X}\boldsymbol{\hat \beta}) && \mathbf{A}^T\mathbf{B} = 0 \Longleftrightarrow \mathbf{B}^T \mathbf{A}=0 \\
>\boldsymbol{\hat\beta} &= (\mathbf{X}^T \mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}
>
>\end{align*}
>$$
