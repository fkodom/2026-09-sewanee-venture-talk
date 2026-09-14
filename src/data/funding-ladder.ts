// Historical benchmarks, not a single company's observed path or a forecast.
// Mattermark's 2009 seed-cohort row gives cumulative percentages at each stage.
// Adjacent ratios recover approximate conditional graduation rates; inputs were
// already rounded in the source. Carta prices are a separate cross-section.
export const fundingLadderSources = {
  graduation: {
    url: 'https://mattermark.com/startup-graduation-rate-surprisingly-low/',
    table: 'https://mattermark.com/wp-content/uploads/2016/09/Screenshot-2016-09-28-10.36.41.png',
    cohort: 2009,
    observed: '2016-09-28',
    population: 'U.S. software companies that raised seed in 2009',
  },
  valuation: {
    url: 'https://carta.com/data/state-of-private-markets-q4-2024/',
    period: 'Q4 2024',
    published: '2025-02-12',
    basis: 'U.S. median pre-money valuation; primary and bridge rounds combined',
  },
  checked: '2026-09-07',
} as const

export const fundingStages = [
  { stage: 'Seed', cumulativePercent: 100, preMoney: 16_000_000 },
  { stage: 'Series A', cumulativePercent: 32, preMoney: 43_400_000 },
  { stage: 'Series B', cumulativePercent: 21, preMoney: 108_900_000 },
  { stage: 'Series C', cumulativePercent: 12.3, preMoney: 222_300_000 },
  { stage: 'Series D', cumulativePercent: 5, preMoney: 416_000_000 },
] as const

export const fundingLadder = fundingStages.map((row, index) => ({
  ...row,
  transition: index === 0 ? 'Seed' : `${fundingStages[index - 1].stage} → ${index === 1 ? row.stage : row.stage.replace('Series ', '')}`,
  advance: index === 0 ? null : row.cumulativePercent / fundingStages[index - 1].cumulativePercent,
  roundedValuation: Number(row.preMoney.toPrecision(2)),
}))
