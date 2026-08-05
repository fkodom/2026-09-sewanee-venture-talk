import { Fragment, Slide } from '@revealjs/react'

import {
  AdditiveDecisionTree,
  Coin,
  DistributionChart,
  NormalSimulationChart,
} from '../components/deck/Visuals'
import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'

export function PartOneMath() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark opening-slide"
        notes={`Pause. Let the sentence sit before asking: “So why would anyone invest in startups?” Do not answer yet.`}
      >
        <div className="opening-frame">
          <h1>Most startups fail.</h1>
        </div>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Start with the obvious alternative. An investor can buy a broad S&P 500 index fund instead of accepting startup risk. Use 9% as a compact long-run teaching assumption: Investor.gov's Rule of 72 example says that 9% doubles money in about eight years. This is an average and a rule of thumb, not a forecast or a claim about any exact eight-year period. Ignore taxes and fees for this comparison.`}
      >
        <SlideFrame number={2}>
          <div className="index-benchmark-slide">
            <h2>The S&amp;P 500 already sets a high bar.</h2>
            <div className="index-benchmark-math">
              <div className="benchmark-multiple">
                <span>Broad index fund</span>
                <strong>$1 → ~$2</strong>
                <small>about eight years</small>
              </div>
              <div className="benchmark-cagr">
                <strong>2<sup>1/8</sup> − 1 ≈ 9.1%</strong>
                <span>annualized return</span>
              </div>
            </div>
            <p className="benchmark-caveat">An average, not a promise.</p>
            <SourceLine>Investor.gov, “What is compound interest?” · Rule of 72 example at 9%</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now make the choice explicit. Early-stage startups offer little evidence, capital is committed for years, and nine out of ten investments may fail. A venture fund therefore has to do materially better than the public-market alternative. For this talk, use at least 3× over roughly eight years as the working hurdle. That compounds to about 14.7% per year. This is a deliberate benchmark, not an industry-wide promise. To compare fairly with an index fund, discuss fund returns net to the investor; the underlying portfolio must earn more before fees and carry.`}
      >
        <SlideFrame number={3}>
          <div className="venture-hurdle-slide">
            <h2>Venture has to clear a higher bar.</h2>
            <div className="benchmark-comparison" aria-label="An index fund doubling in eight years compared with a venture fund target of at least tripling in eight years">
              <article>
                <span>S&amp;P 500 rule of thumb</span>
                <strong>2×</strong>
                <p>~8 years</p>
                <small>9.1% annualized</small>
              </article>
              <article className="benchmark-venture">
                <span>Venture fund hurdle</span>
                <strong>≥ 3×</strong>
                <p>~8 years</p>
                <small>≥ 14.7% annualized</small>
              </article>
            </div>
            <p className="venture-hurdle-thesis">If nine of ten can fail, the winners must more than make up the difference.</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Transition: “To understand why that outcome is mathematically possible, we first need to distinguish three coin-flipping games.” The games look similar at the start; the resulting worlds are not.`}
      >
        <SlideFrame number={4}>
          <div className="three-games-slide">
            <h2>Three coin-flipping games</h2>
            <div className="game-portals" aria-label="Three coin flipping games">
              {(['normal', 'lognormal', 'power'] as const).map((kind, index) => (
                <div className="game-portal" key={kind}>
                  <Coin outcome="?" index={index + 1} />
                  <DistributionChart kind={kind} label={`Outcome silhouette for game ${index + 1}`} compact />
                </div>
              ))}
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Game 1 is a sum of 100 independent fair ±$1 flips. Its expected value is zero. This decision tree is redrawn in the visual language of “On Power Laws,” but the values follow the talk’s ±$1 convention rather than the article’s +$1-or-zero convention.`}
      >
        <SlideFrame number={5}>
          <div className="game-setup-slide">
            <div className="game-setup-copy">
              <h2>Game 1: additive outcomes</h2>
              <p>Flip a fair coin 100 times.</p>
              <div className="coin-rules-stacked">
                <span><Coin outcome="H" /> +$1</span>
                <span><Coin outcome="T" /> −$1</span>
              </div>
              <div className="equation-card">
                <strong>X = ∑<sub>i=1</sub><sup>100</sup> Yᵢ</strong>
                <span>Yᵢ ∈ {'{−1, +1}'}</span>
              </div>
            </div>
            <figure className="article-visual-panel">
              <AdditiveDecisionTree />
            </figure>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Across many players, the distribution is approximately normal and centered at zero. Large positive and negative deviations are possible, but they become increasingly rare and remain roughly symmetric. The 10,000-trial histogram is illustrative.`}
      >
        <SlideFrame number={6}>
          <div className="game-distribution-slide">
            <h2>Additive outcomes cluster around an average.</h2>
            <div className="distribution-asset-layout">
              <figure className="distribution-asset distribution-asset-vector">
                <NormalSimulationChart />
              </figure>
              <aside className="distribution-insight">
                <div className="equation-card">
                  <strong>E[X] = 0</strong>
                </div>
                <p>Symmetric around the mean.</p>
                <p>Extreme outcomes fade quickly.</p>
              </aside>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Game 2 starts at $1. Heads multiplies wealth by 1.1; tails by 0.9. The tree is reused from “On Power Laws.” Notice that different flip orders can reach the same value because multiplication is commutative.`}
      >
        <SlideFrame number={7}>
          <div className="game-setup-slide">
            <div className="game-setup-copy">
              <h2>Game 2: multiplicative outcomes</h2>
              <p>Start with $1. Flip 100 times.</p>
              <div className="coin-rules-stacked">
                <span><Coin outcome="H" /> × 1.1</span>
                <span><Coin outcome="T" /> × 0.9</span>
              </div>
              <div className="equation-card">
                <strong>½(1.1) + ½(0.9) = 1</strong>
                <span>expected one-step multiplier</span>
              </div>
            </div>
            <figure className="article-visual-panel article-visual-panel-tree">
              <img
                src="/on-power-laws/game2_tree.png"
                alt="A decision tree for repeated 1.1 and 0.9 multipliers, beginning at one dollar"
              />
            </figure>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`The article’s 10,000-trial simulation shows the log-normal outcome directly. The mean stays at $1 while the median is about $0.61. A path with exactly 50 heads and 50 tails ends at 0.99^50, also about $0.61. A few large winners pull the mean to the right. Do not substitute a double-or-halve game.`}
      >
        <SlideFrame number={8}>
          <div className="game-distribution-slide">
            <h2>The mean stays at $1. The typical outcome does not.</h2>
            <div className="distribution-asset-layout">
              <figure className="distribution-asset">
                <img
                  src="/on-power-laws/game2_multiplicative.png"
                  alt="A 10,000-trial simulation and theoretical log-normal distribution with median 61 cents and mean one dollar"
                />
              </figure>
              <aside className="distribution-insight">
                <div className="math-comparison">
                  <span>median</span><strong>$0.61</strong>
                  <span>mean</span><strong>$1.00</strong>
                </div>
                <div className="equation-card equation-card-wide">
                  <strong>1.1⁵⁰ · 0.9⁵⁰ = 0.99⁵⁰ ≈ $0.61</strong>
                </div>
              </aside>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Use a St. Petersburg-style game. The illustration is reused from “On Power Laws”: the amount doubles before each flip; heads advances to the next round and tails stops at the current payout. State this indexing convention explicitly. Reaching each successive payout is half as likely.`}
      >
        <SlideFrame number={9}>
          <div className="game-setup-slide">
            <div className="game-setup-copy">
              <h2>Game 3: multiplication with elimination</h2>
              <p>Double the payout. Flip the coin.</p>
              <div className="elimination-rules">
                <span><Coin outcome="H" /> advance</span>
                <span><Coin outcome="T" /> stop</span>
              </div>
              <div className="equation-card equation-card-accent">
                <strong>2ⁿ · 2⁻ⁿ = 1</strong>
                <span>each level contributes equally</span>
              </div>
            </div>
            <figure className="article-visual-panel article-visual-panel-tree">
              <img
                src="/on-power-laws/game3_tree.png"
                alt="A decision tree where the payout doubles each round, heads continues, and tails ends the game"
              />
            </figure>
          </div>
          <p className="model-caveat">Finite markets do not offer infinite wealth. The tail is the useful part of the model.</p>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`The 10,000-trial simulation from “On Power Laws” follows a straight line on log-log axes. That is the visual signature of a power-law tail. Real markets are finite; the claim is that rare outcomes can remain economically important, not that wealth is infinite. The next slide gives the more precise survival-function derivation.`}
      >
        <SlideFrame number={10}>
          <div className="game-distribution-slide">
            <h2>Rare extremes remain economically important.</h2>
            <div className="distribution-asset-layout">
              <figure className="distribution-asset">
                <img
                  src="/on-power-laws/game3_powerlaw.png"
                  alt="A 10,000-trial simulation following a straight theoretical power-law line on log-log axes"
                />
              </figure>
              <aside className="distribution-insight">
                <div className="equation-card equation-card-accent">
                  <strong>tail ∝ x<sup>−1</sup></strong>
                </div>
                <p>A straight line on log-log axes.</p>
                <p>Rare outcomes still matter to the total.</p>
              </aside>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`Explain the sentence before the algebra: every level is less likely to be reached, but every survivor is proportionally more valuable. Then reveal the substitution. The survival function is the precise object because payouts occur at discrete powers. If m is near 1/s, alpha is near one.`}
      >
        <SlideFrame number={11} dark>
          <div className="derivation-slide">
            <h2 className="sr-only">Deriving the power law</h2>
            <p className="derivation-intuition">Each level is harder to reach. Each survivor is worth more.</p>
            <div className="derivation-grid">
              <div>
                <span>after n rounds</span>
                <strong>x = mⁿ</strong>
                <strong>P(X ≥ x) = sⁿ</strong>
              </div>
              <Fragment as="div" animation="fade-up">
                <span>substitute n = log<sub>m</sub>(x)</span>
                <strong>P(X ≥ x) = x<sup>logₘ s</sup></strong>
              </Fragment>
              <Fragment as="div" className="derivation-result" animation="fade-up">
                <span>the tail</span>
                <strong>P(X ≥ x) = x<sup>−α</sup></strong>
                <small>α = −ln(s) / ln(m)</small>
              </Fragment>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Compare the three distributions directly. Additive processes cluster near an average. Multiplicative processes produce skew and a long right tail. Multiplicative growth plus elimination produces a tail in which rare extremes can dominate the total. State the claim, not a proof: venture looks much more like Game 3.`}
      >
        <SlideFrame number={12}>
          <div className="worlds-slide">
            <h2>Venture capital looks much more like Game 3.</h2>
            <div className="worlds-grid">
              <article>
                <span className="world-number">01</span>
                <DistributionChart kind="normal" label="Normal distribution" compact />
                <h3>Additive</h3>
                <p>Outcomes cluster near an average.</p>
              </article>
              <article>
                <span className="world-number">02</span>
                <DistributionChart kind="lognormal" label="Log-normal distribution" compact />
                <h3>Multiplicative</h3>
                <p>Many modest outcomes; a long right tail.</p>
              </article>
              <article className="world-power">
                <span className="world-number">03</span>
                <DistributionChart kind="power" label="Power-law distribution" compact />
                <h3>Multiplicative + elimination</h3>
                <p>Rare extremes can dominate the total.</p>
              </article>
            </div>
          </div>
        </SlideFrame>
      </Slide>
    </>
  )
}
