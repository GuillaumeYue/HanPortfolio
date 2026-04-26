import personalIcon from '../../assets/personal-icon.png'
import { personal } from '../../data/personal'

type LogoProps = {
  /** Logo image side length in pixels (square). */
  size?: number
  /** Whether to render the name next to the icon. */
  withName?: boolean
  href?: string
}

/**
 * Brand mark: square personal icon optionally followed by the name.
 * Used by Navbar and Footer.
 */
function Logo({ size = 36, withName = true, href = '#hero' }: LogoProps) {
  const content = (
    <>
      <img
        src={personalIcon}
        alt={`${personal.name} logo`}
        className="rounded-lg object-cover"
        style={{ width: size, height: size }}
      />
      {withName ? (
        <span className="text-lg font-bold tracking-tight text-white">
          {personal.name}
        </span>
      ) : null}
    </>
  )

  if (href) {
    return (
      <a href={href} className="flex items-center gap-2">
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-2">{content}</div>
}

export default Logo
