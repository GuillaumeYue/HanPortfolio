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
      <article className="rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        <button
          type="button"
          onClick={() => openPreview(0)}
          className="mb-5 block w-full"
          aria-label={`Preview screenshots for ${project.title}`}
        >
          <img
            src={project.coverImage}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="h-48 w-full rounded-xl object-cover"
          />
        </button>

        <h3 className="text-xl font-semibold">{project.title}</h3>

        <p className="mt-3 leading-7 text-gray-600">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gray-500"
          >
            GitHub
          </a>

          <button
            type="button"
            onClick={() => openPreview(0)}
            className="transition hover:text-gray-500"
          >
            Screenshots ({totalImages})
          </button>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-gray-500"
            >
              Live Demo
            </a>
          )}
        </div>
      </article>

      {isPreviewOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          onClick={closePreview}
        >
          <div
            className="w-full max-w-5xl rounded-xl bg-white p-4 md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                {project.title} - {activeImageIndex + 1} / {totalImages}
              </p>
              <button
                type="button"
                onClick={closePreview}
                className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
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
                className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={showNextImage}
                className="rounded-md border px-3 py-1 text-sm hover:bg-gray-50"
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