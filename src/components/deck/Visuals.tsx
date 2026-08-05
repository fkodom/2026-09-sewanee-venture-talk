import { useEffect, useMemo, useState } from 'react'

type DistributionKind = 'normal' | 'lognormal' | 'power'

const paths: Record<DistributionKind, string> = {
  normal: 'M 18 210 C 94 210 117 58 240 58 C 363 58 386 210 462 210',
  lognormal: 'M 18 210 C 74 208 102 80 174 60 C 241 42 260 112 298 156 C 340 202 394 208 462 210',
  power: 'M 18 46 C 58 89 85 132 120 158 C 174 196 250 205 462 210',
}

const fills: Record<DistributionKind, string> = {
  normal: 'M 18 210 C 94 210 117 58 240 58 C 363 58 386 210 462 210 L 462 210 L 18 210 Z',
  lognormal:
    'M 18 210 C 74 208 102 80 174 60 C 241 42 260 112 298 156 C 340 202 394 208 462 210 L 462 210 L 18 210 Z',
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

type TreeNode = { x: number; y: number; value: string }

const additiveTreeLevels: TreeNode[][] = [
  [{ x: 380, y: 48, value: '$0' }],
  [
    { x: 210, y: 166, value: '−$1' },
    { x: 550, y: 166, value: '+$1' },
  ],
  [
    { x: 95, y: 286, value: '−$2' },
    { x: 285, y: 286, value: '$0' },
    { x: 475, y: 286, value: '$0' },
    { x: 665, y: 286, value: '+$2' },
  ],
  [
    { x: 45, y: 414, value: '−$3' },
    { x: 140, y: 414, value: '−$1' },
    { x: 235, y: 414, value: '−$1' },
    { x: 330, y: 414, value: '+$1' },
    { x: 430, y: 414, value: '−$1' },
    { x: 525, y: 414, value: '+$1' },
    { x: 620, y: 414, value: '+$1' },
    { x: 715, y: 414, value: '+$3' },
  ],
]

export function AdditiveDecisionTree() {
  return (
    <svg
      className="additive-tree"
      viewBox="0 0 760 465"
      role="img"
      aria-label="An additive coin-flip decision tree where heads adds one dollar and tails subtracts one dollar"
    >
      <title>Additive coin-flip decision tree</title>
      {additiveTreeLevels.slice(0, -1).flatMap((level, levelIndex) =>
        level.flatMap((node, nodeIndex) => {
          const children = additiveTreeLevels[levelIndex + 1]
          const tails = children[nodeIndex * 2]
          const heads = children[nodeIndex * 2 + 1]
          return [
            <g key={`t-${levelIndex}-${nodeIndex}`}>
              <line className="tree-edge tree-edge-tails" x1={node.x} y1={node.y} x2={tails.x} y2={tails.y} />
              <text className="tree-edge-label tree-edge-label-tails" x={(node.x + tails.x) / 2 - 12} y={(node.y + tails.y) / 2}>T</text>
            </g>,
            <g key={`h-${levelIndex}-${nodeIndex}`}>
              <line className="tree-edge tree-edge-heads" x1={node.x} y1={node.y} x2={heads.x} y2={heads.y} />
              <text className="tree-edge-label tree-edge-label-heads" x={(node.x + heads.x) / 2 + 8} y={(node.y + heads.y) / 2}>H</text>
            </g>,
          ]
        }),
      )}
      {additiveTreeLevels.flat().map((node, index) => (
        <g className="tree-value-node" key={`${node.value}-${index}`}>
          <circle cx={node.x} cy={node.y} r="30" />
          <text x={node.x} y={node.y + 7}>{node.value}</text>
        </g>
      ))}
    </svg>
  )
}

const normalHistogram = [2, 5, 11, 21, 38, 59, 79, 94, 100, 94, 79, 59, 38, 21, 11, 5, 2]

export function NormalSimulationChart() {
  return (
    <svg
      className="normal-simulation"
      viewBox="0 0 920 470"
      role="img"
      aria-label="A simulated histogram of additive outcomes centered at zero with a theoretical normal curve"
    >
      <title>Additive outcomes approximate a normal distribution centered at zero</title>
      <line className="simulation-axis" x1="76" x2="880" y1="395" y2="395" />
      <line className="simulation-axis" x1="76" x2="76" y1="45" y2="395" />
      <line className="simulation-center" x1="478" x2="478" y1="56" y2="395" />
      <g className="simulation-bars">
        {normalHistogram.map((value, index) => {
          const height = value * 3.15
          return <rect key={index} x={96 + index * 44} y={395 - height} width="42" height={height} />
        })}
      </g>
      <path
        className="simulation-curve"
        d="M 86 394 C 182 393 233 370 289 306 C 348 239 385 83 478 79 C 571 83 608 239 667 306 C 723 370 774 393 870 394"
      />
      <g className="simulation-ticks">
        <text x="94" y="430">−30</text>
        <text x="222" y="430">−20</text>
        <text x="350" y="430">−10</text>
        <text x="472" y="430">0</text>
        <text x="598" y="430">10</text>
        <text x="726" y="430">20</text>
        <text x="854" y="430">30</text>
      </g>
      <text className="simulation-axis-title" x="478" y="463">Payout ($)</text>
      <text className="simulation-axis-title" x="18" y="235" transform="rotate(-90 18 235)">Probability density</text>
      <g className="simulation-legend">
        <rect x="558" y="62" width="44" height="16" />
        <text x="616" y="77">Simulation (10,000 trials)</text>
        <line x1="558" x2="602" y1="104" y2="104" />
        <text x="616" y="111">Normal distribution</text>
      </g>
    </svg>
  )
}

export function Coin({ outcome, index }: { outcome: 'H' | 'T' | '?'; index?: number }) {
  return (
    <div className={`coin coin-${outcome.toLowerCase()}`} aria-label={outcome === '?' ? `Game ${index}` : outcome}>
      <span>{outcome === '?' ? index : outcome}</span>
    </div>
  )
}

export function CountdownTimer({ initialSeconds = 7 * 60 }: { initialSeconds?: number }) {
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
    <div className={`timer ${seconds === 0 ? 'timer-ended' : ''}`} aria-label="Seven minute interview timer">
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

export function FermiCalculator() {
  const [customers, setCustomers] = useState('')
  const [annualSpend, setAnnualSpend] = useState('')

  const market = useMemo(
    () => readPositiveNumber(customers) * readPositiveNumber(annualSpend),
    [customers, annualSpend],
  )

  const formattedMarket = market
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(market)
    : '—'

  return (
    <div className="fermi-calculator">
      <label>
        <span>potential customers</span>
        <input
          aria-label="Potential customers"
          inputMode="numeric"
          min="0"
          onChange={(event) => setCustomers(event.target.value)}
          placeholder="enter estimate"
          type="number"
          value={customers}
        />
      </label>
      <span className="fermi-operator" aria-hidden="true">×</span>
      <label>
        <span>annual spend per customer</span>
        <input
          aria-label="Annual spending per customer"
          inputMode="decimal"
          min="0"
          onChange={(event) => setAnnualSpend(event.target.value)}
          placeholder="enter dollars"
          type="number"
          value={annualSpend}
        />
      </label>
      <span className="fermi-operator" aria-hidden="true">=</span>
      <div className="fermi-result">
        <span>reachable annual market</span>
        <output aria-live="polite">{formattedMarket}</output>
      </div>
    </div>
  )
}
