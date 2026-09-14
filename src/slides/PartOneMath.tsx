import { Slide } from '@revealjs/react'

import {
  Coin,
  DistributionChart,
  Sp500HistoryChart,
} from '../components/deck/Visuals'
import { sp500Source } from '../data/sp500-annual-average'
import { PowerLawTailChart } from '../components/deck/PowerLawTailChart'
import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'

export function PartOneMath() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark opening-slide title-slide"
        notes={`Allow 15 seconds here and about 45 seconds for the background. The subtitle is a thought experiment, not a measured 90% failure rate. Leave the central question unanswered until the games.`}
      >
        <div className="opening-frame title-frame">
          <h1>The Math of Venture Capital</h1>
          <p>How 9 Wrongs Make a Right</p>
        </div>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Briefly establish the speaker's connection to Sewanee and the technical path from physics into machine learning and startup building. Keep this quick; the next slide opens the central question.`}
      >
        <SlideFrame>
          <div className="speaker-background-slide">
            <h2>My background</h2>
            <div className="speaker-background-columns">
              <div role="group" className="speaker-education" aria-labelledby="speaker-education-heading">
                <h3 id="speaker-education-heading">Education</h3>
                <div className="speaker-education-list">
                  <article>
                    <span>2015</span>
                    <div>
                      <strong>Sewanee</strong>
                      <p>Mathematics + Physics</p>
                    </div>
                  </article>
                  <article>
                    <span>2017</span>
                    <div>
                      <strong>UC Davis</strong>
                      <p>M.S. Physics</p>
                    </div>
                  </article>
                </div>
              </div>

              <div role="group" className="speaker-roles" aria-labelledby="speaker-roles-heading">
                <h3 id="speaker-roles-heading">Since then</h3>
                <ul>
                  <li>Machine Learning Engineer</li>
                  <li>Senior Computer Vision Engineer</li>
                  <li>Director of Innovation</li>
                  <li>Director of ML</li>
                  <li className="speaker-current-role">Founding Engineer @ Tower Research Ventures</li>
                </ul>
              </div>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark opening-slide paradox-slide"
        notes={`Pause. Let the sentence sit before asking: “So why would anyone invest in startups?” Do not answer yet.`}
      >
        <div className="opening-frame paradox-frame">
          <h1>Most startups fail.</h1>
          <p>Why venture capital?</p>
        </div>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Start with the obvious alternative. An investor can buy a broad S&P 500 index fund instead of accepting startup risk. The chart uses the annual average price series supplied from Macrotrends and a logarithmic vertical scale. It is a price-index history, so it excludes dividends and is not itself a total-return calculation. Treat the 2026 value as a year-to-date snapshot because the year is incomplete. The supplied series was first bundled on ${sp500Source.bundled}; the source’s exact cutoff was not recorded. Macrotrends blocked the automated refresh on ${sp500Source.refreshAttempted}, so the approved values are preserved, not relabeled as current. Source: ${sp500Source.url}. Refresh the supplied series before the event if access permits. Use the chart to establish the long compounding trend, then advance to the explicit performance hurdle.`}
      >
        <SlideFrame>
          <div className="sp500-slide">
            <h2>The S&amp;P 500</h2>
            <Sp500HistoryChart />
            <div className="sp500-source-row">
              <p>Price index · no dividends · 2026 YTD snapshot.</p>
              <SourceLine><a href={sp500Source.url}>Macrotrends · bundled Aug. 2026</a></SourceLine>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now make the choice explicit. Early-stage startups offer little evidence, capital is committed for years, and losses are common. Nine losses out of ten is an illustrative scenario, not a measured failure rate. A venture fund therefore has to do materially better than the public-market alternative. For this talk, use at least 3× over roughly eight years as the working hurdle. That compounds to about 14.7% per year. The public-market side uses 9% as a Rule of 72 teaching assumption; exactly doubling over eight years gives 2^(1/8) − 1 = 9.05%. It is an average assumption, not a forecast or a slope fitted to the preceding price chart. This is a deliberate benchmark, not an industry-wide promise. To compare fairly with an index fund, discuss fund returns net to the investor; the underlying portfolio must earn more before fees and carry.`}
      >
        <SlideFrame>
          <div className="venture-hurdle-slide">
            <h2>Venture must outperform.</h2>
            <div className="benchmark-comparison" aria-label="An index fund doubling in eight years compared with a venture fund target of at least tripling in eight years">
              <article>
                <span>S&amp;P 500 rule of thumb</span>
                <strong>2×</strong>
                <p>~8 years</p>
                <small>9.1% annualized</small>
              </article>
              <article className="benchmark-venture">
                <span>This talk’s venture hurdle</span>
                <strong>≥ 3×</strong>
                <p>~8 years</p>
                <small>≥ 14.7% annualized</small>
              </article>
            </div>
            <p className="benchmark-qualification">Teaching assumptions · both net to the investor</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Transition: “To understand why that outcome is mathematically possible, we first need to distinguish three coin-flipping games.” The games look similar at the start; the resulting worlds are not.`}
      >
        <SlideFrame>
          <div className="three-games-slide">
            <h2>Three coin games</h2>
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
        notes={`Game 1 is the additive game from “On Power Laws.” Start at zero and flip a fair coin 100 times. Heads adds $1; tails adds nothing. Ask the audience for a reasonable entry price. The expected payout is $50 by linearity of expectation; the central limit theorem explains the approximate bell shape, not the mean. The decision tree is the original blog figure, bundled locally.`}
      >
        <SlideFrame>
          <div className="game-setup-slide">
            <div className="game-setup-copy">
              <h2>Game 1: additive</h2>
              <p>Flip a fair coin 100 times.</p>
              <div className="coin-rules-stacked">
                <span><Coin outcome="H" /> +$1</span>
                <span><Coin outcome="T" /> +$0</span>
              </div>
            </div>
            <figure className="article-visual-panel article-visual-panel-tree article-visual-panel-branching">
              <img
                src="/on-power-laws/game1_tree.png"
                alt="A decision tree where heads adds one dollar and tails adds zero dollars"
              />
            </figure>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`The original 10,000-trial simulation from “On Power Laws” is approximately normal and centered at the expected payout of $50. Outcomes far from $50 become increasingly rare. This is the same additive game shown on the setup slide.`}
      >
        <SlideFrame>
          <div className="game-distribution-slide">
            <h2>Normal distribution</h2>
            <div className="distribution-asset-layout">
              <figure className="distribution-asset">
                <img
                  src="/on-power-laws/game1_additive.png"
                  alt="A 10,000-trial simulation and theoretical normal distribution centered on a 50 dollar payout"
                />
              </figure>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Game 2 starts at $1. Heads multiplies wealth by 1.1; tails by 0.9. The tree is reused from “On Power Laws.” Notice that different flip orders can reach the same value because multiplication is commutative.`}
      >
        <SlideFrame>
          <div className="game-setup-slide">
            <div className="game-setup-copy">
              <h2>Game 2: multiplicative</h2>
              <p>Start with $1. Flip 100 times.</p>
              <div className="coin-rules-stacked">
                <span><Coin outcome="H" /> × 1.1</span>
                <span><Coin outcome="T" /> × 0.9</span>
              </div>
            </div>
            <figure className="article-visual-panel article-visual-panel-tree article-visual-panel-branching">
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
        notes={`The article’s 10,000-trial simulation shows the log-normal outcome directly. The theoretical mean stays at $1 while the median is about $0.61; a finite simulation mean need not equal $1 exactly. The finite game is a transformation of a binomial variable, approximated by a log-normal distribution. A path with exactly 50 heads and 50 tails ends at 0.99^50, also about $0.61. A few large winners pull the mean to the right. Do not substitute a double-or-halve game.`}
      >
        <SlideFrame>
          <div className="game-distribution-slide">
            <h2>Log-normal distribution</h2>
            <div className="distribution-asset-layout">
              <figure className="distribution-asset">
                <img
                  src="/on-power-laws/game2_multiplicative.png"
                  alt="A 10,000-trial simulation and theoretical log-normal distribution with median 61 cents and mean one dollar"
                />
              </figure>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Allow about two minutes. Match the bundled tree exactly: start with $1; at the beginning of each round double the payout, then flip a fair coin. Heads continues and tails collects the current payout. Immediate tails therefore pays $2. If N is the flip on which the first tails appears, P(N=n)=2^(−n) and X=2^n, n≥1. Each possible stopping level contributes $1 to expected payout. Ask what the audience would pay before discussing the idealized divergent expectation. Source: Frank Odom, On Power Laws, April 8, 2026, https://fkodom.com/blog/on-power-laws.`}
      >
        <SlideFrame>
          <div className="game-setup-slide">
            <div className="game-setup-copy">
              <h2>Game 3: elimination</h2>
              <p>Start with $1. Each round: double, then flip.</p>
              <div className="elimination-rules">
                <span><Coin outcome="H" /> continue</span>
                <span><Coin outcome="T" /> collect &amp; stop</span>
              </div>
            </div>
            <figure className="article-visual-panel article-visual-panel-tree article-visual-panel-elimination">
              <img
                src="/on-power-laws/game3_tree.png"
                alt="A decision tree where the payout doubles each round, heads continues, and tails ends the game"
              />
            </figure>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`The original bundled distribution started at $1, while the tree pays $2 on immediate tails. This chart recreates the 10,000-player simulation with a fixed seed and the tree’s double-before-flip convention. It plots the survival probability, not a probability density: P(X=2^n)=2^(−n) is the probability mass, while under our double-before-flip convention, the survival function is P(X≥2^n)=2^(1−n)=2/x at x=2^n, n≥1; between payouts it is a staircase. Each doubling halves the chance. This gives a power-law tail with exponent 1. The line joins the theoretical values at possible payouts. The simulation is newly computed, not the original article’s sample. A straight line in this idealized plot illustrates the model; it is not a statistical test of actual venture data. Real markets are finite; the claim is that rare outcomes can remain economically important, not that wealth is infinite. The next slide compares the three resulting distributions.`}
      >
        <SlideFrame>
          <div className="game-distribution-slide">
            <h2>A power-law tail</h2>
            <div className="distribution-asset-layout">
              <figure className="distribution-asset">
                <PowerLawTailChart />
              </figure>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Compare the three distributions directly. Additive processes cluster near an average. Multiplicative processes produce skew and a long right tail. Multiplicative growth plus elimination produces a tail in which rare extremes can dominate the total. State the claim, not a proof: venture looks much more like Game 3. These are schematic shapes on separate scales, not a quantitative overlay. Growth mechanics and staged selection reinforce each other; financing alone does not prove a power law. Close the opening loop with spoken arithmetic: ten equal $1 investments, nine complete losses and one $30 return give $30/$10 = 3× gross. Fees and carry would require a larger winner to deliver the earlier 3× net hurdle. The example explains possibility, not a guaranteed winner or an optimal strategy.`}
      >
        <SlideFrame>
          <div className="worlds-slide">
            <h2>Venture resembles Game 3.</h2>
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
