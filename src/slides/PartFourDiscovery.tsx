import { Slide } from '@revealjs/react'

import { CountdownTimer } from '../components/deck/Visuals'
import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { airbnbWedges, discoveryQuestions } from '../data/venture-data'

const startupBets = [
  'Someone cares.',
  'They will act.',
  'You can reach and serve them.',
  'The wedge can grow.',
] as const

function StartupBetsTrack() {
  return (
    <ol className="stage-track startup-bets-track" aria-label="Four claims in a startup: someone cares, they will act, you can reach and serve them, and the wedge can grow">
      {startupBets.map((bet, index) => (
        <li className="stage-stop startup-bet-stop" key={bet}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{bet}</strong>
          {index < startupBets.length - 1 && <i aria-hidden="true">→</i>}
        </li>
      ))}
    </ol>
  )
}

function StartupProbabilityEquation() {
  return (
    <div
      className="startup-bets-probability-equation"
      role="math"
      aria-label="The probability of winning is approximately the probability someone cares, times the probability they act given they care, times the probability they can be reached and served given they act, times the probability the wedge grows given they can be reached and served"
    >
      <span>P(win)</span>
      <i>≈</i>
      <span>P(care)</span>
      <i>×</i>
      <span>P(act | care)</span>
      <i>×</i>
      <span>P(reach | act)</span>
      <i>×</i>
      <span>P(grow | reach)</span>
    </div>
  )
}

export function PartFourDiscovery() {
  return (
    <>
      <Slide
        backgroundColor="#191917"
        className="deck-slide deck-slide-dark"
        notes={`Shift from the investor's view to the builder's view. Before asking whether an idea is clever or technically possible, ask who cares enough to change their behavior. Then ask why this founder is unusually well placed to see, reach, or serve those people.`}
      >
        <SlideFrame dark>
          <div className="discovery-bridge-slide">
            <h2>Where do you start?</h2>
            <p>Who cares? And why you?</p>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`An idea is not one bet. It is a chain of claims that can fail independently. Someone must care. The problem must be strong enough for them to act. The team must be able to reach and serve those people. And the first narrow market must open into something much larger. This line is not a rigid timeline; it is a way to inspect the claims in order. Investors look for the weakest one because a break anywhere can stop the company. Airbnb makes the chain concrete.`}
      >
        <SlideFrame>
          <div className="startup-bets-slide">
            <h2>A startup is a stack of bets.</h2>
            <StartupBetsTrack />
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Now map the claims roughly to financing stages. Pre-seed capital helps establish that someone cares enough to act. Seed capital helps turn that action into a product and a reachable customer base. Series A and later rounds increasingly require evidence that the initial wedge can grow. This is a rough evidence map, not a universal fundraising rule; company type, capital intensity, and market conditions can shift the boundaries.`}
      >
        <SlideFrame>
          <div className="startup-bets-slide startup-bets-slide-stages">
            <h2>A startup is a stack of bets.</h2>
            <StartupBetsTrack />
            <ol className="startup-bets-stage-map" aria-label="Pre-seed maps from someone caring to acting; seed maps from acting to being reachable and served; Series A and later maps from reach to a growing wedge">
              <li><span aria-hidden="true" /><strong>Pre-seed</strong></li>
              <li><span aria-hidden="true" /><strong>Seed</strong></li>
              <li><span aria-hidden="true" /><strong>Series A+</strong></li>
            </ol>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`The same stack can be described as a sequence of Bayesian beliefs. Strictly speaking, a prior is the belief held before new evidence arrives; the later terms here are conditional probabilities. Evidence that someone cares changes the belief that they will act. Evidence that they act changes the belief that the team can reach and serve them. Evidence of repeatable reach changes the belief that the wedge can grow. The approximation treats each step as depending mainly on the immediately preceding claim. A full chain-rule model would condition each later claim on all earlier evidence.`}
      >
        <SlideFrame>
          <div className="startup-bets-slide startup-bets-slide-probability">
            <h2>A startup is a stack of Bayesian priors.</h2>
            <StartupBetsTrack />
            <StartupProbabilityEquation />
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Coming up with a startup idea in isolation is extremely, deceptively difficult. Observation and conversation are usually more useful than brainstorming. Look for one of two things: the world changed, or something already hurts. Either can matter, but only when it changes what people actually do. Look for workarounds, spending, new habits, or frustration strong enough to produce action. Then ask why you have unusual access, insight, or ability to serve those people.`}
      >
        <SlideFrame>
          <div className="startup-ideation-slide">
            <h2>Who cares?</h2>
            <svg
              className="startup-ideation-triangle"
              viewBox="0 0 1120 560"
              role="img"
              aria-labelledby="startup-ideation-title startup-ideation-description"
            >
              <title id="startup-ideation-title">Two overlapping sources of startup ideas</title>
              <desc id="startup-ideation-description">Two overlapping circles: the world changed and something hurts.</desc>
              <circle className="startup-ideation-circle" cx="420" cy="280" r="215" />
              <circle className="startup-ideation-circle" cx="700" cy="280" r="215" />
              <text className="startup-ideation-label" x="340" y="256" textAnchor="middle" dominantBaseline="middle">The world</text>
              <text className="startup-ideation-label" x="340" y="304" textAnchor="middle" dominantBaseline="middle">changed.</text>
              <text className="startup-ideation-label" x="780" y="256" textAnchor="middle" dominantBaseline="middle">Something</text>
              <text className="startup-ideation-label" x="780" y="304" textAnchor="middle" dominantBaseline="middle">hurts.</text>
            </svg>
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
              <h2>What's the pain?</h2>
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
        notes={`Briefly recommend The Mom Test. It is an excellent practical starting point for startup and product ideation because it turns customer discovery into concrete questions about past behavior, workarounds, and cost. The questions on this slide are useful prompts, not a rigid interview script.`}
      >
        <SlideFrame>
          <div className="mom-test-slide">
            <div className="mom-test-heading">
              <h2>What's the pain?</h2>
            </div>
            <div className="mom-test-grid">
              <ol>
                {discoveryQuestions.map((question, index) => (
                  <li key={question}><span>{String(index + 1).padStart(2, '0')}</span>{question}</li>
                ))}
              </ol>
              <figure className="mom-test-book-plug">
                <img src="/books/the-mom-test.jpg" alt="Cover of The Mom Test by Rob Fitzpatrick" />
              </figure>
            </div>
            <SourceLine>Rob Fitzpatrick, <em>The Mom Test</em></SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Airbnb began with behavior that was already visible. People traveling to San Francisco for conferences could not find hotel rooms. They searched message boards and Craigslist, paid strangers for space in apartments, and accepted sleeping on air mattresses. Each step adds evidence: the problem was real, a workaround already existed, people would spend money, and they would tolerate substantial inconvenience to solve it. This did not yet prove a venture-scale market, but it clearly showed demand and that people would act.`}
      >
        <SlideFrame>
          <div className="airbnb-demand-slide">
            <h2>Case study: Airbnb</h2>
            <div
              className="stage-track airbnb-demand-track"
              role="img"
              aria-label="Airbnb's early demand evidence: hotels sold out, travelers searched message boards and Craigslist, paid strangers for space, and slept on air mattresses"
            >
              <div className="stage-stop airbnb-demand-stop">
                <span>01</span>
                <strong>Hotels sold out.</strong>
                <i aria-hidden="true">→</i>
              </div>
              <div className="stage-stop airbnb-demand-stop">
                <span>02</span>
                <strong>Message boards + Craigslist.</strong>
                <i aria-hidden="true">→</i>
              </div>
              <div className="stage-stop airbnb-demand-stop">
                <span>03</span>
                <strong>Paid strangers for space.</strong>
                <i aria-hidden="true">→</i>
              </div>
              <div className="stage-stop airbnb-demand-stop">
                <span>04</span>
                <strong>Air mattresses.</strong>
              </div>
            </div>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Airbnb's founders did not stay behind a desk and guess. In the early days, they went door-to-door to talk with customers, ran small experiments quickly, and kept changing the product around the problems they actually found. The point is not that customers design the product. The point is that founders replace assumptions with observed behavior. Each pass through the loop updates one or more conditional probabilities in the equation.`}
      >
        <SlideFrame>
          <div className="seek-truth-slide">
            <h2>Move fast &amp; update priors</h2>
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
            <StartupProbabilityEquation />
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
