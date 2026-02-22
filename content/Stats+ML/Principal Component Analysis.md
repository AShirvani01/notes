---
title: Principal Component Analysis
created: 2025-12-05
modified: 2026-02-18
---
>[!tip]- Explain Like I'm 5
>A dataset with lots of features can be messy and hard to work with. PCA helps by reducing the number of features **without losing too much important information**. To do this, we assume the data can actually be described pretty well using fewer features. PCA then looks for a new set of features that capture as much variation in the data as possible (intuitively, if a feature doesn’t vary, it’s not very informative). Since we find features based on maximizing variance, it's important to standardize features so one feature with a huge scale doesn't dominate the rest.

>[!faq] Motivation
>To reduce dimensionality
>- more easily visualize/interpret
>- reduce noise
>- avoid the "Curse of Dimensionality"
>- reduce compute

Assumption: Data lies approximately on a lower-dimensional affine subspace. After centering the data, the data lies on a lower-dimensional linear subspace.

## Model Definition
--- 
*different yet equivalent ways to interpret PCA.*

$r$ is the dimension of the subspace you're projecting onto
$p$ is the dimension of the original space
$n$ is the number of data points

- Data: $\mathbf{X} = \begin{bmatrix} \textemdash & \mathbf{x}_1^T & \textemdash \\ & \vdots \\ \textemdash & \mathbf{x}_n^T & \textemdash \end{bmatrix} \in \mathbb{R}^{n \times p}$

- PC Directions: $\mathbf{V}_{(r)} = \begin{bmatrix} \mid & & \mid \\ \mathbf{v}_1 & \dots & \mathbf{v}_r \\ \mid & & \mid\end{bmatrix} \in \mathbb{R}^{p \times r}$

- PC Scores: $\mathbf{Z}_{(r)} = \mathbf{X} \cdot \mathbf{V}_{(r)} = \begin{bmatrix} \mid & & \mid \\ \mathbf{z}_{(1)} & \dots & \mathbf{z}_{(r)} \\ \mid & & \mid\end{bmatrix} \in \mathbb{R}^{n \times r}$

- Projections: $\mathbf{\hat X}_{(r)} = \mathbf{Z}_{(r)} \cdot \mathbf{V}_{(r)}^T = \mathbf{X V}_{(r)} \cdot \mathbf{V}_{(r)}^T = \begin{bmatrix} \textemdash & \mathbf{\hat x}_1^T & \textemdash \\ & \vdots \\ \textemdash & \mathbf{\hat x}_n^T & \textemdash \end{bmatrix}\in \mathbb{R}^{n \times p}$

### Maximum Variance (via ED)
Find new PC directions such that the variance of the PC scores is maximized. The solution to the optimization problem can be shown to be the eigenvectors and eigenvalues of the sample covariance matrix of the data.
- Variance explained by each component corresponds to eigenvalues of $S_X$

$$
\begin{align*}
\underset{\mathbf{v} \in \mathbb{R}^p}{\arg\!\max} \ \mathbf{v}^T \mathbf{Sv} \quad st. \lVert \mathbf{v} \rVert_2 = 1, \text{all v are orthogonal}
\end{align*}
$$

### Minimum Reconstruction Error (via SVD)

$$
\begin{align*}
\underset{\boldsymbol{\alpha} \in \mathbb{R}^p,\ \mathbf{V} \in \mathbb{R}^{p\times r}, \ \beta_i \in \mathbb{R}^r}{\arg\!\min} \ RE(\boldsymbol{\alpha}, \mathbf{V}, \boldsymbol{\beta}_1, \dots, \boldsymbol{\beta}_r) \\
RE(\boldsymbol{\alpha}, \mathbf{V}, \boldsymbol{\beta}_1, \dots, \boldsymbol{\beta}_r) = \sum_{i=1}^n \lVert \mathbf{x}_i - \mathbf{\hat x}_i \rVert_2^2 = \sum_{i=1}^n \lVert \mathbf{x}_i - \boldsymbol{\alpha} -\mathbf{V} \boldsymbol{\beta}_i \rVert_2^2 
\end{align*}
$$

### Best Low-rank Approximation



#### Applications
- Data Compression
- Denoising
- Missing Value Imputation
