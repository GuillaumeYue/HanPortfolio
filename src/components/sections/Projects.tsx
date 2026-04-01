import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard.tsx'

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-20 md:px-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold">Projects</h2>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
          Selected projects across web, mobile, and full-stack development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects