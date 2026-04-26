import type { ComponentType, SVGProps } from 'react'

type ContactInfoItemProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  href?: string
  external?: boolean
}

/** Icon + label + value row used in the Contact section. */
function ContactInfoItem({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: ContactInfoItemProps) {
  const valueElement = href ? (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="text-base font-medium text-white transition hover:text-blue-400"
    >
      {value}
    </a>
  ) : (
    <p className="text-base font-medium text-white">{value}</p>
  )

  return (
    <li className="flex items-center gap-4">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-sm text-slate-400">{label}</p>
        {valueElement}
      </div>
    </li>
  )
}

export default ContactInfoItem
