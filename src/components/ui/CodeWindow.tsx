import type { ReactNode } from 'react'

type CodeWindowProps = {
  filename?: string
  children: ReactNode
}

/**
 * macOS-style window chrome wrapping any preformatted content.
 * Used in the About section to display a "developer profile" code snippet.
 */
function CodeWindow({ filename = 'code.tsx', children }: CodeWindowProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">
      <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-950/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-blue-400/80" />
        <span className="ml-3 text-xs text-slate-500">{filename}</span>
      </div>

      <pre className="overflow-x-auto px-5 py-6 text-[13px] leading-6 md:text-sm">
        <code>{children}</code>
      </pre>
    </div>
  )
}

export default CodeWindow
