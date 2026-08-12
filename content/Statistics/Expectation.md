---
title: Expectation
modified: 2026-06-22
tags:
  - fundamentals
---
# Surface-level



# Standard-level

Expectation is a theoretical weighted average a random variable takes on.

Expectations are defined in terms of [[Distributions|distributions]], so naturally (without measure theory) we also have separate definitions for the discrete and (absolutely) continuous cases.

>[!definition] **Definition**: Expectation (Discrete)
>The expectation or *expected value* of a discrete random variable $X$, written as $\mathbb E[X]$ or sometimes $\mu$, is defined by 
>$$
>\mathbb E[X] := \sum_{x \in \Omega} x \cdot p_X(x),
>$$
>where $p_X(x)$ is the PMF of $X$.

>[!definition] **Definition**: Expectation (Absolutely Continuous)
>The expectation or expected value of an (absolutely) continuous random variable $X$, written as $\mathbb E[X]$ or $\mu$, is defined by
>$$
>\mathbb E[X] := \int_{x \in \Omega} x \cdot f_X(x) dx,
>$$
>where $f_X(x)$ is the PDF of $X$.

>[!theorem] **Theorem**: Linearity of Expectation
>$$
>\mathbb E\left[\sum c_i X_i\right] = \sum c_i \mathbb E[X_i]
>$$

# Measure-theoretic

>[!definition] **Definition**: Expected Value (Measure-theoretic)
>Given a probability space $(\Omega, \mathcal F, \mathbb P)$ and random variable $X: \Omega \rightarrow \mathbb R$, the expected value of $X$, written $\mathbb E[X]$, is defined as the Lebesgue Integral
>$$
>E[X] := \int_\Omega X d \mathbb P_X
>$$



Moments
Variance, Covariance, Correlation

LOTUS