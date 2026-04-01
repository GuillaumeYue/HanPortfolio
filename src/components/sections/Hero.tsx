function Hero() {
  return (
    <section id="hero" className="scroll-mt-24 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Software Developer Portfolio
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          Han Yue
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Computer Science student passionate about full-stack development,
          mobile apps, and building clean, modern user experiences.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-black px-5 py-3 text-white transition hover:opacity-90"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="rounded-lg border border-black px-5 py-3 text-black transition hover:bg-gray-100"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero