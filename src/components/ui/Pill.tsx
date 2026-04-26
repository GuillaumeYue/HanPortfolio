import type { ReactNode } from 'react'

type PillProps = {
  children: ReactNode
  className?: string
}

/** Small rounded tag — used for tech badges, skill items, etc. */
function Pill({ children, className = '' }: PillProps) {
  return <span className={`pill ${className}`.trim()}>{children}</span>
}

export default Pill
