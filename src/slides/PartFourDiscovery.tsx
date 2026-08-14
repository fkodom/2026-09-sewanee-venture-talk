import { Slide } from '@revealjs/react'

import { CountdownTimer } from '../components/deck/Visuals'
import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { airbnbWedges, discoveryQuestions } from '../data/venture-data'

export function PartFourDiscovery() {
  return (
    <>
      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Set the builder's operating rules before the discovery exercise. Look for a painful problem, test what is actually true, and move fast enough to learn before committing too much time or capital.`}
      >
        <SlideFrame>
          <div className="startup-principles-slide">
            <h2>So you want to build a startup?</h2>
            <p className="case-study-label">Case study: Airbnb</p>
            <table className="airbnb-principles-table">
              <thead>
                <tr>
                  <th scope="col">Rule</th>
                  <th scope="col">Airbnb</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">seek pain</th>
                  <td>air mattresses for conference visitors</td>
                </tr>
                <tr>
                  <th scope="row">seek truth</th>
                  <td>learn from real users</td>
                </tr>
                <tr>
                  <th scope="row"><strong>move fast</strong></th>
                  <td>test the smallest useful version</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Stay with Airbnb. The useful starting point was not a slightly nicer travel experience; it was a concrete problem for conference visitors who needed somewhere to sleep. Look for pain that already changes behavior, consumes time or money, or forces a workaround.`}
      >
        <SlideFrame>
          <div className="seek-pain-slide">
            <h2>Seek pain</h2>
            <div className="seek-pain-composition">
              <blockquote>
                <span>Sell painkillers,</span>
                <strong>not vitamins.</strong>
              </blockquote>
              <div className="seek-pain-example">
                <span>Airbnb's first wedge</span>
                <strong>air mattresses for conference visitors</strong>
              </div>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Introduce the core lesson from The Mom Test: avoid asking people to predict whether they would use an imagined product. Ask for concrete past behavior. Strong evidence includes recurring pain, an existing workaround, measurable cost, prior payment, and identifiable peers with the same problem.`}
      >
        <SlideFrame>
          <div className="mom-test-slide">
            <div className="mom-test-heading">
              <h2>Past behavior beats promises.</h2>
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
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Airbnb's founders did not stay behind a desk and guess. In the early days, they went door-to-door to talk with customers, ran small experiments quickly, and kept changing the product around the problems they actually found. The point is not that customers design the product. The point is that founders replace assumptions with observed behavior.`}
      >
        <SlideFrame>
          <div className="seek-truth-slide">
            <h2>Seek truth</h2>
            <div
              className="seek-truth-loop"
              role="img"
              aria-label="Airbnb's early learning loop: talk with real users, run rapid experiments, then iterate on the real problem"
            >
              <div className="seek-truth-step">
                <span>01</span>
                <strong>Talk</strong>
                <p>with real users</p>
              </div>
              <div className="seek-truth-arrow" aria-hidden="true">→</div>
              <div className="seek-truth-step">
                <span>02</span>
                <strong>Test</strong>
                <p>rapid experiments</p>
              </div>
              <div className="seek-truth-arrow" aria-hidden="true">→</div>
              <div className="seek-truth-step">
                <span>03</span>
                <strong>Iterate</strong>
                <p>on the real problem</p>
              </div>
              <svg className="seek-truth-return" viewBox="0 0 1000 110" aria-hidden="true">
                <path className="seek-truth-return-line" d="M900 10 V28 C900 92 100 92 100 28 V10" />
                <path className="seek-truth-return-head" d="M90 21 L100 10 L110 21" />
              </svg>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`People often ask, “Why won’t company X build that?” Do not confuse an incumbent’s ability to build something with its willingness to ship it. Hotel chains and existing rental marketplaces such as Vrbo had resources and distribution, but Airbnb could move without protecting their operating models. Google publicly demonstrated LaMDA in May 2021, about eighteen months before OpenAI released ChatGPT on November 30, 2022. Bard was the later product name. Google cited safety and quality concerns; its search-advertising economics also made conversational answers strategically complicated. Treat this as an illustration of incumbent incentives, not proof of a single motive. Sources: Google, “LaMDA: our breakthrough conversation technology,” May 18, 2021; OpenAI, “Introducing ChatGPT,” November 30, 2022; Associated Press, “Google has the next move as Microsoft embraces OpenAI buzz,” January 31, 2023.`}
      >
        <SlideFrame>
          <div className="move-fast-slide">
            <h2>Move fast</h2>
            <div className="move-fast-thesis">
              <p>“Why won’t company X build that?”</p>
            </div>
            <div className="move-fast-cases">
              <article>
                <span>Airbnb</span>
                <strong>Hotels + Vrbo</strong>
                <p>existing lodging models</p>
              </article>
              <article>
                <span>Conversational AI</span>
                <strong>Google · LaMDA</strong>
                <div className="move-fast-timeline" aria-label="Google demonstrated LaMDA in May 2021; OpenAI launched ChatGPT in November 2022">
                  <p><b>May 2021</b> LaMDA demo</p>
                  <i aria-hidden="true">→</i>
                  <p><b>Nov. 2022</b> ChatGPT launch</p>
                </div>
              </article>
            </div>
            <SourceLine>Google · LaMDA, May 2021; OpenAI · ChatGPT, Nov. 2022</SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Use Airbnb only as a familiar illustration of a narrow wedge expanding outward. The first product does not need to serve the eventual market. The objective is not to build today’s Airbnb on day one; it is to win the smallest useful market well enough to earn expansion.`}
      >
        <SlideFrame>
          <div className="wedge-slide">
            <h2>Start narrow.</h2>
            <svg
              className="wedge-figure"
              viewBox="0 0 1000 430"
              role="img"
              aria-labelledby="airbnb-wedge-title airbnb-wedge-description"
            >
              <title id="airbnb-wedge-title">Airbnb's market wedge</title>
              <desc id="airbnb-wedge-description">Airbnb expanded upward from air mattresses to spare rooms, entire homes, and a global lodging marketplace.</desc>
              <path className="wedge-outline" d="M90 30 H910 L500 405 Z" />
              <path className="wedge-tip" d="M363 280 H637 L500 405 Z" />
              <path className="wedge-rule" d="M188 120 H812 M281 205 H719 M363 280 H637" />
              {[...airbnbWedges].reverse().map((wedge, index) => (
                <text
                  className={`wedge-label wedge-label-${index + 1}`}
                  x="500"
                  y={[82, 171, 254, 331][index]}
                  textAnchor="middle"
                  key={wedge}
                >
                  {wedge}
                </text>
              ))}
            </svg>
            <blockquote className="wedge-quote">
              <p>“It’s better to have 100 people who love you than 1 million who kind of like you.”</p>
              <cite>Paul Graham, to Brian Chesky (CEO, Airbnb)</cite>
            </blockquote>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark live-slide"
        notes={`LIVE EXERCISE. Use the prepared volunteer and agreed sports-betting or sports-analytics domain. Consent is established in advance, but answers are not planted. Start the five-minute timer. Keep asking about a concrete recent event, workaround, frequency, cost, and other customers. Rescue path: a sports-data user repeatedly copying data between a paid source and a custom model, then checking stale lines by hand. It is valid to conclude that no good startup opportunity is present. The exercise demonstrates belief updating, not performance. If the timer fails, use a phone timer and continue.`}
      >
        <SlideFrame dark>
          <div className="live-discovery-slide">
            <div className="live-header">
              <div>
                <h2>The Mom Test</h2>
              </div>
              <CountdownTimer />
            </div>
            <div className="live-body">
              <ol>
                {discoveryQuestions.slice(0, 5).map((question, index) => (
                  <li key={question}><span>{index + 1}</span>{question}</li>
                ))}
              </ol>
              <figure className="mom-test-book">
                <img src="/books/the-mom-test.jpg" alt="Cover of The Mom Test by Rob Fitzpatrick" />
                <figcaption>Rob Fitzpatrick</figcaption>
              </figure>
            </div>
          </div>
        </SlideFrame>
      </Slide>

    </>
  )
}
