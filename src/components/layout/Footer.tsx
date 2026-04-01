function Footer() {
  return (
    <footer className="border-t px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 text-sm text-gray-600 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Han Yue. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="mailto:alexyuehan@gmail.com"
            className="transition hover:text-black"
          >
            Email
          </a>
          <a
            href="https://github.com/GuillaumeYue"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/han-yue-75987aa8/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
