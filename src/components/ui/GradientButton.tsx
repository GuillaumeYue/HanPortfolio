import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'

type Variant = 'primary' | 'secondary'

type AnchorProps = {
  href: string
  variant?: Variant
  className?: string
  children: ReactNode
} & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  'href' | 'className' | 'children'
>

type ButtonProps = {
  href?: undefined
  variant?: Variant
  className?: string
  children: ReactNode
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'className' | 'children'
>

type GradientButtonProps = AnchorProps | ButtonProps

/**
 * Branded primary/secondary CTA. Renders as `<a>` when `href` is given,
 * otherwise a `<button>`. Style is encoded in the `.btn-primary` /
 * `.btn-secondary` classes (see index.css).
 */
function GradientButton(props: GradientButtonProps) {
  const variantClass =
    (props.variant ?? 'primary') === 'primary' ? 'btn-primary' : 'btn-secondary'
  const className = `${variantClass} ${props.className ?? ''}`.trim()

  if (props.href !== undefined) {
    const { href, children, ...rest } = props
    return (
      <a href={href} className={className} {...stripStyleProps(rest)}>
        {children}
      </a>
    )
  }

  const { children, ...rest } = props
  return (
    <button type="button" className={className} {...stripStyleProps(rest)}>
      {children}
    </button>
  )
}

/** Drop our own style-related keys from the leftover props. */
function stripStyleProps<T extends { variant?: Variant; className?: string }>(
  rest: T,
) {
  const { variant: _v, className: _c, ...others } = rest
  void _v
  void _c
  return others
}

export default GradientButton
