import { Fragment, Slide } from '@revealjs/react'

import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { careerSteps, evidenceStages } from '../data/venture-data'

export function PartThreeImplications() {
  return (
    <>
      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Only now introduce the personal story. The path depended on timing, luck, and the 2017 deep-learning inflection. Keep the twins, move from California, and laser-versus-software decision brief. The consequential choice was machine-learning software over a highly specialized laser-lethality role: it preserved optionality and opened a subject that rewarded sustained obsession.`}
      >
        <SlideFrame number={18}>
          <div className="career-slide">
            <div className="career-heading">
              <h2>Choose the path that leaves more paths open.</h2>
            </div>
            <ol className="career-timeline">
              {careerSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </li>
              ))}
            </ol>
            <p className="career-callout">The software path preserved optionality.</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`The role now combines two views of the same uncertainty. Traditional investment work starts with a company presented to the team. Incubation starts with an idea or market conviction and builds toward a company. This is why the rest of the talk can move between the investor’s and builder’s perspectives.`}
      >
        <SlideFrame number={19} dark>
          <div className="two-sides-slide">
            <h2>Evaluate companies.<br /><span>Build them.</span></h2>
            <div className="two-sides-grid">
              <article>
                <p>Investment</p>
                <ul>
                  <li>Meet founders and technical leaders</li>
                  <li>Assess product, engineering, and risk</li>
                  <li>Form a view with incomplete information</li>
                </ul>
              </article>
              <article>
                <p>Incubation</p>
                <ul>
                  <li>Start with an idea or market conviction</li>
                  <li>Recruit, build, and find partner customers</li>
                  <li>Support the first stage of a company</li>
                </ul>
              </article>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Do not imply that venture-backed businesses are better businesses. The financing must fit the growth mechanics. A local service business can be excellent and still be best financed by cash flow or loans. A private-equity acquisition uses acquisition capital and debt. Venture equity fits products whose value can grow much faster than headcount. Attribute the jet-fuel analogy cautiously to Josh Kopelman / First Round.`}
      >
        <SlideFrame number={20}>
          <div className="financing-fit-slide">
            <h2>Match the capital to the engine.</h2>
            <div className="financing-lanes">
              <article>
                <span>local service</span>
                <strong>More locations, equipment, people</strong>
                <p>Cash flow + loans</p>
              </article>
              <article>
                <span>acquisition</span>
                <strong>Buy and improve an operating business</strong>
                <p>Acquisition capital + debt</p>
              </article>
              <article className="financing-lane-venture">
                <span>venture startup</span>
                <strong>Value scales faster than headcount</strong>
                <p>Equity capital</p>
              </article>
            </div>
            <div className="jet-fuel-callout"><strong>Venture capital is jet fuel.</strong><span>A motorcycle can be excellent without being able to use it.</span></div>
            <SourceLine>Analogy commonly attributed to Josh Kopelman, First Round Capital</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Derive market-size pressure from fund math. A $100M fund with 10% ownership receives $100M from a $1B exit: only one fund. Returning five funds from one company requires about a $5B exit. This is a Fermi estimate, not a fund model. Real ownership varies; dilution, follow-on capital, and returns from other companies matter.`}
      >
        <SlideFrame number={21}>
          <div className="fund-size-slide">
            <div className="fund-size-copy">
              <h2>The portfolio sets the scale of the opportunity.</h2>
              <p>Assume a $100M fund retains 10% at exit.</p>
            </div>
            <div className="fund-size-equations">
              <div>
                <span>return 1 fund</span>
                <strong>10% × $1B = $100M</strong>
              </div>
              <Fragment as="div" className="fund-size-outlier" animation="fade-up">
                <span>return 5 funds</span>
                <strong>10% × $5B = $500M</strong>
              </Fragment>
            </div>
            <p className="model-caveat">Ownership and dilution vary. This is a scale check, not a full fund model.</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Each round buys growth and information. At pre-seed, quantitative evidence cannot yet exist, so founders, insight, market structure, and a rough prototype carry more weight. As the company develops, update the prior with product use, customers, revenue, retention, acquisition, and scaling evidence. The useful sentence is: a funding round is a priced experiment designed to reach the next information milestone.`}
      >
        <SlideFrame number={22}>
          <div className="bayesian-slide">
            <div className="bayesian-heading">
              <h2>Each round buys growth—and information.</h2>
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
    </>
  )
}
