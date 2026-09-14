import { marketExample } from './venture-data'

export function compactDollars(value: number) {
  const divisor = value >= 1_000_000_000_000 ? 1_000_000_000_000 : value >= 1_000_000_000 ? 1_000_000_000 : value >= 1_000_000 ? 1_000_000 : value >= 1_000 ? 1_000 : 1
  const unit = divisor === 1_000_000_000_000 ? 'T' : divisor === 1_000_000_000 ? 'B' : divisor === 1_000_000 ? 'M' : divisor === 1_000 ? 'k' : ''
  return `$${new Intl.NumberFormat('en-US', { maximumFractionDigits: 1 }).format(value / divisor)}${unit}`
}

export function marketSize(customers: string, annualSpend: string) {
  if (!customers.trim() || !annualSpend.trim()) return null
  const count = Number(customers)
  const spend = Number(annualSpend)
  const total = count * spend
  if (!Number.isSafeInteger(count) || count < 0 || !Number.isFinite(spend) || spend < 0 || !Number.isFinite(total) || total > Number.MAX_SAFE_INTEGER) return null
  return total
}

export function marketStatus(market: number) {
  if (market < marketExample.annualTarget) return { className: 'market-below', label: 'below example target' }
  if (market < 2 * marketExample.annualTarget) return { className: 'market-near', label: 'meets example target' }
  return { className: 'market-above', label: 'at least 2× example target' }
}

export type TimerState = { remainingMs: number; endsAt: number | null }

// A deadline avoids drift when an interval is delayed or the tab is backgrounded.
export function remainingTime(timer: TimerState, now: number) {
  return Math.max(0, timer.endsAt === null ? timer.remainingMs : timer.endsAt - now)
}
