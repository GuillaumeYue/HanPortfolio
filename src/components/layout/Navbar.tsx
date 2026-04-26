function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#060b18]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-white"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-emerald-500/30 bg-emerald-500/10">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-emerald-400"
              aria-hidden="true"
            >
              <polyline points="9 7 4 12 9 17" />
              <polyline points="15 7 20 12 15 17" />
            </svg>
          </span>
          Han Yue
        </a>

        <div className="hidden gap-7 text-sm font-medium text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-emerald-400">
            About
          </a>
          <a href="#projects" className="transition hover:text-emerald-400">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-emerald-400">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-emerald-400">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
