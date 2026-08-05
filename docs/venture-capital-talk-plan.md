# How Nine Failures Make a Fund

## A working plan for a public talk on the mathematics of venture capital

### Possible titles

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

The talk should lead with the mathematical question. The personal background comes later, after establishing the framework, as evidence for why the speaker can discuss both investing in startups and building them.

## Timing overview

| Section | Approximate time | Purpose |
| --- | ---: | --- |
| The paradox | 2–3 minutes | Create the central unanswered question |
| Mathematical foundation | 12–13 minutes | Derive normal, log-normal, and power-law intuition |
| Venture evidence | 9–10 minutes | Argue that venture outcomes resemble the power-law model |
| Background and implications | 8–9 minutes | Establish perspective and derive investment consequences |
| Startup discovery exercise | 10–12 minutes | Apply the framework to a possible real problem |
| Valuation and conclusion | 4–5 minutes | Explain incentive alignment and return to the human lesson |

---

# Detailed slide plan

## Part I: The paradox and mathematical foundation

### Slide 1 — Most startups fail.

#### On the slide

> # Most startups fail.

Nothing else. No subtitle, chart, or qualification.

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

### Slide 2 — The S&P 500 already sets a high bar

#### On the slide

```text
Broad S&P 500 index fund
$1 → approximately $2 in eight years
2^(1/8) - 1 ≈ 9.1% annualized
```

Add a short qualification: this is an average and a rule of thumb, not a promise.

#### Purpose

Establish the public-market alternative before asking anyone to accept venture risk.

#### Spoken explanation

> Before investing in startups, I can buy a broad S&P 500 index fund.
>
> As a long-run rule of thumb, assume about 9% per year. That roughly doubles the investment every eight years.
>
> That is an average, not a forecast. Some eight-year periods will be much better or much worse. But it gives us the benchmark venture has to beat.

Use Investor.gov's Rule of 72 example at 9% as the source for the eight-year teaching assumption. Do not present it as the realized return of every S&P 500 period.

---

### Slide 3 — Venture has to clear a higher bar

#### On the slide

```text
S&P 500 rule of thumb      Venture fund hurdle
2× in about 8 years        at least 3× in about 8 years
9.1% annualized            at least 14.7% annualized
```

Then state:

> If nine of ten can fail, the winners must more than make up the difference.

#### Purpose

Turn the opening paradox into a performance hurdle without relying on a hypothetical fund size.

#### Spoken explanation

> Early-stage startups are speculative. There may be little evidence of traction, the capital is committed for years, and nine out of ten investments may fail.
>
> Why accept that risk if a public index can double over the same period?
>
> For this talk, the venture hurdle is at least three times the invested capital over roughly eight years. That is about 14.7% annualized.
>
> The winners therefore have to do more than cover the losses. They have to push the whole fund past the public-market alternative.

Treat 3× over eight years as the talk's explicit working benchmark, not an industry-wide promise. Compare returns on the same basis. If the index result is an investor return, the venture result should be net to the investor; gross portfolio performance must be higher before fees and carry.

Leave the mathematical mechanism unanswered and move directly into the coin games.

---

### Slide 4 — Three coin-flipping games

#### On the slide

Three unlabeled distribution silhouettes or three simple coin icons, numbered 1–3.

#### Purpose

Signal that three superficially similar random processes produce fundamentally different worlds.

#### Transition

> To understand the venture portfolio, we first need to distinguish three coin-flipping games.

---

### Slide 5 — Game 1: Additive outcomes

#### Rules

Flip a fair coin 100 times:

- Heads: gain $1
- Tails: lose $1

#### Mathematics

\[
X=\sum_{i=1}^{100}Y_i
\]

The expected value is zero. Across many players, the distribution is approximately normal.

#### Core intuition

Additive processes cluster around an average. Very large positive and negative deviations are both possible, but increasingly rare and roughly symmetric.

#### Visual

A normal bell curve centered at zero.

---

### Slide 6 — Game 2: Multiplicative outcomes

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

A log-normal distribution beside the Game 1 bell curve.

---

### Slide 7 — Game 3: Multiplication with elimination

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

#### Visual

A decision tree showing repeated doubling and elimination, followed by a heavy-tailed outcome plot.

---

### Slide 8 — Deriving the power law

This slide provides additional mathematical substance for the department audience while remaining interpretable to the general public.

Suppose:

- The probability of surviving a round is \(s\)
- The value multiplier after surviving is \(m\)

After \(n\) rounds:

\[
x=m^n, \qquad P(X\ge x)=s^n
\]

Since \(n=\log_m x\):

\[
P(X\ge x)
=s^{\log_m x}
=x^{\log_m s}
=x^{-\alpha},
\qquad
\alpha=-\frac{\ln s}{\ln m}
\]

#### Core intuition

Repeated elimination combined with multiplicative growth naturally creates a power-law tail. When the value multiplier is approximately the inverse of the survival probability, \(\alpha\) is near one.

#### Presentation note

Explain the verbal idea before showing the derivation:

> Every successive level is less likely to be reached, but every surviving outcome is proportionally more valuable.

---

### Slide 9 — Three different worlds

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

### Slide 10 — The venture-capital coin flip

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

### Slide 11 — The funding ladder

Show an approximate progression:

```text
Pre-seed → Seed → Series A → Series B → Series C → Exit/IPO
```

For each transition, show:

- Approximate graduation probability
- Approximate valuation at the next stage

The current working figures and sources are in the article [On Power Laws](https://fkodom.com/blog/on-power-laws):

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

Refresh the precise figures shortly before the talk. Round sizes and graduation rates vary with market conditions, dataset definitions, cohort age, and measurement window.

---

### Slide 12 — The empirical distribution of returns

Use several observations to show that venture outcomes are actually concentrated:

- In Paul Graham's 2012 analysis of Y Combinator, Airbnb and Dropbox represented roughly three-quarters of the portfolio's value.
- Horsley Bridge found that approximately 5% of capital deployed from 1985–2014 generated half of all returns.
- A large majority of individual venture investments return less than the capital invested.

#### Visual

A portfolio bar chart in which many companies contribute little or nothing and one or two companies dominate the total.

#### Main point

The average company is not a useful picture of the portfolio. A tiny number of observations can determine the result.

---

### Slide 13 — Every company must be capable of returning the fund

Peter Thiel's discussion in *Zero to One* is useful as an articulation of the investment consequence, although it is not independent empirical evidence.

#### Main idea

Every investment must at least possess the theoretical potential to return the entire fund. If an investment cannot become large enough to matter to the portfolio, its apparently lower risk does not make it attractive within the venture model.

#### Connection to the opening

Return to the venture hurdle. A winning company does not merely need to survive. It needs enough upside to push the fund past the public-market alternative.

---

### Slide 14 — Does funding create the power law?

#### Competing explanations

1. Exceptional businesses naturally generate multiplicative growth because of networks, software scalability, brand, market leadership, and other compounding advantages.
2. Staged venture financing selectively eliminates companies that do not demonstrate multiplicative growth and gives more capital to companies that do.

#### Conclusion

> Neither the funding schedule alone nor the startups alone produce the power law. It is the combination of the two.

The companies and the funding system form a feedback loop:

- Investors select for evidence of compounding growth.
- Capital amplifies the companies that exhibit it.
- Successful funds attract more capital.
- Competing investors converge on strategies designed around rare, enormous outcomes.

---

## Part III: Background and consequences of the framework

### Slide 15 — A physicist's route into venture capital

#### Visual timeline

```text
Sewanee math and physics
        ↓
UC Davis physics
        ↓
Machine learning and computer vision
        ↓
Technology startups
        ↓
Tower Research Ventures
```

#### Story to tell

- The exact career path depended on timing, luck, and the 2017 inflection in deep learning.
- The important early decision was choosing machine learning software over a highly specialized laser-lethality role.
- That decision preserved optionality and opened a subject that rewarded sustained obsession.
- Years of startup engineering led to a role that now combines company building and investing.

#### Details to keep brief

The twin boys, move from California, and laser-versus-software decision provide the human story. Exact neural-network architectures and every job transition are better left for speaker notes or questions.

---

### Slide 16 — I now sit on both sides

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

### Slide 17 — Not every good business is a venture business

#### Comparison

| Business or financing model | Typical growth mechanism | Common financing fit |
| --- | --- | --- |
| Local service business | Add locations, equipment, and employees | Cash flow and loans |
| Private-equity acquisition | Buy and improve an operating business | Acquisition capital and debt |
| Venture startup | Build a product whose value can scale much faster than headcount | Equity capital |

#### Jet-fuel analogy

Venture capital is jet fuel. A motorcycle or car can be an excellent vehicle without being able to use it. The point is not that a venture-backed business is morally or operationally superior. The financing must match the growth mechanics.

The analogy appears to trace to First Round Capital's Josh Kopelman: bad things happen when venture investors push jet fuel on a motorcycle, or when a motorcycle believes it can fly.

---

### Slide 18 — Market size follows from fund size

Use ownership and fund size to derive why investors seek enormous markets.

#### Example

Suppose:

- The venture fund is $100 million.
- The fund retains 10% ownership of a company at exit.

Then:

- A $1 billion exit returns $100 million to the fund.
- That returns the original fund only once.
- A single company returning the fund five times would require a roughly $5 billion exit.

#### Main point

The demand for enormous addressable markets is not merely investor fashion. It follows from fund size, ownership, dilution, and the power-law portfolio model.

#### Qualification

A real fund can receive returns from several companies, ownership differs by deal, and later investment changes the calculation. This is a Fermi estimate, not a fund model.

---

### Slide 19 — Funding rounds are Bayesian experiments

#### Main idea

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

## Part IV: From a problem to a venture-investable company

### Slide 20 — Great companies often start narrow

#### Airbnb example

```text
Air mattresses for conference visitors
              ↓
Spare rooms
              ↓
Entire homes
              ↓
Global lodging marketplace
```

#### Main point

The initial product does not need to serve the eventual entire market. A startup can begin with a narrow wedge, delight that customer group, establish a position of strength, and expand outward.

The objective is not to build today's Airbnb on day one. It is to win the smallest useful initial market completely enough to earn the right to expand.

---

### Slide 21 — Find behavior, not compliments

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

### Slide 22 — Live startup discovery

Interview a known audience member about a domain such as sports betting or sports analytics.

#### Goals

- Identify a concrete recent problem
- Understand existing workarounds
- Estimate frequency and pain
- Find objective evidence of spending or effort
- Determine whether other reachable customers have the same need

#### Guardrails

- Ask the volunteer for consent in advance and agree on the domain, but do not plant answers.
- Put a six- or seven-minute timer on the segment.
- Keep the discovery questions visible on the slide.
- Prepare a sports-data example that can serve as a rescue path.
- Treat “this is not a good startup opportunity” as a valid result.

The exercise succeeds if it demonstrates disciplined belief updating, not only if it produces an exciting idea.

---

### Slide 23 — A Fermi estimate of the opportunity

Turn the live problem into a rough bottom-up market calculation:

\[
\text{potential customers}
\times
\text{annual spending per customer}
=
\text{reachable annual market}
\]

Possible follow-up factors:

- How many people or organizations experience the problem?
- How frequently does it occur?
- What do they spend on the current workaround?
- Which subset can the initial product realistically serve?
- What adjacent customers could the company serve later?

#### Main distinction

A painful problem can produce a good business without producing a venture-scale company. Market sizing tests whether the opportunity can eventually generate an outcome large enough for the portfolio model.

Prefer this bottom-up calculation over beginning with a vague multibillion-dollar industry report.

---

## Part V: Valuation, incentives, and conclusion

### Slide 24 — What might we invest today?

Use the hypothetical sports-data company.

#### Simplified successful outcome

- Possible exit value: $500 million
- Estimated probability of reaching it: 5%

\[
0.05\times\$500\text{M}=\$25\text{M}
\]

#### Essential clarification

$25 million is an expected terminal value, not automatically the company's fair present valuation.

The investor must still account for:

- Time until the exit
- Future dilution
- Additional financing required
- The probability and size of intermediate outcomes
- Execution and market risk
- Investor return requirements
- Deal terms and ownership rights

After making those assumptions, an investor might offer $2 million at a $10 million post-money valuation, receiving 20% of the company.

The point is the reasoning process, not the specific price.

---

### Slide 25 — The highest valuation is not always the best

#### Four failure modes

- **Too little capital:** the company cannot reach its next meaningful milestone.
- **Too much capital:** the team may scale prematurely or lose spending discipline.
- **Too low a valuation:** founders and employees surrender too much ownership.
- **Too high a valuation:** the next financing round requires an implausibly large increase in evidence and company value.

#### Game-theoretic framing

The founders and investors negotiate competitively, but both benefit from the company's ability to raise the next round and ultimately succeed.

The useful region is therefore neither side's most extreme short-term preference. It is an overlapping region in which:

- The company receives enough money to reach its milestone.
- The founders retain motivating ownership.
- The investor can earn a meaningful return.
- The next valuation remains credible if execution goes reasonably well.

#### Possible visual

Two overlapping utility curves or acceptable ranges:

```text
Founder acceptable range:     [──────────────]
Investor acceptable range:          [────────────]
Mutually workable region:           [──────]
```

---

### Slide 26 — What the mathematics cannot answer

Return to the career story and the role of obsession.

#### Suggested conclusion

> Mathematics can tell us what kind of company could return a venture fund. It cannot tell us which problem a founder will care enough to spend the next decade solving.
>
> My career was shaped less by choosing the most practical subject than by finding work I could become obsessed with. A venture-scale company needs both: a problem whose value can compound and founders whose motivation can survive the journey.

#### Final distinction

- Market size is not a substitute for motivation.
- Motivation is not a substitute for venture-scale economics.
- A strong venture opportunity requires both.

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

The first is a Rule of 72 approximation, not a promise about any particular eight-year period. The second is the talk's working hurdle, not an industry-wide standard. Compare both on the same gross-or-net basis. For the spoken investor comparison, prefer net returns; a venture portfolio must earn more before fees and carried interest.

## The second coin game

Use the 1.1-or-0.9 game. A double-or-halve game has expected multiplier:

\[
\frac{1}{2}(2)+\frac{1}{2}(0.5)=1.25
\]

It therefore does not preserve expected value and complicates the intended comparison.

## The St. Petersburg game

Specify the indexing convention carefully. The cleanest spoken version is that the payout doubles with each successive heads and the first tails terminates the game. Focus on the fact that probability decays at approximately the inverse rate that the payout grows.

For mathematical precision, describe the power law using the survival or tail distribution \(P(X\ge x)\), because the game has discrete payouts at powers of two rather than a continuous probability density over every possible dollar value.

## Expected terminal value

A 5% probability of a $500 million outcome produces $25 million of expected terminal value under the simplified two-outcome model. It does not produce a $25 million present valuation.

## Market-share assumptions

Avoid presenting 3–5% market share as a universal rule. Market concentration varies enormously. Use an explicit assumed capture rate and allow the audience to challenge it.

## Y Combinator example

Use the more precise historical statement from Paul Graham's 2012 essay: Airbnb and Dropbox accounted for roughly three-quarters of YC's portfolio value at that time. Avoid describing it as 90% of all historical profits.

## Power-law causation

Do not claim that the funding schedule alone proves or creates a power law. The stronger argument is the feedback loop developed in [On Power Laws](https://fkodom.com/blog/on-power-laws): company growth mechanics and staged investor selection reinforce one another.

# Sources to include in the eventual deck

- Investor.gov, [What is compound interest?](https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest)
- Frank Odom, [On Power Laws](https://fkodom.com/blog/on-power-laws)
- Paul Graham, [Black Swan Farming](https://paulgraham.com/swan.html)
- Peter Thiel with Blake Masters, *Zero to One*
- Rob Fitzpatrick, *The Mom Test*
- PitchBook–NVCA Venture Monitor
- CB Insights, State of Venture
- Carta, State of Private Markets

Before presenting, confirm that every numeric claim uses a clearly identified source, cohort, and measurement period.
