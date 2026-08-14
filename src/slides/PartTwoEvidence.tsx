import { Slide } from '@revealjs/react'
import { useEffect, useRef } from 'react'

import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { DilutionSimulator } from '../components/deck/Visuals'
import { evidenceStages, fundingStages } from '../data/venture-data'

const rankedCompanyReturns = [12, 4.6, 2.7, 1.8, 1.35, 1.05, 0.82, 0.65, 0.52, 0.43, 0.36, 0.3, 0.25, 0.21, 0.18, 0.15, 0.12, 0.09, 0.06, 0.03]
const perceivedCompanyReturns = [3.4, 3, 2.65, 2.35, 2.05, 1.8, 1.58, 1.4, 1.25, 1.14, 1.06, 1, 0.96, 0.93, 0.91, 0.9, 0.91, 0.93, 0.96, 1]

const rankedChart = {
  left: 64,
  top: 24,
  width: 680,
  height: 334,
  maxReturn: 12.5,
}

function rankedX(index: number) {
  return rankedChart.left + ((index + 0.5) / rankedCompanyReturns.length) * rankedChart.width
}

function rankedY(value: number) {
  return rankedChart.top + rankedChart.height - (value / rankedChart.maxReturn) * rankedChart.height
}

function PowerLawPortfolioChart() {
  const perceivedPath = perceivedCompanyReturns
    .map((value, index) => `${index === 0 ? 'M' : 'L'} ${rankedX(index)} ${rankedY(value)}`)
    .join(' ')

  return (
    <figure className="power-law-portfolio-chart">
      <svg viewBox="0 0 780 440" role="img" aria-labelledby="ranked-return-title ranked-return-description">
        <title id="ranked-return-title">Actual and perceived venture returns by company rank</title>
        <desc id="ranked-return-description">Actual company returns fall steeply from a few outliers, while the perceived distribution is flatter. A dotted fund-size line sits just below the second-ranked company.</desc>
        <defs>
          <marker id="ranked-axis-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 8 4 L 0 8" />
          </marker>
        </defs>

        {[1, 5, 10].map((tick) => (
          <g className="ranked-return-tick" key={tick}>
            <line x1={rankedChart.left} x2={rankedChart.left + rankedChart.width} y1={rankedY(tick)} y2={rankedY(tick)} />
            <text x={rankedChart.left - 14} y={rankedY(tick) + 5} textAnchor="end">{tick}×</text>
          </g>
        ))}

        <line
          className="ranked-return-axis"
          x1={rankedChart.left}
          x2={rankedChart.left}
          y1={rankedChart.top + rankedChart.height}
          y2={rankedChart.top}
          markerEnd="url(#ranked-axis-arrow)"
        />
        <line
          className="ranked-return-axis"
          x1={rankedChart.left}
          x2={rankedChart.left + rankedChart.width}
          y1={rankedChart.top + rankedChart.height}
          y2={rankedChart.top + rankedChart.height}
          markerEnd="url(#ranked-axis-arrow)"
        />

        {rankedCompanyReturns.map((value, index) => {
          const barWidth = 18
          const x = rankedX(index) - barWidth / 2
          const y = rankedY(value)
          return (
            <rect
              className={index < 2 ? 'ranked-return-bar ranked-return-bar-outlier' : 'ranked-return-bar'}
              key={`${value}-${index}`}
              x={x}
              y={y}
              width={barWidth}
              height={rankedChart.top + rankedChart.height - y}
            />
          )
        })}

        <path className="perceived-return-line" d={perceivedPath} />

        <g className="ranked-fund-threshold">
          <line x1={rankedChart.left} x2={rankedChart.left + rankedChart.width} y1={rankedY(4.5)} y2={rankedY(4.5)} />
          <text x={rankedChart.left + rankedChart.width - 4} y={rankedY(4.5) - 9} textAnchor="end">the fund</text>
        </g>

        <text className="ranked-actual-label" x={rankedX(1) + 16} y={rankedY(7.2)}>actual</text>
        <text className="ranked-perceived-label" x={rankedX(14)} y={rankedY(1.5)}>perceived</text>

        {[0, 4, 9, 19].map((index) => (
          <text className="ranked-company-tick" key={index} x={rankedX(index)} y={rankedChart.top + rankedChart.height + 28} textAnchor="middle">
            {index + 1}
          </text>
        ))}
        <text className="ranked-company-axis-title" x={rankedChart.left + rankedChart.width / 2} y="428" textAnchor="middle">company rank</text>
      </svg>
    </figure>
  )
}

type TwitterWidgets = {
  createTweet: (
    tweetId: string,
    target: HTMLElement,
    options: {
      align: 'center'
      cards: 'hidden'
      conversation: 'none'
      dnt: boolean
      theme: 'light'
    },
  ) => Promise<HTMLElement | undefined>
}

declare global {
  interface Window {
    twttr?: { widgets: TwitterWidgets }
  }
}

function TweetEmbed() {
  const targetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const target = targetRef.current
    if (!target) return

    let cancelled = false

    const renderTweet = async () => {
      if (cancelled || !window.twttr?.widgets) return
      target.replaceChildren()
      await window.twttr.widgets.createTweet('1083755402037219334', target, {
        align: 'center',
        cards: 'hidden',
        conversation: 'none',
        dnt: true,
        theme: 'light',
      })
    }

    let script = document.getElementById('twitter-wjs') as HTMLScriptElement | null
    if (window.twttr?.widgets) {
      void renderTweet()
    } else {
      if (!script) {
        script = document.createElement('script')
        script.id = 'twitter-wjs'
        script.src = 'https://platform.twitter.com/widgets.js'
        script.async = true
        document.body.appendChild(script)
      }
      script.addEventListener('load', renderTweet)
    }

    return () => {
      cancelled = true
      script?.removeEventListener('load', renderTweet)
    }
  }, [])

  return <div className="tweet-embed-target" ref={targetRef} />
}

export function PartTwoEvidence() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`Pause on the question. Venture investing is a financing transaction before it is a portfolio abstraction.`}
      >
        <SlideFrame dark>
          <div className="venture-investment-title">
            <h2>What's in a venture investment?</h2>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`A venture investment exchanges capital for newly issued equity in the company. The investor's ownership is the investment divided by the post-money valuation, so the same relationship can be rearranged to solve for post-money valuation. For example, a $2 million investment for 20% implies a $10 million post-money valuation. Keep the explanation to the transaction and the equation.`}
      >
        <SlideFrame>
          <div className="venture-investment-slide">
            <h2>Capital for equity</h2>
            <div className="venture-exchange" aria-label="Capital is exchanged for equity in the company">
              <strong>capital</strong>
              <span aria-hidden="true">⇄</span>
              <strong>company equity</strong>
            </div>
            <div className="post-money-equation" aria-label="Post-money valuation equals investment divided by ownership acquired">
              <strong>post-money valuation</strong>
              <i>=</i>
              <span className="equation-fraction" aria-hidden="true">
                <span>investment</span>
                <span>ownership acquired</span>
              </span>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Map the mathematical game to financing stages. A company raises capital, uses it to build and learn, and must produce enough evidence to advance or become self-sustaining. If it advances, valuation can multiply; if it cannot, the game often ends. Companies are not literal independent coin flips: founders have agency, investors learn, markets change, and outcomes are correlated. The analogy is structural.`}
      >
        <SlideFrame>
          <div className="venture-flip-slide">
            <div>
              <h2>Advance or stop.</h2>
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
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`A financing round is usually sized to give the company enough time and capital to reach the evidence required for its next raise. Roughly two years between primary rounds is a useful planning cadence, not a deadline. A typical round may sell about 10–25% of the company, depending on stage, valuation, capital needs, and negotiating leverage. Carta's medians sit near 20% at seed and Series A in its 2024 analysis, with lower dilution at later stages.`}
      >
        <SlideFrame>
          <div className="round-economics-slide">
            <h2>A round buys time.</h2>
            <div className="round-economics" aria-label="A typical venture round provides about two years to reach the next fundraise and sells roughly 10 to 25 percent of company equity">
              <article>
                <strong>≈ 2 years</strong>
                <span>to the next round</span>
              </article>
              <article>
                <strong>10–25%</strong>
                <span>equity sold</span>
              </article>
              <article>
                <strong>capital</strong>
                <span>to reach the next fundraise</span>
              </article>
            </div>
            <SourceLine>Carta · fundraising cadence and dilution benchmarks</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Each round buys growth and information. At pre-seed, quantitative evidence cannot yet exist, so founders, insight, market structure, and a rough prototype carry more weight. As the company develops, update the prior with product use, customers, revenue, retention, acquisition, and scaling evidence. The useful sentence is: a funding round is a priced experiment designed to reach the next information milestone.`}
      >
        <SlideFrame>
          <div className="bayesian-slide">
            <div className="bayesian-heading">
              <h2>A round buys information.</h2>
            </div>
            <div className="evidence-ladder">
              {evidenceStages.map((item, index) => (
                <article key={item.stage}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{item.stage}</h3>
                  <p>{item.evidence}</p>
                </article>
              ))}
            </div>
            <blockquote>A funding round is a priced experiment.</blockquote>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`These figures come from the sources cited in “On Power Laws”: PitchBook–NVCA and CB Insights for round sizes and valuations, and Carta for graduation rates. Definitions, cohort ages, and market windows vary. The seed-to-Series-A transition is the clearest bottleneck in this set and pairs a low graduation rate with a large valuation jump.`}
      >
        <SlideFrame>
          <div className="funding-table-slide">
            <div className="slide-heading-row">
              <div>
                <h2>The funding ladder</h2>
              </div>
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
            <SourceLine>PitchBook–NVCA Venture Monitor; CB Insights, State of Venture; Carta, State of Private Markets</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now test the model against observed venture portfolios. In Paul Graham’s 2012 snapshot, Airbnb and Dropbox represented roughly three-quarters of YC portfolio value at that time. Horsley Bridge reported that about 5% of capital deployed from 1985–2014 generated half of returns. The ranked bars are illustrative, not a reconstructed dataset. They contrast the steep actual shape of a power-law portfolio with the flatter distribution people often imagine. The dotted fund-size line sits just below the second-ranked company.`}
      >
        <SlideFrame>
          <div className="returns-slide">
            <div className="returns-copy">
              <h2>Power laws</h2>
              <ul className="deck-bullets return-observations">
                <li><strong>≈ ¾</strong> of YC portfolio value in Airbnb + Dropbox<small>2012 snapshot</small></li>
                <li><strong>5%</strong> of capital generated half of returns<small>1985–2014</small></li>
              </ul>
            </div>
            <PowerLawPortfolioChart />
            <SourceLine>Peter Thiel, “Zero to One”; Paul Graham, “Black Swan Farming” (2012); Horsley Bridge</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Use this as a live cap-table experiment. Each new round issues enough shares that the latest round owns 20% of the post-money company: 25 new shares for every 100 shares already outstanding. Assume 50% of companies survive each round, so the individual round sizes grow by 3×: $1M, $3M, $9M, then $27M. Cumulative funding is therefore $1M, $4M, $13M, then $40M. Step through with pro rata off first. The Round 1 investor puts in $1M and falls from 20% to 16%, then 12.8%, and 10.2%. Turn pro rata on to show that investor buying 20% of each later round: total invested reaches $8.8M by round four while ownership stays at 20%. The valuation row is the current round's raise divided by 20%; the equity-value row applies the active ownership to that post-money valuation. This is the mechanism behind later discussions of pro rata rights, valuations, and SAFEs; keep those terms in the spoken explanation rather than adding them to the slide.`}
      >
        <SlideFrame>
          <div className="dilution-slide">
            <h2>Dilution</h2>
            <DilutionSimulator />
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Josh Kopelman's analogy distinguishes businesses by the kind of capital their growth mechanics can use. Venture capital is designed for the rare company that can turn aggressive reinvestment into exceptional scale. It can damage a sound but non-venture business by imposing the wrong growth expectations. The embedded post is the original January 11, 2019 tweet and requires a network connection to load from X.`}
      >
        <SlideFrame>
          <div className="financing-fit-slide">
            <div className="tweet-embed-shell">
              <TweetEmbed />
            </div>
          </div>
        </SlideFrame>
      </Slide>

    </>
  )
}
