---
title: Types of Matrices
tags:
  - linear-algebra
---
---
### Symmetric
Definition: Square matrix that remains the same when transposed.
$$\mathbf{M} \text{ is symmetric}\Longleftrightarrow \mathbf{M}^T=\mathbf{M} \Longleftrightarrow \mathbf{M}_{ij}=\mathbf{M}_{ji} \quad \forall \ i,j$$
### Negative Definite
Definition: Symmetric matrix with negative [[Eigenvalues and Eigenvectors|eigenvalues]].
$$\mathbf{M} \text{ is negative definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\lt0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\lt0, \quad \forall \ v\in \mathbb{R}^n \textbackslash \{\mathbf{0}\}$$
### Negative Semi-Definite
- May also be called non-positive definite
Definition: Symmetric matrix with non-positive [[Eigenvalues and Eigenvectors|eigenvalues]].
$$\mathbf{M} \text{ is negative semi-definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\le0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\le0, \quad \forall \ v\in \mathbb{R}^n$$
### Positive Semi-Definite
- May also be called non-negative definite
Definition: Symmetric matrix with non-negative [[Eigenvalues and Eigenvectors|eigenvalues]].
$$\mathbf{M} \text{ is positive semi-definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\geq0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\geq0, \text{ for any non-zero vector } \mathbf{v}$$
### Positive Definite
Definition: Symmetric matrix with positive [[Eigenvalues and Eigenvectors|eigenvalues]].
$$\mathbf{M} \text{ is positive definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\gt0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\gt0, \text{ for any non-zero vector } \mathbf{v}$$
### Singular
Definition: Square matrix that's not invertible
>[!tip]-
>![[Pasted image 20250806182135.png]]