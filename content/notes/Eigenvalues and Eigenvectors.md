---
title: Eigenvalues and Eigenvectors
tags:
  - linear-algebra
---
---
An eigenvector is a non-zero vector ($\mathbf{v}$) that only changes in magnitude when a linear transformation $\mathcal{T}: \mathbb{R}^n \rightarrow \mathbb{R}^n$ is applied (i.e. after the transformation, the direction should still be the same). The scalar factor by which the magnitude changes is called the eigenvalue ($\lambda$). 

$$\mathbf{v}=\text{Eigenvector} \Longleftrightarrow \mathcal{T}(\mathbf{v})=\lambda\mathbf{v} \Longleftrightarrow \mathbf{Mv}=\lambda\mathbf{v}, \quad \mathbf{M}= \text{square matrix }$$

Each eigenvector corresponds to a particular eigenvalue, although the eigenvalues may happen to be the same value.
>[!tip] Note
Eigenvectors ***can't*** be $\mathbf{0}$, but eigenvalues ***can*** be 0.

>[!Note] Solving for eigenvalues/eigenvectors
>$$
>\begin{align*}
>\mathbf{Mv}&=\lambda\mathbf{v} \\
>\mathbf{Mv} - \lambda\mathbf{v} &= \mathbf{0} \\
>(\mathbf{M}-\lambda\mathbf{I})\mathbf{v} &= \mathbf{0}
>\end{align*}
>$$
>If the matrix $(\mathbf{M}-\lambda\mathbf{I})$ was invertible, the only solution would be $\mathbf{v}=(\mathbf{M}-\lambda\mathbf{I})^{-1} \mathbf{0} = \mathbf{0}$, which would normally be ok, but remember the eigenvector must be ***non-zero***. Since invertibility implies a $\mathbf{0}$ solution that is invalid, we must look at the case when it is not invertible (aka [[Types of Matrices#Singular|Singular]]). From the 'Big Theorem', we know that
>$$(\mathbf{M}-\lambda\mathbf{I}) = \text{not invertible} \Longleftrightarrow \text{det}(\mathbf{M}-\lambda\mathbf{I}) = 0$$
>which we can use to solve for eigenvalue(s) $\lambda$. Then, solving for eigenvector(s) $\mathbf{v}$ is as simple as plugging in the eigenvalue(s) from before.

>[!example] Example
>Given $\mathbf{M} = \begin{bmatrix} 2&0 \\ 0&1 \end{bmatrix}$, find $\lambda$ and its corresponding $\mathbf{v}$.
>$$
>\begin{align*}
>\text{det}(\mathbf{M}-\lambda\mathbf{I}) &= \mathbf{0} \\
>\text{det}\left(\begin{bmatrix} 2&0 \\ 0&1 \end{bmatrix}-\lambda\mathbf{I}\right) &= \mathbf{0} \\
>\begin{vmatrix} 2-\lambda&0 \\ 0&1-\lambda \end{vmatrix} &= \mathbf{0} \\
>(2-\lambda)(1-\lambda) &= \mathbf{0} && \leftarrow \text{Characteristic equation}\\
>\lambda_0 &= 2 \\
>\lambda_1 &= 1
>\end{align*}
>$$
>To find the eigenvalue, we sub in the previously found lambda
>- Sub $\lambda_0=2$:
>$$
>\begin{align*}
>\left(\begin{bmatrix} 2&0 \\ 0&1 \end{bmatrix}-2\mathbf{I}\right)\mathbf{v} &= \mathbf{0} \\
>\begin{bmatrix} 0&0 \\ 0&-1 \end{bmatrix}\begin{bmatrix}v_1 \\ v_2 \end{bmatrix} &= \mathbf{0} \\ \\
>\Longrightarrow v_2 = 0
>\end{align*}
>$$
>Since $v_1$ is unconstrained, we can set it equal to 1 for simplicity, leaving us with $\mathbf{v} = \begin{bmatrix} 1 \\ 0 \end{bmatrix}$.

>[!danger] Notation
>We say that $\mathbf{v}$ is an eigenvector of $\mathbf{T}$, with $\lambda$ as the eigenvalue(s) of $\mathbf{T}$. Eigenvectors themselves don't have eigenvalues. 
>- Eigenspace: the set of all eigenvectors that correspond to the eigenvalue $\lambda$.
>- Determinants (i.e. $\text{det}(\mathbf{M}-\lambda\mathbf{I})$) may also be written with vertical lines (i.e. $\begin{vmatrix}\mathbf{M}-\lambda\mathbf{I}\end{vmatrix}$)


>[!tip] Geometric interpretation
>Eigenvectors are the **axes** that remain invariant under a linear transformation $\mathcal{T}$ (only scaled by $\lambda$).
>![[Pasted image 20250806162042.png]]