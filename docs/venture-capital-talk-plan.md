# The Math of Venture Capital

## A working plan for a public talk on the mathematics of venture capital

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

- The payout doubles with each successive heads.
- The first tails ends the game.
- Reaching a payout of \(2^n\) has probability proportional to \(2^{-n}\).

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

A tightly cropped decision tree showing repeated doubling and elimination, followed by the original heavy-tailed outcome plot on a separate slide. Do not place a tail equation or explanatory sidebar beside the plot.

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

### Slide 16 — Funding ladder

Show an approximate progression:

```text
Pre-seed → Seed → Series A → Series B → Series C → Exit/IPO
```

For each transition, show:

- Approximate graduation probability
- Approximate valuation at the next stage

The figures and sources are in the article [On Power Laws](https://fkodom.com/blog/on-power-laws):

| Transition | Approximate graduation rate | Approximate next-stage valuation |
| --- | ---: | ---: |
| Pre-seed → Seed | 67% | $12–15M |
| Seed → Series A | 33% | $40–45M |
| Series A → Series B | 65% | $50–105M |
| Series B → Series C | 75% | $100–250M |
| Series C → Series D | 80%+ | $500M+ |

#### Main observation

The seed-to-Series-A transition has historically been an especially narrow bottleneck and a large valuation jump. Venture is messier than the fair-coin model, but it displays the same qualitative structure.

#### Source note

The article cites the PitchBook–NVCA Venture Monitor and CB Insights State of Venture for round sizes and valuations, and Carta's State of Private Markets for graduation rates. Round sizes and graduation rates vary with market conditions, dataset definitions, cohort age, and measurement window.

---

### Slide 17 — Power laws

Use two large, readable bullets to show that venture outcomes are actually concentrated:

- In Paul Graham's 2012 analysis of Y Combinator, Airbnb and Dropbox represented roughly three-quarters of the portfolio's value.
- Horsley Bridge found that approximately 5% of capital deployed from 1985–2014 generated half of all returns.
- A large majority of individual venture investments return less than the capital invested.

#### Visual

Model the chart after the ranked-return graphic in *Zero to One*. Order illustrative company returns from largest to smallest, with the biggest returner at the left. Use bars for the steep actual distribution and a dashed, flatter line for the distribution people often imagine. Label both directly.

Add a dotted line labeled “the fund” just below the second-largest bar. This is an illustrative scale marker, not an observed portfolio statistic, and replaces the standalone “Return the fund?” slide.

#### Main point

The average company is not a useful picture of the portfolio. The actual ranked distribution is much steeper than the perceived distribution, and a tiny number of companies can determine the result.

---

### Slide 18 — Dilution

Add an interactive cap-table experiment immediately after the power-law portfolio slide.

#### Model

- Begin with 100 shares outstanding.
- In each financing round, issue enough new shares for the latest round to own 20% of the post-money company. That means issuing 25 new shares for every 100 existing shares.
- Assume 50% of companies survive between rounds, so the individual round sizes grow by 3×: $1M, $3M, $9M, then $27M. Cumulative funding is $1M, $4M, $13M, then $40M.
- Let the audience step through several rounds and watch the ownership of the first investor fall from 20% to 16%, then 12.8%, when it does not participate.
- Add a pro-rata toggle. When it is on, earlier investors buy enough of each later round to maintain their ownership; the latest round's 20% pool is then shared between follow-on and new capital.

Show five stats: company valuation, cumulative total funding, total invested by the Round 1 investor in the active scenario, equity percent, and equity value. By round four, the original investor has put in $1M without pro rata versus $8.8M with pro rata; equity percent is approximately 10.2% versus 20%.

Keep the slide visual. The point is the share issuance and ownership arithmetic; explain pro rata rights, valuations, and SAFEs verbally rather than adding a paragraph to the slide.

---

### Slide 19 — A round buys fuel

Show Josh Kopelman's January 11, 2019 post as the slide's only visible content:

[Original post on X](https://x.com/joshk/status/1083755402037219334)

Use the post to explain that venture capital is built for the rare company capable of turning aggressive reinvestment into exceptional scale. Do not add the previous three-card comparison of local services, acquisitions, and venture startups.

Use X's auto-sizing widget with the linked article card hidden. The embed requires a network connection.

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

### Slide 21 — So you want to build a startup?

Set up the builder's operating rules with three bullets:

Label the slide “Case study: Airbnb” and show the rules beside the Airbnb example in a compact two-column table.

- seek pain
- seek truth
- **move fast**

Keep the slide spare. The presenter can explain that customer discovery should identify a real problem, test what is true, and move quickly enough to learn before committing too much time or capital.

### Slide 22 — Seek pain

Stay with Airbnb and keep the slide sparse:

> **“Sell painkillers, not vitamins”**
>
> **air mattresses for conference visitors**

The point is to solve a problem people already feel, not to make an easy experience incrementally better. Look for existing workarounds, time or money already spent, and behavior that shows the pain is real.

### Slide 23 — Past behavior beats promises

Introduce the central lesson from *The Mom Test*: do not ask people to predict whether they would use an imagined product. Ask about concrete past behavior.

#### Questions

1. Tell me about the last time this happened.
2. What made it difficult?
3. What did you do about it?
4. How much time, effort, or money did that cost?
5. What alternatives have you tried?
6. Who else experiences this problem?

#### Strong evidence

- The problem happens repeatedly.
- The person has already created a workaround.
- The workaround costs meaningful time or money.
- The person has paid someone to make the problem disappear.
- Other identifiable people or organizations share the problem.

---

### Slide 24 — Seek truth

Stay with Airbnb's early customer-learning loop:

1. Talk with real users.
2. Run rapid experiments.
3. Iterate on the problems people actually have.

Keep the slide visual and spare. The speaker can explain how each pass through the loop replaced an assumption with observed behavior.

---

### Slide 25 — Move fast

Open with the question founders hear repeatedly:

> **“Why won’t company X build that?”**

Do not confuse an incumbent's ability to build something with its willingness to ship it. Existing operations, incentives, and revenue streams can slow a company that has the technical resources to compete.

Use two examples:

- Airbnb moved against hotel chains and an existing rental marketplace, Vrbo.
- Google publicly demonstrated LaMDA in May 2021, about eighteen months before OpenAI released ChatGPT in November 2022. Bard was the later product name. Present search-advertising disruption as a strategic complication, not a proven single motive for the timing.

Sources: Google, “LaMDA: our breakthrough conversation technology,” May 18, 2021; OpenAI, “Introducing ChatGPT,” November 30, 2022; Associated Press, “Google has the next move as Microsoft embraces OpenAI buzz,” January 31, 2023.

---

### Slide 26 — Start narrow

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

### Slide 27 — The Mom Test

Interview a known audience member about a domain such as sports betting or sports analytics.

Show the cover of Rob Fitzpatrick's *The Mom Test* beside the live interview questions and timer. Do not add a separate “valid conclusions” panel; keep the possible outcomes in the speaker notes.

#### Goals

- Identify a concrete recent problem
- Understand existing workarounds
- Estimate frequency and pain
- Find objective evidence of spending or effort
- Determine whether other reachable customers have the same need

#### Guardrails

- Ask the volunteer for consent in advance and agree on the domain, but do not plant answers.
- Put a five-minute timer on the segment.
- Keep the discovery questions visible on the slide.
- Prepare a sports-data example that can serve as a rescue path.
- Treat “this is not a good startup opportunity” as a valid result.

The exercise succeeds if it demonstrates disciplined belief updating, not only if it produces an exciting idea.

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

Early rounds often sell roughly 15–20% of the company. Use 20% for the arithmetic:

\[
\text{post-money valuation}
=
\frac{\$500\text{k}}{20\%}
=
\$2.5\text{M}
\]

The company needs at least $500,000 and does not want to sell much more than 20%, so the implied post-money valuation is at least $2.5 million.

A higher valuation could let the founder raise more money or sell less ownership. Taking materially less cash shortens the runway; selling materially more equity makes later dilution harder. The result is a financing constraint for this example, not a claim that every idea is worth $2.5 million.

---

### Slide 31 — Will VCs believe it?

The decision rests on two beliefs:

- The market has a credible path to enough scale, with room for a 10–100× outcome over time.
- The founder can make a convincing case that this team can reach it.

Use this slide to introduce the two-part investment test. The next slide puts numbers on the market claim.

If both claims hold, a venture investor might fund the $500,000 round at the implied valuation. “Might” matters: this model explains the logic of a possible investment, not a guaranteed term sheet.

---

### Slide 32 — Market size

Now ask whether an investor can believe that valuation. The first test is a bottom-up market calculation:

\[
\text{customers}
\times
\text{average annual contract}
=
\text{annual market}
\]

For example:

\[
2{,}500\times\$10{,}000=\$25\text{M per year}
\]

The same $25 million target could come from 12,500 customers paying $2,000 per year or 500 customers paying $50,000 per year. Challenge each input:

- Would a lower price attract substantially more customers?
- Would a meaningful subset pay for a premium product?
- Could the company expand into adjacent markets?

The simple formula hides difficult modeling choices. The target is illustrative, not a universal venture threshold.

Color the calculated annual market against the example's $25 million requirement:

- Below $25 million: red
- $25 million to under $50 million: black
- $50 million or more: green

Include a text status with the color so the threshold is not communicated by color alone.

---

### Slide 33 — Most startups fail. Most are still worthwhile.

End on a dark slide with only this two-line statement:

> Most startups fail.
> Most are still worthwhile.

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
- Exact Series C and Series D round statistics
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

Specify the indexing convention carefully. The cleanest spoken version is that the payout doubles with each successive heads and the first tails terminates the game. Focus on the fact that probability decays at approximately the inverse rate that the payout grows.

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
- PitchBook–NVCA Venture Monitor
- CB Insights, State of Venture
- Carta, State of Private Markets

Before presenting, confirm that every numeric claim uses a clearly identified source, cohort, and measurement period.
