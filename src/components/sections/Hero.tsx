import personalIcon from '../../assets/personal-icon.png'
import GradientButton from '../ui/GradientButton'
import SocialLinks from '../ui/SocialLinks'
import { personal, sectionCopy } from '../../data/personal'

function Hero() {
  return (
    <section
      id="hero"
      className="bg-plus-grid relative scroll-mt-24 overflow-hidden px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28"
    >
      <div className="pointer-events-none absolute inset-0 vignette" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="overflow-hidden rounded-2xl border border-purple-400/30 shadow-[0_0_60px_-10px_rgba(139,92,246,0.5)]">
          <img
            src={personalIcon}
            alt={`${personal.name} logo`}
            className="block h-32 w-32 object-cover md:h-40 md:w-40"
          />
        </div>

        <p className="mt-8 text-base font-medium text-blue-400 md:text-lg">
          {personal.greeting}
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-7xl">
          {personal.name}
        </h1>

        <p className="mt-5 text-xl font-medium text-slate-300 md:text-2xl">
          {personal.role}
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          {personal.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <GradientButton href={sectionCopy.hero.primaryCta.href}>
            {sectionCopy.hero.primaryCta.label}
          </GradientButton>
          <GradientButton
            href={`${import.meta.env.BASE_URL}${sectionCopy.hero.secondaryCta.href}`}
            variant="secondary"
          >
            {sectionCopy.hero.secondaryCta.label}
          </GradientButton>
        </div>

        <div className="mt-10">
          <SocialLinks />
        </div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="mt-16 inline-flex items-center justify-center text-slate-500 transition hover:text-blue-400"
        >
          <span className="grid h-10 w-6 place-items-start rounded-full border border-slate-600 pt-2">
            <span className="h-2 w-1 rounded-full bg-current animate-scroll-dot" />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero
