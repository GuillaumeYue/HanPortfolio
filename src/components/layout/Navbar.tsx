function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a href="#hero" className="text-lg font-bold tracking-tight">
          Han Yue
        </a>

        <div className="hidden gap-6 text-sm font-medium md:flex">
          <a href="#about" className="transition hover:text-gray-500">
            About
          </a>
          <a href="#projects" className="transition hover:text-gray-500">
            Projects
          </a>
          <a href="#skills" className="transition hover:text-gray-500">
            Skills
          </a>
          <a href="#contact" className="transition hover:text-gray-500">
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar