import { Slide } from '@revealjs/react'

import { SlideFrame } from '../components/deck/SlideFrame'
import { valuationExample } from '../data/venture-data'
import { compactDollars } from '../data/venture-models'

const cash = compactDollars(valuationExample.cashNeeded)
const ownership = `${valuationExample.ownershipSold * 100}%`
const postMoney = compactDollars(valuationExample.cashNeeded / valuationExample.ownershipSold)

export function PartFiveConclusion() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`Allow about four minutes for this section. These are illustrative financing assumptions for a first experiment. The company may have no revenue, customers, or working product. Comparable financings and founder profiles help establish a market price, but start with a simpler question: how much cash does the next experiment need?`}
      >
        <SlideFrame dark>
          <div className="idea-worth-slide">
            <h2>How much is an idea worth?</h2>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Allow 45 seconds. Use the plan’s pre-product budget: founder plus two or three employees, ${valuationExample.runwayMonths.join('–')} months, computers, hosting, software and workspace if needed. With no revenue, assume ${cash} buys this experiment, about $28k–$42k per month. This is illustrative; costs depend on the location, product and milestone. Name the evidence the round should buy, such as repeat use or willingness to pay.`}
      >
        <SlideFrame>
          <div className="round-budget-slide">
            <h2>Start with runway.</h2>
            <div className="runway-budget">
              <ul className="deck-bullets round-budget-inputs">
                <li>you + 2–3 employees</li>
                <li>{valuationExample.runwayMonths.join('–')} months</li>
                <li>computers, hosting, software</li>
                <li>no revenue yet</li>
              </ul>
              <div className="runway-cash">
                <strong>≈ {cash}</strong>
                <span>cash needed</span>
              </div>
            </div>
            <p className="example-qualification">Illustrative pre-product budget</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Allow 60 seconds. Reuse the capital-for-equity equation: ${cash} for ${ownership} gives ${postMoney} post-money, or $2M pre-money. Needing at least ${cash} and selling at most ${ownership} sets a minimum price for this financing plan. It does not establish intrinsic value. An investor can decline, and the budget or dilution limit may need to change. A higher valuation reduces dilution for the same raise but raises expectations for the next round. These are the plan’s linked assumptions, not market benchmarks.`}
      >
        <SlideFrame>
          <div className="valuation-floor-slide">
            <h2>The valuation floor.</h2>
            <div className="valuation-floor-equation" role="math" aria-label={`${cash} divided by ${ownership} equals ${postMoney} post-money`}>
              <span className="valuation-floor-fraction" aria-hidden="true">
                <span>{cash}</span>
                <span>{ownership}</span>
              </span>
              <i aria-hidden="true">=</i>
              <span className="valuation-floor-result" aria-hidden="true">
                <strong>{postMoney}</strong>
                <small>post-money</small>
              </span>
            </div>
            <div className="valuation-floor-bounds">
              <p>cash needed <strong>≥ {cash}</strong></p>
              <p>ownership sold <strong>≤ {ownership}</strong></p>
            </div>
            <p className="example-qualification">For this financing plan.</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Allow 45 seconds. Follow the three points: big enough market, you can build it, ${cash}. An investor needs evidence for both beliefs: a market with room to grow and a team that can reach it. Big enough depends on the potential return, price and capital required; there is no fixed market-size threshold here. The earlier tail argument still applies: eventual upside must justify the price and dilution. If the evidence is convincing, an investor might fund the illustrative ${cash} round. Say “might”; the line does not promise an investment. Market spending, company revenue and valuation are different quantities. Return to the opening claim on the next slide.`}
      >
        <SlideFrame>
          <div className="vc-belief-slide">
            <h2>Will VCs believe it?</h2>
            <ol className="stage-track vc-belief-track" aria-label={`A big enough market and conviction that you can build it might support an illustrative ${cash} investment`}>
              <li className="stage-stop">
                <strong>big enough market</strong>
              </li>
              <li className="stage-stop">
                <strong>you can build it</strong>
              </li>
              <li className="stage-stop">
                <strong>{cash}</strong>
              </li>
            </ol>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark conclusion-slide"
        notes={`Allow 30–45 seconds. Return to the opening sentence and pause. A few enormous outcomes can make the portfolio rational despite many losses. Then read the second line: this is the speaker’s judgment about worthwhile attempts, not a return statistic or a claim that failure has no cost. Leave the slide on screen and take questions.`}
      >
        <SlideFrame dark>
          <div className="conclusion-content">
            <h2>
              Most startups fail.
              <span>Most are worthwhile.</span>
            </h2>
          </div>
        </SlideFrame>
      </Slide>
    </>
  )
}
