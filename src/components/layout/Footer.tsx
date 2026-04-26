function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#060b18] px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <a
          href="#hero"
          className="flex items-center gap-2 text-lg font-bold text-white"
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

        <p className="flex items-center gap-2 text-sm text-slate-400">
          © {new Date().getFullYear()} Made with
          <span aria-label="love" role="img" className="text-red-500">
            ♥
          </span>
          by Han Yue
        </p>

        <p className="text-xs text-slate-500">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
