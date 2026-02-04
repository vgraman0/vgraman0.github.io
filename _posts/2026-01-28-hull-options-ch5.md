---
layout: post
title: "5. Forward/Future Prices"
date: 2026-01-29 12:00:00
description: ""
tags: options derivatives forward future
categories: hull-options
giscus_comments: false
related_posts: false
---

This chapter walks through the forward and future pricing formulas using arbitrage arguments.

We will make the following assumptions:
1. No transaction costs.
2. Uniform tax rate on all net trading profits.
3. Ability to borrow/lend at the same risk-free rate.
4. Market participants take advantage of arbitrage opportunities as they occur.

We will use the notation:
- $T$: Time until delivery date in a forward or futures contract.
- $S_0$: Price of the asset underlying the forward or futures contract today.
- $F_0$: Forward or futures price today.
- $r$: Zero-coupon risk-free rate using continuous compounding for a maturity of $T$.

## Forward prices for an investment asset

### No income, no storage costs
Take a forward contract on an investment asset with price $S_0$ that provides no income and has no storage costs.

Then,

$$F_0 = S_0 \exp(rT)$$

This is derived using an arbitrage argument:
If $F_0 > S_0\exp(rT)$:
1. Borrow $S_0$ at the risk-free rate.
2. Buy one share of the stock.
3. Short a forward contract to sell the share at $F_0$ at $T$.

At expiry, we make $F_0 - S_0\exp(rT) > 0$ risk-free profit.

If $F_0 < S_0 \exp(rT):$
1. Short the stock and immediately sell in the market for $S_0$.
2. Invest $S_0$ at the risk-free rate.
3. Buy a forward contract to buy the stock at $F_0$ at $T$.

At expiry, we make $S_0\exp(rT) - F_0 > 0$ risk-free profit.

### Known income

Suppose an investment asset pays income with present value $I$. Then, for a forward contract on the asset,

$$F_0 = (S_0 - I) \exp(rT).$$

If $F_0 > (S_0 - I) \exp(rT)$: An arbitrageur borrows $S_0$, buys the asset, and shorts the forward. They use the income $I$ to pay off part of the loan and the forward sale proceeds to pay the rest, keeping the surplus as profit.

If $F_0 < (S_0 - I)\exp(rT)$: An arbitrageur shorts the asset, invests the proceeds ($S_0$), and takes a long forward position. The use the investment growth to pay the required income to the lender and buy the asset back at the low price $F_0$, keeping the profit.

### Known yield

Suppose the asset provides a yield rather than a fixed dollar amount. This means the income is expressed as a percentage of the asset's price at the time it is payed. We can also model this by thinking of the price as staying constant but owning more of the asset.

Define $q$ as the average yield on an asset during the time $T$.
1. Borrow $S_0$ to buy one unit of the asset today.
2. Enter a forward contract to sell the final amount of the asset ($\exp(qT)$ units) at time $T$ for price $F_0$.
3. At maturity, the one unit has grown to $\exp(qT)$ units. You sell the units under the forward contract, receiving $F_0\exp(qT)$.
4. At maturity, you repay the loan, which has grown to $S_0\exp(rT)$.

Setting these equal, we obtain the formula

$$F_0 = S_0 \exp((r-q)T).$$

## Valuing Forward Contracts

First, we need to different between price and value.
- **Forward price** ($F_0$) is the delivery price $K$ that would be set if you negotiated a brand-new contract today.
- **Value of the Contract** ($f$): What the existing contract is worth right now.

The value of the long forward contract is given by

$$f = (F_0 - K)\exp(-rT).$$

We can prove this as follows. 
- Take a portfolio consisting of a forward contract to buy the underlying for $K$ at time $T$, and a forward contract to sell the asset at $F_0$ at time $T$.
- The payoff at time $T$ is $S_T - K$ for the first contract, and $F_0 - S_T$ for the second contract. So the total payoff is $F_0 - K$.
- Based on the risk-free argument, the portfolio is worth $(F_0 - K)\exp(-rT)$ today.

Combining this with the formula $F_0 = S_0\exp(-rT)$, we obtain 
$$f = S_0 - K\exp(-rT).$$

We can form similar equations in the cases where we have known income or an investment asset with a given yield.