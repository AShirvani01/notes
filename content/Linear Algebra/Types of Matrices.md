---
title: Types of Matrices
tags:
created: 2025-08-08
---
---
### Symmetric

Definition: Square matrix that remains the same when transposed.

$$\mathbf{M} \text{ is symmetric}\Longleftrightarrow \mathbf{M}^T=\mathbf{M} \Longleftrightarrow \mathbf{M}_{ij}=\mathbf{M}_{ji} \quad \forall \ i,j$$
---
### Invertible

Definition: Square matrix that has an inverse.

$$\mathbf{M} \text{ is invertible} \Longleftrightarrow \mathbf{M}\mathbf{M}^{-1} = \mathbf{M}^{-1}\mathbf{M} = \mathbf{I}_n \Longleftrightarrow \text{det}(\mathbf{M})\ne0$$
*See [[Invertible Matrix Theorem]] for more equivalent conditions*

---
### Singular

Definition: Square matrix that's not [[Types of Matrices#Invertible|Invertible]].
>[!tip]-
>![[SIngular matrix reddit.png]]

---
### Negative Definite

**Definition**: [[Types of Matrices#Symmetric|Symmetric]] matrix with negative [[Eigenvalues and Eigenvectors|eigenvalues]].

$$\mathbf{M} \text{ is negative definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\lt0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\lt0, \text{ for any non-zero vector } \mathbf{v}$$
---
### Negative Semi-Definite

*May also be called Non-positive definite*

**Definition**: [[Types of Matrices#Symmetric|Symmetric]] matrix with non-positive [[Eigenvalues and Eigenvectors|eigenvalues]].

$$\mathbf{M} \text{ is negative semi-definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\le0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\le0, \quad \forall \ v\in \mathbb{R}^n$$
---
### Positive Semi-Definite

*May also be called Non-negative definite*

**Definition**: [[Types of Matrices#Symmetric|Symmetric]] matrix with non-negative [[Eigenvalues and Eigenvectors|eigenvalues]].

$$\mathbf{M} \text{ is positive semi-definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\geq0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\geq0, \quad \forall \ v\in \mathbb{R}^n$$
---
### Positive Definite

**Definition**: [[Types of Matrices#Symmetric|Symmetric]] matrix with positive [[Eigenvalues and Eigenvectors|eigenvalues]].

$$\mathbf{M} \text{ is positive definite} \Longleftrightarrow \mathbf{M} \text{ is symmetric}, \lambda\gt0 \Longleftrightarrow \mathbf{v}^T\mathbf{Mv}\gt0, \text{ for any non-zero vector } \mathbf{v}$$
