import { Fragment, Slide } from '@revealjs/react'

import { SlideFrame } from '../components/deck/SlideFrame'

export function PartFiveConclusion() {
  return (
    <>
      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Use the hypothetical sports-data company from the exercise. A 5% probability of a $500M successful outcome gives $25M of expected terminal value in a simplified two-outcome model. It is not automatically a fair present valuation. Time, dilution, future capital, other outcomes, risk, required return, rights, and terms still matter. A possible $2M at $10M post-money offer is an example of the reasoning, not a recommended price.`}
      >
        <SlideFrame number={27}>
          <div className="valuation-slide">
            <div className="valuation-heading">
              <h2>Expected terminal value is a starting point.</h2>
            </div>
            <div className="valuation-equation" aria-label="Five percent times 500 million dollars equals 25 million dollars">
              <div><span>probability</span><strong>5%</strong></div>
              <i>×</i>
              <div><span>possible exit</span><strong>$500M</strong></div>
              <i>=</i>
              <div className="valuation-result"><span>expected terminal value</span><strong>$25M</strong></div>
            </div>
            <Fragment as="div" className="valuation-present" animation="fade-up">
              <p>$25M is not today’s valuation.</p>
              <span>time</span><span>dilution</span><span>future capital</span><span>other outcomes</span><span>risk</span><span>terms</span>
            </Fragment>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Founders and investors negotiate competitively, but both need the company to reach the next round and ultimately succeed. Too little capital misses the milestone; too much can encourage premature scaling. Too low a valuation costs founders too much ownership; too high a valuation can make the next round implausible. The workable region satisfies both sides over time.`}
      >
        <SlideFrame number={28}>
          <div className="alignment-slide">
            <div className="alignment-heading">
              <h2>The useful deal leaves room for both sides to win.</h2>
            </div>
            <div className="failure-modes">
              <span><strong>Too little capital</strong>miss the milestone</span>
              <span><strong>Too much capital</strong>scale too early</span>
              <span><strong>Too low</strong>give up too much</span>
              <span><strong>Too high</strong>make the next round brittle</span>
            </div>
            <div className="range-diagram" role="img" aria-label="The founder and investor acceptable ranges overlap in a mutually workable region">
              <div className="founder-range"><span>founder range</span></div>
              <div className="investor-range"><span>investor range</span></div>
              <Fragment as="div" className="workable-range" animation="fade-in"><span>workable</span></Fragment>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark conclusion-slide"
        notes={`Return to the human lesson. Mathematics can identify the economics a company would need to return a fund. It cannot identify the problem a founder will care enough to spend a decade solving. The career story was shaped less by the most practical subject than by work that could sustain obsession. End with the conjunction: venture-scale economics and durable motivation. Pause before questions.`}
      >
        <SlideFrame number={29} dark>
          <div className="conclusion-content">
            <h2>
              Mathematics can tell us what kind of company could return a fund.
              <span>It cannot tell us which problem is worth a decade of a founder’s life.</span>
            </h2>
            <div className="closing-pair">
              <div><span>01</span><strong>Value that can compound</strong></div>
              <i>+</i>
              <div><span>02</span><strong>Motivation that can endure</strong></div>
            </div>
          </div>
        </SlideFrame>
      </Slide>
    </>
  )
}
