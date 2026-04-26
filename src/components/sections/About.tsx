function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        {/* heading */}
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 text-emerald-400"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <h2 className="text-4xl font-bold text-white md:text-5xl">
              About Me
            </h2>
          </div>
          <span className="mt-4 block h-1 w-20 rounded-full bg-emerald-500" />
        </div>

        {/* content */}
        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          {/* left: stylized "code workstation" card with green offset shadow */}
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-3 -top-3 h-full w-full rounded-2xl border border-emerald-500/40"
            />
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
              {/* mock window header */}
              <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/60 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-3 text-xs text-slate-500">
                  about-me.tsx
                </span>
              </div>

              {/* mock code */}
              <pre className="overflow-x-auto px-5 py-6 text-[13px] leading-6 md:text-sm">
                <code>
                  <span className="text-pink-400">const </span>
                  <span className="text-sky-300">developer</span>
                  <span className="text-slate-300"> = {'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-emerald-300">name</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-amber-300">&apos;Han Yue&apos;</span>
                  <span className="text-slate-300">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-emerald-300">role</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-amber-300">
                    &apos;Full Stack Developer&apos;
                  </span>
                  <span className="text-slate-300">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-emerald-300">location</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-amber-300">&apos;Montreal, CA&apos;</span>
                  <span className="text-slate-300">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-emerald-300">stack</span>
                  <span className="text-slate-300">: [</span>
                  <span className="text-amber-300">&apos;React&apos;</span>
                  <span className="text-slate-300">, </span>
                  <span className="text-amber-300">&apos;TypeScript&apos;</span>
                  <span className="text-slate-300">, </span>
                  <span className="text-amber-300">&apos;SwiftUI&apos;</span>
                  <span className="text-slate-300">],</span>
                  {'\n'}
                  {'  '}
                  <span className="text-emerald-300">focus</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-amber-300">
                    &apos;clean code &amp; great UX&apos;
                  </span>
                  <span className="text-slate-300">,</span>
                  {'\n'}
                  {'  '}
                  <span className="text-emerald-300">learning</span>
                  <span className="text-slate-300">: </span>
                  <span className="text-pink-400">true</span>
                  <span className="text-slate-300">,</span>
                  {'\n'}
                  <span className="text-slate-300">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>

          {/* right: text + stats */}
          <div>
            <p className="text-base leading-8 text-slate-300 md:text-lg">
              I&apos;m a Computer Science student in Montreal with hands-on
              experience building web, mobile, and full-stack applications. I
              love turning ideas into clean, modern user experiences.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              My toolbox spans React, TypeScript, SwiftUI, ASP.NET, Firebase,
              and SQL-based systems. I&apos;m always looking to pick up new
              tools and ship things that feel polished end-to-end.
            </p>

            {/* stats */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-400"
                    aria-hidden="true"
                  >
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                  </svg>
                </div>
                <p className="mt-4 text-3xl font-bold text-white">4+</p>
                <p className="mt-1 text-sm text-slate-400">Featured Projects</p>
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-emerald-500/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-emerald-400"
                    aria-hidden="true"
                  >
                    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                    <path d="M6 12v5c3 2 9 2 12 0v-5" />
                  </svg>
                </div>
                <p className="mt-4 text-3xl font-bold text-white">15+</p>
                <p className="mt-1 text-sm text-slate-400">
                  Technologies &amp; Tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
