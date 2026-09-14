import { useState } from 'react'

import { marketExample } from '../../data/venture-data'
import { compactDollars, marketSize, marketStatus } from '../../data/venture-models'

export function MarketSizingCalculator() {
  const [customers, setCustomers] = useState(String(marketExample.customers))
  const [annualSpend, setAnnualSpend] = useState(String(marketExample.annualSpend))
  const market = marketSize(customers, annualSpend)
  const status = market === null ? { className: '', label: 'enter valid amounts' } : marketStatus(market)
  const dollars = market === null ? '—' : compactDollars(market)
  const customersValid = customers.trim() !== '' && Number.isSafeInteger(Number(customers)) && Number(customers) >= 0
  const spendValid = annualSpend.trim() !== '' && Number.isFinite(Number(annualSpend)) && Number(annualSpend) >= 0

  return (
    <div className="market-experiment">
      <div className="market-sizing-calculator">
        <label>
          <span>potential customers</span>
          <input aria-label="Potential customers" aria-invalid={!customersValid} aria-describedby="market-assumptions" inputMode="numeric" min="0" step="1" type="number" value={customers} onChange={(event) => setCustomers(event.target.value)} />
        </label>
        <span className="market-sizing-operator" aria-hidden="true">×</span>
        <label>
          <span>$ per customer / year</span>
          <input aria-label="Dollars per customer per year" aria-invalid={!spendValid} aria-describedby="market-assumptions" inputMode="decimal" min="0" step="0.01" type="number" value={annualSpend} onChange={(event) => setAnnualSpend(event.target.value)} />
        </label>
        <span className="market-sizing-operator" aria-hidden="true">=</span>
        <div className={`market-sizing-result ${status.className}`}>
          <span>annual market</span>
          <output aria-live="polite" aria-label={market === null ? 'Enter valid amounts' : `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 }).format(market)} per year, ${status.label}`}>
            {dollars}
          </output>
        </div>
      </div>
      <div className="market-status-row">
        <p id="market-assumptions">Illustrative target: {compactDollars(marketExample.annualTarget)} / year</p>
        <p className={status.className} role="status">{status.label}</p>
      </div>
      <div className="market-equivalents" role="group" aria-label="Try a different pricing assumption">
        {marketExample.alternatives.map((example) => (
          <button
            type="button"
            key={example.annualSpend}
            aria-pressed={Number(customers) === example.customers && Number(annualSpend) === example.annualSpend}
            aria-label={`${example.customers.toLocaleString('en-US')} customers at ${compactDollars(example.annualSpend)} per year`}
            onClick={() => { setCustomers(String(example.customers)); setAnnualSpend(String(example.annualSpend)) }}
          >
            {example.customers.toLocaleString('en-US')} <span>×</span> <strong>{compactDollars(example.annualSpend)}</strong>
          </button>
        ))}
      </div>
      <p className="market-caveat">Potential spending, not company revenue or valuation.</p>
    </div>
  )
}
