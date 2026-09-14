# The Math of Venture Capital

Hypothetical rehearsal transcript · 32-slide deck · Updated September 13, 2026

The timestamps are approximate elapsed-time targets for a 33:00 spoken run, following the current speaker guide. The script has about 4,200 spoken words, averaging roughly 127 words per minute. Audience answers, discussion, and longer pauses will add time. Italicized brackets are delivery cues, not spoken text. The script describes the figures so it can be read without the deck; source notes at the end are for reference, not delivery.

| Checkpoint | Start | Slides |
| --- | ---: | --- |
| Introduction and paradox | 00:00 | 1–5 |
| Three coin games | 03:30 | 6–13 |
| Financing and evidence | 15:30 | 14–20 |
| Investing and building | 22:30 | 21–27 |
| Valuation and conclusion | 29:15 | 28–32 |
| Questions | 33:00 | Leave slide 32 on screen |

## 00:00–00:15 · Slide 1 — The Math of Venture Capital

Thank you for having me back. This is “The Math of Venture Capital,” or, as the subtitle puts it, “How 9 Wrongs Make a Right.” We'll get to the arithmetic behind that in a minute.

## 00:15–01:00 · Slide 2 — My background

I graduated from Sewanee in 2015, where I studied mathematics and physics. I went on to UC Davis and finished a master's in physics in 2017.

Since then, I've worked in machine learning and computer vision, and in roles leading innovation and machine learning. I'm now a founding engineer at Tower Research Ventures.

That work brings together technical questions about what we can build and investment questions about whether it makes sense to build it. I'll come back to that combination later. First, there's a fairly basic question about venture capital that we need to answer.

## 01:00–01:30 · Slide 3 — Most startups fail.

Most startups fail.

*[Pause.]*

The people investing in them know that going in. A startup can have a capable team, a plausible idea, and investors who did their homework, and still lose the money invested in it.

So why would anyone choose to do this? Why venture capital?

And the question gets harder when you consider the alternatives.

## 01:30–02:20 · Slide 4 — The S&P 500

An investor can buy a broad S&P 500 index fund. They don't have to find a startup or decide whether a product that barely exists will eventually become a large business.

This chart shows annual average index prices over roughly a century. The vertical scale is logarithmic: the same vertical distance means the same proportional change. That's why compounding can look roughly like a straight line over a long stretch.

There are declines along the way. This is a price chart, excluding dividends, and the 2026 point is an incomplete-year snapshot. But it establishes an alternative that a venture investment has to compete with.[^sp500]

## 02:20–03:30 · Slide 5 — Venture must outperform.

Let's put some round numbers on that comparison.

Suppose our public-market alternative roughly doubles our money in eight years. That's about nine percent a year. You may know the Rule of 72: divide 72 by the annual percentage return to estimate the doubling time.

For this talk, let's ask venture to return at least three times the money over those same eight years. That works out to about 14.7 percent a year.

These are teaching assumptions. They're not forecasts, and three times is our working hurdle rather than a promise about venture funds.

Both sides are returns to the investor, after fund fees. The venture portfolio itself has to produce more before fees and the manager's share of profits.

So we need an investment that can lose frequently and still clear a higher hurdle. To see how that's possible, let's step away from companies and play with coins.

## 03:30–04:00 · Slide 6 — Three coin games

We're going to use the same fair coin in three games. Heads and tails are equally likely in every game. What changes is what happens to your money.

Each game produces a different shape when we plot the payouts of lots of players. Those shapes will help us distinguish an ordinary, fairly predictable average from a situation where a few unusual outcomes can dominate everything else.[^games]

## 04:00–05:30 · Slide 7 — Game 1: additive

In the first game, you start with zero dollars and flip a fair coin a hundred times. Every head adds one dollar. Every tail adds nothing. At the end, you collect the total.

What would you pay to enter?

*[Take one or two answers.]*

The natural place to start is fifty dollars. Each flip gives you a fifty-fifty chance of earning one dollar, so the average contribution of a flip is fifty cents. A hundred of those gives an expected payout of fifty dollars.

“Expected” doesn't mean that's what any particular player gets. You might get forty-seven heads, or fifty-three. It's the average we'd approach across many independent plays.

The tree on the slide shows the first few flips. Follow a head and the total increases by one; follow a tail and it stays put. Every additional head is worth exactly one more dollar, regardless of what happened before.

Whether you'd personally pay the full fifty depends on how you feel about the uncertainty. For now, fifty gives us a reference point. Let's see how much uncertainty there is.

## 05:30–07:00 · Slide 8 — Normal distribution

This is a simulation of ten thousand people playing that game. The horizontal axis is the payout, and the height tells us how frequently payouts occur. Most of the results sit around fifty dollars.

The familiar bell shape is a normal approximation. The exact distribution is binomial, because we're counting heads in a fixed number of flips. But the bell curve is a useful picture of it.

There are many ways to get a result near fifty. There is only one way to get a hundred: every flip has to be heads. As you move toward either extreme, the possible sequences become much less common.

Notice how limited even the best outcome is. A perfect game pays a hundred dollars, only twice the expected payout. There is no sequence that produces a million dollars. The rules don't allow it.

The mean of fifty comes from adding the expected contributions of the flips. The central limit theorem helps explain the approximate shape around that mean. Those are two different pieces of mathematics.

In this game, the average gives us a fairly useful picture of an individual result. Let's change the rules and see that start to break down.

## 07:00–08:30 · Slide 9 — Game 2: multiplicative

Now you start with one dollar. We still flip a hundred times, but heads multiplies your money by 1.1, and tails multiplies it by 0.9. You either gain ten percent or lose ten percent of whatever you currently have.

What happens if you get one head and one tail?

*[Pause for the calculation.]*

One dollar becomes a dollar ten, and then ninety-nine cents. Reversing the order gives the same result: ninety cents, then ninety-nine cents.

The percentages look symmetrical, but they apply to different amounts. A ten-percent gain followed by a ten-percent loss doesn't get you back to where you started.

Now imagine exactly fifty heads and fifty tails. The final amount is 1.1 to the fiftieth power, times 0.9 to the fiftieth power. Pair those factors and you get 0.99 to the fiftieth power: about sixty-one cents.

So an evenly split set of flips loses money. Yet the expected multiplier on any one flip is still one: half of 1.1 plus half of 0.9.

How can a typical-looking path lose money while the expected value stays the same?

## 08:30–10:20 · Slide 10 — Log-normal distribution

Here's the distribution after ten thousand plays. It leans heavily to the right. Many outcomes are small, while some players finish with much larger amounts.

The theoretical mean is still one dollar. Each independent flip preserves the expected amount, so a hundred of them preserve it too. A particular simulation may land a little above or below that theoretical mean.

The median is around sixty-one cents. The median describes the middle of the distribution; the mean adds up all the money and divides by the number of players. Those can be quite different numbers when a few players have a lot of money.

The larger outcomes pull the mean to the right. They make up for the many outcomes below a dollar. So hearing “the average payout is a dollar” gives you an incomplete picture of what a typical player experiences.

The name “log-normal” comes from a useful mathematical trick. Take the logarithm of the final payout, and all those multiplications turn into additions. We get back to a sum of contributions from independent flips, which has an approximately normal shape. Transform back, and we get this skewed distribution.

It's still an approximation: a hundred coin flips only allow a discrete set of final amounts.

We've changed the rules from adding fixed amounts to multiplying what we already have. That alone creates a gap between the typical result and the average. The third game adds another change: players leave at different times.

## 10:20–12:30 · Slide 11 — Game 3: elimination

Start with one dollar again. At the beginning of each round, double the amount. Then flip the coin. If it's heads, continue. If it's tails, collect the current amount and stop.

We aren't fixing the game at a hundred flips anymore. It ends at your first tail.

Let's follow the first few paths. We double to two dollars and flip. Half the players get tails immediately, collect two dollars, and leave.

The other half continue. Their amount doubles to four dollars. Half of those players stop, so a quarter of all the original players collect four dollars.

At the next level, an eighth of the original players collect eight dollars. Then a sixteenth collect sixteen dollars, and so on.

What would you pay to play this game?

*[Take a few guesses before doing the expected-value calculation.]*

Let's use the same method as before: probability times payout, added across the possible outcomes.

Half times two dollars contributes one dollar. A quarter times four contributes another dollar. An eighth times eight contributes another dollar.

Every possible stopping level contributes one dollar to the expectation. In the idealized version, there is no final level, so the expected payout has no finite upper limit. This is the St. Petersburg game.

That doesn't mean an infinite entry price makes sense. No real organizer has an infinite bankroll, and what you can afford to risk still matters. The idealization has gone beyond what anyone can actually offer.

But look at the mechanism before we discard it: each successive level is harder to reach, and each survivor is worth proportionally more. The shrinking probability never makes those later levels irrelevant to the expected payout.

## 12:30–14:15 · Slide 12 — A power-law tail

This plot asks a slightly different question from the earlier histograms: what fraction of players get at least a given payout?

Everyone gets at least two dollars. Half get at least four. A quarter get at least eight. Every time we double the payout threshold, we halve the fraction who reach it.

Be careful about “at least.” An eighth of players stop at exactly eight dollars. A quarter reach eight dollars or more, because that includes everyone who continues beyond eight.

At the possible payouts, the chance of reaching at least x dollars is two divided by x. That's a power law. The payout appears raised to a fixed power, here minus one.

Both axes use logarithmic scales, so that relationship becomes a straight line. The line connects the allowed payouts; between them, the actual probabilities form steps. The dots show a simulation of ten thousand players, so the sparsely populated far end won't match the theoretical line perfectly.

The feature we need is the persistent importance of the tail. The large payouts get rarer, but they grow quickly enough to remain consequential.

Real companies have limits. We aren't going to claim an infinite amount of money exists. We are going to ask whether company outcomes have a structure in which a few unusually large results can outweigh a lot of small ones.

## 14:15–15:30 · Slide 13 — Venture resembles Game 3.

Here are the three shapes together, drawn schematically on separate scales.

Adding fixed amounts gives us results clustered near an average. Multiplication creates a long right tail. Multiplication with repeated elimination can make rare extremes dominate the total.

Venture resembles that third structure. A company can grow by multiples, while many other companies never reach the next stage. The companies aren't independent coin flips. Founders make decisions, investors learn, and companies face some of the same market conditions. We're comparing the structure of the outcomes.

Now we can answer the subtitle. Suppose we make ten equal one-dollar investments. Nine return nothing. The tenth returns thirty dollars. We've received thirty dollars on ten invested: three times the money, despite nine losses.

That's gross. To deliver our earlier three-times hurdle after fees, the winner would need to return more.

The arithmetic shows how it can work. It doesn't guarantee that our portfolio contains that winner. Next we need to connect the game to how companies are actually financed.

## 15:30–15:45 · Slide 14 — What's in a venture investment?

We've been talking about payouts and portfolios. What is the investor actually buying?

A venture investment starts with a transaction: money goes into a company in exchange for ownership.

## 15:45–16:35 · Slide 15 — Capital for equity

The company receives capital it can spend. The investor receives newly issued equity: a share of ownership in the company.

Suppose an investor puts in two million dollars and receives twenty percent. Dividing two million by twenty percent gives a ten-million-dollar valuation after the investment. That's the post-money valuation.

“Post-money” just means we're valuing the company with the new money included. Before that two million arrived, the corresponding pre-money valuation was eight million.

This is a price implied by the transaction. It isn't a promise that the investor can immediately sell the shares for that amount.

Keep that division in mind. We'll use it again when we get to valuing an idea.

## 16:35–17:20 · Slide 16 — Advance or stop.

A company usually doesn't receive all the capital it might ever need in one payment. Funding happens in stages: pre-seed, seed, Series A, Series B, and potentially further rounds before an exit.

The company raises money, uses it to build and learn, and has to produce enough evidence to keep going. It may raise another round, become self-sustaining, or stop.

If it advances, its valuation can be a multiple of the previous one. That's the connection to the third game: repeated selection alongside the possibility of multiplicative growth.

The financing schedule alone doesn't create a power law. Company growth and investors' decisions about where to put more capital interact.

## 17:20–18:00 · Slide 17 — A round buys time.

A round buys time to reach the next milestone. Roughly two years is a useful planning horizon, and a round might sell something like ten to twenty-five percent of the company.

Those are planning ranges, not fixed rules. Stage, costs, and financing conditions all affect the terms. The Carta reports behind this slide give context for the ranges.[^rounds]

The practical question is what the team can accomplish before the money runs out. Enough time to build a product is useful only if the result helps the company continue.

## 18:00–19:00 · Slide 18 — A round buys information.

At pre-seed, there may be very little to measure. You're looking at the team, its insight into a problem, and perhaps a rough prototype.

At seed, you want evidence that people use the product. By Series A, you're asking whether customers stay and whether sales can repeat. Later, you're asking whether growth holds up as the business gets larger.

The evidence should become stronger as more money goes in. A plausible explanation of what customers might do gradually gives way to observations of what they actually do.

You can think of a round as a priced experiment. The company gets resources to test something, and the next financing decision should be made with more information.

That brings us to the stage-by-stage data. How many companies actually advance, and what prices do later stages command?

## 19:00–21:00 · Slide 19 — The funding ladder

Read this table as two separate historical datasets placed next to each other.

The graduation rates come from U.S. software companies that raised seed funding in 2009, observed by Mattermark in 2016. About thirty-two percent reached Series A.[^graduation]

Among those that reached A, about sixty-six percent reached B. Among the B companies, about fifty-nine percent reached C. Among the C companies, about forty-one percent reached D.

Those are conditional rates: each row starts with the companies that made it to the preceding stage. About twenty-one percent of the original seed cohort reached B. That's why the A-to-B rate is twenty-one divided by thirty-two, or roughly two-thirds. By D, about five percent of the original seed cohort had made it that far.

Now look at prices. These are separate Carta medians from the fourth quarter of 2024, including primary and bridge rounds. Rounded, they're sixteen million at seed, forty-three million at A, a hundred and ten million at B, two hundred and twenty million at C, and four hundred and twenty million at D. They're pre-money valuations.[^valuations]

We haven't watched one company follow that price path. These are different companies and periods, so the ratios aren't investment returns.

But the comparison motivates the game: fewer companies reach successive stages, while later-stage financings command much larger prices.

Also, no next round doesn't always mean failure. A company may have been acquired, become self-sustaining, or simply taken longer. This is financing graduation data. Let's now look at concentration in the portfolio outcomes themselves.

## 21:00–22:30 · Slide 20 — Power laws

In Paul Graham's 2012 snapshot of Y Combinator, Airbnb and Dropbox accounted for roughly three-quarters of the portfolio's value. Two companies dominated the total.[^yc]

That was company value at that time, rather than cash profits already distributed to investors.

In a different historical dataset, Chris Dixon reported in 2015 that about four and a half percent of invested dollars generated sixty percent of returns in Horsley Bridge's data. That's a fraction of capital, not a fraction of companies.[^horsley]

The chart sketches what concentration looks like. Companies are ranked from the largest returner on the left to the smallest on the right. The bars are illustrative, in common dollar units. They aren't the underlying observations from either study.

The dotted line marks a hypothetical fund size. A company returning more than that can, by itself, return the fund. That's why the size of the largest outcome matters so much.

Concentrated returns don't establish an exact power-law exponent. But they show why focusing only on how often an investor is right misses a large part of the economics. We also have to ask how much a right answer can return.

## 22:30–23:15 · Slide 21 — Buy vs. build

There are two ways my work encounters these questions.

On the investment side, we meet founders, look at the product and execution risk, and decide whether to invest in a company already being built.

On the incubation side, we can start earlier: test an idea, recruit a team, build something, and look for the first customers.

The uncertainty is similar, but our position changes. In one case, we're evaluating the evidence a company brings us. In the other, we're helping create the company and gather that evidence.

So let's take the builder's perspective for the next few slides.

## 23:15–23:45 · Slide 22 — Where do you start?

Where do you start when there isn't a company yet?

Before asking how to build a product, ask who cares enough about the problem to change what they do. Then ask why you're well placed to reach or serve those people.

“Who cares?” and “Why you?” are useful early questions. They give us somewhere to begin looking for evidence, before we've committed to a particular solution.

## 23:45–24:45 · Slide 23 — Who cares?

Coming up with a startup idea in isolation is deceptively difficult. Observation and conversation give you more to work with.

The two circles on this slide suggest two places to look. The world changed, or something already hurts. They can overlap.

A change in what's technically possible can open up a new way to solve a problem. But technical possibility needs a connection to something people will actually do.

Existing pain gives you something to investigate directly. Look for workarounds, time being wasted, money being spent, or frustration strong enough to change someone's behavior.

Then come back to “Why you?” Do you have access to these people? Do you understand the problem well enough to notice something useful? Can you reach and serve them?

Those questions turn an idea into a set of claims we can examine.

## 24:45–26:15 · Slide 24 — A startup is a stack of bets.

Someone cares. They will act. You can reach and serve them. The initial market can grow.

Each of those is a separate claim. A person can care about a problem and still decide it isn't worth changing their habits. Someone may want the product, but you may not be able to reach or serve them economically. And you might serve a small group well without finding a path beyond it.

The equation underneath puts those dependencies into probability language. Read the vertical bar as “given.” What's the chance people act, given that they care? What's the chance we can reach and serve them, given that they're willing to act?

The approximation is doing real work here. These claims aren't independent. An exact chain rule would condition each step on all the earlier claims. This shorter equation uses the previous step as a simplified description, and the four claims don't capture everything that can go wrong.

We aren't going to get calibrated probabilities from a few interviews. The equation tells us to investigate each dependency. Confidence that people care doesn't, by itself, settle the other questions.

Let's look at what that means for an actual company.

## 26:15–27:15 · Slide 25 — Case study: Airbnb

Airbnb's beginning gives us a concrete example.

In 2007, a design conference came to San Francisco. Hotels were sold out. The founders put three airbeds in their apartment, and three guests stayed with them.[^airbnb]

That's the sequence on the slide: a conference, no hotel rooms, three airbeds, three guests.

Those stays are observed behavior. The founders had found people who, in those circumstances, would use that alternative.

Three guests don't establish the size of a global market. They establish something smaller and more useful at that moment: this particular need existed, and these people acted on it.

You can then ask whether it happens elsewhere, whether you can find more such people, and how far the idea can grow. The first version can be much narrower than the eventual business.

## 27:15–28:15 · Slide 26 — Build a wedge

Read this wedge from the bottom up. At the tip are air mattresses. Above that are spare rooms, then entire homes, then a global lodging marketplace.

It's a conceptual picture of expansion, rather than an exact product timeline. You don't have to build the broadest version on the first day. You need an initial group you can serve well enough to learn whether there's something to build on.

Paul Graham put it to Brian Chesky this way: “It's better to have 100 people who love you than 1 million who kind of like you.”[^airbnb]

A narrow starting point can be compatible with a large eventual outcome. The question is whether it offers a path outward. That takes us back to the final claim in the stack of bets: can the wedge grow?

## 28:15–29:15 · Slide 27 — Why won't company X build that?

A natural objection to a startup idea is: why won't a much larger company build it?

Google demonstrated LaMDA in May 2021. OpenAI launched ChatGPT in November 2022, about eighteen months later.[^incumbents]

Those dates don't tell us everything about either product, and they don't prove a single explanation for the difference in timing. Google's 2021 discussion included concerns about safety and quality.

But the example separates two questions: can a company build something, and when will it put a product in users' hands?

Technical capability doesn't settle product timing. The possibility that an incumbent could build an idea is something to investigate, alongside evidence about what it is actually doing.

Suppose you've worked through those questions and want to fund the first experiment. What is that idea worth?

## 29:15–29:45 · Slide 28 — How much is an idea worth?

This is a difficult valuation problem. There may be no revenue, no customers, and no working product.

Comparable financings and the founders' backgrounds can help establish a market price. But let's begin with a simpler constraint: how much money would it take to find out whether the idea works?

We'll use an illustrative budget, then return to the ownership equation.

## 29:45–30:30 · Slide 29 — Start with runway.

Suppose it's you and two or three employees. You need twelve to eighteen months, computers, hosting, software, and perhaps workspace. There isn't any revenue yet to offset those costs.

For this example, assume the experiment needs about five hundred thousand dollars. The amount would depend on the team, location, product, and milestone. We're choosing a budget, not quoting a market standard.

What should that money buy? Ideally, enough evidence to decide what happens next: perhaps repeat use, or a demonstrated willingness to pay. Now we need to ask how much ownership pays for that experiment.

## 30:30–31:30 · Slide 30 — The valuation floor.

Suppose we need at least five hundred thousand dollars and are willing to sell at most twenty percent of the company.

Use the same division as before: five hundred thousand divided by twenty percent is two and a half million dollars post-money. At that price, the pre-money valuation is two million, with the new half-million added by the investment.

That's the minimum price compatible with this financing plan. It doesn't prove the idea has an intrinsic value of two and a half million. An investor can decline. We might then need a smaller budget, more evidence, or a different ownership limit.

A higher valuation would reduce the ownership sold for the same amount of cash, but it also raises expectations for the next financing. The price still has to make sense to both sides.

## 31:30–32:15 · Slide 31 — Will VCs believe it?

Big enough market. You can build it. Those two beliefs might support the five-hundred-thousand-dollar investment in our example.

“Big enough” depends on the potential return, the price, and how much capital the company will need. The investor needs to believe there's room to grow and that this team can reach it.

The line ends at five hundred thousand dollars, but getting there still requires an investor to agree. The eventual upside has to justify the risk. And market spending, company revenue, valuation, and an investor's return are all different quantities.

## 32:15–33:00 · Slide 32 — Most startups fail. Most are worthwhile.

Most startups fail.

*[Pause on the opening sentence.]*

We now have a way to understand why investing in them can still be rational. A few sufficiently large outcomes can outweigh many losses. Whether that happens depends on the actual companies, prices, and outcomes.

Most are worthwhile.

*[Pause.]*

That second sentence is my judgment about the attempts, not another return statistic. Failure has real costs. The portfolio arithmetic can explain an investment, but it can't by itself decide whether an attempt was worth making.

Thank you.

*[Leave the slide on screen and take questions.]*

---

## Source notes for offline preparation

These are the sources already used by the deck. The transcript retains their historical dates; it does not refresh market data. The spoken script above contains the explanation needed for rehearsal without opening the links.

[^sp500]: Macrotrends, [S&P 500 historical chart data](https://www.macrotrends.net/datasets/2324/sp-500-historical-chart-data). The deck uses a supplied annual-average price series bundled in August 2026. Dividends are excluded. The exact 2026 year-to-date cutoff was not recorded, and the September refresh attempt was blocked. The 9.1% / 14.7% comparison on slide 5 is separate teaching arithmetic: doubling or tripling over eight years.

[^games]: Frank Odom, [On Power Laws](https://fkodom.com/blog/on-power-laws), April 8, 2026. The deck preserves the three game trees and the first two simulation plots. Game 3's survival plot was rebuilt to match its tree: double before each flip, so immediate tails pays $2. If the first tails occurs on flip n, then P(X = 2^n) = 2^(−n), while P(X ≥ 2^n) = 2^(1−n). The latter equals 2/x only at the allowed payouts x = 2^n.

[^rounds]: Carta, [graduation analysis](https://carta.com/data/newsletter-graduation-rate-from-seed-to-series-a/), February 5, 2025, and [early-stage valuations](https://carta.com/data/record-setting-valuations/), March 5, 2026. Roughly two years and 10–25% ownership sold are planning heuristics. They are not deadlines, fixed terms, or a forecast.

[^graduation]: Jason D. Rowley, Mattermark, [The Startup Graduation Rate Is Surprisingly Low](https://mattermark.com/startup-graduation-rate-surprisingly-low/), September 28, 2016. The 2009 U.S. software seed-cohort row reports cumulative graduation shares of 32%, 21%, 12.3%, and 5% at A, B, C, and D. Dividing adjacent entries gives the conditional rates on slide 19: approximately 32%, 66%, 59%, and 41%. The source percentages were already rounded. No next financing is not equivalent to business failure.

[^valuations]: Ashley Neville and Kevin Dowd, Carta, [State of Private Markets: Q4 and 2024 in review](https://carta.com/data/state-of-private-markets-q4-2024/), February 12, 2025. Q4 2024 U.S. median pre-money valuations, primary and bridge rounds combined: $16.0M, $43.4M, $108.9M, $222.3M, and $416.0M at seed through D. The deck rounds these to $16M, $43M, $110M, $220M, and $420M. These are separate samples from the Mattermark cohort.

[^yc]: Paul Graham, [Black Swan Farming](https://paulgraham.com/swan.html), September 2012. Airbnb and Dropbox accounted for roughly three-quarters of YC portfolio-company value in that snapshot, not three-quarters of all historical realized profits.

[^horsley]: Chris Dixon, [Performance Data and the “Babe Ruth” Effect in Venture Capital](https://a16z.com/performance-data-and-the-babe-ruth-effect-in-venture-capital/), June 8, 2015. Historical Horsley Bridge data: approximately 4.5% of invested dollars generated 60% of returns. The deck's ranked-return chart is an illustration, not a reconstruction of this dataset.

[^airbnb]: Airbnb, [What Makes Airbnb, Airbnb](https://news.airbnb.com/what-makes-airbnb-airbnb), 2020, and [Brian Chesky's host letter](https://news.airbnb.com/th/an-important-announcement-from-airbnb/), November 3, 2020. These accounts describe the 2007 origin. Slide 26 retains the deck's Paul Graham quotation to Brian Chesky; its wedge is a conceptual expansion, not a precise product chronology.

[^incumbents]: Google, [LaMDA: our breakthrough conversation technology](https://blog.google/innovation-and-ai/products/lamda/), May 18, 2021; OpenAI, [Introducing ChatGPT](https://openai.com/index/chatgpt/), November 30, 2022. These are the demonstrated-technology and product-launch dates used on slide 27. They do not establish a single cause for the timing difference or equate the two products.
