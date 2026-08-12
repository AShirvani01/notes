---
title: Random Variable
created: 2026-04-14
modified: 2026-06-23
tags:
  - fundamentals
---
# Surface-level

A random variable is a way of assigning a numerical measurement to the possible outcomes of a random experiment. In a random experiment, the outcome itself may not be a number. For instance:

| Experiment                 | Possible outcomes                |
| -------------------------- | -------------------------------- |
| Tossing a coin             | Heads, Tails                     |
| Rolling a die              | 1, 2, 3, 4, 5, 6                 |
| Drawing a card from a deck | Queen of Hearts, 7 of Clubs, ... |

Converting these outcomes into numbers allows us to analyze them mathematically.

# Standard-level

>[!definition] **Definition:** $\mathbb{R}$-valued random variable
>
>A ***random variable*** $X$ is a function that maps from the sample space $\Omega$ to the set of real numbers $\mathbb{R}$, written as 
>$$
>X: \Omega \longrightarrow \mathbb{R}
>$$

The term *random variable* is a bit misleading; $X$ is a deterministic function that maps each possible outcome $\omega$ in the sample space $\Omega$ to a value $X(\omega)$, so how can it be random? Well, before the experiment is observed, we don't actually know which outcome $\omega \in \Omega$ will occur, and consequently we don't know which value $X(\omega)$ will take (random). If we observe a particular outcome $\omega \in \Omega$ of the experiment, then $X(\omega)$ is no longer random. Instead, we have what's called a *realization* of the random variable $X$, which we typically denote lowercase $x$.

>[!definition] **Definition**: $\mathbb R^d$-valued random vector
>If the function instead maps from the sample space $\Omega$ to $\mathbb{R}^d$ where $d>1$, then we call it a ***random vector***, written as 
>$$
>X: \Omega \longrightarrow \mathbb R^d \quad \text{ with } \quad \mathbf{X} = \begin{bmatrix} X_1 \\ \vdots \\ X_d \end{bmatrix},
>$$
>where each $X_i$ is a random variable in its own right.

Working with random vectors in higher dimensional spaces is often the case with multiple samples or multivariate data.

>[!notation]- 
>- Since the events $\omega \in \Omega$ are treated as arbitrary, random variables are almost always written without its argument as shorthand, $X:=X(\omega)$
>- In general, vectors/matrices are bold-faced to show they are of higher dimension
>- In general, random variables and their realizations are denoted with capital and lower case letters, respectively (e.g., $X, Y, Z; x, y, z$)

This is the definition you'll encounter in introductory/applied Stats courses, but it leaves out some details that require probability/measure theory.

# Measure-theoretic

The missing detail in the previous definition was measurability of the sets.

>[!definition] **Definition**: $\mathbb{R}$-valued random variable (measure-theoretic)
>Let $(\Omega, \mathcal{F}, \mathbb{P})$ be a probability space and $(\mathbb R, \mathcal B)$ be a measurable space. A *$\mathbb{R}$-valued random variable* $X$ is a ***measurable*** function, written as $X: (\Omega, \mathcal{F}) \longrightarrow (\mathbb{R}, \mathcal{B})$, where $\mathcal B$ is the Borel $\sigma$-algebra on $\mathbb R$.

^random-variable-measure-theoretic

Random variables don't necessarily have to be restricted to real numbers $\mathbb{R}$. For example, you may want to work with the extended real numbers $\left(\mathbb{\bar{R}} := \mathbb{R}\cup \{\pm\infty\}\right)$ or with complex numbers ($\mathbb{C}$) for some physics applications. But for most cases, real-valued random variables are sufficient, so that's all that we'll cover.

Let's break this down and connect it back to our simpler definition from earlier. 

First, we introduce the notion of a [[Measure Theory#^probability-measure-space|probability space]] (the space associated with our events) and a [[Measure Theory#^measurable-measure-space|measurable space]] (the space our events are being mapped to). The same idea as mapping from $\Omega \rightarrow \mathbb R$, but with the added clarification that events must be in the event space $\mathcal F$ and mappings must be in the [[Measure Theory#^borel-sigma-algebra|Borel sigma-algebra]] $\mathcal B$.

Next, we specify that the function is [[Measure Theory#^measurable|measurable]]. As the name suggests, this ensures all our events work with our probability measure and have valid probabilities. If we simply ignore the details of spaces, mappings, measurability and assume it to be working in the background, then we arrive at our non-measure-theoretic definition. 

If $X: (\Omega, \mathcal F) \longrightarrow (\mathbb R^d, \mathcal B^d)$ where $d>1$, we have our $\mathbb R^d$-valued random vector. 

## Properties of Real-valued Random Variables

In order to apply algebraic and geometric interpretations to our newly-defined random variables, we'll have to define the space in which they live. How strict we make the conditions in our random variable space will depend on what properties we want. Let's start with a space with no assumptions, which we'll call $\mathcal R$ ("script R"), for ***Real*** random variables.

>[!definition] **Definition**: $\mathcal R$ space
>$\mathcal R$ is the set of all $\mathbb{R}$-valued random variables on the *measurable space* $(\Omega, \mathcal F)$:
>$$
>\begin{align*}
>\mathcal R \equiv \mathcal R(\Omega, \mathcal{F}, \mathbb{P}) &:= \{X: \Omega \longrightarrow \mathbb{R} \mid X \text{ is measurable} \} \\
>&\equiv \{X: \Omega \longrightarrow \mathbb{R} \mid X^{-1}(B) \in \mathcal{F} \quad \forall \ B \in \mathcal{B} \} && (1) \\
>&\equiv \{X: \Omega \longrightarrow \mathbb{R} \mid (X \le x) \in \mathcal{F} \quad \forall \ x \in \mathbb{R} \} && (2) \\
>\end{align*}
>$$
>where $(X \le x) := X^{-1}((-\infty, x])$.
>>[!notation]-
>>- The probability space $(\Omega, \mathcal F, \mathbb P)$ is added to $\mathcal R$ to make it clear that $\mathcal R$ depends on this probability space
>>- The measurability conditions are all equivalent; 
>>	$\text{(1)}$ standard in Measure theory
>>	$\text{(2)}$ standard in Probability

Since we restricted the $\mathcal R$ space to only $\mathbb R$-valued random variables, it inherits the algebraic properties you'd expect from a regular variable in $\mathbb R$; to be precise, our $\mathcal R$ space qualifies as a [[Linear Algebra#^vector-space|vector space]] and even an [[Linear Algebra#^algebra|algebra]].

e.g., Let $X, Y \in \mathcal R$. Then, the following are all valid $\mathbb R$-valued random variables, i.e., still in the $\mathcal R$ space:
- $(X+Y)(\omega) = X(\omega) + Y(\omega)$
- $(XY)(\omega) = X(\omega) \cdot Y(\omega)$
- $(X-Y)(\omega) = X(\omega) - Y(\omega)$
- $\left(\frac{X}{Y}\right)(\omega) = \frac{X(\omega)}{Y(\omega)},$ provided $Y(\omega) \ne 0$ for all $\omega \in \Omega$

To add notions of distance, angles, and projections between random variables in our space, we'll have to add more restrictions (i.e. finite 2nd moments with inner products), but let's not get ahead of ourselves. This will require us to define Expectation first, so we'll save this for later. For now, move onto [[Distributions]].