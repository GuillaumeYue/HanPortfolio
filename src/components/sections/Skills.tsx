import type { ReactElement } from 'react'

type Category = {
  title: string
  items: string[]
  iconBg: string
  iconColor: string
  icon: ReactElement
}

const CodeIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <polyline points="9 7 4 12 9 17" />
    <polyline points="15 7 20 12 15 17" />
  </svg>
)

const TerminalIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <polyline points="4 8 8 12 4 16" />
    <line x1="12" y1="16" x2="18" y2="16" />
  </svg>
)

const DatabaseIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>
)

const PhoneIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <rect x="6" y="2" width="12" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
)

const ToolIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-1-1.5 1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3h.1a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8v.1a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z" />
  </svg>
)

const GlobeIcon = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" />
  </svg>
)

const categories: Category[] = [
  {
    title: 'Frontend Development',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-400',
    icon: CodeIcon,
  },
  {
    title: 'Backend & Languages',
    items: ['C#', 'ASP.NET MVC', 'Python', 'PHP'],
    iconBg: 'bg-sky-500/10',
    iconColor: 'text-sky-400',
    icon: TerminalIcon,
  },
  {
    title: 'Database',
    items: ['SQL Server', 'MongoDB', 'Firebase'],
    iconBg: 'bg-purple-500/10',
    iconColor: 'text-purple-400',
    icon: DatabaseIcon,
  },
  {
    title: 'Mobile Development',
    items: ['SwiftUI', 'Android Studio'],
    iconBg: 'bg-pink-500/10',
    iconColor: 'text-pink-400',
    icon: PhoneIcon,
  },
  {
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub'],
    iconBg: 'bg-orange-500/10',
    iconColor: 'text-orange-400',
    icon: ToolIcon,
  },
  {
    title: 'Other Skills',
    items: ['REST APIs', 'Responsive Design', 'UI/UX Basics'],
    iconBg: 'bg-cyan-500/10',
    iconColor: 'text-cyan-400',
    icon: GlobeIcon,
  },
]

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Skills &amp; Expertise
          </h2>
          <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-emerald-500" />
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 md:text-lg">
            Technologies and tools I work with to build powerful digital
            solutions.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-emerald-500/40 hover:bg-slate-900"
            >
              <div
                className={`grid h-12 w-12 place-items-center rounded-xl ${category.iconBg} ${category.iconColor}`}
              >
                {category.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-sm text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
