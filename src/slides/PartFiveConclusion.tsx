import { Slide } from '@revealjs/react'

import { MarketSizingCalculator } from '../components/deck/Visuals'
import { SlideFrame } from '../components/deck/SlideFrame'

export function PartFiveConclusion() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`Open the valuation section with the question founders actually face before they have revenue, customers, or sometimes even a product. Comparable rounds and founder profiles are the obvious market answer. For the math audience, derive a rough answer instead from the amount of capital the company needs and the ownership it can afford to sell.`}
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
        notes={`Start with the job of the round: buy enough time to reach the next fundraise. Use an intentionally rough pre-product budget: the founder plus two or three employees for 12 to 18 months, computers, hosting, third-party software, and workspace if needed. Assume no revenue offsets the burn. In this example, that points to roughly $500,000. The number is illustrative, not a current market benchmark.`}
      >
        <SlideFrame>
          <div className="round-budget-slide">
            <h2>Start with runway.</h2>
            <div className="round-budget-grid">
              <article>
                <strong>you + 2–3</strong>
                <span>people</span>
              </article>
              <article>
                <strong>12–18 months</strong>
                <span>runway</span>
              </article>
              <article className="round-budget-operations">
                <strong>computers, hosting, software, space</strong>
                <span>operations</span>
              </article>
              <article>
                <strong>$0</strong>
                <span>revenue</span>
              </article>
            </div>
            <div className="round-budget-total">
              <span>cash needed</span>
              <strong>≈ $500k</strong>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now reuse the post-money equation from earlier. If the company needs at least $500,000 and sells about 20% of its equity, the implied post-money valuation is at least $2.5 million. A higher valuation lets the founder sell less ownership or raise more cash. The company cannot take materially less cash without shortening the experiment, and giving up much more equity makes later dilution harder. This is a financing constraint, not an assertion that every pre-seed company is worth $2.5 million.`}
      >
        <SlideFrame>
          <div className="valuation-floor-slide">
            <h2>The valuation floor.</h2>
            <div className="valuation-floor-equation" aria-label="Five hundred thousand dollars divided by twenty percent equals a two point five million dollar post-money valuation">
              <span className="valuation-floor-fraction" aria-hidden="true">
                <span>$500k</span>
                <span>20%</span>
              </span>
              <i>=</i>
              <span className="valuation-floor-result">
                <strong>$2.5M</strong>
                <small>post-money</small>
              </span>
            </div>
            <div className="valuation-floor-bounds">
              <p>cash raised <strong>≥ $500k</strong></p>
              <p>ownership sold <strong>≈ 20%</strong></p>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Comparable startups and similar founder profiles provide the practical market check, but the investment decision still reduces to two beliefs. The market needs a credible path to enough scale, and the founder needs a convincing case that this team can reach it. The next slide puts numbers on the market claim. If both beliefs hold, a venture investor might fund the $500,000 round at the implied valuation. Keep the word “might”: this model does not guarantee a term sheet.`}
      >
        <SlideFrame>
          <div className="vc-belief-slide">
            <h2>Will VCs believe it?</h2>
            <div className="vc-belief-equation" aria-label="A market capable of at least twenty-five million dollars per year plus founder conviction may lead to a five hundred thousand dollar investment">
              <div>
                <span>market</span>
                <strong>$25M+ / year</strong>
              </div>
              <i>+</i>
              <div>
                <span>conviction</span>
                <strong>you can build it</strong>
              </div>
              <i>=</i>
              <div className="vc-belief-result">
                <span>maybe</span>
                <strong>$500k</strong>
              </div>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now put numbers on the market claim. Start bottom-up: customers multiplied by average annual contract value. At $10,000 per year, 2,500 customers produce $25 million in annual revenue. The calculator marks results below $25 million in red, results from $25 million to under $50 million in black, and results at $50 million or more in green. Test the assumptions: would a lower price unlock substantially more customers, would a subset pay for a premium product, or could the company expand into adjacent markets? The model is simple; choosing credible inputs is not. Twenty-five million dollars is an illustrative target for this example, not a universal venture threshold.`}
      >
        <SlideFrame>
          <div className="market-size-slide">
            <h2>Market size.</h2>
            <MarketSizingCalculator />
            <div className="market-equivalents" aria-label="Three combinations of customers and annual contract value that each produce twenty-five million dollars per year">
              <span><strong>$2k</strong> × 12,500</span>
              <span><strong>$10k</strong> × 2,500</span>
              <span><strong>$50k</strong> × 500</span>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark conclusion-slide"
        notes={`Return to the opening claim. Pause after the first line, then land on the second. Leave the slide spare and pause before questions.`}
      >
        <SlideFrame dark>
          <div className="conclusion-content">
            <h2>
              Most startups fail.
              <span>Most are still worthwhile.</span>
            </h2>
          </div>
        </SlideFrame>
      </Slide>
    </>
  )
}
