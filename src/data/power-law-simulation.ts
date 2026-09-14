// The original tree doubles before each flip: immediate tails pays $2.
// Recreate the article's 10,000-player experiment with that same convention.
// Fixed seed makes the figure reproducible, offline, and stable on every render.
export const powerLawTrialCount = 10_000

function simulateStoppingRounds() {
  let seed = 0x5e7a2026
  function heads() {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0
    return seed / 2 ** 32 >= 0.5
  }
  return Array.from({ length: powerLawTrialCount }, () => {
    let round = 1
    while (heads()) round += 1
    return round
  })
}

const stoppingRounds = simulateStoppingRounds()

export const powerLawTail = Array.from({ length: 14 }, (_, index) => {
  const round = index + 1
  return {
    round,
    payout: 2 ** round,
    theoretical: 2 ** (1 - round),
    simulated: stoppingRounds.filter((stoppedAt) => stoppedAt >= round).length / powerLawTrialCount,
  }
})
