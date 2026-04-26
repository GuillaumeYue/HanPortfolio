import type { ReactNode } from 'react'

type IconButtonProps = {
  href: string
  label: string
  children: ReactNode
  external?: boolean
}

/**
 * Round icon-only link, used for social icons in the Hero section.
 * Pass the icon component as children.
 */
function IconButton({
  href,
  label,
  children,
  external = true,
}: IconButtonProps) {
  const externalProps = external
    ? { target: '_blank', rel: 'noreferrer' }
    : {}

  return (
    <a href={href} aria-label={label} className="icon-button" {...externalProps}>
      {children}
    </a>
  )
}

export default IconButton
