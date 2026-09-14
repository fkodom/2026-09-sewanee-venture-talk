import { Slide } from '@revealjs/react'

import { SlideFrame, SourceLine } from '../components/deck/SlideFrame'
import { airbnbWedges } from '../data/venture-data'

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
        notes={`Coming up with a startup idea in isolation is extremely, deceptively difficult. Observation and conversation are usually more useful than brainstorming. Look for one of two things: the world changed, or something already hurts. Either can matter, but only when it changes what people actually do. Look for workarounds, spending, new habits, or frustration strong enough to produce action. Then ask why you have unusual access, insight, or ability to serve those people. The next slide turns that question into a stack of claims.`}
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
        notes={`An idea is a chain of interdependent claims. Someone must care enough to act. The team must be able to reach and serve those people. The first narrow market must have room to grow. A break anywhere can stop the company. Read each probability term as a belief to investigate. The approximation treats each step as depending mainly on the preceding claim; the claims are not independent, exhaustive, or assigned calibrated numbers. For questions, the exact chain rule is P(C∩A∩R∩G)=P(C)P(A|C)P(R|C,A)P(G|C,A,R). Later terms condition on all earlier claims.`}
      >
        <SlideFrame>
          <div className="startup-bets-slide startup-bets-slide-probability">
            <h2>A startup is a stack of bets.</h2>
            <StartupBetsTrack />
            <StartupProbabilityEquation />
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Airbnb’s 2007 start makes the difference between a pitch and behavior concrete. A design conference came to San Francisco, hotel rooms were sold out, the founders inflated three airbeds, and three guests stayed in their apartment. Those stays are observed behavior. A broad market is still an inference to test, not something three guests prove. Sources: Airbnb, What Makes Airbnb, Airbnb (2020), https://news.airbnb.com/what-makes-airbnb-airbnb; Brian Chesky’s host letter, November 3, 2020, https://news.airbnb.com/th/an-important-announcement-from-airbnb/.`}
      >
        <SlideFrame>
          <div className="airbnb-demand-slide">
            <h2>Case study: Airbnb</h2>
            <div
              className="stage-track airbnb-demand-track"
              role="img"
              aria-label="Airbnb in 2007: a design conference, sold-out hotels, three airbeds, three guests"
            >
              <div className="stage-stop airbnb-demand-stop">
                <span>01</span>
                <strong>Design conference.</strong>
                <i aria-hidden="true">→</i>
              </div>
              <div className="stage-stop airbnb-demand-stop">
                <span>02</span>
                <strong>Hotels sold out.</strong>
                <i aria-hidden="true">→</i>
              </div>
              <div className="stage-stop airbnb-demand-stop">
                <span>03</span>
                <strong>Three airbeds.</strong>
                <i aria-hidden="true">→</i>
              </div>
              <div className="stage-stop airbnb-demand-stop">
                <span>04</span>
                <strong>Three guests.</strong>
              </div>
            </div>
            <SourceLine><a href="https://news.airbnb.com/what-makes-airbnb-airbnb">Airbnb · 2007 origin, recounted in 2020</a></SourceLine>
          </div>
        </SlideFrame>
      </Slide>

      <Slide
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`Use Airbnb as a familiar illustration of a narrow entry market expanding outward. The nesting is conceptual, not an exact product chronology. Read from the bottom up: the first customer is at the tip. The first product does not need to serve the eventual market. The objective is not to build today’s Airbnb on day one; it is to win the smallest useful market well enough to earn expansion.`}
      >
        <SlideFrame>
          <div className="wedge-slide">
            <h2>Build a wedge</h2>
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
        backgroundColor="#f6eddb"
        className="deck-slide"
        notes={`An incumbent’s ability to build something does not guarantee that it will ship first. Google demonstrated LaMDA in May 2021; OpenAI launched ChatGPT on November 30, 2022, about eighteen months later. Google’s 2021 post discussed safety and quality concerns. These dates illustrate different product timelines, not proof of a single motive or a comparison of identical products. Sources: Google, “LaMDA: our breakthrough conversation technology,” May 18, 2021, https://blog.google/innovation-and-ai/products/lamda/; OpenAI, “Introducing ChatGPT,” November 30, 2022, https://openai.com/index/chatgpt/. Transition: what would it take to fund a first experiment?`}
      >
        <SlideFrame>
          <div className="move-fast-slide">
            <h2>Why won't company X build that?</h2>
            <div className="ai-launch-timeline" role="img" aria-label="Google demonstrated LaMDA in May 2021; OpenAI launched ChatGPT in November 2022">
              <div className="ai-launch-event">
                <time dateTime="2021-05-18">May 2021</time>
                <strong>Google · LaMDA</strong>
                <p>demo</p>
              </div>
              <i aria-hidden="true">→</i>
              <div className="ai-launch-event">
                <time dateTime="2022-11-30">November 2022</time>
                <strong>OpenAI · ChatGPT</strong>
                <p>launch</p>
              </div>
            </div>
            <SourceLine><a href="https://blog.google/innovation-and-ai/products/lamda/">Google · May 2021</a>; <a href="https://openai.com/index/chatgpt/">OpenAI · November 2022</a></SourceLine>
          </div>
        </SlideFrame>
      </Slide>

    </>
  )
}
