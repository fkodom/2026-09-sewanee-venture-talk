import { powerLawTail, powerLawTrialCount } from '../../data/power-law-simulation'

export function PowerLawTailChart() {
  const plot = { left: 150, top: 38, width: 860, height: 440 }
  const x = (round: number) => plot.left + ((round - 1) / 13) * plot.width
  const y = (probability: number) => plot.top - (Math.log10(probability) / 4.1) * plot.height
  const theoretical = powerLawTail.map((point, i) => `${i ? 'L' : 'M'} ${x(point.round)} ${y(point.theoretical)}`).join(' ')

  return (
    <svg className="power-law-tail-chart" viewBox="0 0 1100 590" role="img" aria-labelledby="power-tail-title power-tail-description">
      <title id="power-tail-title">The chance of reaching each payout</title>
      <desc id="power-tail-description">Log-log plot at discrete payouts. Every player receives at least two dollars. Half reach four dollars, a quarter reach eight, and so on. The theoretical survival probability is two divided by the payout at powers of two. A reproducible simulation of ten thousand players follows this relationship.</desc>
      {[0, -1, -2, -3, -4].map((exponent) => (
        <g key={exponent} className="tail-axis-label">
          <line className="chart-grid" x1={plot.left} x2={plot.left + plot.width} y1={y(10 ** exponent)} y2={y(10 ** exponent)} />
          <text x={plot.left - 16} y={y(10 ** exponent) + 8} textAnchor="end">{exponent === 0 ? '1' : <tspan>10<tspan baselineShift="super" fontSize="17">{exponent}</tspan></tspan>}</text>
        </g>
      ))}
      {[1, 3, 5, 7, 9, 11, 13].map((round) => (
        <g key={round} className="tail-axis-label">
          <line className="chart-axis" x1={x(round)} x2={x(round)} y1={plot.top + plot.height} y2={plot.top + plot.height + 8} />
          <text x={x(round)} y={plot.top + plot.height + 40} textAnchor="middle">2<tspan baselineShift="super" fontSize="17">{round}</tspan></text>
        </g>
      ))}
      <line className="chart-axis" x1={plot.left} x2={plot.left} y1={plot.top} y2={plot.top + plot.height} />
      <line className="chart-axis" x1={plot.left} x2={plot.left + plot.width} y1={plot.top + plot.height} y2={plot.top + plot.height} />
      <path className="tail-theory-line" d={theoretical} />
      {powerLawTail.map((point) => point.simulated > 0 && (
        <circle className="tail-simulation-dot" key={point.round} cx={x(point.round)} cy={y(point.simulated)} r="6" />
      ))}
      <text className="tail-axis-title" x="35" y="260" textAnchor="middle" transform="rotate(-90 35 260)">P(payout ≥ x)</text>
      <text className="tail-axis-title" x={plot.left + plot.width / 2} y="566" textAnchor="middle">Payout ($) · log scale</text>
      <g className="tail-chart-legend">
        <circle className="tail-simulation-dot" cx="638" cy="64" r="6" />
        <text x="662" y="72">Simulation ({powerLawTrialCount.toLocaleString('en-US')} players)</text>
        <line className="tail-theory-line" x1="620" x2="650" y1="109" y2="109" />
        <text x="662" y="117">Theory · at possible payouts</text>
      </g>
    </svg>
  )
}
