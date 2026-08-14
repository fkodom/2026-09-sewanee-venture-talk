import type { ReactNode } from 'react'

type SlideFrameProps = {
  children: ReactNode
  dark?: boolean
  className?: string
}

export function SlideFrame({
  children,
  dark = false,
  className = '',
}: SlideFrameProps) {
  return (
    <div className={`slide-frame ${dark ? 'slide-frame-dark' : ''} ${className}`.trim()}>
      {children}
    </div>
  )
}

export function SourceLine({ children }: { children: ReactNode }) {
  return <p className="source-line">Source: {children}</p>
}
