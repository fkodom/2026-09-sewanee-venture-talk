import { Slide } from '@revealjs/react'

import { SlideFrame } from '../components/deck/SlideFrame'

export function PartThreeImplications() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`The role now combines two views of the same uncertainty. Traditional investment work starts with a company presented to the team. Incubation starts with an idea or market conviction and builds toward a company. This is why the rest of the talk can move between the investor’s and builder’s perspectives.`}
      >
        <SlideFrame dark>
          <div className="two-sides-slide">
            <h2>Buy vs. build</h2>
            <div className="two-sides-grid">
              <article>
                <p>Investment</p>
                <ul className="deck-bullets">
                  <li>Meet founders</li>
                  <li>Assess product + execution risk</li>
                  <li>Decide whether to invest</li>
                </ul>
              </article>
              <article>
                <p>Incubation</p>
                <ul className="deck-bullets">
                  <li>Test an idea</li>
                  <li>Recruit a team + build</li>
                  <li>Find the first customers</li>
                </ul>
              </article>
            </div>
          </div>
        </SlideFrame>
      </Slide>

    </>
  )
}
