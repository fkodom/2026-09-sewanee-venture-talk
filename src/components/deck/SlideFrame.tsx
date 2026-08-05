import type { ReactNode } from 'react'

import { slideNumber } from '../../data/venture-data'

type SlideFrameProps = {
  children: ReactNode
  number: number
  dark?: boolean
  className?: string
}

export function SlideFrame({
  children,
  number,
  dark = false,
  className = '',
}: SlideFrameProps) {
  return (
    <div className={`slide-frame ${dark ? 'slide-frame-dark' : ''} ${className}`.trim()}>
      <div className="slide-topline" aria-hidden="true">
        <span>{slideNumber(number)}</span>
      </div>
      {children}
    </div>
  )
}

export function SourceLine({ children }: { children: ReactNode }) {
  return <p className="source-line">Source: {children}</p>
}
