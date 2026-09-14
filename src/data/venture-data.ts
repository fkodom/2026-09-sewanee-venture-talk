// Historical observations. These are deliberately dated, not live benchmarks.
export const portfolioConcentration = {
  ycValueFraction: '≈ ¾',
  ycYear: 2012,
  ycSource: 'https://paulgraham.com/swan.html',
  horsleyCapitalPercent: 4.5,
  horsleyReturnPercent: 60,
  horsleyPublished: '2015-06-08',
  horsleySource: 'https://a16z.com/performance-data-and-the-babe-ruth-effect-in-venture-capital/',
  checked: '2026-09-04',
} as const

// Illustration only: arbitrary common dollar units, not an observed portfolio
// or multiples of each company's check. The fund line is a scale marker.
export const illustrativeReturns = {
  ranked: [12, 4.6, 2.7, 1.8, 1.35, 1.05, 0.82, 0.65, 0.52, 0.43, 0.36, 0.3, 0.25, 0.21, 0.18, 0.15, 0.12, 0.09, 0.06, 0.03],
  perceived: [3.4, 3, 2.65, 2.35, 2.05, 1.8, 1.58, 1.4, 1.25, 1.14, 1.06, 1, 0.96, 0.93, 0.91, 0.9, 0.88, 0.86, 0.84, 0.82],
  fund: 4.5,
} as const

export const valuationExample = {
  cashNeeded: 500_000,
  ownershipSold: 0.2,
  runwayMonths: [12, 18],
} as const

export const marketExample = {
  annualTarget: 25_000_000,
  customers: 2_500,
  annualSpend: 10_000,
  alternatives: [
    { customers: 12_500, annualSpend: 2_000 },
    { customers: 2_500, annualSpend: 10_000 },
    { customers: 500, annualSpend: 50_000 },
  ],
} as const

export const airbnbWedges = [
  'Air mattresses',
  'Spare rooms',
  'Entire homes',
  'Global lodging marketplace',
] as const

export const evidenceStages = [
  { stage: 'Pre-seed', evidence: 'Team + insight' },
  { stage: 'Seed', evidence: 'People using the product' },
  { stage: 'Series A', evidence: 'Customers stay; sales repeat' },
  { stage: 'Later', evidence: 'Growth that holds up' },
] as const
