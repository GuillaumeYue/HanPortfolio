import SectionHeading from '../ui/SectionHeading'
import ProjectCard from '../ui/ProjectCard'
import { FadeIn } from '../ui/FadeIn'
import { projects } from '../../data/projects'
import { sectionCopy } from '../../data/personal'

function Projects() {
  return (
    <section id="projects" className="section-pad">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            title={sectionCopy.projects.title}
            subtitle={sectionCopy.projects.subtitle}
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 120}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
