import type { ReactNode } from 'react'

type CardProps = {
  children: ReactNode
  /** When true, applies card-dark hover styles. Defaults to false. */
  interactive?: boolean
  className?: string
}

/**
 * Dark card surface used across Skills / Projects / Stats.
 * Layout (padding, height, etc.) should be passed in via `className`.
 */
function Card({ children, interactive = false, className = '' }: CardProps) {
  const base = interactive
    ? 'card-dark'
    : 'rounded-2xl border border-slate-800 bg-slate-900/60'
  return <div className={`${base} ${className}`.trim()}>{children}</div>
}

export default Card
