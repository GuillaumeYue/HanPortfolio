import Logo from '../ui/Logo'
import { personal } from '../../data/personal'

function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-[#060b18] px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 text-center">
        <Logo />

        <p className="flex items-center gap-2 text-sm text-slate-400">
          © {new Date().getFullYear()} Made with
          <span aria-label="love" role="img" className="text-red-500">
            ♥
          </span>
          by {personal.name}
        </p>

        <p className="text-xs text-slate-500">
          Built with React + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer
