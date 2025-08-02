---
title: Simple Linear Regression
tags:
---
> [!abstract]- TL;DR
Simply drawing a line of best fit through a group of data points is essentially all it is, without the mathematical rigor. By doing this, we assume that the relationship between predictor and response is linear, with all residuals being IID normal distributions centered around the trendline.

>[!faq]+ Motivation
>Given a group of data points with a response, $y_i$, and a predictor, $x_i$, it would be useful to  draw a simple trendline that fits through the data and gives a nice, interpretable approximation of the linear relationship between predictor and response.

Linear Regression is arguably the most fundamental type of statistical model that seeks to estimate a linear relationship between predictors and the response. Simple linear regression is a special case where the number of predictors $p=1$.
## Model Definition (in scalar form)

$$Y_i = \beta_0 + \beta_1 X_i + \epsilon_i, \quad \epsilon_i | X_i \overset{iid}{\sim}N(0,\sigma^2) \quad \forall \ i = 1, \dots, n$$

- $Y_i$ : the response/outcome/dependent variable (random)
- $X_i$ : the predictor/feature/independent variable (random)
- $\beta_0$ : the intercept (to be estimated by model)
- $\beta_1$ : the slope (to be estimated by model)
- $\epsilon_i$ : the error/residual (random)

> [!danger]- Notation
>Different ways of expressing simple linear regression
>### Scalar
>$Y_i = \beta_0 + \beta_1 X_i + \epsilon_i,$[^1] $\quad \epsilon_i | X_i \overset{iid}{\sim}N(0,\sigma^2) \quad \forall \ i = 1, \dots, n$ 
>### Vector
>$\mathbf{y} = \beta_0 \mathcal{\mathbf{1_n}} + \beta_1 \mathbf{x} + \boldsymbol \epsilon, \quad \boldsymbol \epsilon | \mathbf{x} \sim MVN(\mathbf{0},\sigma^2 \mathbf{I_n}), \quad \mathbf{y} = \begin{bmatrix} Y_1 \\ \vdots \\ Y_n \end{bmatrix}, \quad \mathbf{x} = \begin{bmatrix} X_1 \\ \vdots \\ X_n \end{bmatrix}, \quad \boldsymbol \epsilon = \begin{bmatrix} \epsilon_1 \\ \vdots \\ \epsilon_n \end{bmatrix}$
>### Matrix
>$\mathbf{y} = \mathbf{X} \boldsymbol \beta + \boldsymbol \epsilon, \quad \boldsymbol \epsilon | \mathbf{X} \sim MVN(\mathbf{0},\sigma^2 \mathbf{I_n}), \quad \mathbf{y} = \begin{bmatrix} Y_1 \\ \vdots \\ Y_n \end{bmatrix}, \quad \textbf{X} = \begin{bmatrix} 1 & X_1 \\ \vdots & \vdots \\ 1 & X_n \end{bmatrix}, \quad \boldsymbol \beta = \begin{bmatrix} \beta_0 \\ \beta_1 \end{bmatrix}, \quad \boldsymbol \epsilon = \begin{bmatrix} \epsilon_1 \\ \vdots \\ \epsilon_n \end{bmatrix}$
>
>[^1]: You may recognize this as $y=mx+b$, with an added error term.

Given a dataset $\{x_i, y_i\}^n_{i=1}$ we can use the realizations of $X_i$ and apply an expectation to 'remove' the error term from the equation to yield the following:

$$\hat y_i := E[Y_i|X_i = x_i] = \beta_0 + \beta_1 x_i, \quad \forall \ i = 1, \dots, n$$

which is also referred to as the fitted/predicted values.

## Estimation
Now all that's left is estimating the coefficients, which is commonly done using Ordinary Least Squares (OLS).

$$\underset{\beta_0, \ \beta_1}{\arg\!\min} \sum_{i=1}^n \epsilon_i^2, \quad \epsilon_i^2 =  \left[y_i - (\beta_0 + \beta_1 x_i)\right]^2$$

>[!tip] Why take the square?
>- More heavily penalizes fitted values ($\hat y_i$) further away from the true values ($y_i$)
>- Prevents cancellation of positive and negative residuals
>- Easy to work with algebraically


## Assumptions
You tend to hear/read about 4 major assumptions of Linear regression (in no particular order):
1. Linearity ($E[\epsilon_i | X_i]=0$)
2. Equal Variance in residuals/Homoscedasticity ($Var[\epsilon_i | X_i]=\sigma^2$)
3. Independence ($Cov(\epsilon_i, \epsilon_j)=0 \quad \forall \ i \neq j$)
4. Normality ($\epsilon_i | X_i \sim Normal$)

*Notice how all 4 assumptions are covered by $\epsilon_i | X_i \overset{iid}{\sim}N(0,\sigma^2) \quad \forall \ i = 1, \dots, n$

Other assumptions you might hear:

5. Data is perfectly measurable/fixed (Usually from Bayesian profs since from a frequentist perspective, this is inherently already assumed)
6. No/low multicollinearity amongst predictors (N/A for simple linear regression)










