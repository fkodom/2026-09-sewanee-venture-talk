import { Fragment, Slide } from '@revealjs/react'

import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { fundingStages } from '../data/venture-data'

const portfolioReturns = [3, 0, 7, 2, 11, 1, 5, 0, 16, 4, 9, 2, 21, 6, 12, 1, 34, 8, 79, 220]

export function PartTwoEvidence() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`Map the mathematical game to financing stages. A company raises capital, uses it to build and learn, and must produce enough evidence to advance or become self-sustaining. If it advances, valuation can multiply; if it cannot, the game often ends. Companies are not literal independent coin flips: founders have agency, investors learn, markets change, and outcomes are correlated. The analogy is structural.`}
      >
        <SlideFrame number={13} dark>
          <div className="venture-flip-slide">
            <div>
              <h2>Advance with evidence, or the game ends.</h2>
            </div>
            <div className="stage-track" role="img" aria-label="A company advances through funding stages by producing evidence">
              {['Pre-seed', 'Seed', 'Series A', 'Series B', 'Exit'].map((stage, index) => (
                <div className="stage-stop" key={stage}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{stage}</strong>
                  {index < 4 && <i aria-hidden="true">→</i>}
                </div>
              ))}
            </div>
            <p className="dark-caveat">Not a literal coin flip: a model of staged elimination and multiplicative payoff.</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`These are working figures collected in “On Power Laws,” not timeless constants. Definitions, cohort ages, and market windows vary. The seed-to-Series-A transition is the clearest bottleneck in this working set and pairs a low graduation rate with a large valuation jump. Refresh every figure and source before the event.`}
      >
        <SlideFrame number={14}>
          <div className="funding-table-slide">
            <div className="slide-heading-row">
              <div>
                <h2>Every rung filters companies and reprices survivors.</h2>
              </div>
              <div className="working-data-stamp">WORKING FIGURES<br />REFRESH BEFORE TALK</div>
            </div>
            <div className="funding-table" role="table" aria-label="Approximate startup graduation rates and next-stage valuations">
              <div className="funding-table-head" role="row">
                <span role="columnheader">transition</span>
                <span role="columnheader">advance</span>
                <span role="columnheader">next valuation</span>
              </div>
              {fundingStages.map((row) => (
                <div className={`funding-table-row ${row.bottleneck ? 'funding-table-bottleneck' : ''}`} role="row" key={row.stage}>
                  <strong role="cell">{row.stage}</strong>
                  <span role="cell">{row.graduation}</span>
                  <span role="cell">{row.valuation}</span>
                </div>
              ))}
            </div>
            <SourceLine>Frank Odom, “On Power Laws” · working compilation; definitions and periods vary</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now test the model against observed venture portfolios. In Paul Graham’s 2012 snapshot, Airbnb and Dropbox represented roughly three-quarters of YC portfolio value at that time. Horsley Bridge reported that about 5% of capital deployed from 1985–2014 generated half of returns. The bars are explicitly illustrative; they show concentration, not a reconstructed dataset.`}
      >
        <SlideFrame number={15}>
          <div className="returns-slide">
            <div className="returns-copy">
              <h2>A few investments can determine the portfolio.</h2>
              <div className="return-observations">
                <div><strong>≈ ¾</strong><span>of YC portfolio value in Airbnb + Dropbox</span><small>2012 snapshot</small></div>
                <div><strong>5%</strong><span>of capital generated half of returns</span><small>1985–2014</small></div>
              </div>
            </div>
            <figure className="portfolio-chart">
              <figcaption>Illustrative portfolio · relative return</figcaption>
              <div className="portfolio-chart-bars">
                {portfolioReturns.map((value, index) => (
                  <span
                    className={index > 17 ? 'portfolio-return portfolio-return-tail' : 'portfolio-return'}
                    key={`${value}-${index}`}
                    style={{ height: `${Math.max(3, (value / 220) * 100)}%` }}
                  />
                ))}
              </div>
              <div className="portfolio-axis"><span>many small outcomes</span><span>rare outliers</span></div>
            </figure>
            <SourceLine>Paul Graham, “Black Swan Farming” (2012); Horsley Bridge data summarized in “On Power Laws”</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`Peter Thiel’s “return the fund” rule is an investment consequence, not independent empirical evidence. State it as a scale test: the ownership retained at exit, multiplied by the company’s exit value, must be capable of equaling the fund. A company does not need to be certain to reach that outcome, but the outcome must be plausible enough to matter to the portfolio.`}
      >
        <SlideFrame number={16} dark>
          <div className="return-fund-slide">
            <h2>Could this company return the fund?</h2>
            <div className="return-fund-equation" aria-label="Ownership at exit multiplied by company value at exit must be at least the size of the fund">
              <span>ownership at exit</span>
              <i>×</i>
              <span>company value at exit</span>
              <i>≥</i>
              <strong>fund size</strong>
            </div>
            <Fragment as="p" className="return-fund-note" animation="fade-up">
              Surviving is not enough. The winner must be able to become an outlier.
            </Fragment>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Do not say the financing schedule alone creates the power law. There are two interacting explanations: exceptional businesses can compound through networks, scalable software, brand, and market leadership; staged financing selects for evidence of that growth and allocates more capital to it. The defensible claim is a feedback loop between company mechanics and investor selection.`}
      >
        <SlideFrame number={17}>
          <div className="feedback-slide">
            <div className="feedback-heading">
              <h2>Growth mechanics and capital allocation reinforce one another.</h2>
            </div>
            <div className="feedback-loop" role="img" aria-label="A feedback loop between evidence of compounding growth, investor selection, more capital, and amplified company growth">
              <div><span>01</span><strong>Evidence of compounding growth</strong></div>
              <div><span>02</span><strong>Investor selection</strong></div>
              <div><span>03</span><strong>More capital</strong></div>
              <div><span>04</span><strong>Growth amplified</strong></div>
              <svg viewBox="0 0 900 120" aria-hidden="true">
                <path d="M 830 18 C 820 108 90 112 72 24" />
                <path d="M 72 24 l 9 17 l 13 -14" />
              </svg>
            </div>
            <p className="feedback-conclusion">Neither system acts alone.</p>
          </div>
        </SlideFrame>
      </Slide>
    </>
  )
}
