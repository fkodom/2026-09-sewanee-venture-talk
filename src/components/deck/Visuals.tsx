import { useEffect, useMemo, useState } from 'react'

import { sp500AnnualAverages } from '../../data/sp500-annual-average'

type DistributionKind = 'normal' | 'lognormal' | 'power'

const paths: Record<DistributionKind, string> = {
  normal: 'M 18 210 C 94 210 117 58 240 58 C 363 58 386 210 462 210',
  lognormal: 'M 18 210 C 70 208 98 80 166 60 C 224 42 246 96 292 140 C 342 185 402 194 462 197',
  power: 'M 18 46 C 58 89 85 132 120 158 C 174 196 250 205 462 210',
}

const fills: Record<DistributionKind, string> = {
  normal: 'M 18 210 C 94 210 117 58 240 58 C 363 58 386 210 462 210 L 462 210 L 18 210 Z',
  lognormal:
    'M 18 210 C 70 208 98 80 166 60 C 224 42 246 96 292 140 C 342 185 402 194 462 197 L 462 210 L 18 210 Z',
  power: 'M 18 46 C 58 89 85 132 120 158 C 174 196 250 205 462 210 L 462 210 L 18 210 Z',
}

export function DistributionChart({
  kind,
  label,
  compact = false,
}: {
  kind: DistributionKind
  label: string
  compact?: boolean
}) {
  return (
    <svg
      className={`distribution-chart ${compact ? 'distribution-chart-compact' : ''}`}
      viewBox="0 0 480 250"
      role="img"
      aria-label={label}
    >
      <title>{label}</title>
      <line className="chart-grid" x1="18" x2="462" y1="94" y2="94" />
      <line className="chart-grid" x1="18" x2="462" y1="152" y2="152" />
      <line className="chart-axis" x1="18" x2="462" y1="210" y2="210" />
      <path className={`chart-fill chart-fill-${kind}`} d={fills[kind]} />
      <path className={`chart-stroke chart-stroke-${kind}`} d={paths[kind]} />
      {kind === 'power' && (
        <g className="tail-dots" aria-hidden="true">
          <circle cx="336" cy="204" r="5" />
          <circle cx="385" cy="207" r="4" />
          <circle cx="430" cy="209" r="3" />
        </g>
      )}
    </svg>
  )
}

export function Sp500HistoryChart() {
  const width = 1180
  const height = 465
  const plot = { top: 26, right: 32, bottom: 52, left: 76 }
  const firstYear = sp500AnnualAverages[0].year
  const lastYear = sp500AnnualAverages.at(-1)?.year ?? firstYear
  const logMin = Math.log10(5)
  const logMax = Math.log10(10000)
  const x = (year: number) =>
    plot.left + ((year - firstYear) / (lastYear - firstYear)) * (width - plot.left - plot.right)
  const y = (average: number) =>
    plot.top + ((logMax - Math.log10(average)) / (logMax - logMin)) * (height - plot.top - plot.bottom)
  const path = sp500AnnualAverages
    .map((point, index) => `${index === 0 ? 'M' : 'L'} ${x(point.year).toFixed(2)} ${y(point.average).toFixed(2)}`)
    .join(' ')
  const yearTicks = [1927, 1940, 1960, 1980, 2000, 2020, 2026]
  const priceTicks = [10, 100, 1000, 10000]
  const latest = sp500AnnualAverages.at(-1) ?? sp500AnnualAverages[0]
  const latestPrice = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(latest.average)

  return (
    <figure className="sp500-history-chart">
      <figcaption><span>Annual average price</span><span>log scale</span></figcaption>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Annual average S&P 500 price from 1927 through 2026 on a logarithmic vertical scale"
      >
        <title>S&amp;P 500 annual average price, 1927–2026</title>
        {priceTicks.map((tick) => (
          <g className="sp500-price-tick" key={tick}>
            <line x1={plot.left} x2={width - plot.right} y1={y(tick)} y2={y(tick)} />
            <text x={plot.left - 14} y={y(tick) + 5} textAnchor="end">
              {tick >= 1000 ? `$${tick / 1000}k` : `$${tick}`}
            </text>
          </g>
        ))}
        {yearTicks.map((tick) => (
          <g className="sp500-year-tick" key={tick}>
            <line x1={x(tick)} x2={x(tick)} y1={height - plot.bottom} y2={height - plot.bottom + 8} />
            <text x={x(tick)} y={height - 18} textAnchor={tick === firstYear ? 'start' : tick === lastYear ? 'end' : 'middle'}>
              {tick}
            </text>
          </g>
        ))}
        <line className="sp500-axis" x1={plot.left} x2={plot.left} y1={plot.top} y2={height - plot.bottom} />
        <line className="sp500-axis" x1={plot.left} x2={width - plot.right} y1={height - plot.bottom} y2={height - plot.bottom} />
        <path className="sp500-series" d={path} />
        <circle className="sp500-latest-dot" cx={x(latest.year)} cy={y(latest.average)} r="6" />
        <g className="sp500-latest-label">
          <text x={x(latest.year) - 14} y={y(latest.average) - 18} textAnchor="end">{latest.year} YTD</text>
          <text x={x(latest.year) - 14} y={y(latest.average) + 3} textAnchor="end">${latestPrice}</text>
        </g>
      </svg>
    </figure>
  )
}

type DilutionHolding = {
  label: string
  round: number
  shares: number
  kind: 'founder' | 'initial' | 'prior' | 'latest'
}

type DilutionSnapshot = {
  holdings: DilutionHolding[]
  totalShares: number
}

const dilutionRoundOptions = [0, 1, 2, 3, 4]
const roundFundingMultiple = 3

function buildDilutionSnapshot(round: number, followOn: boolean): DilutionSnapshot {
  let totalShares = 100
  let previousTotalShares = 100
  let issuedShares = 0
  let newCapitalShares = 0
  let followOnShares = 0
  let holdings: DilutionHolding[] = [{ label: 'Founder', round: 0, shares: 100, kind: 'founder' }]

  for (let index = 1; index <= round; index += 1) {
    previousTotalShares = totalShares
    issuedShares = totalShares * 0.25
    totalShares += issuedShares
    followOnShares = 0

    if (followOn) {
      holdings = holdings.map((holding) => {
        if (holding.kind === 'founder') return holding
        const targetShares = (holding.shares / previousTotalShares) * totalShares
        followOnShares += targetShares - holding.shares
        return { ...holding, shares: targetShares }
      })
    }

    newCapitalShares = issuedShares - followOnShares
    holdings = [
      ...holdings,
      { label: `Round ${index}`, round: index, shares: newCapitalShares, kind: 'latest' } satisfies DilutionHolding,
    ].map((holding, holdingIndex, allHoldings): DilutionHolding => {
      const kind: DilutionHolding['kind'] = holding.round === 1
        ? 'initial'
        : holdingIndex === allHoldings.length - 1
          ? 'latest'
          : holding.kind === 'latest'
            ? 'prior'
            : holding.kind
      return { ...holding, kind }
    })
  }

  return {
    holdings,
    totalShares,
  }
}

function formatPercent(value: number) {
  if (value === 0) return '0%'
  const rounded = Math.round(value)
  const display = Math.abs(value - rounded) < 0.05 ? `${rounded}` : value.toFixed(1)
  return `${display}%`
}

function formatFunding(value: number) {
  if (value === 0) return '—'
  return `$${value.toFixed(value >= 10 ? 0 : 1).replace(/\.0$/, '')}M`
}

function roundOneOwnership(snapshot: DilutionSnapshot) {
  const shares = snapshot.holdings.find((holding) => holding.round === 1)?.shares ?? 0
  return snapshot.totalShares > 0 ? (shares / snapshot.totalShares) * 100 : 0
}

function roundOneValue(snapshot: DilutionSnapshot, funding: number) {
  if (funding === 0) return 0
  return (funding / 0.2) * (roundOneOwnership(snapshot) / 100)
}

export function DilutionSimulator() {
  const [round, setRound] = useState(3)
  const [followOn, setFollowOn] = useState(false)
  const snapshot = buildDilutionSnapshot(round, followOn)
  const noProRataSnapshot = buildDilutionSnapshot(round, false)
  const proRataSnapshot = buildDilutionSnapshot(round, true)
  const roundFunding = round === 0 ? 0 : roundFundingMultiple ** (round - 1)
  const cumulativeFunding = round === 0 ? 0 : (roundFundingMultiple ** round - 1) / (roundFundingMultiple - 1)
  const noProRataInvested = round === 0 ? 0 : 1
  const proRataInvested = round === 0 ? 0 : 1 + Array.from({ length: Math.max(0, round - 1) }, (_, index) => 0.2 * roundFundingMultiple ** (index + 1)).reduce((sum, value) => sum + value, 0)
  const activeSnapshot = followOn ? proRataSnapshot : noProRataSnapshot

  const ownershipLabel = snapshot.holdings
    .map((holding) => `${holding.label} ${formatPercent((holding.shares / snapshot.totalShares) * 100)}`)
    .join(', ')

  return (
    <div className="dilution-simulator">
      <div className="dilution-controls-row">
        <div className="dilution-round-control" role="group" aria-label="Select financing round">
          <span>round</span>
          <div className="dilution-round-buttons">
            {dilutionRoundOptions.map((option) => (
              <button
                aria-pressed={round === option}
                className={round === option ? 'is-active' : ''}
                key={option}
                onClick={() => setRound(option)}
                type="button"
              >
                {option === 0 ? 'start' : option}
              </button>
            ))}
          </div>
        </div>
        <button
          aria-pressed={followOn}
          className={`dilution-follow-on ${followOn ? 'is-active' : ''}`}
          onClick={() => setFollowOn((value) => !value)}
          type="button"
        >
          <span>pro rata</span>
          <strong>{followOn ? 'on' : 'off'}</strong>
        </button>
      </div>

      <div className="dilution-main">
        <div className="dilution-chart-block">
          <div className="dilution-stack" aria-label={`Ownership after ${round === 0 ? 'the start' : `round ${round}`}: ${ownershipLabel}`} role="img">
            {snapshot.holdings.map((holding) => {
              const percent = (holding.shares / snapshot.totalShares) * 100
              return (
                <span
                  className={`dilution-segment dilution-segment-${holding.kind}`}
                  key={holding.label}
                  style={{ width: `${percent}%` }}
                >
                  {holding.label.replace('Round ', 'R')} {formatPercent(percent)}
                </span>
              )
            })}
          </div>
          <div className="dilution-model">
            <h3>Model</h3>
            <ul className="deck-bullets">
              <li>new shares = existing shares × ¼</li>
              <li>50% survival rate</li>
              <li>3× individual round sizes</li>
            </ul>
          </div>
          </div>

        <div className="dilution-stats">
          <div className="dilution-stat">
            <span>Valuation</span>
            <strong>{formatFunding(roundFunding / 0.2)}</strong>
            <small>{round === 0 ? 'no financing yet' : 'company · post-money'}</small>
          </div>
          <div className="dilution-stat">
            <span>Total funding</span>
            <strong>{formatFunding(cumulativeFunding)}</strong>
            <small>{round === 0 ? 'no financing yet' : `${formatFunding(roundFunding)} latest round`}</small>
          </div>
          <div className="dilution-stat">
            <span>Total invested</span>
            <strong>{formatFunding(followOn ? proRataInvested : noProRataInvested)}</strong>
            <small>{followOn ? 'pro rata' : 'no pro rata'} · Round 1 investor · through this round</small>
          </div>
          <div className="dilution-stat">
            <span>Equity percent</span>
            <strong>{formatPercent(roundOneOwnership(followOn ? proRataSnapshot : noProRataSnapshot))}</strong>
            <small>{followOn ? 'pro rata' : 'no pro rata'} · Round 1 investor · after this round</small>
          </div>
          <div className="dilution-stat dilution-stat-emphasis">
            <span>Equity value</span>
            <strong>{formatFunding(roundOneValue(activeSnapshot, roundFunding))}</strong>
            <small>{followOn ? 'pro rata' : 'no pro rata'} · current company value</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Coin({ outcome, index }: { outcome: 'H' | 'T' | '?'; index?: number }) {
  return (
    <div className={`coin coin-${outcome.toLowerCase()}`} aria-label={outcome === '?' ? `Game ${index}` : outcome}>
      <span>{outcome === '?' ? index : outcome}</span>
    </div>
  )
}

export function CountdownTimer({ initialSeconds = 5 * 60 }: { initialSeconds?: number }) {
  const [seconds, setSeconds] = useState(initialSeconds)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    if (!running || seconds <= 0) return
    const timerId = window.setInterval(() => setSeconds((value) => Math.max(0, value - 1)), 1000)
    return () => window.clearInterval(timerId)
  }, [running, seconds])

  useEffect(() => {
    if (seconds === 0) setRunning(false)
  }, [seconds])

  const display = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

  return (
    <div className={`timer ${seconds === 0 ? 'timer-ended' : ''}`} aria-label="Interview timer">
      <output aria-live="polite">{display}</output>
      <div className="timer-controls">
        <button type="button" onClick={() => setRunning((value) => !value)}>
          {running ? 'Pause' : seconds === initialSeconds ? 'Start' : 'Resume'}
        </button>
        <button
          type="button"
          onClick={() => {
            setRunning(false)
            setSeconds(initialSeconds)
          }}
        >
          Reset
        </button>
      </div>
    </div>
  )
}

function readPositiveNumber(value: string) {
  const number = Number(value)
  return Number.isFinite(number) && number >= 0 ? number : 0
}

export function MarketSizingCalculator() {
  const [customers, setCustomers] = useState('2500')
  const [annualSpend, setAnnualSpend] = useState('10000')

  const market = useMemo(
    () => readPositiveNumber(customers) * readPositiveNumber(annualSpend),
    [customers, annualSpend],
  )

  const formattedMarket = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(market)

  const marketStatus = market < 25_000_000
    ? { className: 'market-below', label: 'below target' }
    : market < 50_000_000
      ? { className: 'market-near', label: 'near target' }
      : { className: 'market-above', label: 'well above target' }

  return (
    <div className="market-sizing-calculator">
      <label>
        <span>customers</span>
        <input
          aria-label="Customers"
          inputMode="numeric"
          min="0"
          onChange={(event) => setCustomers(event.target.value)}
          placeholder="2,500"
          type="number"
          value={customers}
        />
      </label>
      <span className="market-sizing-operator" aria-hidden="true">×</span>
      <label>
        <span>average annual contract</span>
        <input
          aria-label="Average annual contract value"
          inputMode="decimal"
          min="0"
          onChange={(event) => setAnnualSpend(event.target.value)}
          placeholder="$10,000"
          type="number"
          value={annualSpend}
        />
      </label>
      <span className="market-sizing-operator" aria-hidden="true">=</span>
      <div className={`market-sizing-result ${marketStatus.className}`}>
        <span>annual market · {marketStatus.label}</span>
        <output aria-label={`${formattedMarket}, ${marketStatus.label}`} aria-live="polite">{formattedMarket}</output>
      </div>
    </div>
  )
}
