import type { IconName } from '../components/icons/registry'

export type SkillCategory = {
  title: string
  items: string[]
  icon: IconName
  /** Tailwind class for icon foreground color, e.g. 'text-blue-400' */
  iconColor: string
  /** Tailwind class for icon background tint, e.g. 'bg-blue-500/10' */
  iconBg: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    icon: 'code',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
  },
  {
    title: 'Backend & Languages',
    items: ['C#', 'ASP.NET MVC', 'Python', 'PHP'],
    icon: 'terminal',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
  },
  {
    title: 'Database',
    items: ['SQL Server', 'MongoDB', 'Firebase'],
    icon: 'database',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
  },
  {
    title: 'Mobile Development',
    items: ['SwiftUI', 'Android Studio'],
    icon: 'phone',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
  },
  {
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub'],
    icon: 'tool',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
  },
  {
    title: 'Other Skills',
    items: ['REST APIs', 'Responsive Design', 'UI/UX Basics'],
    icon: 'globe',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
  },
]
