function Hero() {
  return (
    <section
      id="hero"
      className="bg-plus-grid relative scroll-mt-24 overflow-hidden px-6 pt-28 pb-20 md:px-12 md:pt-36 md:pb-28"
    >
      {/* soft glow accents */}
      <div className="pointer-events-none absolute inset-0 vignette" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        {/* logo card */}
        <div className="grid h-20 w-20 place-items-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-9 w-9 text-emerald-400"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="9 7 4 12 9 17" />
            <polyline points="15 7 20 12 15 17" />
          </svg>
        </div>

        <p className="mt-8 text-base font-medium text-emerald-400 md:text-lg">
          Hi, I&apos;m
        </p>

        <h1 className="mt-3 text-5xl font-bold tracking-tight text-white md:text-7xl">
          Han Yue
        </h1>

        <p className="mt-5 text-xl font-medium text-slate-300 md:text-2xl">
          Full Stack Developer
        </p>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          Computer Science student passionate about full-stack development,
          mobile apps, and building clean, modern user experiences. Driven by
          clean code and great UX.
        </p>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-emerald-500 px-7 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400"
          >
            View Projects
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            className="rounded-xl border border-slate-700 bg-slate-100 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white"
          >
            Download Resume
          </a>
        </div>

        {/* social icons */}
        <div className="mt-10 flex items-center gap-3">
          <a
            href="https://github.com/GuillaumeYue"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-12 w-12 place-items-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.46-1.2-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.76 0 0 .84-.28 2.75 1.05A9.27 9.27 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.44.2 2.5.1 2.76.64.72 1.03 1.64 1.03 2.76 0 3.95-2.34 4.82-4.57 5.08.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/han-yue-75987aa8/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-12 w-12 place-items-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM8.5 10H5.37v8.63H8.5V10Zm5 0h-3.1v8.63h3.1v-4.8c0-2.67 3.47-2.9 3.47 0v4.8H20V12.8c0-4.53-5.11-4.36-6.5-2.13V10Z"
                fill="currentColor"
              />
            </svg>
          </a>

          <a
            href="mailto:alexyuehan@gmail.com"
            aria-label="Email"
            className="grid h-12 w-12 place-items-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 transition hover:border-emerald-500/40 hover:text-emerald-400"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm16 2H4l8 5 8-5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>

        {/* scroll indicator */}
        <a
          href="#about"
          aria-label="Scroll to about"
          className="mt-16 inline-flex items-center justify-center text-slate-500 transition hover:text-emerald-400"
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
