# Speaker guide

The deck has 32 active slides, with “Dilution” preserved but hidden. The rehearsal budget is 33:00 before questions and pauses, leaving room in the original 45–50 minute slot. The notes in speaker view (`S`) contain the explanation, qualifications and transitions; the slides carry the visual argument.

## Rehearsal clock

| Slides | Segment | Budget | Elapsed |
| --- | --- | ---: | ---: |
| 1–5 | Introduction, paradox and investment hurdle | 3:30 | 3:30 |
| 6–13 | Three games and the return to venture | 12:00 | 15:30 |
| 14–20 | Financing, evidence and concentration | 7:00 | 22:30 |
| 21–27 | Investor/builder perspective and discovery | 6:45 | 29:15 |
| 28–32 | Runway, valuation and conclusion | 3:45 | 33:00 |

If running late, shorten the employment background and the LaMDA/ChatGPT discussion on slide 27. Protect the coin-game intuition and the closing pause.

Slide 23 asks “Who cares?” before slide 24 combines the startup claims and probabilities. The separate plain and financing-stage build slides have been removed. Go directly to the Airbnb case study on slide 25, followed immediately by “Build a wedge.” The interview prompts and book reveal have been removed. There is no separate learning-loop callback, live interview or debrief.

## Transitions to rehearse

- **After the games:** ten equal $1 investments, nine $0 outcomes and one $30 outcome return $30 on $10: 3× **gross**. A larger winner is needed for the earlier 3× **net** hurdle. This is a scenario, not a measured failure rate or a promised winner.
- **At the funding table:** connect the columns to Game 3: fewer companies reach each level, while later-stage financings command larger prices. The table motivates that structure; it does not fit a power law.
- **After concentration:** move directly to “Buy vs. build” and the investor/builder perspective. The dilution demonstration is hidden.
- **Before discovery:** the staged model explains why investors need evidence. Now ask how a founder gets that evidence.
- **Before valuation:** move from testing an idea to funding the first experiment. The financing numbers are illustrative assumptions.
- **Before the final slide:** potential market spending, a company's revenue, its valuation, and an investor's return are different quantities. The human conclusion is different again.

## Mathematical preparation

**Game 1.** `X ~ Binomial(100, 1/2)`. Its mean is $50 and standard deviation is $5. Linearity of expectation gives the mean; the central limit theorem motivates the normal approximation.

**Game 2.** The one-step expected multiplier is one. A 50-head / 50-tail path gives `1.1^50 × 0.9^50 = 0.99^50 ≈ 0.605`. The theoretical mean is $1. The finite distribution is discrete; log-normal is an approximation. A sample mean need not equal its expectation.

**Game 3.** The tree doubles **before** each flip. Immediate tails pays $2. If the first tails is on flip `N=n`, then `X=2^n` and `P(N=n)=2^(-n)`, for `n≥1`. Thus each stopping level contributes $1 to expected payout. The idealized sum diverges, but that does not establish an infinite rational entry price.

The chart uses the survival probability `P(X≥x)`. At the possible payouts `x=2^n`, it equals `2/x`. Between these payouts the survival function is a staircase; the plotted line joins values only at the possible payouts. The deterministic 10,000-player simulation matches the tree. The previous image used a different starting payout and remains bundled only as an unused reference.

For the general growth/survival model, measured relative to the starting level:

```text
x = m^n
P(reach level n) = s^n = x^(log_m s) = x^(-α)
α = −ln(s) / ln(m)
```

That derivation belongs in preparation or questions. Company outcomes are dependent, investors and founders learn, and real outcomes are finite. Neither a financing calendar nor concentrated returns alone proves an exact power law.

**The startup claims.** Care, action, reachable delivery and growth are interdependent. The exact chain rule is:

```text
P(C ∩ A ∩ R ∩ G)
  = P(C) P(A | C) P(R | C,A) P(G | C,A,R)
```

A prior is a belief before evidence; a joint prior can include conditional beliefs. The on-slide approximation keeps only the preceding claim in each conditioning term and uses the four claims as a simplified model of winning. This is a modeling assumption, not independence or an exact chain-rule identity. Customer interviews do not produce calibrated numerical probabilities, and satisfying the four claims does not guarantee success. Keep the approximate equation on slide 24; the full chain rule above is preparation for questions.

**The funding ladder.** Mattermark’s source table gives cumulative graduation percentages. The slide divides adjacent entries to get conditional rates; it does not multiply the cumulative percentages together. Using the unrounded ratios, `0.32 × (21/32) × (12.3/21) × (5/12.3) = 0.05`: about 5% of the seed cohort reached D. The source inputs were already rounded.

| Stage reached | Share of 2009 seed cohort | Advance from previous stage | Q4 2024 median pre-money |
| --- | ---: | ---: | ---: |
| Seed | 100% | start | $16.0M |
| A | 32% | ≈32% | $43.4M |
| B | 21% | ≈66% | $108.9M |
| C | 12.3% | ≈59% | $222.3M |
| D | 5% | ≈41% | $416.0M |

The two datasets describe separate companies in different periods. The slide rounds valuations to two significant figures: $16M, $43M, $110M, $220M and $420M. These are Carta medians for primary and bridge rounds combined; do not mix them with primary-only medians. Stage-price ratios are not a realized growth path or investment return. Mattermark supplies no pre-seed-to-seed rate, so the table begins at seed. Not raising another round is not equivalent to business failure.

**Dilution backup (slide hidden).** To restore the slide, set `SHOW_DILUTION_SLIDE` to `true` in `src/slides/PartTwoEvidence.tsx`. Its full notes and interactive simulator are preserved. At round four, post-money valuation is $135M and cumulative funding is $40M. Without follow-on, the first investor owns 10.24%, worth $13.824M on paper, having invested $1M. With pro rata, that investor owns 20%, worth $27M on paper, having invested $8.8M. More ownership requires more capital. The separately assumed 50% survival rate does not mathematically imply 3× round growth.

**Valuation.** The $500k cash need and 20% dilution ceiling imply a $2.5M minimum post-money price compatible with that financing plan, or $2M pre-money at the equality. An investor can decline. Higher valuation reduces dilution at the same raise, but sets higher expectations for subsequent financing.

**Investment case.** “Will VCs believe it?” uses a three-point line: “big enough market,” “you can build it,” and “$500k.” There is no fixed market-size threshold. Enough scale depends on the potential return, price and capital required. The $500k round remains illustrative; say that the two beliefs *might* support it. Market spending, company revenue, valuation and investor returns remain different quantities.

## Sources and changes from the working draft

| Material | Source and qualification |
| --- | --- |
| Coin games | Frank Odom, [On Power Laws](https://fkodom.com/blog/on-power-laws), April 8, 2026. Existing trees and Games 1–2 plots preserved; Game 3 tail plot rebuilt to match its tree. |
| Public-market chart | [Macrotrends](https://www.macrotrends.net/datasets/2324/sp-500-historical-chart-data), supplied annual-average price series, first committed August 14, 2026. Index points, no dividends. The exact YTD cutoff was not recorded. The September 4 refresh attempt was blocked with HTTP 403; values are retained as a labeled snapshot. |
| Financing cadence/dilution | Carta, [graduation analysis](https://carta.com/data/newsletter-graduation-rate-from-seed-to-series-a/), February 5, 2025, and [early-stage valuations](https://carta.com/data/record-setting-valuations/), March 5, 2026. The two-year / 10–25% slide is a planning range, with dated evidence in notes. |
| Stage graduation table | Jason D. Rowley, Mattermark, [The Startup Graduation Rate Is Surprisingly Low](https://mattermark.com/startup-graduation-rate-surprisingly-low/), September 28, 2016. Use the **2009 row** of its [cohort table](https://mattermark.com/wp-content/uploads/2016/09/Screenshot-2016-09-28-10.36.41.png): U.S. software companies seeded in 2009, observed through publication. The wider study included 2,011 companies seeded in 2009–2012; that is not the size of the 2009 row. Adjacent cumulative percentages give the displayed conditional rates. |
| Stage valuations | Ashley Neville and Kevin Dowd, Carta, [State of Private Markets: Q4 and 2024 in review](https://carta.com/data/state-of-private-markets-q4-2024/), February 12, 2025. Q4 2024 U.S. median pre-money valuations, primary and bridge rounds combined. Separate samples from the graduation column. |
| YC concentration | Paul Graham, [Black Swan Farming](https://paulgraham.com/swan.html), September 2012. Portfolio-company value at that time, not realized historical profits. |
| Horsley Bridge | Chris Dixon, [Performance Data and the ‘Babe Ruth’ Effect](https://a16z.com/performance-data-and-the-babe-ruth-effect-in-venture-capital/), June 8, 2015. Corrected from “5% / half” to the reported approximately 4.5% of invested dollars / 60% of returns. Historical pooled fund data. |
| Airbnb origin and customer visits | Airbnb, [What Makes Airbnb, Airbnb](https://news.airbnb.com/what-makes-airbnb-airbnb), 2020, and [Brian Chesky's host letter](https://news.airbnb.com/th/an-important-announcement-from-airbnb/), November 3, 2020. Removed the unsupported message-board/Craigslist sequence. |
| Customer-discovery background | Rob Fitzpatrick, [The Mom Test](https://www.momtestbook.com/). Source for the removed interview prompts. |
| Incumbent example | Google, [LaMDA](https://blog.google/innovation-and-ai/products/lamda/), May 18, 2021; OpenAI, [Introducing ChatGPT](https://openai.com/index/chatgpt/), November 30, 2022. Dates illustrate different product timelines; they do not prove a single motive. |

The funding-table sources were checked September 7, 2026; other sources were checked September 4. The ranked-return chart is explicitly illustrative, in arbitrary common dollar units. Its fund line is a scale marker. The closing “worthwhile” statement is the speaker's judgment, not an empirical percentage.

## Before the event

Rehearse once to the clock and test speaker view and fullscreen on the actual projector setup. Refresh the S&P snapshot if Macrotrends access is available; do not relabel its existing value as a current reading. Keep the dated cohort evidence dated even if newer financing headlines appear.

All critical figures, fonts/fallbacks and interactions work locally. No live X embed is required. For a static backup, open `?print-pdf` and follow the PDF instructions in the README; interactive slides retain their default examples.
