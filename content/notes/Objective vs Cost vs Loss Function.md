---
title: Objective vs Cost vs Loss Function
tags:
---
---
>[!abstract]- Explain Like I'm 5
>Loss function is a part of a Cost function.
>Cost function is a type of objective function.

In my experience, everyone seems to have a different way of defining these terms, which is probably why you hear them seemingly being used interchangeably (especially loss and cost, which can be confusing).
## Loss Function

The loss function $\mathcal{L}(\cdot)$ is the metric we use to measure the error for a single data point. It must be a minimization problem.

## Cost Function
The cost function is the sum/mean of the loss functions over all data points, $\sum_{i=1}^n \mathcal{L}(\cdot)$.  It also must be a minimization problem. Sometimes, this also includes a regularization term.

## Objective Function
The objective is the most general form of function that we want to optimize. It can be either a minimization or maximization problem. Sometimes, this also includes a regularization term.
- e.g. MLE (Objective function that's not a cost function)

>[!example] Example with MSE
> | Objective/Cost | Loss |
> | ---- | -- |
> | $\frac{1}{n}\sum_{i=1}^n \epsilon_i^2 + \lambda \left \|\boldsymbol \beta \right \|$ or $\frac{1}{n}\sum_{i=1}^n \epsilon_i^2$ | $\epsilon_i^2$ |
