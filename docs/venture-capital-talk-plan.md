# The Math of Venture Capital

## A working plan for a public talk on the mathematics of venture capital

### September 7 implementation update

The working deck has 32 active slides, with “Dilution” preserved but hidden. The outline below records the narrative beats, which can span several slides; the current slide sequence is in the README and the 33:00 rehearsal budget is in [speaker-guide.md](speaker-guide.md).

“Who cares?” leads into one startup-bet slide that combines the claims and probability equation, followed directly by the Airbnb case study. “Build a wedge” follows Airbnb immediately. The user removed “What's the pain?” and its book reveal, “Move fast & update priors,” the live “The Mom Test” slide, “What did we learn?”, “Market size” and the separate financing-fit bridge. The incumbent slide is titled “Why won't company X build that?” and focuses only on Google LaMDA and OpenAI ChatGPT. The ending keeps the original financing example and closing statement, with simpler layouts and qualifications in speaker notes.

The stage-by-stage graduation/valuation table is retained. The user removed the separate seed bottleneck slide on September 9. It uses dated historical sources, identified separately: Mattermark’s 2009 seed cohort observed in 2016 and Carta’s Q4 2024 stage valuations. The table motivates Game 3’s elimination and multiplicative-payoff structure; it is not a matched longitudinal price series or a power-law fit. The previous corrections to Game 3’s $2 minimum payout and Horsley Bridge’s 4.5% of invested dollars / 60% of returns remain. See the speaker guide for sources, probability qualifications and the S&P refresh limitation.

### Possible titles

- **The Math of Venture Capital**
- **How Nine Failures Make a Fund**  
  *Power laws, expected value, and the mathematics of venture capital*
- **Most Startups Fail. Why Invest?**
- **Coin Flips, Power Laws, and Venture Capital**
- **The Mathematics of Betting on Startups**

## Audience and format

- General public, hosted by a university mathematics department
- Approximately 45–50 minutes, plus questions
- Mathematically motivated but accessible without advanced coursework
- Built around analogies, visual distributions, round-number estimates, and a small number of equations

## Central thesis

Venture capital can remain rational even though most startups fail because startup outcomes are not distributed like ordinary additive bets. A small number of companies can generate multiplicative, nearly uncapped outcomes, allowing one exceptional investment to dominate an entire portfolio.

That mathematical framework helps explain:

- Why venture investors need companies with enormous upside
- Why not every good business is appropriate for venture capital
- Why startup financing happens in stages
- Why early-stage evaluation mixes qualitative evidence with quantitative reasoning
- Why market size matters
- Why the highest possible valuation is not always best for founders
- Why narrow initial products can still lead to enormous companies

## Narrative structure

> **Paradox → mathematical model → empirical evidence → implications for investors → application to building companies → personal conclusion**

The title is followed by a brief speaker background that establishes the Sewanee connection and technical path. Move immediately from that introduction to the mathematical question; save the broader investor-and-builder framework for later, after the model and evidence.

## Timing overview

| Section | Approximate time | Purpose |
| --- | ---: | --- |
| The paradox | 2–3 minutes | Create the central unanswered question |
| Mathematical foundation | 12–13 minutes | Derive normal, log-normal, and power-law intuition |
| Venture evidence | 9–10 minutes | Argue that venture outcomes resemble the power-law model |
| Background and implications | 8–9 minutes | Establish perspective and derive investment consequences |
| Startup discovery exercise | 10–12 minutes | Apply the framework to a possible real problem |
| Valuation and conclusion | 5–6 minutes | Derive a pre-product valuation and return to the human lesson |

---

# Detailed slide plan

## Part I: The paradox and mathematical foundation

### Slide 1 — The Math of Venture Capital

#### On the slide

> # The Math of Venture Capital

> **How 9 Wrongs Make a Right**

---

### Slide 2 — My background

#### On the slide

> # My background

Education:

- **2015 · Sewanee** — Mathematics + Physics
- **2017 · UC Davis** — M.S. Physics

Since then:

- Machine Learning Engineer
- Senior Computer Vision Engineer
- Director of Innovation
- Director of ML
- **Founding Engineer @ Tower Research Ventures**

#### Purpose

Establish the speaker's connection to Sewanee and the path from physics into machine learning and startup building. Keep this introduction brief, then open the central question.

---

### Slide 3 — Most startups fail.

#### On the slide

> # Most startups fail.
>
> Why venture capital?

Use off-white for the statement and red for the question.

#### Purpose

Create a sharp, jarring opening and allow the audience to sit with the apparent contradiction.

#### Possible spoken opening

> Most startups fail.
>
> That is not a controversial statement within venture capital. Investors know it. Founders know it. The entire industry is organized around it.
>
> So why would anyone invest in startups?

Pause before advancing. Do not answer the question yet.

---

### Slide 4 — The S&P 500

#### On the slide

A line chart of the annual average S&P 500 price from 1927 through 2026. Use a logarithmic vertical scale so equal proportional changes occupy equal vertical distances.

Label the chart as a price-index history. Dividends are excluded, and the 2026 value is year-to-date.

#### Purpose

Show the long compounding trend in the public-market alternative before asking anyone to accept venture risk.

#### Spoken explanation

> Before investing in startups, I can buy a broad S&P 500 index fund.
>
> This is the average S&P 500 price for each year over the last century. The vertical scale is logarithmic, so a straight long-run slope represents compounding.
>
> This is the price index, not total investor return. It excludes dividends. The point is the persistent compounding trend and the public-market alternative it creates.

Use the annual average price series supplied from Macrotrends. Keep the explicit 2× and 3× performance comparison on the next slide.

---

### Slide 5 — Venture must outperform

#### On the slide

```text
S&P 500 rule of thumb      Venture fund hurdle
2× in about 8 years        at least 3× in about 8 years
9.1% annualized            at least 14.7% annualized
```

#### Purpose

Turn the opening paradox into a performance hurdle without relying on a hypothetical fund size.

#### Spoken explanation

> Early-stage startups are speculative. There may be little evidence of traction, the capital is committed for years, and nine out of ten investments may fail.
>
> Why accept that risk if a public index can double over the same period?
>
> For this talk, the venture hurdle is at least three times the invested capital over roughly eight years. That is about 14.7% annualized.
>
> The portfolio still has to clear the public-market alternative despite the high failure rate.

Treat 3× over eight years as the talk's explicit working benchmark, not an industry-wide promise. Compare returns on the same basis. If the index result is an investor return, the venture result should be net to the investor; gross portfolio performance must be higher before fees and carry.

Leave the mathematical mechanism unanswered and move directly into the coin games.

---

### Slide 6 — Three coin games

#### On the slide

Three unlabeled distribution silhouettes or three simple coin icons, numbered 1–3.

#### Purpose

Signal that three superficially similar random processes produce fundamentally different worlds.

#### Transition

> To understand the venture portfolio, we first need to distinguish three coin-flipping games.

---

### Slide 7 — Game 1: additive

#### Rules

Flip a fair coin 100 times:

- Heads: gain $1
- Tails: gain $0

#### Mathematics

\[
X=\sum_{i=1}^{100}Y_i
\]

where (Y_i\in\{0,1\}). The expected value is $50. Across many players, the distribution is approximately normal.

#### Core intuition

Additive processes cluster around an average. Outcomes far above or below $50 are possible but increasingly rare.

#### Visual

Use the original Game 1 decision tree and 10,000-trial normal simulation from [On Power Laws](https://fkodom.com/blog/on-power-laws).

Keep the setup slide to the title, coin rules, and tightly cropped tree. Put the simulation on a separate result slide at the largest practical size. The equations and interpretation are spoken, not repeated beside the figures.

---

### Slide 8 — Game 2: multiplicative

#### Rules

Start with $1. For each of 100 flips:

- Heads: multiply the current amount by 1.1
- Tails: multiply it by 0.9

#### Mathematics

The expected multiplier on one turn is:

\[
\frac{1}{2}(1.1)+\frac{1}{2}(0.9)=1
\]

However, a player who receives exactly 50 heads and 50 tails finishes with:

\[
1.1^{50}0.9^{50}=0.99^{50}\approx0.61
\]

The expected outcome remains $1, but the typical player loses money. A small number of large winners pull the mean upward.

#### Core intuition

Because multiplication becomes addition after taking a logarithm, the distribution of outcomes is approximately log-normal. It is asymmetric and has a long right tail, but the extreme tail still tapers away relatively quickly.

#### Visual

Use the original decision tree on the setup slide and the log-normal simulation on a separate result slide. Keep both figures large. Do not add expected-value cards or a second column of explanatory text.

---

### Slide 9 — Game 3: elimination

#### Rules

Use a version of the St. Petersburg game:

- Start at $1. Double before each flip; heads continues and tails collects and stops.
- Immediate tails pays $2. First tails on flip n pays 2^n, with probability 2^(−n), n≥1.
- The survival probability at possible payouts is P(X≥2^n)=2^(1−n).

#### Mathematics

Each possible level contributes approximately the same amount to the expected value:

\[
2^n\cdot2^{-n}=1
\]

Summed over indefinitely many possible levels, the idealized expected value diverges.

#### Important qualification

The purpose is not to claim that real markets contain infinite money or that a rational person would pay an infinite entry price. Real investors have limited wealth, limited time, risk preferences, and finite possible outcomes. The useful feature of the model is its tail: extremely rare outcomes remain economically significant.

Keep this qualification in the spoken explanation or speaker notes. Do not place it beneath the tree as a caption.

#### Visual

A tightly cropped decision tree showing repeated doubling and elimination, followed by a local SVG survival plot on a separate slide. The latter recreates 10,000 trials with a fixed seed and the same payout convention. The original raster distribution starts at $1 and does not match the tree. Do not place a tail equation or explanatory sidebar beside the plot.

---

### Slide 10 — Three worlds

#### On the slide

Place all three distributions beside one another:

| Process | Typical distribution | Defining behavior |
| --- | --- | --- |
| Additive | Normal | Outcomes cluster near an average |
| Multiplicative | Log-normal | Many modest outcomes and a long right tail |
| Multiplicative with elimination | Power law | Rare extremes can dominate the total |

If helpful, show the power law as a straight line on a log-log plot.

#### Return to the opening question

> My claim is that venture capital looks much more like Game 3 than Games 1 or 2.

---

## Part II: Does venture capital actually behave this way?

### Slide 11 — What's in a venture investment?

Use a dark transition slide with only the question:

> What's in a venture investment?

Pause before moving from the portfolio model to the mechanics of a single financing.

---

### Slide 12 — Capital for equity

A venture investment is an exchange of capital for equity in the company. Show the basic ownership relationship:

\[
\text{post-money valuation}
=
\frac{\text{investment}}{\text{ownership acquired}}
\]

Keep the slide spare. Explain dilution, pre-money valuation, and examples verbally if useful.

---

### Slide 13 — Advance or stop

#### Mapping

Treat each funding stage as another round of the game:

- A company raises capital at one stage.
- It uses that capital to build, hire, sell, and grow.
- It either produces enough evidence to raise the next round or it does not.
- If it advances, its valuation may increase by a substantial multiplier.
- If it cannot advance or become self-sustaining, the game often ends.

#### Qualification

Companies are not literal random coin flips. Founders have agency, investors learn, markets change, and outcomes are correlated. The analogy is about the structure of the process: multiplicative payoffs compounded across stages, with elimination at each stage.

---

### Slide 14 — A round buys time

A financing round is typically sized to carry the company to the evidence required for its next fundraise.

Use these rules of thumb:

- Primary rounds are often roughly two years apart.
- A round commonly sells approximately 10–25% of the company, depending on stage, valuation, capital needs, and negotiating leverage.
- The capital should fund the milestones required to reach the next round.

Use Carta's fundraising-cadence and dilution data as the visible source. Treat the ranges as planning heuristics, not fixed terms.

---

### Slide 15 — A round buys information

Each financing round buys growth, but it also buys information.

| Stage | Evidence available |
| --- | --- |
| Pre-seed | Founders, insight, market structure, rough prototype |
| Seed | Early product usage, partner customers, initial revenue |
| Series A | Retention, repeatable acquisition, revenue growth |
| Later stages | Scaling efficiency, market leadership, durability |

At the earliest stage, qualitative priors dominate because meaningful quantitative evidence cannot yet exist. As the company develops, investors update their beliefs using product, customer, revenue, and market evidence.

#### Useful framing

> A funding round is a priced experiment designed to reach the next information milestone.

---

### Slide 16 — The funding ladder

Restore the stage-by-stage table. This is the empirical link back to Game 3: fewer companies reach each successive stage while valuations at later stages are larger. Keep both columns visible together.

| Stage / transition | Advance | Next valuation |
| --- | ---: | ---: |
| Seed | start | ≈$16M |
| Seed → Series A | ≈32% | ≈$43M |
| Series A → B | ≈66% | ≈$110M |
| Series B → C | ≈59% | ≈$220M |
| Series C → D | ≈41% | ≈$420M |

The graduation column uses the 2009 U.S. software seed cohort in Jason D. Rowley’s [Mattermark analysis](https://mattermark.com/startup-graduation-rate-surprisingly-low/), September 28, 2016. Its cumulative shares reaching A/B/C/D are 32%/21%/12.3%/5%; divide adjacent percentages to obtain conditional graduation rates. The source has no pre-seed graduation observation, so begin at seed.

The valuation column uses [Carta’s Q4 2024 report](https://carta.com/data/state-of-private-markets-q4-2024/), published February 12, 2025: median U.S. pre-money valuations, primary and bridge rounds combined, rounded to two significant figures. These are **separate companies and periods**, not successive valuations of the graduation cohort. State both source dates on the slide. The table motivates the analogy; it does not establish an exact power law or an investor’s return.

Move directly to “Power laws.” Graduation is not business survival: companies may stop raising because they close, are acquired, become self-sustaining, or take longer.

---

### Slide 17 — Power laws

Use two large, readable bullets to show that venture outcomes are actually concentrated:

- In Paul Graham's 2012 analysis of Y Combinator, Airbnb and Dropbox represented roughly three-quarters of the portfolio's value.
- Chris Dixon’s June 8, 2015 report of Horsley Bridge data states that approximately 4.5% of invested dollars generated 60% of total returns. This is historical pooled fund data, not a universal rate.
- A large majority of individual venture investments return less than the capital invested.

#### Visual

Model the chart after the ranked-return graphic in *Zero to One*. Order illustrative company returns from largest to smallest, with the biggest returner at the left. Use explicitly illustrative bars for the steep distribution and a dashed, flatter line for the distribution people often imagine. The vertical scale is common arbitrary dollar units, not return multiples of individual checks. Label both directly.

Add a dotted line labeled “the fund” just below the second-largest bar. This is an illustrative scale marker, not an observed portfolio statistic, and replaces the standalone “Return the fund?” slide.

#### Main point

The average company is not a useful picture of the portfolio. The actual ranked distribution is much steeper than the perceived distribution, and a tiny number of companies can determine the result.

---

### Slide 18 — Dilution (temporarily hidden)

The user has hidden this slide for now. Its full TSX, notes, simulator, model and styling remain intact. Set `SHOW_DILUTION_SLIDE` to `true` in `src/slides/PartTwoEvidence.tsx` to restore it immediately after the power-law portfolio slide. Keep the following model as preparation; it is not in the active running order.

#### Model

- Begin with 100 shares outstanding.
- In each financing round, issue enough new shares for the latest round to own 20% of the post-money company. That means issuing 25 new shares for every 100 existing shares.
- Separately assume 50% of companies survive between rounds and choose individual round sizes that grow by 3×; the first assumption does not imply the second: $1M, $3M, $9M, then $27M. Cumulative funding is $1M, $4M, $13M, then $40M.
- Let the audience step through several rounds and watch the ownership of the first investor fall from 20% to 16%, then 12.8%, when it does not participate.
- Add a pro-rata toggle. When it is on, earlier investors buy enough of each later round to maintain their ownership; the latest round's 20% pool is then shared between follow-on and new capital.

Show five stats: company valuation, cumulative total funding, total invested by the Round 1 investor in the active scenario, equity percent, and equity value. By round four, the original investor has put in $1M without pro rata versus $8.8M with pro rata; equity percent is approximately 10.2% versus 20%.

Keep the slide visual. The point is the share issuance and ownership arithmetic; explain pro rata rights, valuations, and SAFEs verbally rather than adding a paragraph to the slide.

---

### Original beat 19 — Removed standalone slide

The user removed “A good business needn’t be a venture business.” Move directly from “Power laws” to “Buy vs. build” while dilution is hidden. The distinction remains useful in answers and in the live exercise’s possible outcomes; do not restore it as a separate slide.

---

## Part III: Background and consequences of the framework

### Slide 20 — Buy vs. Build

#### Traditional investment work

- Evaluate companies presented to the venture team
- Meet founders and technical leaders
- Assess the product, engineering approach, differentiation, and execution risk
- Help form an investment view under incomplete information

#### Incubation work

- Start with an idea or market conviction
- Recruit a founder or founding team
- Build the initial product
- Conduct customer discovery
- Find partner customers
- Support engineering, recruiting, and early company formation

#### Purpose

Establish why the remainder of the talk can move between the investor's and builder's perspectives.

---

## Part IV: From a problem to a venture-investable company

### Slide 21 — Where do you start? Then build the stack of bets

Set up the builder's operating rules with three bullets:

Use the title “Where do you start?” The Airbnb example follows the startup-bet slide.

- seek pain
- seek truth
- **move fast**

Keep the slide spare. The presenter can explain that customer discovery should identify a real problem, test what is true, and move quickly enough to learn before committing too much time or capital.

### Slide 22 — Who cares?

Keep the overlapping circles: “The world changed.” and “Something hurts.” Look for changes in actual behavior, workarounds, spending or habits. The speaker supplies the explanation. This question now precedes the startup-bet slide.

Follow with one slide titled “A startup is a stack of bets.” Keep the care → action → reach → growth track and add the approximate probability equation on the same slide. The user removed the financing-stage overlay on September 9 and the separate plain build on September 11.

The approximation conditions each claim mainly on its predecessor. The full chain rule and the distinction between necessary claims and startup success belong in speaker preparation.

### Original beat 23 — Removed interview prompts

The user removed “What's the pain?” on September 13, including its *The Mom Test* title-and-author reveal. Go directly from the startup-bet slide to the Airbnb case study.

---

Follow with the Airbnb case study: a design conference, sold-out hotels, three airbeds, three guests. These observed stays illustrate demand; they do not by themselves prove a broad market. Use Airbnb’s own [origin account](https://news.airbnb.com/what-makes-airbnb-airbnb), published in 2020, for the 2007 sequence.

### Build a wedge (original beat 26)

#### Airbnb example

```text
Global lodging marketplace
          Entire homes
             Spare rooms
            Air mattresses
```

Render these as a literal downward-pointing wedge: the global marketplace is the broad top, and “Air mattresses” sits at the narrow bottom tip.

Place this quote beneath the wedge:

> “It’s better to have 100 people who love you than 1 million who kind of like you.”
>
> Paul Graham, to Brian Chesky (CEO, Airbnb)

#### Main point

The initial product does not need to serve the eventual entire market. A startup can begin with a narrow wedge, delight that customer group, establish a position of strength, and expand outward.

The objective is not to build today's Airbnb on day one. It is to win the smallest useful initial market completely enough to earn the right to expand.

---

### Original beat 24 — Removed learning-loop callback

The user removed “Move fast & update priors” on September 11. Do not restore its talk-test-iterate loop or repeated probability equation.

---

### Slide 25 — Why won't company X build that?

Use the question as the title, without a separate “Move fast” heading or repeated quotation.

Show only the Google LaMDA / OpenAI ChatGPT example: Google demonstrated LaMDA in May 2021, while OpenAI launched ChatGPT in November 2022. Use a spare two-event timeline with dates, product names, and demo/launch labels. Do not include the Airbnb/Vrbo comparison here.

An incumbent’s ability to build something does not guarantee that it will ship first. Google’s 2021 post discussed safety and quality concerns. The dates illustrate different product timelines; they do not prove a single cause for the timing or compare identical products.

Sources: Google, [LaMDA: our breakthrough conversation technology](https://blog.google/innovation-and-ai/products/lamda/), May 18, 2021; OpenAI, [Introducing ChatGPT](https://openai.com/index/chatgpt/), November 30, 2022.

---

### Original beat 27 — Removed live exercise and debrief

The user removed the standalone “The Mom Test” live exercise and “What did we learn?” slides, then removed the remaining “What's the pain?” slide and its book reveal. Move from the LaMDA/ChatGPT example directly to the valuation section; do not schedule a volunteer or restore the timer or debrief.

---

## Part V: How much is an idea worth?

### Slide 28 — How much is an idea worth?

Open with the valuation problem at its hardest: the company may have no revenue, no customers, and no working product.

The practical market answer is the price that comparable startups with comparable founder profiles have recently been able to raise. For this talk, use the financing mechanics already established in the deck to derive a rough valuation floor instead.

Keep this as a dark bridge slide with only the question.

---

### Slide 29 — Start with runway

A round should buy enough time to reach the next fundraising milestone. Use this illustrative pre-product budget:

- Founder plus two or three employees
- 12–18 months of runway
- Computers, hosting, third-party software, and workspace if needed
- No revenue to offset the burn

For the example, assume the company needs roughly $500,000.

This is back-of-the-napkin arithmetic, not a current market benchmark. The exact amount depends on salaries, location, product, infrastructure, and the milestone the next investor will require.

---

### Slide 30 — The valuation floor

Use the example’s 20% dilution ceiling for the arithmetic:

\[
\text{post-money valuation}
=
\frac{\$500\text{k}}{20\%}
=
\$2.5\text{M}
\]

The company needs at least $500,000 and sets a dilution ceiling of 20%, so the minimum post-money price compatible with the financing plan is $2.5 million. This is not an intrinsic value floor; an investor can decline, and the plan may need to change.

A higher valuation could let the founder raise more money or sell less ownership. Taking materially less cash shortens the runway; selling materially more equity makes later dilution harder. The result is a financing constraint for this example, not a claim that every idea is worth $2.5 million.

---

### Slide 31 — Will VCs believe it?

The decision rests on two beliefs:

- The market has a credible path to enough scale, with room for a 10–100× outcome over time.
- The founder can make a convincing case that this team can reach it.

Use this slide to introduce the two-part investment test, then return directly to the closing statement.

Use a line with three points, matching the startup-bet slide. Keep only the title and the labels “big enough market,” “you can build it,” and “$500k.” The user replaced the $25M annual-market label on September 13. Keep the round's illustrative nature and the conditional investment decision in the speaker notes.

If both claims hold, a venture investor might fund the $500,000 round at the implied valuation. “Might” matters: this model explains the logic of a possible investment, not a guaranteed term sheet.

---

### Original beat 32 — Removed market-size slide

The user removed the standalone market-size calculator slide and later replaced the $25M annual-market label with “big enough market” on “Will VCs believe it?” Do not restore the calculator or promise a following market-sizing demonstration.

---

### Slide 33 — Most startups fail. Most are worthwhile.

End on a dark slide with only this two-line statement:

> Most startups fail.
> Most are worthwhile.

Do not add supporting copy, labels, or a concluding diagram. Pause before questions.

---

# Material for appendix or questions

The following topics are interesting but should not interrupt the main narrative:

- Detailed descriptions of every employer
- AlexNet, VGGNet, Inception, ResNet, and the 2017 machine-learning landscape
- The mechanics of proprietary trading firms and independent trading pods
- Limited partners, general partners, management fees, and carried interest
- Why wealthy investors allocate through venture funds rather than investing directly
- Private-equity rollups of HVAC and other home-service companies
- SAFEs, convertible notes, preferred stock, and liquidation preferences
- Bridge rounds and down rounds
- The Stripe/Thrive Capital example
- Cloudflare's market share
- Detailed Series C and Series D methodology beyond the funding table
- Detailed software revenue multiples
- The distinction between TVPI, DPI, gross returns, and net returns

# Mathematical and factual cautions

## The investment benchmark

The opening uses two round-number teaching assumptions:

- A broad S&P 500 index fund doubles in roughly eight years at about 9% annualized.
- The venture fund must return at least 3× over roughly eight years, or about 14.7% annualized, to justify the additional risk in this talk's framework.

The S&P 500 slide uses the Macrotrends annual average price series. It is a price-index chart, so dividends are excluded, and the 2026 value is year-to-date. The 9% figure on the following benchmark slide is a Rule of 72 teaching assumption, not a slope fitted to the price chart or a promise about any particular period. The 3× hurdle is the talk's working benchmark, not an industry-wide standard. Compare both on the same gross-or-net basis. For the spoken investor comparison, prefer net returns; a venture portfolio must earn more before fees and carried interest.

## The second coin game

Use the 1.1-or-0.9 game. A double-or-halve game has expected multiplier:

\[
\frac{1}{2}(2)+\frac{1}{2}(0.5)=1.25
\]

It therefore does not preserve expected value and complicates the intended comparison.

## The St. Petersburg game

Specify the indexing convention carefully. The deck starts at $1 and doubles before each flip; heads continues and tails collects and stops. Immediate tails pays $2. At x=2^n, n≥1, the survival probability is 2/x. The original raster distribution used a different starting payout and has been replaced with a reproducible SVG chart. Focus on the fact that probability decays at approximately the inverse rate that the payout grows.

For mathematical precision, describe the power law using the survival or tail distribution \(P(X\ge x)\), because the game has discrete payouts at powers of two rather than a continuous probability density over every possible dollar value.

## Early-stage valuation model

The $500,000 round, 20% dilution, and $2.5 million post-money valuation are linked assumptions in one illustrative financing model. They are not current market benchmarks or universal terms. If one changes, update the equation and the accompanying speaker notes together.

## Market-sizing assumptions

The $25 million annual market is an illustrative target, not a universal venture threshold. Customer count, contract value, pricing tiers, and adjacent-market expansion must be modeled explicitly rather than hidden inside a top-down market-share estimate.

## Y Combinator example

Use the more precise historical statement from Paul Graham's 2012 essay: Airbnb and Dropbox accounted for roughly three-quarters of YC's portfolio value at that time. Avoid describing it as 90% of all historical profits.

## Power-law causation

Do not claim that the funding schedule alone proves or creates a power law. The stronger argument is the feedback loop developed in [On Power Laws](https://fkodom.com/blog/on-power-laws): company growth mechanics and staged investor selection reinforce one another.

# Sources to include in the eventual deck

- Investor.gov, [What is compound interest?](https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest)
- Macrotrends, [S&P 500 — 100 Year Historical Chart & Data](https://www.macrotrends.net/datasets/2324/sp-500-historical-chart-data)
- Frank Odom, [On Power Laws](https://fkodom.com/blog/on-power-laws)
- Paul Graham, [Black Swan Farming](https://paulgraham.com/swan.html)
- Peter Thiel with Blake Masters, *Zero to One*
- Rob Fitzpatrick, *The Mom Test*
- Jason D. Rowley, Mattermark, [The Startup Graduation Rate Is Surprisingly Low](https://mattermark.com/startup-graduation-rate-surprisingly-low/), September 28, 2016
- Ashley Neville and Kevin Dowd, Carta, [State of Private Markets: Q4 and 2024 in review](https://carta.com/data/state-of-private-markets-q4-2024/), February 12, 2025
- Peter Walker, Carta, [Graduation rate from seed to Series A](https://carta.com/data/newsletter-graduation-rate-from-seed-to-series-a/), February 5, 2025

Before presenting, confirm that every numeric claim uses a clearly identified source, cohort, and measurement period.
