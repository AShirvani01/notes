---
title: Eigenvalues and Eigenvectors
tags:
created: 2025-08-08
---
---
An **eigenvector** is a non-zero vector ($\mathbf{v}$) that only changes in magnitude when a linear transformation $\mathcal{T}: \mathbb{R}^n \rightarrow \mathbb{R}^n$ is applied (i.e. after the transformation, the direction should still be the same). The scalar factor by which the magnitude changes is called the **eigenvalue** ($\lambda$). Each eigenvector corresponds to a particular eigenvalue, although the eigenvalues may happen to be the same value.

$$\mathbf{v}=\text{Eigenvector} \Longleftrightarrow \mathcal{T}(\mathbf{v})=\lambda\mathbf{v} \Longleftrightarrow \mathbf{Mv}=\lambda\mathbf{v}, \quad \mathbf{M}= \text{square matrix }$$

>[!tip] Note
>Eigenvectors ***can't*** be $\mathbf{0}$, but eigenvalues ***can*** be 0.

 The **eigenspace** refers to the set of all eigenvectors that correspond to the eigenvalue $\lambda$. The **spectrum** refers to the set of all eigenvalues of the matrix $\mathbf{M}$.

>[!danger]- Notation
>- We say that $\mathbf{v}$ is an eigenvector of $\mathbf{M}$, with $\lambda$ as the eigenvalue(s) of $\mathbf{M}$. Eigenvectors themselves don't have eigenvalues. 
>- You may see eigenspace denoted as $E_\lambda$, $E(\lambda)$, or $E_\mathbf{M}(\lambda)$
>- Spectrum is typically denoted as $\sigma(\mathbf{M})$

>[!Note] Solving for eigenvalues/eigenvectors
>$$
>\begin{align*}
>\mathbf{Mv}&=\lambda\mathbf{v} \\
>\mathbf{Mv} - \lambda\mathbf{v} &= \mathbf{0} \\
>(\mathbf{M}-\lambda\mathbf{I})\mathbf{v} &= \mathbf{0}
>\end{align*}
>$$
>If the matrix $(\mathbf{M}-\lambda\mathbf{I})$ was invertible, the only solution would be $\mathbf{v}=(\mathbf{M}-\lambda\mathbf{I})^{-1} \mathbf{0} = \mathbf{0}$, which would normally be ok, but remember the eigenvector must be ***non-zero***. Since invertibility implies a $\mathbf{0}$ solution that is invalid, we must look at the case when it is not invertible (aka [[Types of Matrices#Singular|Singular]]). From the [[Invertible Matrix Theorem]], we know that
>
>$$(\mathbf{M}-\lambda\mathbf{I}) = \text{not invertible} \Longleftrightarrow \text{det}(\mathbf{M}-\lambda\mathbf{I}) = 0$$
>
>which we can use to solve for eigenvalue(s) $\lambda$. Then, solving for eigenvector(s) $\mathbf{v}$ is as simple as plugging in the eigenvalue(s) from before.

>[!example] Example
>Given $\mathbf{M} = \begin{bmatrix} 2&0 \\ 0&1 \end{bmatrix}$, find $\lambda$ and its corresponding $\mathbf{v}$.
>$$
>\begin{align*}
>\text{det}(\mathbf{M}-\lambda\mathbf{I}) &= \mathbf{0} \\
>\text{det}\left(\begin{bmatrix} 2&0 \\ 0&1 \end{bmatrix}-\lambda\mathbf{I}\right) &= \mathbf{0} \\
>\begin{vmatrix} 2-\lambda&0 \\ 0&1-\lambda \end{vmatrix} &= \mathbf{0} \\
>(2-\lambda)(1-\lambda) &= \mathbf{0} && \leftarrow \text{Characteristic equation}\\
>\lambda_1 &= 1 \\
>\lambda_2 &= 2 \\
>\sigma(\mathbf{M}) &= \{1,2\} && \leftarrow \text{Spectrum}
>\end{align*}
>$$
>To find the eigenspace/eigenvectors, we sub in the previously found lambda
>- Sub $\lambda_1=1$:
>$$
>\begin{align*}
>\left(\begin{bmatrix} 2&0 \\ 0&1 \end{bmatrix}-\mathbf{I}\right)\mathbf{v} &= \mathbf{0} \\
>\begin{bmatrix} 1&0 \\ 0&0 \end{bmatrix}\begin{bmatrix}v_1 \\ v_2 \end{bmatrix} &= \mathbf{0} \\ \\
>\Longrightarrow v_1 = 0
>\end{align*}
>$$
>Since $v_2$ is unconstrained, the eigenspace for $\lambda_1$ ($E_{\lambda_1}$) is the set of eigenvectors $\mathbf{v} = \begin{bmatrix} 0 \\ v_2 \end{bmatrix}$ where $v_2 \in \mathbb{R}$.
>- Sub $\lambda_2=2$:
>$$
>\begin{align*}
>\left(\begin{bmatrix} 2&0 \\ 0&1 \end{bmatrix}-2\mathbf{I}\right)\mathbf{v} &= \mathbf{0} \\
>\begin{bmatrix} 0&0 \\ 0&-1 \end{bmatrix}\begin{bmatrix}v_1 \\ v_2 \end{bmatrix} &= \mathbf{0} \\ \\
>\Longrightarrow v_2 = 0
>\end{align*}
>$$
>Since $v_1$ is unconstrained, the eigenspace for $\lambda_2$ ($E_{\lambda_2}$) is the set of eigenvectors $\mathbf{v} = \begin{bmatrix} v_1 \\ 0 \end{bmatrix}$ where $v_1 \in \mathbb{R}$.

