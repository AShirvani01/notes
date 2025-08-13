---
title: Cramer-Rao Lower Bound
tags:
---
---
### Unbiased
Say we have $X_1,\dots,X_n \overset{iid}{\sim} p(X;\theta)$ with a fixed, but unknown parameter $\theta$ that we are trying to estimate. The Cramer-Rao Lower Bound (CRLB) gives us the lowest attainable variance for our estimator $\hat \theta$ given that it is unbiased.

$$Var(\hat \theta) \ge \frac{1}{I_n(\theta)}, \quad I_n(\theta) = nE_{X\sim p(X;\theta)}\left[\left(\frac{\partial \ln p(X;\theta)}{\partial \theta}\right)^2\right] = -nE_{X\sim p(X;\theta)}\left[\frac{\partial^2 \ln p(X;\theta)}{\partial \theta^2}\right]   $$
>[!danger]- Notation
>$p(X;\theta)$ : some probability density/mass function of the random variable $X$ parameterized by a fixed $\theta$
>- The semicolon is usually used in frequentist statistics to distinguish between random and fixed arguments
>- Not the same as $p(X|\theta)$ since using '$|$' implies that $\theta$ is a random variable (Bayesian statistics)
>- May be written as $f(X;\theta)$ for PDFs to make it clear that the function is a density and not a probability
>
>$I_n(\theta)$ : Fisher Information for $n$ samples

>[!tip] Interpretation
>Fisher Information measures the curvature of the log-likelihood function (which you may be able to tell from the expectation of the second derivative), so we can interpret the relationship between Fisher Information and the CRLB as the following:
> $$I(\theta) \uparrow \Longleftrightarrow \text{Sharper peak on log likelihood} \Longleftrightarrow \text{More confident estimate} \Longleftrightarrow \text{CRLB} \downarrow$$

### Biased
If we are dealing with a biased estimator (i.e. $E[\hat \theta]=\theta + b(\theta)$), we generalize the CRLB as the following:

$$Var(\hat \theta) \ge \frac{|1+b'(\theta)|^2}{I_n(\theta)}, \quad I_n(\theta) = nE_{X\sim p(X;\theta)}\left[\left(\frac{\partial \ln p(X;\theta)}{\partial \theta}\right)^2\right] = -nE_{X\sim p(X;\theta)}\left[\frac{\partial^2 \ln p(X;\theta)}{\partial \theta^2}\right]   $$

>[!tip] Note
>- Notice how $\psi(\theta)=\theta$ reduces down to the unbiased case
>- The lower bound is not always achievable with both biased/unbiased estimators.
>- When $|\psi'(\theta)|^2 < 1$, the CRLB of the biased estimator is lower than that of the unbiased estimator (See [[Bias-Variance Tradeoff]]).

>[!note] Proof
>**Goal**: Show that...
>- for any unbiased estimator $\hat \theta (X)$, $Var(\hat \theta) \ge \frac{1}{I_n(\theta)}$
>- for any biased estimator $\hat \theta (X)$, $Var(\hat \theta) \ge \frac{|1+b'(\theta)|^2}{I_n(\theta)}$
>
> Let the score function $S(X;\theta) := \frac{\partial}{\partial \theta}\ln p(X;\theta) = \frac{1}{p(X;\theta)} \frac{\partial}{\partial \theta} p(X;\theta)$
> 
> **Regularity condition**: $S(X;\theta) = I(\theta)(\hat \theta(X) - \theta), \quad \forall \ \theta$
> 
> $$
> \begin{align*}
> E[S(X;\theta)] &= \int S(X;\theta) \cdot p(X;\theta) dX \\
> &= \int \frac{1}{p(X;\theta)} \frac{\partial}{\partial \theta} p(X;\theta)\cdot p(X;\theta) dX \\
> &= \int \frac{\partial}{\partial \theta}\cdot p(X;\theta) dX \\
> &= \frac{\partial}{\partial \theta} \int p(X;\theta) dX && \leftarrow \text{regularity condition must be true} \\
> &= \frac{\partial}{\partial \theta} 1\\
> &= 0
> \end{align*}
> $$
> $$
> \begin{align*}
> Cov[\hat \theta(X), S(X;\theta)] &= E[\hat \theta(X) \cdot S(X;\theta)]- E[\hat \theta(X)] E[S(X;\theta)]  \\
> &= E[\hat \theta(X) \cdot S(X;\theta)] && E[S(X;\theta)]=0 \\
> &= \int \hat \theta(X) \cdot S(X;\theta) \cdot p(X;\theta) dX \\
> &= \int \hat \theta(X) \cdot \frac{1}{p(X;\theta)} \frac{\partial}{\partial \theta} p(X;\theta) \cdot p(X;\theta)dX \\
> &= \int \hat \theta(X) \cdot \frac{\partial}{\partial \theta} p(X;\theta)dX \\
> &= \frac{\partial}{\partial \theta} \int \hat \theta(X) \cdot  p(X;\theta)dX \\
> &= \frac{\partial}{\partial \theta} E[\hat \theta(X)] && E[\hat \theta] = \begin{cases} \theta & \text{if unbiased} \\ \theta+b(\theta) & \text{if biased} \end{cases} \\
> &= \begin{cases} 1 & \text{if unbiased} \\ 1+b'(\theta) & \text{if biased} \end{cases}
> \end{align*}
> $$
> **Using the [Cauchy-Schwarz Inequality](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality#Probability_theory)...**
> 
> $$Var[\hat \theta(X)]\cdot Var[S(X;\theta)] \ge |Cov[\hat \theta(X), S(X; \theta)]|^2$$
> $$
> \begin{align*}
> &\text{Unbiased} && \text{Biased} \\
> &Var[\hat \theta(X)]\cdot Var[S(X;\theta)] \ge |1|^2 && Var[\hat \theta(X)]\cdot Var[S(X;\theta)] \ge |1+b'(\theta)|^2 \\
> &Var[\hat \theta(X)] \ge \frac{1}{Var[S(X;\theta)]} && Var[\hat \theta(X)] \ge \frac{|1+b'(\theta)|^2}{Var[S(X;\theta)]} \\
> &Var[\hat \theta(X)] \ge \frac{1}{I_n(\theta)} \quad 💖 && Var[\hat \theta(X)] \ge \frac{|1+b'(\theta)|^2}{I_n(\theta)} \quad 💖
> \end{align*}
> $$

Efficiency $e(\hat \theta)$ measures how close the unbiased estimator is to the lower bound. 

$$e(\hat \theta) = \frac{I(\theta)^{-1}}{Var(\hat \theta)}, \quad 0 \lt e(\hat \theta) \le 1$$

Any estimator that achieves the lower bound is said to be ***efficient*** and labelled as a Minimum Variance Unbiased Estimator (MVUE; $e(\hat \theta) = 1$).

>[!faq] MVUE vs BLUE
>MVUE is [[Gauss-Markov Theorem|BLUE]] without the linearity assumption.
