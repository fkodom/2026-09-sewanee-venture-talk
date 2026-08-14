# The Math of Venture Capital

An interactive, browser-based presentation about power laws, expected value, and the mathematics of venture capital, created for a public talk at Sewanee in 2026.

The deck begins with a paradox: if most startups fail, why can investing in them be rational? Three coin-flipping games build the mathematical intuition for normal, log-normal, and power-law outcomes. The talk then tests that model against venture returns and applies it to fund economics, market size, staged financing, customer discovery, and founder incentives.

The complete narrative and research notes live in [`docs/venture-capital-talk-plan.md`](docs/venture-capital-talk-plan.md).

## Status

The complete narrative is implemented as 36 slides. The deck adds a title slide and speaker background, gives each coin game separate setup and distribution slides, adds builder-principles, pain, truth, and speed slides, and omits the plan's standalone power-law derivation. It also includes speaker notes, venture evidence, a live discovery exercise, a five-minute timer, and a five-slide early-stage valuation sequence.

- Content implementation is `36 / 36` for a 45–50 minute talk, followed by questions.
- The opening and mathematical examples preserve the plan's stated caveats and indexing conventions.
- All three coin games reuse locally bundled figures from [On Power Laws](https://fkodom.com/blog/on-power-laws).
- The live discovery and market-sizing slides use local React state and work without a network connection.
- The Josh Kopelman tweet is an official X embed and requires a network connection.
- Research figures remain working estimates and must be refreshed, dated, and sourced shortly before the talk.
- Rehearsal edits, current data, and any event-specific participant details remain presentation-preparation work.

## Tech stack

- [Vite](https://vite.dev/) for the static development and production build
- [React](https://react.dev/) and TypeScript for authored slides and interactive elements
- [reveal.js](https://revealjs.com/) through [`@revealjs/react`](https://revealjs.com/react/) for presentation behavior
- [Tailwind CSS](https://tailwindcss.com/) through the Vite plugin
- Plain CSS for the deck's visual system and precise slide layouts
- [shadcn/ui](https://ui.shadcn.com/docs/installation/vite) when reusable interactive controls are needed; it is planned but not yet initialized
- [Bun](https://bun.sh/) for dependency management and scripts

React and TSX are deliberate choices. The deck calls for interactive charts, fragments, a live discovery timer, possible sliders, and tightly art-directed slide compositions. Markdown remains an option for simple appendix material, but it is not the primary authoring format.

## Getting started

Prerequisites:

- Bun installed locally
- A current Chromium, Firefox, or Safari browser

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

Open the local URL printed by Vite. The page reloads as slide components or styles change.

### Available scripts

```bash
bun run dev       # start Vite in development mode
bun run lint      # run Oxlint
bun run build     # type-check and create the production build
bun run preview   # serve the production build locally
```

Production output is written to `dist/` and can be hosted on any static web host.

## Presenting the deck

The deck uses reveal.js's standard keyboard controls:

| Key | Action |
| --- | --- |
| `Space`, `N`, `→`, `↓` | Next slide or fragment |
| `P`, `←`, `↑` | Previous slide or fragment |
| `F` | Fullscreen |
| `O` or `Esc` | Overview |
| `B` or `.` | Pause to a black screen |
| `Home` / `End` | First / last slide |

Hash-based navigation is enabled, so the current slide is represented in the URL. Controls, a progress bar, and slide count are also enabled.

The notes plugin is registered and every slide has speaker notes. Press `S` to open speaker view.

Before presenting, run a production build and test the actual projector/display setup:

```bash
bun run build
bun run preview
```

The reference canvas is 1440 × 810 (16:9). reveal.js scales it to the available screen.

### PDF export

For a printable handout or backup copy:

1. Start the production preview.
2. Open the deck in a Chromium-based browser.
3. Add `?print-pdf` to the deck URL.
4. Open the browser print dialog and choose **Save as PDF**.
5. Use landscape orientation, no margins, and background graphics enabled.
6. Inspect every page, especially fragments, equations, and elements near slide edges.

Browser PDF output is a backup artifact, not a substitute for testing the live deck.

## Narrative

The talk follows a six-part argument:

| Section | Purpose | Approx. time |
| --- | --- | ---: |
| The paradox | Compare the public-index alternative with the higher return hurdle venture must clear | 2–3 min |
| Mathematical foundation | Compare additive, multiplicative, and elimination processes | 12–13 min |
| Venture evidence | Show why venture outcomes resemble a power-law world | 9–10 min |
| Background and implications | Connect the model to fund strategy and the speaker's experience | 8–9 min |
| Startup discovery | Apply the framework to a possible real customer problem | 10–12 min |
| Valuation and conclusion | Discuss incentives, then return to the human lesson | 4–5 min |

The intended progression is:

> Paradox → mathematical model → empirical evidence → investor implications → company discovery → valuation → human conclusion

A brief speaker background follows the title. The investor-and-builder framework still appears only after the mathematical model and evidence, keeping the central question ahead of the longer company-building section.

## Slide sequence

1. The Math of Venture Capital.
2. My background.
3. Most startups fail.
4. The S&P 500.
5. Venture must outperform.
6. Three coin games.
7. Game 1: additive.
8. Normal distribution.
9. Game 2: multiplicative.
10. Log-normal distribution.
11. Game 3: elimination.
12. Pareto distribution (Power law).
13. Venture resembles Game 3.
14. What's in a venture investment?
15. Capital for equity.
16. Advance or stop.
17. A round buys time.
18. A round buys information.
19. The funding ladder.
20. Power laws.
21. Dilution.
22. A round buys fuel.
23. Buy vs. Build.
24. So you want to build a startup?
25. Seek pain.
26. Past behavior beats promises.
27. Seek truth.
28. Move fast.
29. Start narrow.
30. The Mom Test.
31. How much is an idea worth?
32. Start with runway.
33. The valuation floor.
34. Will VCs believe it?
35. Market size.
36. Most startups fail. Most are still worthwhile.

## Design system

The visual language is an editorial mathematics lecture rather than a conventional startup pitch deck:

- Warm paper backgrounds and near-black ink
- Dark, high-contrast bridge slides for major transitions
- Serif display typography with sans-serif explanatory text
- Conventional serif math typography for equations; monospaced metadata and small labels
- Restrained red for the power-law tail and pivotal claims
- Teal for secondary quantitative comparisons
- Fine rules, generous whitespace, direct chart labels, and minimal ornament

The core palette is defined as CSS custom properties in `src/index.css`:

| Token | Value | Role |
| --- | --- | --- |
| `--paper` | `#f6eddb` | Main slide background |
| `--paper-bright` | `#fff9ee` | Raised paper surfaces |
| `--ink` | `#191917` | Primary type and dark-slide background |
| `--muted` | `#716b62` | Supporting copy and labels |
| `--rule` | `#cfc1aa` | Borders, dividers, and chart grids |
| `--tail` | `#b9342c` | Power-law tail and primary accent |
| `--teal` | `#285e55` | Secondary quantitative accent |
| `--gold` | `#b7791f` | Occasional tertiary accent |

The design favors typography, spacing, and purpose-built SVG/CSS diagrams over gradients, stock art, decorative icons, or generic dashboard cards. Every slide should communicate one dominant idea from the back of a room.

## Project structure

The implemented deck is organized by narrative section:

```text
.
├── AGENTS.md                       # shared implementation guidance for coding agents
├── CLAUDE.md                       # Claude Code import of AGENTS.md
├── README.md                       # this project guide
├── docs/
│   └── venture-capital-talk-plan.md
├── public/
│   └── on-power-laws/             # locally bundled article figures used by the game slides
├── src/
│   ├── components/deck/
│   │   ├── SlideFrame.tsx         # shared frame and source line
│   │   └── Visuals.tsx            # charts, coins, timer, and market-sizing calculator
│   ├── data/
│   │   └── venture-data.ts        # shared figures, labels, and slide metadata
│   ├── slides/
│   │   ├── PartOneMath.tsx
│   │   ├── PartTwoEvidence.tsx
│   │   ├── PartThreeImplications.tsx
│   │   ├── PartFourDiscovery.tsx
│   │   └── PartFiveConclusion.tsx
│   ├── styles/
│   │   └── deck.css               # reveal overrides and slide compositions
│   ├── App.tsx                    # small compatibility re-export
│   ├── Presentation.tsx           # reveal configuration and slide assembly
│   ├── index.css                  # Tailwind import, global tokens, and reset
│   └── main.tsx                   # application entry point
├── package.json
└── vite.config.ts
```

Further extraction should be driven by reuse and clarity rather than by making one component per slide.

## Authoring a slide

Designed slides are React components rendered inside the reveal `Deck`:

```tsx
import { Deck, Fragment, Slide } from '@revealjs/react'
import 'reveal.js/reveal.css'
import RevealNotes from 'reveal.js/plugin/notes'
import './styles/deck.css'

export function Presentation() {
  return (
    <Deck
      plugins={[RevealNotes]}
      config={{
        width: 1440,
        height: 810,
        margin: 0.04,
        center: false,
        hash: true,
        transition: 'fade',
        backgroundTransition: 'fade',
      }}
    >
      <Slide notes="Explain the intuition before revealing the result.">
        <h2>Every successive level is less likely.</h2>
        <Fragment as="p" animation="fade-up">
          Every survivor is proportionally more valuable.
        </Fragment>
      </Slide>
    </Deck>
  )
}
```

Use fragments only when they support spoken sequencing. Keep source-heavy qualifications and delivery cues in speaker notes, while retaining any caveat on the slide if omitting it would make the visible claim misleading.

Charts and diagrams should usually be authored in semantic HTML, CSS, or SVG so they remain sharp under reveal scaling and PDF export. Meaningful visuals need an accessible name or text alternative; decorative graphics should be hidden from assistive technology.

## Interactive components

The React layer exists so live charts, timers, sliders, and audience exercises can be embedded directly in slides. Interactions should:

- Work from a keyboard or clicker where appropriate
- Have visible focus states
- Avoid hover-only explanations
- Preserve a noninteractive fallback for live presentation failures
- Keep critical state local and simple

reveal.js scales slides with CSS transforms. UI primitives that portal to `document.body`, including many dialog, dropdown, tooltip, and popover implementations, can appear at the wrong position or scale. Prefer inline controls. If a portal is necessary, mount it inside the transformed slide and test it in normal and fullscreen modes.

There is no server-rendering requirement. The deck should remain a self-contained static app; Next.js, a backend, and a global state library would add complexity without helping the presentation.

## Content and research cautions

Several examples are intentionally simplified, but they must remain precise:

- The opening treats 9% as a Rule of 72 teaching assumption, so an index investment roughly doubles in eight years. It is an average, not a forecast for any particular period.
- The S&P 500 history chart uses annual average price data, excludes dividends, and treats 2026 as year-to-date.
- The venture hurdle of at least 3× over roughly eight years is this talk's benchmark, not an industry-wide promise. Compare index and venture returns on the same net-or-gross basis.
- The additive game uses `+$1 / +$0` flips, so its expected payout after 100 flips is $50.
- The multiplicative coin game uses `1.1` and `0.9`; a double-or-halve game has a different expected multiplier.
- The St. Petersburg example illustrates a heavy tail. It is not a claim that real markets contain infinite money.
- The power law is most precisely expressed as a survival distribution, `P(X ≥ x)`.
- Startup stages resemble elimination rounds structurally, but companies are not literal independent coin flips.
- The defensible causation claim is that startup growth mechanics and staged capital allocation reinforce one another.
- The `$500k ÷ 20% = $2.5M` valuation is an illustrative financing constraint, not a current market benchmark.
- The `$25M / year` market target is an example, not a universal venture threshold.
- A good business need not be venture-backable; the financing must match the growth mechanics.

See the plan's **Mathematical and factual cautions** section before editing equations, return examples, market statistics, or valuation slides.

## Research sources

The working source list includes:

- Investor.gov, [What is compound interest?](https://www.investor.gov/additional-resources/information/youth/teachers-classroom-resources/what-compound-interest)
- Macrotrends, [S&P 500 — 100 Year Historical Chart & Data](https://www.macrotrends.net/datasets/2324/sp-500-historical-chart-data)
- Frank Odom, [On Power Laws](https://fkodom.com/blog/on-power-laws)
- Paul Graham, [Black Swan Farming](https://paulgraham.com/swan.html)
- Peter Thiel with Blake Masters, *Zero to One*
- Rob Fitzpatrick, *The Mom Test*
- PitchBook–NVCA Venture Monitor
- CB Insights, State of Venture
- Carta, State of Private Markets

Before the event, every numeric claim should have a clearly identified source, cohort, and measurement window. Funding-stage graduation rates, valuations, market data, and portfolio statistics should be refreshed close to the presentation date.

## Quality checks

For every meaningful change:

```bash
bun run lint
bun run build
```

Use browser QA when the user requests it, reports a layout problem, or a change depends on browser-only behavior. In those cases, inspect the affected slides at the relevant sizes, which may include:

- At the 1440 × 810 reference ratio
- At a normal laptop viewport
- In fullscreen presentation mode
- In overview mode if the slide uses an unusual background or layout
- In print/PDF mode when changing fragments, equations, charts, or edge-aligned content

Do not replay the full deck after routine copy or CSS edits. For targeted browser QA, check that text is not clipped, visual order matches spoken order, charts remain legible, reveal.js numbering is visible, keyboard navigation works, and the deck does not depend on network access for critical assets.

Shared implementation guidance for coding agents is in [`AGENTS.md`](AGENTS.md). [`CLAUDE.md`](CLAUDE.md) imports it for Claude Code rather than duplicating those instructions.
