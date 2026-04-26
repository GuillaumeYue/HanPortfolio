import type { ComponentType, SVGProps } from 'react'

type SectionHeadingProps = {
  title: string
  subtitle?: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  align?: 'left' | 'center'
}

/**
 * Reusable section header with optional leading icon, title,
 * gradient divider, and optional subtitle.
 */
function SectionHeading({
  title,
  subtitle,
  icon: Icon,
  align = 'center',
}: SectionHeadingProps) {
  const alignClasses =
    align === 'center'
      ? 'flex flex-col items-center text-center'
      : 'flex flex-col items-start text-left'

  return (
    <div className={alignClasses}>
      <div className="flex items-center gap-3">
        {Icon ? <Icon className="h-8 w-8 text-blue-400" /> : null}
        <h2 className="text-4xl font-bold text-white md:text-5xl">{title}</h2>
      </div>

      <span
        className={
          align === 'center' ? 'section-divider' : 'mt-4 block h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-violet-500'
        }
      />

      {subtitle ? (
        <p
          className={`mt-6 max-w-2xl text-base text-slate-400 md:text-lg ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeading
