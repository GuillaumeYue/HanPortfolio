import Card from './Card'
import Pill from './Pill'
import { iconRegistry } from '../icons/registry'
import type { SkillCategory } from '../../data/skills'

type SkillCategoryCardProps = {
  category: SkillCategory
}

/** Card listing a category title, icon, and the technologies it groups. */
function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const Icon = iconRegistry[category.icon]

  return (
    <Card interactive className="p-6">
      <div
        className={`grid h-12 w-12 place-items-center rounded-xl ${category.iconBg} ${category.iconColor}`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {category.title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <Pill key={item}>{item}</Pill>
        ))}
      </div>
    </Card>
  )
}

export default SkillCategoryCard
