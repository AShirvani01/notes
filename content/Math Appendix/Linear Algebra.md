---
created: 2026-05-16
modified: 2026-05-20
title: Linear Algebra
---
# Motivation



# Linear Algebra Fundamentals

>[!definition] Field
>A ***field*** is a set $\mathbb F$ with 2 operations:
>1. **Addition**: $a+b \in \mathbb F$ for all $a,b \in \mathbb F$
>2. **Multiplication**: $a b \in \mathbb F$ for all $a,b \in \mathbb F$
>
>satisfying the following axioms. For all $a,b,c \in \mathbb F:$
>- **Addition $(+)$**
>	- **Commutativity**: $a+b=b+a$
>	- **Associativity**: $(a+b)+c = a+(b+c)$
>	- **Identity**: $\exists \ 0 \in \mathbb F$ such that $a+0=a$
>	- **Inverse**: $\exists \ -a \in \mathbb F$ such that $a + (-a)=0$
>- **Multiplication $(\cdot)$**
>	- **Commutativity**: $a b = b  a$
>	- **Associativity**: $(a  b) c = a (b c)$
>	- **Identity**: $\exists \ 1 \in \mathbb F$ such that $1a=a$
>	- **Inverse**: $\forall a \ne 0, \exists \ a^{-1} \in \mathbb F$ such that $a a^{-1} = 1$
>- **Distributivity**: $a(b+c) = ab + ac$

Essentially, it's all the algebraic operations you're used to. Common examples of fields include the real numbers $\mathbb R$, complex numbers $\mathbb C$, and rational numbers $\mathbb Q$.

>[!definition] *Vector space*
>A ***vector space*** is a set $V$ of *vectors* with 2 operations:
>1. **Vector addition**: $u + v \in V$ for all $u, v \in V$
>2. **Scalar multiplication**: $av \in V$ for all $a \in \mathbb F, v \in V$
>
>satisfying the following axioms. For all $u,v,w \in V$ and $a,b \in \mathbb F:$
>- **Addition $(+)$**
>	- **Commutativity**: $u + v = v+ u$
>	- **Associativity**: $(u+v) + w = u+(v+w)$
>	- **Identity**: $\exists \ \mathbf{0} \in V$ such that $v + \mathbf{0} = v$
>	- **Inverse**: $\exists \ -v \in V$ such that $v + (-v) = \mathbf{0}$
>- **Scalar multiplication $(\cdot)$**
>	- **Associativity**: $(ab)v = a(bv)$
>	- **Identity**: $1v = v$
>- **Distributivity**: 
>	- $a(u+v) = au+av$
>	- $(a+b)v = av+bv$

^vector-space

>[!definition] *Algebra*
>An ***algebra*** is a set $V$ with 3 operations:
>1. **Vector addition**: $u + v \in V$ for all $u, v \in V$
>2. **Scalar multiplication**: $av \in V$ for all $a \in \mathbb F, v \in V$
>3. **Vector multiplication**: $u \times v \in V$ for all $u,v \in V$
>
>satisfying the following axioms. For all $u,v,w \in V$ and $a,b \in \mathbb F:$
>- **Addition $(+)$**
>	- **Commutativity**: $u + v = v+ u$
>	- **Associativity**: $(u+v) + w = u+(v+w)$
>	- **Identity**: $\exists \ \mathbf{0} \in V$ such that $v + \mathbf{0} = v$
>	- **Inverse**: $\exists \ -v \in V$ such that $v + (-v) = \mathbf{0}$
>- **Scalar multiplication $(\cdot)$**
>	- **Associativity**: $(ab)v = a(bv)$
>	- **Identity**: $1v = v$
>- **Vector multiplication $(\times)$**
>	- **Scalar compatibility**: $(au) \times v = a(u \times v) = u \times (av)$
>- **Distributivity**: 
>	- $a(u+v) = au+av$
>	- $(a+b)v = av+bv$
>	- $u \times (v+w) = u\times v + u \times w$
>	- $(u+v) \times w = u \times w + v \times w$

^algebra

I think it's more intuitive to view an algebra as a *vector space* with an added operation (vector multiplication), hence the $V$ to denote the algebra. So by definition, its elements are vectors, but in practice, people just use the most natural and descriptive name for elements depending on the application. For example, the space of real-valued random variables ($\mathcal R$ space) denotes its elements as random variables.
