import SectionHeading from '../ui/SectionHeading'
import SkillCategoryCard from '../ui/SkillCategoryCard'
import { FadeIn } from '../ui/FadeIn'
import { skillCategories } from '../../data/skills'
import { sectionCopy } from '../../data/personal'

function Skills() {
  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title={sectionCopy.skills.title}
            subtitle={sectionCopy.skills.subtitle}
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <FadeIn key={category.title} delay={i * 80}>
              <SkillCategoryCard category={category} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
