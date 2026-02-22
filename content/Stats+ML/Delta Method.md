---
title: Delta Method
created: 2025-10-26
modified: 2025-12-05
---
---

## First-order
Let $(X_n)_{n\ge1}$ be a sequence of random variables that satisfies $\sqrt{n}(X_n - \mu) \overset{d}{\rightarrow} N(0,\sigma^2)$ where $\mu$ and $\sigma^2$ are finite-valued constants, and let $g$ be any differentiable function such that $g'(\mu) \ne 0$. Then it follows that

$$
\begin{cases}
\sqrt{n}(X_n - \mu) \overset{d}{\rightarrow} N(0,\sigma^2) \\ 
g \text{ is differentiable} \\
g'(\mu)\ne 0 
\end{cases}
\Longrightarrow \sqrt{n}[g(X_n) - g(\mu)] \overset{d}{\rightarrow} N(0, g'(\mu)^2\sigma^2)$$

>[!note] Proof
>We can express $g(X_n)$ as a Taylor expansion:  
>$$g(X_n)= g(\mu) + g'(\mu)(X_n-\mu) + R_n$$ 
>where the remainder $R_n=g(X_n) - g(\mu) - g'(\mu)(X_n-\mu)$. Rearranging and multiplying both sides by $\sqrt{n}$ gives
>$$\sqrt{n}[g(X_n) - g(\mu)] =  g'(\mu) \sqrt{n}(X_n-\mu)+ \sqrt{n} R_n$$
>Notice the $\sqrt{n}(X_n-\mu) \overset{d}{\rightarrow} N(0,\sigma^2)$ from our assumption, and scaling by a constant $g'(\mu)$ yields $N(0, g'(\mu)^2\sigma^2)$.  $\sqrt{n} R_n$ can be shown to converge in probability to 0. Thus, the result follows. 💖
>
>>[!tip]+ Show $\sqrt{n} R_n \overset{P}{\rightarrow} 0$
>>we can rewrite $\sqrt{n} R_n$ as
>>$$\sqrt{n} R_n = \frac{R_n}{X_n-\mu} \sqrt{n}(X_n-\mu)$$
>>
>>$$h(x) := \frac{g(x) - g(\mu)}{x - \mu} - g'(\mu), \text{$g$ is differentiable} \Longrightarrow \lim_{x \to \mu} h(x) = g'(\mu) - g'(\mu) = 0 \Longleftrightarrow \text{$h$ is continuous}$$ 
>>
>>$$X_n-\mu = \frac{1}{\sqrt{n}} \cdot [\sqrt{n}(X_n-\mu)], \begin{cases} \frac{1}{\sqrt{n}}\rightarrow 0 \\ \sqrt{n}(X_n-\mu) \overset{d}{\rightarrow} N(0, \sigma^2) \end{cases} \overset{Slutsky}{\Longrightarrow} X_n - \mu \overset{P}{\rightarrow} 0 \Longleftrightarrow X_n \overset{P}{\rightarrow} \mu$$
>>
>>$$X_n \overset{P}{\rightarrow} \mu \overset{CMT}{\Longrightarrow} \frac{R_n}{X_n-\mu} = h(X_n) \overset{P}{\rightarrow} h(\mu) = 0 \Longleftrightarrow R_n = o_p(X_n-\mu)$$
>>
>>$$\sqrt{n} R_n = \frac{R_n}{X_n-\mu} \sqrt{n}(X_n-\mu), \begin{cases} \frac{R_n}{X_n-\mu} \overset{P}{\rightarrow} 0 \\ \sqrt{n}(X_n-\mu) \overset{d}{\rightarrow} N(0, \sigma^2) \end{cases} \overset{Slutsky}{\Longrightarrow} \sqrt{n} R_n \overset{P}{\rightarrow} 0$$

## Second-order
Assume same as first-order, except $g'(\mu)=0$, $g$ is twice differentiable, and $g''(\mu) \ne 0$. Then it follows that 
$$
\begin{cases}
\sqrt{n}(X_n - \mu) \overset{d}{\rightarrow} N(0,\sigma^2) \\ 
g \text{ is twice differentiable} \\ 
g'(\mu)= 0 \\
g''(\mu) \ne 0
\end{cases}
\Longrightarrow \frac{2n[g(X_n) - g(\mu)]}{g''(\mu) \sigma^2} \overset{d}{\rightarrow} \chi^2_{(1)} = Z^2, \quad Z\sim N(0,1)$$

## Multivariate First-order
Let $(\mathbf{X}_n)_{n\ge1} \in \mathbb{R}^d$ be a sequence of random vectors that satisfies $\sqrt{n}(\mathbf{X}_n - \boldsymbol\mu) \overset{d}{\rightarrow} N(\mathbf0,\Sigma)$ where $\boldsymbol\mu \in \mathbb{R}^d$ and $\Sigma \in \mathbb{R}^{d \times d}$, and let $g$ be any differentiable function mapping from $\mathbb{R}^d \longrightarrow \mathbb{R}$ such that $\nabla g(\boldsymbol\mu) \ne \mathbf0$. Then it follows that
$$\begin{cases}
\sqrt{n}(\mathbf{X}_n - \boldsymbol\mu) \overset{d}{\rightarrow} N(\mathbf{0},\Sigma) \\ 
g: \mathbb{R}^d \longrightarrow \mathbb{R}\\
g \text{ is differentiable} \\
\nabla g(\boldsymbol\mu)\ne \mathbf0 
\end{cases}
\Longrightarrow \sqrt{n}[g(\mathbf{X}_n) - g(\boldsymbol\mu)] \overset{d}{\rightarrow} N\left(0, \nabla g(\boldsymbol\mu)^T\Sigma\nabla g(\boldsymbol\mu)\right)
$$