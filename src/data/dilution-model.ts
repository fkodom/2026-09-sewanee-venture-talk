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

export const roundFundingMultiple = 3

export function buildDilutionSnapshot(round: number, followOn: boolean): DilutionSnapshot {
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
