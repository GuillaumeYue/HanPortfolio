import { useEffect, useState } from 'react'
import type { Project } from '../../data/projects'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const totalImages = project.images.length

  const openPreview = (index = 0) => {
    setActiveImageIndex(index)
    setIsPreviewOpen(true)
  }

  const closePreview = () => {
    setIsPreviewOpen(false)
  }

  const showPrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  const showNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % totalImages)
  }

  useEffect(() => {
    if (!isPreviewOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsPreviewOpen(false)
      if (event.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
      }
      if (event.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % totalImages)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isPreviewOpen, totalImages])

  return (
    <>
      <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900">
        <button
          type="button"
          onClick={() => openPreview(0)}
          className="mb-5 block w-full overflow-hidden rounded-xl border border-slate-800"
          aria-label={`Preview screenshots for ${project.title}`}
        >
          <img
            src={project.coverImage}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-48 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </button>

        <h3 className="text-xl font-semibold text-white">{project.title}</h3>

        <p className="mt-3 leading-7 text-slate-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-700 bg-slate-950/60 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-slate-300">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-emerald-400"
          >
            GitHub
          </a>

          <button
            type="button"
            onClick={() => openPreview(0)}
            className="transition hover:text-emerald-400"
          >
            Screenshots ({totalImages})
          </button>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-emerald-400"
            >
              Live Demo
            </a>
          )}
        </div>
      </article>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={closePreview}
        >
          <div
            className="w-full max-w-5xl rounded-xl border border-slate-800 bg-slate-900 p-4 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-slate-400">
                {project.title} — {activeImageIndex + 1} / {totalImages}
              </p>
              <button
                type="button"
                onClick={closePreview}
                className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
              >
                Close
              </button>
            </div>

            <img
              src={project.images[activeImageIndex]}
              alt={`${project.title} preview ${activeImageIndex + 1}`}
              className="max-h-[70vh] w-full rounded-lg object-contain"
            />

            <div className="mt-4 flex justify-center gap-3">
              <button
                type="button"
                onClick={showPrevImage}
                className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={showNextImage}
                className="rounded-md border border-slate-700 px-3 py-1 text-sm text-slate-200 hover:bg-slate-800"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
