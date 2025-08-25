---
title: Ordinary Least Squares
tags:
  - estimation
created: 2025-08-03
modified: 2025-08-25
---
---
>[!abstract]- Explain Like I'm 5
> We draw a line through a bunch of points to try to see how a predictor $X$ and a response $Y$ are linearly related. The distance from the line to any one data point is called the error or residual since it is how far off we are from the true value. But how do we know which line fits best? Usually, we take each residual, square it, and add them all together to get the **R**esidual **S**um of **S**quares (**RSS**), which tells us how far off our line is *overall*. The best line would be the line with the ***lowest*** RSS. The actual process of finding the best line is called **O**rdinary **L**east **S**quares (**OLS**).

Ordinary Least Squares (OLS) is the standard method for estimating linear regression parameters. The [[Gauss-Markov Theorem]] proves it's the Best Linear Unbiased Estimator (BLUE) when assumptions hold. We define OLS as the following (in vector/matrix notation):

$$
\begin{align*}
\boldsymbol \beta^* = \underset{\boldsymbol \beta}{\arg\!\min} \ \| \boldsymbol{\epsilon} \|_2^2, \quad \boldsymbol\epsilon = \begin{bmatrix} \epsilon_0 \\ \vdots \\ \epsilon_n \end{bmatrix} = \mathbf{y} - \mathbf{X}\boldsymbol\beta
\end{align*}
$$

You may interpret the optimal model parameter ($\boldsymbol{\beta}^*$) as the $\boldsymbol{\beta}$ that minimizes the Residual Sum of Squares (RSS). 

>[!danger]- Notation
>- $\boldsymbol \beta$ : true unknown parameter
>- $\boldsymbol{\beta^*}$ : star more typically used in ML to represent hypothetical, optimal parameters
>- $\boldsymbol{\hat \beta}$ : hat favoured in Stats to represent any sample estimate of the true parameter
>	- I like to reserve the star for optimization problems (i.e. $\arg\!\min$) and hat for the rest
>- In ML, you'll tend to see the parameter denoted as $\mathbf{w}$ for 'weight' instead of $\boldsymbol \beta$
>- For clarity, you may see the the estimation process as a subscript (i.e. $\boldsymbol \beta^*_{OLS}$), however in my experience most of the time it's omitted
>- Different ways of writing the Residual Sum of Squares (RSS):
>$$
>\begin{align*}
>\textbf{RSS} = \|\boldsymbol \epsilon \|_2^2 = \boldsymbol{\epsilon}^T \boldsymbol{\epsilon} = \sum_{i=1}^n \epsilon_i^2
>\end{align*}
>$$
>- The double bar ($\| \|$)around the $\boldsymbol\epsilon$ denotes a [norm](https://en.wikipedia.org/wiki/Norm_(mathematics)), with the subscript $_2$ specifying that it's an L2 norm (aka Euclidean norm), and the superscript $^2$ being an ordinary square. This notation is fairly common for LASSO and RIDGE regularization terms.

>[!faq] Why take the square?
>- More heavily penalizes fitted values ($\hat y_i$) further away from the true values ($y_i$)
>- Prevents cancellation of positive and negative residuals
>- Easy to work with algebraically

With some derivation and rearranging, we get a nice, closed-form solution:

$$
\begin{align*}
\boldsymbol{\hat\beta} = (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}
\end{align*}
$$
>[!note]- Derivation
>**Note**: you can do the derivation in scalar form, but it can be written a lot more concisely in vector/matrix notation. Also, there are different ways to arrive at the same answer.
>
>$$
>\begin{align*}
>\boldsymbol \beta^* &= \underset{\boldsymbol \beta}{\arg\!\min} \ \boldsymbol\epsilon^T \boldsymbol \epsilon \\
>0 &= \frac{\partial \boldsymbol{\epsilon}^T \boldsymbol{\epsilon}}{\partial \boldsymbol{\hat \beta}} \\
>0 &= \frac{\partial \boldsymbol \epsilon^T \boldsymbol \epsilon}{\partial \boldsymbol \epsilon} \cdot\frac{\partial \boldsymbol{\epsilon}}{\partial \boldsymbol{\hat\beta}} && \text{Chain rule}\\
>0 &= 2 \boldsymbol{\epsilon}^T \cdot -\mathbf{X} && \text{Take numerator layout ($\epsilon^T$: row vector) so dimensions match} \\
>0 &= (\mathbf{y}-\mathbf{X}\boldsymbol{\hat \beta})^T \cdot \mathbf{X} \\
>0 &= \mathbf{X}^T (\mathbf{y}-\mathbf{X}\boldsymbol{\hat \beta}) && \mathbf{A}^T\mathbf{B} = 0 \Longleftrightarrow \mathbf{B}^T \mathbf{A}=0 \\
>\boldsymbol{\hat\beta} &= (\mathbf{X}^T \mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}
>\end{align*}
>$$


## Bias and Variance of OLS Estimators
We can show that OLS estimators are unbiased with variance inversely proportional to $n$.
Assumptions used for...
- Unbiasedness:
	- $\text{Assumption 1: Linearity } (E[\boldsymbol\epsilon | \mathbf{X}]=\mathbf{0}$)
- Variance:
	- $Cov[\boldsymbol\epsilon | \mathbf{X}] = \sigma^2\mathbf{I_n} \begin{cases} \text{Assumption 2: Homoscedasticity} & (Var[\epsilon_i | X_i]=\sigma^2 \quad \forall \ i) \\ \text{Assumption 3: Independence} & (Cov[\epsilon_i, \epsilon_j]=0 \quad \forall \ i \neq j) \end{cases}$ 

>[!note] Proof
>### Bias
>$$
>\begin{align*}
>E[\boldsymbol{\hat\beta}] &= E[(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}] \\
>&=(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T E[\mathbf{y}] \\
>&= (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T E[\mathbf{X}\boldsymbol{\beta} + \boldsymbol \epsilon] \\
>&= (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{X} \boldsymbol \beta && E[\boldsymbol\epsilon | \mathbf{X}]=0\\
>&= \boldsymbol \beta \quad \text{💖} \\
>&\Longrightarrow \text{unbiased}
>\end{align*}
>$$
>### Variance
>$$
>\begin{align*}
>Cov[\boldsymbol{\hat\beta}] &= Cov[(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T\mathbf{y}] \\
>&= (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T Cov[\mathbf{y}] \mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1} \\
>&= (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T Cov[\boldsymbol \epsilon] \mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1} \\
>&= (\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T \sigma^2\mathbf{I_n} \mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1} && Cov[\boldsymbol\epsilon | \mathbf{X}] = \sigma^2\mathbf{I_n}\\
>&= \sigma^2(\mathbf{X}^T\mathbf{X})^{-1}\mathbf{X}^T  \mathbf{X}(\mathbf{X}^T\mathbf{X})^{-1} \\
>&= \sigma^2(\mathbf{X}^T\mathbf{X})^{-1} \quad \text{💖}
>\end{align*}
>$$
>To see why $Var[\boldsymbol{\hat \beta}] \propto \frac{1}{n}$, we can write the inverse square matrix term as a sum of vectors:
>
>$$
>\begin{align*}
>\mathbf{X}^T\mathbf{X} = \sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i^T, \quad \mathbf{x}_i = \begin{bmatrix} 1 \\ x_{1i} \\ \vdots \\ x_{pi} \end{bmatrix}, \quad P = \text{\# of predictors}
>\end{align*}
>$$
>
>Notice how the larger $n$ is, the more $\mathbf{x}_i \mathbf{x}_i^T$'s are in the summation, in turn making $(\mathbf{X}^T\mathbf{X})^{-1}$ smaller in general. Another way of looking at it is through the Law of Large Numbers (LLN):
>$$
>\begin{align*}
>\frac{1}{n}&\mathbf{X}^T\mathbf{X} = \frac{1}{n}\sum_{i=1}^n \mathbf{x}_i \mathbf{x}_i^T \overset{p}{\rightarrow} E[\mathbf{x}_i \mathbf{x}_i^T] \\
>\Longrightarrow \quad&(\mathbf{X}^T\mathbf{X})^{-1} \approx \left(nE[\mathbf{x}_i \mathbf{x}_i^T]\right)^{-1} = \frac{1}{n}\left(E[\mathbf{x}_i \mathbf{x}_i^T]\right)^{-1}
>\end{align*}
>$$