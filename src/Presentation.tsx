import { Deck } from '@revealjs/react'
import RevealNotes from 'reveal.js/plugin/notes'
import 'reveal.js/reveal.css'

import { PartFiveConclusion } from './slides/PartFiveConclusion'
import { PartFourDiscovery } from './slides/PartFourDiscovery'
import { PartOneMath } from './slides/PartOneMath'
import { PartThreeImplications } from './slides/PartThreeImplications'
import { PartTwoEvidence } from './slides/PartTwoEvidence'
import './styles/deck.css'

export function Presentation() {
  return (
    <Deck
      className="deck-root"
      plugins={[RevealNotes]}
      config={{
        width: 1440,
        height: 810,
        margin: 0.04,
        center: false,
        hash: true,
        controls: true,
        progress: true,
        slideNumber: 'c/t',
        transition: 'fade',
        backgroundTransition: 'fade',
      }}
    >
      <PartOneMath />
      <PartTwoEvidence />
      <PartThreeImplications />
      <PartFourDiscovery />
      <PartFiveConclusion />
    </Deck>
  )
}
