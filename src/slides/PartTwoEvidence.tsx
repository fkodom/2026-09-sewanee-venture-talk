import { Slide } from '@revealjs/react'

import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { DilutionSimulator } from '../components/deck/Visuals'
import { fundingLadder, fundingLadderSources } from '../data/funding-ladder'
import { compactDollars } from '../data/venture-models'
import { evidenceStages, illustrativeReturns, portfolioConcentration } from '../data/venture-data'

// Temporarily hidden from the talk. Set to true to restore the full slide.
const SHOW_DILUTION_SLIDE = false

const rankedCompanyReturns = illustrativeReturns.ranked
const perceivedCompanyReturns = illustrativeReturns.perceived

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
      <figcaption>Illustrative shape · cash returned</figcaption>
      <svg viewBox="0 0 780 440" role="img" aria-labelledby="ranked-return-title ranked-return-description">
        <title id="ranked-return-title">Illustrative venture returns by company rank</title>
        <desc id="ranked-return-description">Schematic bars show a few large outliers. The dashed comparison is flatter. Height is cash returned in common arbitrary units, not return multiples or measured data. The dotted fund line is an illustrative scale marker.</desc>
        <defs>
          <marker id="ranked-axis-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M 0 0 L 8 4 L 0 8" />
          </marker>
        </defs>

        {[1, 5, 10].map((tick) => (
          <g className="ranked-return-tick" key={tick}>
            <line x1={rankedChart.left} x2={rankedChart.left + rankedChart.width} y1={rankedY(tick)} y2={rankedY(tick)} />
            <text x={rankedChart.left - 14} y={rankedY(tick) + 5} textAnchor="end">{tick}</text>
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
          <line x1={rankedChart.left} x2={rankedChart.left + rankedChart.width} y1={rankedY(illustrativeReturns.fund)} y2={rankedY(illustrativeReturns.fund)} />
          <text x={rankedChart.left + rankedChart.width - 4} y={rankedY(illustrativeReturns.fund) - 9} textAnchor="end">the fund</text>
        </g>

        <text className="ranked-actual-label" x={rankedX(1) + 16} y={rankedY(7.2)}>outliers</text>
        <text className="ranked-perceived-label" x={rankedX(14)} y={rankedY(1.5)}>imagined</text>

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
        notes={`A financing round is usually sized to give the company enough time and capital to reach the evidence required for its next raise. Roughly two years between primary rounds is a useful planning cadence, not a deadline. A typical round may sell about 10–25% of the company, depending on stage, valuation, capital needs, and negotiating leverage. In Carta’s Q4 2025 U.S. primary-round sample, median dilution at seed and Series A was about 19–20%, with later-stage medians lower. Sources: Kevin Dowd, March 5, 2026, https://carta.com/data/record-setting-valuations/; Peter Walker, February 5, 2025, https://carta.com/data/newsletter-graduation-rate-from-seed-to-series-a/. Checked September 4, 2026. The displayed range and two-year runway are planning heuristics, not fixed terms or forecasts.`}
      >
        <SlideFrame>
          <div className="round-economics-slide">
            <h2>A round buys time.</h2>
            <div className="round-economics" aria-label="A typical venture round provides about two years to reach the next fundraise and sells roughly 10 to 25 percent of company equity">
              <article>
                <strong>≈ 2 years</strong>
                <span>planning runway</span>
              </article>
              <article>
                <strong>10–25%</strong>
                <span>equity sold</span>
              </article>
            </div>
            <SourceLine>Carta · 2025–26 reports · planning ranges, not fixed terms</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Each round buys growth and information. At pre-seed, quantitative evidence is often limited, so founders, insight, market structure, and a rough prototype carry more weight. As the company develops, update the prior with product use, customers, revenue, retention, acquisition, and scaling evidence. The useful sentence is: a funding round is a priced experiment designed to reach the next information milestone.`}
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
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Return to Game 3: fewer companies reach each successive level, while companies funded at later stages tend to command larger prices. The first row starts with a seed-funded cohort. Read each later row as a conditional chance of advancing from the preceding stage. Mattermark’s ${fundingLadderSources.graduation.cohort} U.S. software seed cohort had 32%, 21%, 12.3%, and 5% reach A, B, C, and D by September 2016. Divide adjacent cumulative percentages: 32%, about 66%, 59%, and 41%. These ratios are calculated from rounded source data, not reported probabilities with that precision. The prices are separate ${fundingLadderSources.valuation.period} Carta medians, primary and bridge rounds combined, rounded to two significant figures. They show the price scale at each stage; dividing medians does not measure the same company’s growth or an investor’s return. This comparison motivates the staged-elimination and multiplicative-payoff analogy, not a fitted power law. No next round can mean failure, acquisition, self-sufficiency, or a longer wait. There is no pre-seed-to-seed observation in this cohort. Sources: ${fundingLadderSources.graduation.url}; ${fundingLadderSources.valuation.url}. Checked ${fundingLadderSources.checked}. Next, look at how concentrated venture portfolio outcomes can be.`}
      >
        <SlideFrame>
          <div className="funding-table-slide">
            <h2>The funding ladder</h2>
            <table className="funding-table">
              <caption className="sr-only">Historical conditional graduation rates and separate median company valuations by funding stage</caption>
              <thead>
                <tr><th scope="col">Stage / transition</th><th scope="col">Advance¹</th><th scope="col">Next valuation²</th></tr>
              </thead>
              <tbody>
                {fundingLadder.map((row) => (
                  <tr key={row.stage} className={row.stage === 'Series A' ? 'funding-table-bottleneck' : undefined}>
                    <th scope="row">{row.transition}</th>
                    <td>{row.advance === null ? 'start' : `≈ ${Math.round(row.advance * 100)}%`}</td>
                    <td>≈ {compactDollars(row.roundedValuation)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <SourceLine>
              <a href={fundingLadderSources.graduation.url}>¹ Mattermark · {fundingLadderSources.graduation.cohort} seed cohort, observed {fundingLadderSources.graduation.observed.slice(0, 4)}</a><br />
              <a href={fundingLadderSources.valuation.url}>² Carta · {fundingLadderSources.valuation.period} median pre-money · separate companies</a>
            </SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now test the model against observed venture portfolios. In Paul Graham’s 2012 snapshot, Airbnb and Dropbox represented roughly three-quarters of YC portfolio value at that time. Chris Dixon’s June 8, 2015 report of Horsley Bridge data states that about 4.5% of invested dollars generated about 60% of total returns. This is historical pooled data from hundreds of funds invested in since 1985, not all venture funds or a current forecast. Sources: https://paulgraham.com/swan.html and https://a16z.com/performance-data-and-the-babe-ruth-effect-in-venture-capital/. Checked September 4, 2026. The ranked bars are illustrative, not a reconstructed dataset. They contrast a steep illustrative shape with the flatter distribution people often imagine. The vertical units are common arbitrary dollar units, not multiples of each check. Concentration alone does not establish an exact power-law exponent. The dotted fund-size line sits just below the second-ranked company.`}
      >
        <SlideFrame>
          <div className="returns-slide">
            <div className="returns-copy">
              <h2>Power laws</h2>
              <ul className="deck-bullets return-observations">
                <li><strong>{portfolioConcentration.ycValueFraction}</strong> of YC portfolio value in Airbnb + Dropbox<small>{portfolioConcentration.ycYear} snapshot</small></li>
                <li><strong>{portfolioConcentration.horsleyCapitalPercent}%</strong> of capital generated {portfolioConcentration.horsleyReturnPercent}% of returns<small>Horsley Bridge · reported 2015</small></li>
              </ul>
            </div>
            <PowerLawPortfolioChart />
            <SourceLine><a href={portfolioConcentration.ycSource}>Paul Graham (2012)</a>; <a href={portfolioConcentration.horsleySource}>Chris Dixon / Horsley Bridge (2015)</a>; chart after Peter Thiel</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      {SHOW_DILUTION_SLIDE && (
        <Slide
          backgroundColor="#f6eddb"
          className="deck-slide"
          notes={`Use this as a live cap-table experiment. Each new round issues shares equal to 20% of the post-money company. With pro rata on, that pool is shared between existing and new investors: 25 new shares for every 100 shares already outstanding. The simplified portfolio analogy separately assumes 50% survival; that assumption does not determine company round sizes. Here we choose 3× growth in round sizes: $1M, $3M, $9M, then $27M. Cumulative funding is therefore $1M, $4M, $13M, then $40M. Step through with pro rata off first. The Round 1 investor puts in $1M and falls from 20% to 16%, then 12.8%, and 10.2%. Turn pro rata on to show that investor buying 20% of each later round: total invested reaches $8.8M by round four while ownership stays at 20%. The valuation row is the current round's raise divided by 20%; the equity-value row applies the active ownership to that post-money valuation. This is a simplified priced-equity cap table, excluding option pools, preferences, convertible securities and fees. Value at a financing price is a paper mark, not cash proceeds. Pro rata preserves ownership by committing more capital; it is not a free protection. Fallback: round four is $135M post-money and $40M total funding. The first investor holds 10.24% worth $13.824M on $1M invested without follow-on, or 20% worth $27M on $8.8M invested with follow-on. Keep technical deal mechanics for questions.`}
        >
          <SlideFrame>
            <div className="dilution-slide">
              <h2>Dilution</h2>
              <DilutionSimulator />
            </div>
          </SlideFrame>
        </Slide>
      )}

    </>
  )
}
