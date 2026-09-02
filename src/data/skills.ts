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
    items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    icon: 'code',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-500/10',
  },
  {
    title: 'Backend & Languages',
    items: ['Node.js', 'Express.js', 'Swift', 'Java', 'Python', 'PHP', 'C#'],
    icon: 'terminal',
    iconColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/10',
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'MySQL', 'Firebase'],
    icon: 'database',
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-500/10',
  },
  {
    title: 'Mobile Development',
    items: ['Swift 6', 'SwiftUI', 'iOS (Xcode)', 'Android Studio'],
    icon: 'phone',
    iconColor: 'text-pink-400',
    iconBg: 'bg-pink-500/10',
  },
  {
    title: 'Tools & Platforms',
    items: ['Docker', 'Git', 'GitHub', 'Google Cloud', 'VS Code'],
    icon: 'tool',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-500/10',
  },
  {
    title: 'Other Skills',
    items: ['REST APIs', 'WebSocket', 'Real-time Systems', 'Responsive Design'],
    icon: 'globe',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-500/10',
  },
]
