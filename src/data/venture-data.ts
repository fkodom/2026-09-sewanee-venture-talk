export const TOTAL_SLIDES = 29

export const fundingStages = [
  { stage: 'Pre-seed → Seed', graduation: '67%', valuation: '$12–15M', bottleneck: false },
  { stage: 'Seed → Series A', graduation: '33%', valuation: '$40–45M', bottleneck: true },
  { stage: 'Series A → B', graduation: '65%', valuation: '$50–105M', bottleneck: false },
  { stage: 'Series B → C', graduation: '75%', valuation: '$100–250M', bottleneck: false },
  { stage: 'Series C → D', graduation: '80%+', valuation: '$500M+', bottleneck: false },
] as const

export const careerSteps = [
  'Sewanee math + physics',
  'UC Davis physics',
  'Machine learning + computer vision',
  'Technology startups',
  'Tower Research Ventures',
] as const

export const discoveryQuestions = [
  'Tell me about the last time this happened.',
  'What made it difficult?',
  'What did you do about it?',
  'What did that cost in time or money?',
  'What alternatives have you tried?',
  'Who else has this problem?',
] as const

export const airbnbWedges = [
  'Air mattresses for conference visitors',
  'Spare rooms',
  'Entire homes',
  'Global lodging marketplace',
] as const

export const evidenceStages = [
  { stage: 'Pre-seed', evidence: 'Founders, insight, market structure, rough prototype' },
  { stage: 'Seed', evidence: 'Product use, partner customers, early revenue' },
  { stage: 'Series A', evidence: 'Retention, repeatable acquisition, revenue growth' },
  { stage: 'Later', evidence: 'Scaling efficiency, market leadership, durability' },
] as const

export const slideNumber = (number: number) =>
  `${String(number).padStart(2, '0')} / ${TOTAL_SLIDES}`
