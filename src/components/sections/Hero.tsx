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
      {/* Animated gradient blobs */}
      <div className="animate-blob animation-delay-0 pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
      <div className="animate-blob animation-delay-2s pointer-events-none absolute -right-40 top-1/3 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="animate-blob animation-delay-4s pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 vignette" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div
          className="animate-fade-up overflow-hidden rounded-2xl border border-purple-400/30 shadow-[0_0_60px_-10px_rgba(139,92,246,0.5)]"
        >
          <img
            src={personalIcon}
            alt={`${personal.name} logo`}
            className="block h-32 w-32 object-cover md:h-40 md:w-40"
          />
        </div>

        <p
          className="animate-fade-up mt-8 text-base font-medium text-blue-400 md:text-lg"
          style={{ animationDelay: '120ms' }}
        >
          {personal.greeting}
        </p>

        <h1
          className="animate-fade-up mt-3 text-5xl font-bold tracking-tight text-white md:text-7xl"
          style={{ animationDelay: '220ms' }}
        >
          {personal.name}
        </h1>

        <p
          className="animate-fade-up mt-5 text-xl font-medium text-slate-300 md:text-2xl"
          style={{ animationDelay: '320ms' }}
        >
          {personal.role}
        </p>

        <p
          className="animate-fade-up mt-8 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg"
          style={{ animationDelay: '420ms' }}
        >
          {personal.tagline}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: '520ms' }}
        >
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

        <div
          className="animate-fade-up mt-10"
          style={{ animationDelay: '620ms' }}
        >
          <SocialLinks />
        </div>

        <a
          href="#about"
          aria-label="Scroll to about"
          className="animate-fade-up mt-16 inline-flex items-center justify-center text-slate-500 transition hover:text-blue-400"
          style={{ animationDelay: '720ms' }}
        >
          <span className="flex h-10 w-6 flex-col items-center rounded-full border border-slate-600 pt-2">
            <span className="h-2 w-1 rounded-full bg-current animate-scroll-dot" />
          </span>
        </a>
      </div>
    </section>
  )
}

export default Hero
