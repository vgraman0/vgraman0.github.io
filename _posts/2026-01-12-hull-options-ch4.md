---
layout: post
title: "4. Interest Rates"
date: 2026-01-20 12:00:00
description: "Treasury rates, overnight rates, repo rates, and the transition from LIBOR to SOFR"
tags: options derivatives interest-rates
categories: hull-options
giscus_comments: false
related_posts: false
---

## Types of Rates

**Treasury rates**: Rates on T-bills and T-bonds, considered risk-free.

**Overnight rates**: Fed funds rate in the US (other countries have similar systems). Arises from reserve requirements—banks with excess reserves lend overnight to banks with shortfalls.

**Repo rate**: Interest rate on a repurchase agreement, where securities are sold with an agreement to buy them back later. Effectively a collateralized loan.

## Reference Rates

**LIBOR** (London Interbank Offered Rate): Banks submitted estimates of their borrowing rates. Phased out due to manipulation scandals and lack of underlying transactions.

**SOFR** (Secured Overnight Financing Rate): The replacement for USD LIBOR. A volume-weighted median of rates on overnight Treasury repo transactions—based on actual trades rather than estimates.

## Bond pricing

A bond is a series of future cash flows: periodic coupons and a final principal (face value).

Suppose the coupon $c_i$ payments are at times $t_i$, $P$ is the principal, and $r_i$ is the zero-rate for maturity $t_i$.
The formula for the bond price is given as

$$P_{\text{bond}} = \sum_{i=1}^n c_i e^{-r_i t_i} + Pe^{-r_nt_n}.$$

This comes from discounting the values of the future cash flows to their corresponding present value.

### Bond yield

The yield is a single "average" interest rate such that after being applied to each of the bond cash flows, the present value would equal the market price.

In other words, we would solve the equation

$$P_{\text{bond}}(y) = \sum_{i=1}^n c_i e^{-y t_i} + Pe^{-yt_n} = P_{\text{market}}$$

This is usually calculated through an iterative method, such as Newton-Raphson.

### Par yield

The par yield is the coupon rate (per annum) that causes the bond price to equal its principal.

For a bond that pays semi-annual coupons, we would solve

$$P_{\text{bond}}(c) = \frac{c}{2}\sum_{i=1}^n e^{-y t_i} + Pe^{-yt_n} = P$$

Rearranging the equation gives

$$c = 2P\left (\frac{1 - e^{-yt_n}}{\sum_{i=1}^n e^{-yt_i}}\right)$$

This is usually written as

$$c = \frac{P(1-d)m}{A},$$

where $A$ is the value of the annuity that pays one dollar on each coupon payment date, $m$ is the number of coupon payments per year, and $d$ is the present value of one dollar received at the maturity of the bond.

## Forward rates

A **Forward Rate** is the interest rate for a future period of time that is implied by the interest rates we see in the market today.

Suppose $R_1$ and $R_2$ are the zero rates for maturities $T_1$ and $T_2$ respectively (where $T_2$ > $T_1$).

The forward rate $R_F$ is the rate we need to invest between $T_1$ and $T_2$ so that investing in at $R_2$ for $T_2$ years is equivalent to investing at $R_1$ for $T_1$ years and investing at $R_F$ between $T_1$ and $T_2$.

Written out explicitly,

$$
\begin{align*}
e^{R_2T_2} &= e^{R_1T_1} \cdot e^{R_F(T_2 - T_1)} \\
&= e^{R_1T_1 + R_F(T_2 - T_1)}
\end{align*}
$$

Because $e^x$ is a monotonic function, we can apply the inverse to both sides to obtain

$$R_2T_2 = R_1T_1 + R_F(T_2 - T_1).$$

Rearranging and solving for $R_F$ gives

$$R_F = \frac{R_2T_2 - R_1T_1}{T_2 - T_1}.$$

### Instantaneous rates

The **instantaneous forward rate** $f(T)$ represents the interest rate at a specific instant in time.

Suppose $V(T)$ is the value of one dollar at time $T$. Then,
$$f(T) := \frac{V'(T)}{V(T)}.$$

We know that $V(T) = e^{R(T)T}$, where $R(T)$ is the zero rate at time $T$.

$$
\begin{align*}
V'(T) &= e^{R(T)T} \frac{d}{dT} \left[R(T) T\right] \\
&=- V(T) \frac{d}{dT}\log V(T).
\end{align*} 
$$

Where this gets interesting is that we have

$$\int_0^T f(t)\, dt = -\int_0^T \frac{\partial}{\partial t} \log V(t)\,dt = - \left(\log V(T)  - \log V(0)\right).$$

We know $V(0) = 1$, so

$$\int_0^T f(t)\,dt = - \log V(T) = R(T)T.$$

Rearranging the expression, we obtain

$$R(T) = \frac{1}{T} \int_0^T f(t)\,dt.$$

In other words, the zero rate is the time-weighted average of the instantaneous forward rates between today and maturity.

## Duration

## Convexity