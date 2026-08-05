import { Slide } from '@revealjs/react'

import { CountdownTimer, FermiCalculator } from '../components/deck/Visuals'
import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { airbnbWedges, discoveryQuestions } from '../data/venture-data'

export function PartFourDiscovery() {
  return (
    <>
      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Use Airbnb only as a familiar illustration of a narrow wedge expanding outward. The first product does not need to serve the eventual market. The objective is not to build today’s Airbnb on day one; it is to win the smallest useful market well enough to earn expansion.`}
      >
        <SlideFrame number={23}>
          <div className="wedge-slide">
            <div className="wedge-heading">
              <h2>Win a narrow market. Then expand.</h2>
            </div>
            <div className="wedge-path" role="img" aria-label="Airbnb expanding from air mattresses for conference visitors to a global lodging marketplace">
              {airbnbWedges.map((wedge, index) => (
                <div className={`wedge-step wedge-step-${index + 1}`} key={wedge}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{wedge}</strong>
                </div>
              ))}
            </div>
            <p className="wedge-note">The first product is a wedge, not the final market.</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Introduce the core lesson from The Mom Test: avoid asking people to predict whether they would use an imagined product. Ask for concrete past behavior. Strong evidence includes recurring pain, an existing workaround, measurable cost, prior payment, and identifiable peers with the same problem.`}
      >
        <SlideFrame number={24}>
          <div className="mom-test-slide">
            <div className="mom-test-heading">
              <h2>Past behavior beats future promises.</h2>
            </div>
            <div className="mom-test-grid">
              <ol>
                {discoveryQuestions.map((question, index) => (
                  <li key={question}><span>{String(index + 1).padStart(2, '0')}</span>{question}</li>
                ))}
              </ol>
              <div className="evidence-signals">
                <p>Listen for</p>
                <span>repetition</span>
                <span>a workaround</span>
                <span>time or money spent</span>
                <span>other reachable customers</span>
              </div>
            </div>
            <SourceLine>Rob Fitzpatrick, <em>The Mom Test</em></SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark live-slide"
        notes={`LIVE EXERCISE. Use the prepared volunteer and agreed sports-betting or sports-analytics domain. Consent is established in advance, but answers are not planted. Start the seven-minute timer. Keep asking about a concrete recent event, workaround, frequency, cost, and other customers. Rescue path: a sports-data user repeatedly copying data between a paid source and a custom model, then checking stale lines by hand. It is valid to conclude that no good startup opportunity is present. The exercise demonstrates belief updating, not performance. If the timer fails, use a phone timer and continue.`}
      >
        <SlideFrame number={25} dark>
          <div className="live-discovery-slide">
            <div className="live-header">
              <div>
                <h2>Follow the evidence.</h2>
              </div>
              <CountdownTimer />
            </div>
            <div className="live-body">
              <ol>
                {discoveryQuestions.slice(0, 5).map((question, index) => (
                  <li key={question}><span>{index + 1}</span>{question}</li>
                ))}
              </ol>
              <div className="valid-results">
                <p>Valid conclusions</p>
                <strong>keep investigating</strong>
                <strong>good business, not venture-scale</strong>
                <strong>no useful opportunity yet</strong>
              </div>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Use live estimates from the interview. Start bottom-up: reachable customers multiplied by annual spending per customer. Challenge frequency, current workaround cost, the subset an initial product can serve, and adjacent customers. A painful problem can still produce a good non-venture business. The calculation tests scale; it does not manufacture certainty. The fields start blank so the deck does not invent an estimate.`}
      >
        <SlideFrame number={26}>
          <div className="fermi-slide">
            <div className="fermi-heading">
              <h2>How many customers, spending how much?</h2>
            </div>
            <FermiCalculator />
            <div className="fermi-prompts">
              <span>How often does the problem occur?</span>
              <span>What does the workaround cost?</span>
              <span>Who can the first product reach?</span>
              <span>Where could it expand?</span>
            </div>
            <p className="fermi-conclusion">Pain can make a good business. Scale decides whether it fits venture capital.</p>
          </div>
        </SlideFrame>
      </Slide>
    </>
  )
}
