import type { ComponentType, SVGProps } from 'react'
import Card from './Card'

type StatCardProps = {
  value: string
  label: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

/** Two-line stat used in the About section. */
function StatCard({ value, label, icon: Icon }: StatCardProps) {
  return (
    <Card className="p-6">
      <div className="grid h-10 w-10 place-items-center rounded-lg bg-blue-500/10">
        <Icon className="h-5 w-5 text-blue-400" />
      </div>
      <p className="mt-4 text-3xl font-bold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </Card>
  )
}

export default StatCard
