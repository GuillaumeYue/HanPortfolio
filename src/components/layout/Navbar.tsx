import Logo from '../ui/Logo'
import { navLinks } from '../../data/navigation'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#060b18]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <Logo />

        <div className="hidden gap-7 text-sm font-medium text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-blue-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
