---
created: 2026-04-29
modified: 2026-06-27
title: Measure Theory
---
# Motivation

Measure theory is a branch of math that is unavoidable if you really want a rigorous understanding of statistical theory. I've seen mixed opinions on whether this is actually necessary for practicing statisticians; all the technicalities of statistical methods are working in the background.

I call this appendix Measure theory, but you'll find that a lot of Probability is specialized Measure theory repackaged with different language (hence, the term measure-theoretic probability). The non-measure-theoretic probability is reserved for the main content (see [[Probability]]). Here are some examples to come.

| Term                                     |           Measure Theory           |   Probability   |
| ---------------------------------------- | :--------------------------------: | :-------------: |
| $\Omega$                                 |           Underlying set           |  Sample space   |
| $A \in \mathcal{F}$                      |           Measurable set           |      Event      |
| $\mathcal F$                             |          $\sigma$-algebra          |   Event space   |
| $X$                                      | Measurable function/transformation | Random Variable |
| $\mathbb{E}(X) := \int x d\mathbb{P}(x)$ |         Lebesgue integral          |   Expectation   |
| $\mathbb{P}$                             |        Probability measure         |  Distribution   |

The essence of Measure theory is formalizing the process of measuring sets (specifically infinite sets). For instance, when you're measuring a distance, you know intuitively it can't be negative, and that the distance between a point and itself is 0. As one of my profs likes to say, *you're just measuring something!* We just have to put it in math terms.

# Measure Theory Fundamentals

>[!definition] **Definition**: Sample space
>A ***sample space*** $\Omega$ is a non-empty set of all possible outcomes of some random experiment / stochastic process.

Example: Flipping a coin has sample space $\Omega = \{Heads, Tails\}$

>[!definition] **Definition**: Event
>An ***event*** $A$ is a (measurable) subset of the sample space $\Omega$. i.e., $A \subseteq \Omega$.

We'll get to what *measurable* means in a bit.

Side note: Any finite and countably infinite sample space is inherently measurable because we can take the event space $\mathcal F$ to be the power set $\mathcal P(\Omega) = \{A: A\subseteq \Omega\}$, which consists of only measurable subsets.

Example: Flipping a coin has 4 possible events $\{\emptyset\}, \{Heads\}, \{Tails\}, \{Heads,Tails\}$

## Algebras

Flipping a coin is a very simple example with a finite sample space; it's always measurable, so you can act as if measurability wasn't even a condition (as most non-measure theoretic stats courses do) and apply probabilities to our events. No problem. However, sometimes sets aren't so well-behaved, like in the case of uncountable sample spaces (e.g., $\mathbb R$), which lead to contradictions when assigning probabilities, essentially breaking our math (See [Vitali sets](https://en.wikipedia.org/wiki/Vitali_set) and [Banach-Tarski Paradox](https://en.wikipedia.org/wiki/Banach%E2%80%93Tarski_paradox) for details). That's why we restrict our events to be *measurable* subsets of $\Omega$. 

But we don't just want our probabilities to make sense. We also want our set of events to support natural questions we might have: If we ask *what is the probability of heads?* We should also be able to ask *what is the probability of **not** heads?* Or *what is the probability of heads **or** tails?* A set of events closed under exactly these operations is formally called a $\sigma$-algebra (or $\sigma$-field).

>[!definition] **Definition**: $\sigma$-algebra (or $\sigma$-field)
>A set $\mathcal{F}$ with each element $A$ being a subset of a non-empty set $\Omega$ is called a ***$\sigma$-algebra*** (on $\Omega$) if it satisfies the following properties: 
>1. $\Omega \in \mathcal F$
>2. **Closed under complementation**: If $A \in \mathcal{F}$ then $A^c \in \mathcal{F}$
>3. **Closed under countable unions**: If $A_1, A_2, \dots \in \mathcal{F}$ then $\bigcup \limits_{n=1}^\infty A_n \in \mathcal{F}$

In Probability theory, the $\sigma$-algebra $\mathcal F$ is also called an ***event space***, consisting of the *events* $A$ that we defined earlier. Let's verify that our coin example satisfies these conditions. Given the event space (or $\sigma$-algebra) $\mathcal F = \{\{\emptyset\}, \{Heads\}, \{Tails\}, \{Heads,Tails\}\}$:

- $\Omega = \{Heads,Tails\} \in \mathcal F$
- $\{\emptyset\}^c = \Omega \in \mathcal F$ and $\{Heads\}^c = \{Tails\} \in \mathcal F$
- $\{Heads\}\cup\{Tails\} = \{Heads,Tails\} \in \mathcal F$

>[!corollary] **Corollary**: Basic properties of $\sigma$-algebra
>1. $\emptyset \in \mathcal F$
>2. $\{\emptyset, \Omega\}$ is the smallest $\sigma$-algebra on $\Omega$. The power set $\mathcal{P}(\Omega) = \{A : A \subseteq \Omega\}$ is the largest. i.e., $\{\emptyset, \Omega\} \subseteq \mathcal F \subseteq \mathcal P(\Omega)$.
>3. **Closed under countable intersections**: If $A_1, A_2, \dots \in \mathcal{F}$ then $\bigcap \limits_{n=1}^\infty A_n \in \mathcal{F}$
>>[!proof]- Proof
>>1. $\Omega \in \mathcal F$ and closed under complementation forces $\Omega^c = \emptyset \in \mathcal{F}. \qquad \blacksquare$
>>2. You can easily verify that $\{\emptyset, \Omega\}$ and $\mathcal P(\Omega)$ are valid $\sigma$-algebras (i.e., satisfies the 3 axioms). As established, any $\sigma$-algebra $\mathcal F$ must contain $\emptyset, \Omega$, thus $\{\emptyset, \Omega\} \subseteq \mathcal F$. Notice every $A \in \mathcal F$ satisfies $A \in \mathcal P(\Omega)$ just by the very definition of a power set containing *all* subsets of $\Omega$, thus $\mathcal F \subseteq \mathcal P(\Omega). \qquad \blacksquare$
>>3. 
>> $$ 
>> \begin{align*}
>> A_n \in \mathcal{F} \text{ for all } n &\overset{\text{Axiom 2}}{\Longrightarrow} A_n^c \in \mathcal{F} \text{ for all } n \\
>> &\overset{\text{Axiom 3}}{\Longrightarrow} \bigcup_{n=1}^{\infty} A_n^c \in \mathcal{F} \\
>> &\overset{\text{Axiom 2}}{\Longrightarrow} \left(\bigcup_{n=1}^{\infty} A_n^c \right)^c \in \mathcal{F}
>> \end{align*}
>> $$
>>Finally, by De Morgan's law, $\bigcap \limits_{n=1}^\infty A_n = \left(\bigcup \limits_{n=1}^\infty A_n^c \right)^c \in \mathcal F. \qquad \blacksquare$ 
>

One example of a $\sigma$-algebra that we will be using **a lot** is the Borel $\sigma$-algebra.

>[!definition] **Definition**: Borel $\sigma$-algebra
>The *Borel $\sigma$-algebra* $\mathcal B$ is the $\sigma$-algebra generated by the open subsets of $\mathbb R$, written as $\mathcal B = \sigma(\mathcal O),$ where $\mathcal O$ denotes the set of all subsets of $\mathbb R$.

^borel-sigma-algebra

Since $\mathcal B$ is a σ-algebra, we see that it necessarily contains all open sets, all closed sets,
all unions of open sets, all unions of closed sets, all intersections of closed sets, and all
intersections of open sets.

So in summary, $\sigma$-algebras guarantee some extremely useful properties and the Borel $\sigma$-algebra is the smallest $\sigma$-algebra that contains all open sets, which is pretty much all we'll ever come across. $\sigma$-algebras are a type of algebra, so I'll introduce its general form here. Essentially, it's a $\sigma$-algebra closed only for finite unions, not countable ones.

>[!definition] Algebra
>A set $\mathcal{F}$ with each element $A$ being a subset of a non-empty set $\Omega$ is called an ***algebra*** (on $\Omega$) if it satisfies the following properties: 
>1. $\Omega \in \mathcal F$
>2. **Closed under complementation**: If $A \in \mathcal{F}$ then $A^c \in \mathcal{F}$
>3. **Closed under finite unions**: If $A_1, A_2, \dots, A_n \in \mathcal{F}$ then $\bigcup \limits_{i=1}^n A_i \in \mathcal{F}$

^algebra

Great, now we have a bunch of well-behaved sets with the properties we want. Now we need a function to assign probabilities to these sets. Here's where measures come into play.

# Measures

I use the term measures to mean set functions satisfying certain properties. The precise definition of a measure is the following.

>[!definition] **Definition**: Measure
>Let $\Omega$ be a set and $\mathcal{F}$ be a $\sigma$-algebra (on $\Omega$). A ***measure*** on $(\Omega, \mathcal F)$ is a function $\mu: \mathcal{F} \longrightarrow [0, \infty]$ with the following properties:
>1. $\mu(\emptyset)=0$
>2. **Countable additivity (or $\sigma$-additivity)**: $\mu\left(\bigcup \limits_{n=1}^\infty A_n\right) = \sum \limits_{n=1}^\infty \mu(A_n)$ where $(A_n)_{n=1}^\infty$ is a sequence of [[Set theory#^pairwise-disjoint|pairwise disjoint]] sets in $\mathcal{F}$

Concisely, you can say $\mu$ is a non-negative, countably additive function on $\mathcal F$.

>[!definition] **Definition**: Measurable space; Measure space
>The pair $(\Omega, \mathcal{F})$ is called a ***measurable space***. The triple $(\Omega, \mathcal{F}, \mu)$ is called a ***measure space.***

^measurable-measure-space

>[!definition] **Definition**: (Kolmogorov) Probability measure; Probability space
>If a measure is normed, i.e., $\mu(\Omega) = 1$, then $\mu$ is called a ***probability measure*** (or ***distribution*** in probability theory) and $(\Omega, \mathcal{F}, \mu)$ would instead be called a ***probability space***. Typically, probability measures are denoted as $P$ or $\mathbb P$.

^probability-measure-space

>[!definition] **Definition**: Measurable
>Let $(\Omega, \mathcal F)$ and $(\mathbb R, \mathcal B)$ be measurable spaces. If a set $A \in \mathcal F$, then $A$ is called ***$\mathcal F$-measurable***, or just ***measurable*** when it's unambiguous which set is being referred to. A function $X: \Omega \rightarrow \mathbb R$ is said to be ***measurable*** if and only if $X^{-1}(B) \in \mathcal F$ for all $B \in \mathcal B$. 
>>[!notation] Notation
>>To indicate a function is measurable, I've seen it written as:
>>- $X: (\Omega, \mathcal F) \rightarrow (\mathbb R, \mathcal B)$ (a function of measurable spaces)
>>- $X: \Omega / \mathcal F \rightarrow \mathbb R / \mathcal B$ (read as $X$ is measurable from $\Omega-over-\mathcal F$ to $\mathbb R-over-\mathcal B$)
>>- $X: \Omega \overset{measurable}{\longrightarrow} \mathbb R$ or in this case, $X: \Omega \overset{borel}{\longrightarrow} \mathbb R$

^measurable

There are also other types of measures that'll come up in some proofs.

>[!definition] Premeasure
>Let $\Omega$ be a set and $\mathcal A$ be an algebra (on $\Omega$). A premeasure on $(\Omega, \mathcal A)$ is a function $\mu_0 : \mathcal A \longrightarrow [0,\infty]$ satisfying:
>1. $\mu_0(\emptyset) = 0$
>2. **Countable additivity (or $\sigma$-additivity)**: if $(A_n)_{n=1}^\infty \subseteq \mathcal A$ are pairwise disjoint and $\bigcup_{n=1}^\infty A_n \in \mathcal A$, then
>$$
>\mu_0\left(\bigcup_{n=1}^\infty A_n\right) = \sum_{n=1}^\infty \mu_0(A_n)
>$$

^premeasure

Notice premeasures are nearly identical to measures. Main difference being that it's defined on an algebra (not a $\sigma$-algebra), so it's not closed under countable unions, so for the countable additivity property, we add an assumption that the countable union $\bigcup_{n=1}^\infty A_n$ is in the algebra $\mathcal A$.

>[!definition] Outer measure
>Let $\Omega$ be a set and $\mathcal P(\Omega)$ be the power set of $\Omega$. An ***outer measure*** on $(\Omega, \mathcal P(\Omega))$ is a function $\mu^*: \mathcal P(\Omega) \longrightarrow [0, \infty]$ with the following properties:
>1. $\mu^*(\emptyset)=0$
>2. **Countable subadditivity**: $\mu^*\left(\bigcup \limits_{n=1}^\infty A_n\right) \le \sum \limits_{n=1}^\infty \mu^*(A_n)$ where $(A_n)_{n=1}^\infty \subseteq \mathcal P(\Omega)$

You can think of an outer measure as a measure that is defined on the power set $\mathcal P(\Omega)$ instead of a $\sigma$-algebra, only guaranteeing countable subadditivity (not countable additivity).

>[!theorem] **Theorem**: Continuity of $\mathbb P$
>Let $A_1, A_2, \dots$ be a countable sequence of events. Then,
>$$A_n \uparrow A \text{ or } A_n \downarrow A \Longrightarrow \mathbb P(A_n) \rightarrow \mathbb P(A)$$
>>[!proof]-
>>
>>**$A_n \uparrow A$ case**:
>>
>>Let $B_1, B_2, \dots$ be a countable sequence of events such that $B_1 := A_1$ and $B_n := A_n \cap A_{n-1}^c$ for all $n\ge 2$ so that the sequence of $B_n$'s are [[Set theory#^pairwise-disjoint|pairwise disjoint]] with $A = \cup_{n=1}^\infty A_n = \cup_{n=1}^\infty B_n$ and $A_n = \bigcup_{i=1}^n B_i$. Then, it follows that
>>$$
>>\mathbb P(A) = \mathbb P\left(\bigcup_{n=1}^\infty B_n\right) \overset{(1)}{=} \sum_{n=1}^\infty \mathbb P(B_n) \overset{(2)}{=} \lim_{n\to\infty} \sum_{i=1}^n \mathbb P(B_i) \overset{(1)}{=} \lim_{n\to\infty} \mathbb P\left(\bigcup_{i=1}^n B_i\right) = \lim_{n \to \infty} \mathbb P(A_n)
>>$$
>>where $(1)$ follows from $\sigma$-additivity and $(2)$ follows since the limit of the infinite series exists, i.e.,$\sum_{n=1}^\infty \mathbb P(B_n) = \mathbb P(A)$. $\qquad \blacksquare$
>>
>>**$A_n \downarrow A$ case**:
>>
>>Given $A = \lim_{n\to\infty} A_n = \bigcap_{n=1}^\infty A_n$, we have
>>$$
>>A^c = \left(\bigcap_{n=1}^\infty A_n\right)^c \overset{(1)}{=} \bigcup_{n=1}^\infty A_n^c \overset{(2)}{=} \lim_{n\to\infty} A_n^c 
>>$$
>>where $(1)$ follows from De Morgan's laws and $(2)$ follows since $A_1 \supseteq A_2 \supseteq \dots$ implies $A_1^c \subseteq A_2^c \subseteq \dots$, giving us $A_n^c \uparrow A^c$. From the earlier part, we know $A_n^c \uparrow A^c$ implies $\mathbb P(A_n^c) \rightarrow \mathbb P(A^c)$, thus
>>$$
>>\mathbb P(A) = 1-\mathbb P(A^c)
>>= 1- \lim_{n\to\infty} \mathbb P(A_n^c)
>>= 1 - \lim_{n\to\infty} (1-\mathbb P(A_n))
>>= \lim_{n\to\infty} \mathbb P(A_n) \qquad \blacksquare
>>$$

>[!corollary] **Corollary**: Sequential Continuity of $\mathbb P$
>Let $A_1, A_2, \dots$ be a countable sequence of events. Then,
>$$
>A_n \rightarrow A \Longrightarrow \mathbb P(A_n) \rightarrow \mathbb P(A)
>$$


# Tentative/Important Theorems

>[!theorem] **Theorem**: Carathéodory Extension
>Let $\mathcal A$ be an algebra on $\Omega$, and let $\mu_0$ be a premeasure on $\mathcal A$. Then there exists a measure $\mu$ on $(\Omega, \sigma(\mathcal A))$ such that
>$$
>\mu(A) = \mu_0(A) \quad \text{for all } A \in \mathcal A
>$$
>Moreover, if $\mu_0$ is $\sigma$-finite (i.e. $\Omega = \bigcup_n A_n$ for some $A_n \in \mathcal A$ with $\mu_0(A_n) < \infty$), then $\mu$ is the *unique* such extension.
>>[!proof]

^caratheodory-extension

>[!definition] **Definition**: Absolutely continuous (measures)
>Let $\mu, \nu$ be measures on $(\mathbb R, \mathcal B)$. We say $\mu$ is ***absolutely continuous*** with respect to $\nu$, written $\mu \ll \nu$, if
>$$
>\nu(B) = 0 \implies \mu(B) = 0 \quad \text{for all } B \in \mathcal B
>$$

^absolutely-continuous-measures

>[!definition] **Definition**: Singular (measures)
>Let $\mu, \nu$ be measures on $(\mathbb R, \mathcal B)$. We say $\mu$ and $\nu$ are ***singular*** or ***mutually singular***, written $\mu \perp \nu$, if there exists a set $B \in \mathcal B$ such that  
>$$  
>\mu(B) = 0 \quad \text{and} \quad \nu(B^c) = 0.  
>$$

^singular-measures

In words, if the two measures live on completely separate sets, they are (mutually) singular.

>[!theorem] **Theorem**: Radon–Nikodym
>Let $\mu, \nu$ be $\sigma$-finite measures on $(\mathbb R, \mathcal B)$ with $\mu \ll \nu$. Then there exists a measurable function $f: \mathbb R \to [0,\infty)$, unique $\nu$-almost everywhere, such that
>$$
>\mu(B) = \int_B f \, d\nu \quad \text{for all } B \in \mathcal B
>$$
>The function $f$ is called the ***Radon–Nikodym derivative*** of $\mu$ with respect to $\nu$, written $f = \dfrac{d\mu}{d\nu}$.
>>[!proof]-

^radon-nikodym

>[!theorem] **Theorem**: Lebesgue Decomposition
>Let $\mu$ be a $\sigma$-finite measure on $(\mathbb R, \mathcal B)$ and $\nu$ a $\sigma$-finite reference measure (e.g. Lebesgue measure $\lambda$). Then $\mu$ decomposes uniquely as
>$$
>\mu = \mu_{ac} + \mu_{sing}
>$$
>where $\mu_{ac} \ll \nu$ and $\mu_{sing} \perp \nu$ (i.e. $\mu_{sing}$ and $\nu$ are supported on disjoint sets — "mutually singular").
>>[!proof]-

^lebesgue-decomposition





lebesgue measure
sigma-finite

# Lebesgue Integral



# $L^p$ space



# Convergence theorems

- Monotone Convergence Theorem
- Dominated Convergence Theorem
- Fatou's Lemma
- LLN
- CLT
