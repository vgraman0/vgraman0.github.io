---
layout: post
title: "3. Hedging Strategies Using Futures"
date: 2026-01-11 12:00:00
description: From Hull, Options, Futures, and Other Derivatives
tags: options derivatives hedging
categories: hull-options
giscus_comments: false
related_posts: false
---

This chapter focuses on the practical application of futures: protecting against price movements. While the theory suggests a perfect "lock" on prices, real-world constraints like basis risk and asset mismatches make hedging an exercise in variance minimization.

### Short vs. Long Hedges

* **Short Hedge:** Occurs when you already own an asset (or will produce it, like a farmer with crops) and intend to sell it later. You sell futures at price $F$ to protect against a **price decrease**.
    * Sale of physical asset at time $T$: $+S_T$
    * Payoff from Short Future: $+(F - S_T)$
    * **Net Price Received:** $S_T + F - S_T = F$
    * **Result:** If prices fall, the gain on the futures offsets the loss on the physical sale.

* **Long Hedge:** Occurs when you know you must buy an asset in the future (like an airline needing fuel). You buy futures at price $F$ to protect against a **price increase**.
    * Purchase of physical asset at time $T$: $-S_T$
    * Payoff from Long Future: $+(S_T - F)$
    * **Net Price Paid:** $-S_T + S_T - F = -F$
    * **Result:** If prices rise, the gain on the futures offsets the higher cost of the physical purchase.

---

### Basis Risk
In a perfect world, the spot price ($S$) and futures price ($F$) converge at expiry. In reality, we often close a hedge before expiry or at a different location. The **Basis** is defined as:

$$\text{Basis} = \text{Spot Price} - \text{Futures Price}$$

* **Strengthening:** If the Basis increases ($S - F \uparrow$), it benefits a short hedger but hurts a long hedger.
* **Weakening:** If the Basis decreases ($S - F \downarrow$), it benefits a long hedger but hurts a short hedger.

---

### Cross Hedging & Minimum Variance Hedge Ratio
When the asset being hedged is not the same as the underlying of the futures contract, we face **cross hedging risk**. We must find the optimal hedge ratio ($h^*$) that minimizes the variance of the hedged portfolio.

#### Derivation
The change in the value of a hedged position is $\Delta P = \Delta S - h \Delta F$. To minimize risk, we minimize the variance:

$$
\begin{aligned}
\operatorname{Var}(\Delta P) &= \operatorname{Var}(\Delta S) + \operatorname{Var}(h\Delta F) - 2 \operatorname{Cov}(\Delta S, h\Delta F) \\
&= \sigma_S^2 + h^2 \sigma_F^2 - 2h \rho \sigma_S \sigma_F
\end{aligned}
$$


Taking the derivative with respect to $h$ and setting it to zero:

$$\frac{d}{dh} \operatorname{Var}(\Delta P) = 2h \sigma_F^2 - 2 \rho \sigma_S \sigma_F = 0$$

Solving for the **Minimum Variance Hedge Ratio ($h^*$)**:

$$h^* = \rho \frac{\sigma_S}{\sigma_F} = \frac{\operatorname{Cov}(\Delta S, \Delta F)}{\sigma_F^2}$$



---

###  Optimal Number of Contracts ($N^*$)
Once $h^*$ is known, we calculate the number of contracts needed by adjusting for the size of the position ($Q_A$) and the size of one contract ($Q_F$):

$$N^* = \frac{h^* Q_A}{Q_F}$$

**Tailing the Hedge:** Because futures are settled daily, we usually "tail" the hedge to account for the interest earned on margin cash flows. We use the total dollar value ($V$):

$$N^* = \hat{h} \frac{V_A}{V_F}$$

---

###  Hedging an Equity Portfolio
To hedge a diversified stock portfolio, we use stock index futures. Instead of calculating a custom $h^*$, we use the portfolio's **Beta ($\beta$)**, which measures its sensitivity to the market index:

$$N^* = \beta \frac{V_A}{V_F}$$

* If $\beta > 1$, the portfolio is more volatile than the market, requiring more futures contracts for protection.
* If $\beta < 1$, fewer contracts are required.