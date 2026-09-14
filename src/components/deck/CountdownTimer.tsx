import { useEffect, useRef, useState } from 'react'
import { useReveal } from '@revealjs/react'

import { remainingTime, type TimerState } from '../../data/venture-models'

export function CountdownTimer({ initialSeconds = 5 * 60 }: { initialSeconds?: number }) {
  const deck = useReveal()
  const element = useRef<HTMLDivElement>(null)
  const [timer, setTimer] = useState<TimerState>({ remainingMs: initialSeconds * 1000, endsAt: null })
  const running = timer.endsAt !== null
  const seconds = Math.ceil(timer.remainingMs / 1000)
  const display = `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`

  useEffect(() => {
    if (!running) return
    const interval = window.setInterval(() => {
      setTimer((current) => {
        const remainingMs = remainingTime(current, performance.now())
        return { remainingMs, endsAt: remainingMs > 0 ? current.endsAt : null }
      })
    }, 200)
    return () => window.clearInterval(interval)
  }, [running])

  useEffect(() => {
    if (!deck) return
    const pauseOnExit = (event: { currentSlide: HTMLElement }) => {
      if (element.current && !event.currentSlide.contains(element.current)) {
        setTimer((current) => ({ remainingMs: remainingTime(current, performance.now()), endsAt: null }))
      }
    }
    deck.on('slidechanged', pauseOnExit)
    return () => deck.off('slidechanged', pauseOnExit)
  }, [deck])

  function toggleTimer() {
    setTimer((current) => {
      const now = performance.now()
      const remainingMs = remainingTime(current, now)
      return {
        remainingMs,
        endsAt: current.endsAt === null && remainingMs > 0 ? now + remainingMs : null,
      }
    })
  }

  return (
    <div ref={element} className={`timer ${seconds === 0 ? 'timer-ended' : ''}`} aria-label="Interview timer">
      <output role="timer" aria-label="Time remaining" aria-live="off">{display}</output>
      <div className="timer-controls">
        <button type="button" disabled={seconds === 0} onClick={toggleTimer}>
          {seconds === 0 ? 'Finished' : running ? 'Pause' : seconds === initialSeconds ? 'Start' : 'Resume'}
        </button>
        <button type="button" onClick={() => setTimer({ remainingMs: initialSeconds * 1000, endsAt: null })}>Reset</button>
      </div>
      <span className="sr-only" role="status">{seconds === 0 ? 'Time is up.' : running ? 'Timer running.' : 'Timer paused.'}</span>
    </div>
  )
}
