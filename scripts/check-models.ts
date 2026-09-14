import assert from 'node:assert/strict'

import { buildDilutionSnapshot } from '../src/data/dilution-model'
import { marketExample, valuationExample } from '../src/data/venture-data'
import { compactDollars, marketSize, marketStatus, remainingTime } from '../src/data/venture-models'
import { powerLawTail, powerLawTrialCount } from '../src/data/power-law-simulation'
import { fundingLadder } from '../src/data/funding-ladder'

const close = (actual: number, expected: number) => assert.ok(Math.abs(actual - expected) < 1e-9, `${actual} ≠ ${expected}`)

// Conditional graduation rates must recover the original cumulative cohort.
// Multiplying the cumulative percentages themselves would understate survival.
let reached = 1
for (const row of fundingLadder) {
  if (row.advance !== null) {
    assert.ok(row.advance > 0 && row.advance <= 1)
    reached *= row.advance
  }
  close(reached, row.cumulativePercent / 100)
}
close(reached, 0.05)

// Issued shares must reconcile with the cap table in both funding strategies.
for (const followOn of [false, true]) {
  for (let round = 0; round <= 4; round += 1) {
    const snapshot = buildDilutionSnapshot(round, followOn)
    close(snapshot.holdings.reduce((sum, holding) => sum + holding.shares, 0), snapshot.totalShares)
    close(snapshot.holdings[0].shares, 100)
    close(snapshot.holdings[0].shares / snapshot.totalShares, 0.8 ** round)
    assert.ok(snapshot.holdings.every((holding) => holding.shares > 0))
    if (round > 0) {
      const firstInvestor = snapshot.holdings.find((holding) => holding.round === 1)!
      close(firstInvestor.shares / snapshot.totalShares, followOn ? 0.2 : 0.2 * 0.8 ** (round - 1))
    }
  }
}
const roundFour = buildDilutionSnapshot(4, false)
close(roundFour.holdings[1].shares / roundFour.totalShares, 0.1024)
close(valuationExample.cashNeeded / valuationExample.ownershipSold, 2_500_000)
for (const example of marketExample.alternatives) {
  assert.equal(marketSize(String(example.customers), String(example.annualSpend)), 25_000_000)
}
assert.equal(marketSize('0', '10000'), 0)
assert.equal(marketSize('2500', '10000.50'), 25_001_250)
for (const [customers, price] of [['', '10000'], ['-1', '10000'], ['2.5', '10000'], ['2500', ''], ['2500', '-1'], ['1e100', '1e300'], ['2500', 'Infinity']]) {
  assert.equal(marketSize(customers, price), null)
}
assert.equal(marketStatus(24_999_999).className, 'market-below')
assert.equal(marketStatus(25_000_000).className, 'market-near')
assert.equal(marketStatus(50_000_000).className, 'market-above')
assert.equal(compactDollars(13_824_000), '$13.8M')
assert.equal(compactDollars(50_000_000_000), '$50B')

// Delayed callbacks, pause/resume, and expiry must not extend a five-minute timer.
const running = { remainingMs: 300_000, endsAt: 301_000 }
assert.equal(remainingTime(running, 91_000), 210_000)
assert.equal(remainingTime({ remainingMs: 210_000, endsAt: null }, 500_000), 210_000)
assert.equal(remainingTime({ remainingMs: 210_000, endsAt: 710_000 }, 510_000), 200_000)
assert.equal(remainingTime(running, 305_000), 0)

// The chart must agree with the tree: immediate tails pays $2, never $1.
assert.equal(powerLawTail[0].payout, 2)
assert.equal(powerLawTail[0].simulated, 1)
for (let index = 0; index < powerLawTail.length; index += 1) {
  const point = powerLawTail[index]
  close(point.theoretical * point.payout, 2)
  close(point.simulated * powerLawTrialCount, Math.round(point.simulated * powerLawTrialCount))
  if (index > 0) assert.ok(point.simulated <= powerLawTail[index - 1].simulated)
}
console.log('Model checks passed: graduation probabilities, cap-table conservation, valuation, market inputs, timer deadlines, and game indexing.')
