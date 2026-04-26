import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard.tsx'

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-24 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Featured Projects
          </h2>
          <span className="mx-auto mt-4 block h-1 w-20 rounded-full bg-emerald-500" />
          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-400 md:text-lg">
            Selected projects across web, mobile, and full-stack development.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
